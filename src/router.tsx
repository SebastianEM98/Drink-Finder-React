import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import FavoritesPage from "./pages/FavoritesPage";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes >
                <Route path="/" element={<IndexPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />

                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </BrowserRouter>
    )
}
