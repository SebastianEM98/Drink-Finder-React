import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Modal from "../components/Modal"
import { useEffect } from "react"
import { useAppStore } from "../stores/useAppStore"
import Notification from "../components/Notification"

export default function Layout() {

    const loadFromLocalStorage = useAppStore((state) => state.loadFromLocalStorage)

    useEffect(() => {
        loadFromLocalStorage()
    }, [])

    return (
        <>
            <Header />

            <main className="mx-auto container px-5 py-16" id="main-section">
                <Outlet />
            </main>

            <Modal />
            <Notification />
        </>
    )
}
