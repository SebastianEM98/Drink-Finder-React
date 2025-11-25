import { type FormEvent } from "react"
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid'
import { useAppStore } from "../stores/useAppStore"

export default function GenerateAI() {

    const showNotification = useAppStore((state) => state.showNotification)
    const generateRecipe = useAppStore((state) => state.generateRecipe)
    const recipe = useAppStore((state) => state.recipe)
    const isGenerating = useAppStore((state) => state.isGenerating)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const prompt = form.get('prompt') as string

        if (prompt.trim() === '') {
            showNotification({
                text: 'The field cannot be blank',
                error: true
            })
            return
        }

        generateRecipe(prompt)
    }

    return (
        <>
            <h1 className="sm:text-6xl text-4xl font-extrabold">Generate Recipe with AI</h1>

            <div className="max-w-7xl mx-auto">
                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col space-y-3 py-10'
                >
                    <div className="relative">
                        <input
                            type="text"
                            name="prompt"
                            id="prompt"
                            className="border bg-white p-4 sm:pr-16 pr-14 rounded-lg w-full border-slate-800"
                            placeholder="Generate a recipe using ingredients. e.g., A drink with Tequila and Strawberry"
                        />
                        <button
                            type="submit"
                            aria-label="Enviar"
                            className="cursor-pointer absolute top-1/2 sm:right-0 -right-3 transform -translate-x-1/2 -translate-y-1/2 disabled:opacity-10 transition-opacity duration-300 disabled:cursor-not-allowed"
                            disabled={isGenerating}
                        >
                            <ArrowUpCircleIcon className={`w-10 h-10 ${isGenerating ? "text-slate-800!" : "text-slate-800"} text-slate-800 hover:text-orange-500 active:text-orange-700 transition-colors duration-300`} />
                        </button>
                    </div>
                </form>

                {isGenerating && <p className="text-center mb-6 blink-animation">Generating...</p>}
                <div className={`sm:p-8 p-4 mt-4 whitespace-pre-wrap bg-slate-100 rounded-lg transition-opacity duration-200 ${recipe ? "opacity-100" : "opacity-0"}`}>
                    {recipe}
                </div>
            </div>

        </>
    )
}