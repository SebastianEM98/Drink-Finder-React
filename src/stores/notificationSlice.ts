import type { StateCreator } from "zustand"
import type { FavoritesSliceType } from "./favoritesSlice"
import type { AISliceType } from "./aiSlice"

type Notification = {
    text: string
    error: boolean
    show: boolean
}

export type NotificationSliceType = {
    notification: Notification
    showNotification: (payload: Pick<Notification, 'text' | 'error'>) => void
    hideNotification: () => void
}

export const createNotificationSlice: StateCreator<NotificationSliceType & FavoritesSliceType & AISliceType, [], [], NotificationSliceType> = (set, get) => ({
    notification: {
        text: '',
        error: false,
        show: false
    },

    showNotification: (payload) => {
        set({
            notification: {
                text: payload.text,
                error: payload.error,
                show: true
            }
        })

        setTimeout(() => {
            get().hideNotification()
        }, 3500);
    },

    hideNotification: () => {
        set((state) => ({
            notification: {
                ...state.notification,
                show: false
            }
        }))
    }
})