import path from 'node:path'
import fs from 'node:fs'

import { v2 as cloudinary } from 'cloudinary'
import dotenv from 'dotenv'

dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string,
    api_key: process.env.CLOUDINARY_API_KEY as string,
    api_secret: process.env.CLOUDINARY_API_SECRET as string
})

// Usage:
// let avatarLocalPath = (req.files as { [fieldname: string]: Express.Multer.File[] })?.['avatar']?.[0]?.path
// const avatar = await uploadOnCloudinary(avatarLocalPath)

const uploadOnCloudinary = async (localFilePath: string) => {
    try {
        if (!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath, { resource_type: 'auto' })
        fs.unlinkSync(localFilePath)
        return response
    } catch (error) {
        console.error('Error uploading file:', error)
        fs.unlink(localFilePath, unlinkError => console.error('Error deleting file:', unlinkError))
        return null
    }
}

const deleteFileExceptKeep = () => {
    const folderPath = './public/temp/'
    const fileToKeep = '.gitkeep'

    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err)
            return
        }

        files.forEach(file => {
            if (file !== fileToKeep) {
                const filePath = path.join(folderPath, file)
                fs.unlink(filePath, unlinkErr => {
                    if (unlinkErr) {
                        console.error('Error deleting file:', unlinkErr)
                    } else {
                        console.log(`Deleted file: ${file}`)
                    }
                })
            }
        })
    })
}

export { uploadOnCloudinary, deleteFileExceptKeep }
