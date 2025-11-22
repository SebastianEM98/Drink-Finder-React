import { useEffect, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

export default function () {

    const { pathname } = useLocation()
    const isHome = useMemo(() => pathname === '/', [pathname])

    const fetchCategories = useAppStore((state) => state.fetchCategories)
    const categories = useAppStore((state) => state.categories)

    useEffect(() => {
        fetchCategories()
    }, [])

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
                    <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
                        <div className="space-y-4">
                            <label
                                htmlFor="ingredient"
                                className="block text-white uppercase font-extrabold text-lg"
                            >
                                Name or Ingredients:
                            </label>

                            <input
                                type="text"
                                id="ingredient"
                                name="ingredient"
                                className="p-3 w-full rounded-lg focus:outline-none bg-white"
                                placeholder="Drink name or Ingredient. E.g. Vodka, Tequila, Coffee"
                            />
                        </div>

                        <div className="space-y-4">
                            <label
                                htmlFor="category"
                                className="block text-white uppercase font-extrabold text-lg"
                            >
                                Category:
                            </label>

                            <select
                                id="ingredient"
                                name="ingredient"
                                className="p-3 w-full rounded-lg bg-white"
                            >
                                <option value="">-- Select an Option --</option>
                                {categories?.drinks?.map(category => (
                                    <option
                                        key={category.strCategory}
                                        value={category.strCategory}
                                    >
                                        {category.strCategory}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <input
                            type="submit"
                            value="Search Recipes"
                            className="cursor-pointer bg-orange-800 hover:bg-orange-900 active:bg-orange-950 text-white font-extrabold w-full p-3 rounded-lg uppercase transition-colors duration-300"
                        />
                    </form>
                )}
            </div>
        </header>
    )
}
