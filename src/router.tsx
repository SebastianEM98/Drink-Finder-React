import { lazy, Suspense } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import GenerateAI from "./pages/GenerateAI"
const IndexPage = lazy(() => import("./pages/IndexPage"))
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"))

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes >
                <Route element={<Layout />}>
                    <Route path="/" element={
                        <Suspense fallback="Loading...">
                            <IndexPage />
                        </Suspense>
                    } />

                    <Route path="/favorites" element={
                        <Suspense fallback="Loading...">
                            <FavoritesPage />
                        </Suspense>
                    } />

                    <Route path="/generate" element={
                        <Suspense fallback="Loading...">
                            <GenerateAI />
                        </Suspense>
                    } />
                </Route>

                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </BrowserRouter>
    )
}
