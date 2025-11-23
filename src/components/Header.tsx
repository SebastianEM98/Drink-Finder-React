import { useMemo } from "react"
import { NavLink, useLocation } from "react-router-dom"
import SearchDrinkForm from "./SearchDrinkForm"

export default function () {

    const { pathname } = useLocation()
    const isHome = useMemo(() => pathname === '/', [pathname])

    return (
        <header className={isHome ? "bg-header-image" : "bg-slate-800"}>
            <div className="mx-auto container px-5 py-16">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-32" src="/logo.svg" alt="logo" />
                    </div>

                    <nav className="flex gap-4">
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ?
                                "text-orange-500 uppercase font-bold transition-colors duration-300" :
                                "text-white uppercase font-bold transition-colors duration-300"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/favorites"
                            className={({ isActive }) => isActive ?
                                "text-orange-500 uppercase font-bold transition-colors duration-300" :
                                "text-white uppercase font-bold transition-colors duration-300"
                            }
                        >
                            Favorites
                        </NavLink>
                    </nav>
                </div>

                {isHome && (
                    <SearchDrinkForm />
                )}
            </div>
        </header>
    )
}
