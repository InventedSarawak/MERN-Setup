import { Button } from '@/components/ui/button'

const App = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-2 font-mono text-2xl">
            Hello Frontend
            <Button onClick={() => alert('hi')}>Say Hi</Button>
        </div>
    )
}

export default App
