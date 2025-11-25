import { streamText } from "ai"
import { openRouter } from "../lib/ai"


export default {
    async generateRecipe(prompt: string) {

        const result = streamText({
            model: openRouter('meta-llama/llama-3.3-70b-instruct:free'),
            // model: openRouter('google/gemma-3-27b-it:free'),
            prompt,
            system: 'You are a bartender with many years of experience and you know drinks with and without alcohol. Mention the name of the drink before giving the recipe'
        })

        return result.textStream
    }
}