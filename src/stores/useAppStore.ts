import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { createRecipesSlice, type RecipesSliceType } from "./recipeSlice"
import { createFavoritesSlice, type FavoritesSliceType } from "./favoritesSlice"
import { createNotificationSlice, type NotificationSliceType } from "./notificationSlice"

// Slice Pattern
export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a)
})))