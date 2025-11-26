import { useMemo } from "react"
import { NavLink, useLocation } from "react-router-dom"
import SearchDrinkForm from "./SearchDrinkForm"

export default function () {

    const { pathname } = useLocation()
    const isHome = useMemo(() => pathname === '/', [pathname])

    return (
        <header className={isHome ? "bg-header-image min-h-screen" : "bg-slate-800"}>
            <div className="relative mx-auto container px-5 sm:py-16 py-8">
                <div className="flex justify-between items-center flex-col sm:flex-row sm:gap-0 gap-10">
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

                        <NavLink
                            to="/generate"
                            className={({ isActive }) => isActive ?
                                "text-orange-500 uppercase font-bold transition-colors duration-300" :
                                "text-white uppercase font-bold transition-colors duration-300"
                            }
                        >
                            Generate with AI
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
