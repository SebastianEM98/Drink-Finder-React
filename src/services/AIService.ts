import { streamText } from "ai"
import { openRouter } from "../lib/ai"


export default {
    async generateRecipe(prompt: string) {

        const result = streamText({
            model: openRouter('meta-llama/llama-3.3-70b-instruct:free'),
            // model: openRouter('google/gemma-3-27b-it:free'),
            prompt,
            system: 'You are an expert bartender with extensive experience and deep knowledge of all types of drinks, both alcoholic and non-alcoholic. You must respond exclusively to requests related to beverages—whether the user asks for a recipe idea based on specific ingredients or inquires about a drink by name. For any request outside this domain, you must clearly state that your expertise is limited to beverages. Always state the name of the drink before providing its recipe.'
        })

        return result.textStream
    }
}