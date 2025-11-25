import type { StateCreator } from "zustand"
import AIService from "../services/AIService"
import { createNotificationSlice, type NotificationSliceType } from "./notificationSlice"
import type { FavoritesSliceType } from "./favoritesSlice"


export type AISliceType = {
    recipe: string
    isGenerating: boolean
    generateRecipe: (prompt: string) => Promise<void>
}

export const createAISlice: StateCreator<AISliceType & NotificationSliceType & FavoritesSliceType, [], [], AISliceType> = (set, get, api) => ({
    recipe: '',
    isGenerating: false,

    generateRecipe: async (prompt) => {
        set({ recipe: '', isGenerating: true })

        const data = await AIService.generateRecipe(prompt)

        for await (const textFragment of data) {
            set((state) => ({
                recipe: state.recipe + textFragment
            }))
        }

        if (!get().recipe) {
            createNotificationSlice(set, get, api).showNotification({
                text: 'Daily request limit reached, please try again later',
                error: true
            })
        }

        set({ isGenerating: false })
    }
})