import { useEffect, useState, type ChangeEvent, type FormEvent } from "react"
import { useAppStore } from "../stores/useAppStore"
import { ChevronDownIcon } from "@heroicons/react/20/solid"

const initStateSearchFilters = {
    searchType: '',
    drinkName: '',
    ingredient: '',
    category: ''
}

export default function SearchDrinkForm() {

    const [searchFilters, setSearchFilters] = useState(initStateSearchFilters)

    const fetchCategories = useAppStore((state) => state.fetchCategories)
    const categories = useAppStore((state) => state.categories)
    const searchRecipes = useAppStore((state) => state.searchRecipes)
    const showNotification = useAppStore((state) => state.showNotification)

    useEffect(() => {
        fetchCategories()
    }, [])


    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        if (e.target.name === 'searchType') {
            setSearchFilters({
                ...initStateSearchFilters,
                searchType: e.target.value,
            })
        } else {
            setSearchFilters({
                ...searchFilters,
                [e.target.name]: e.target.value
            })
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!isValidForm()) {
            showNotification({
                text: 'All fields are required',
                error: true
            })
            return
        }

        // Search Recipes
        searchRecipes(searchFilters)
        scrollIntoRecipes()
    }

    const isValidForm = () => {

        const { searchType, drinkName, ingredient, category } = searchFilters

        return (
            (searchType === 'by-name' && drinkName.trim() !== '') ||
            (searchType === 'by-ingredient' && ingredient.trim() !== '') ||
            (searchType === 'by-category' && category !== '')
        )
    }

    const scrollIntoRecipes = () => {
        setTimeout(() => {
            const recipesSection = document.getElementById('main-section')
            recipesSection?.scrollIntoView({ behavior: 'smooth' })
        }, 300);
    }

    return (
        <form onSubmit={handleSubmit} className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">

            <div className="space-y-4">
                <label
                    htmlFor="searchType"
                    className="block text-white uppercase font-extrabold text-lg"
                >
                    Search Type:
                </label>

                <div className="relative">
                    <select
                        id="searchType"
                        name="searchType"
                        className={
                            `appearance-none p-3 pr-7 w-full rounded-lg bg-white focus:outline-orange-800 ${searchFilters.searchType === "" ? "text-black/60" : "text-black"}`
                        }
                        onChange={handleChange}
                        value={searchFilters.searchType}
                    >
                        <option value="" disabled>-- Select an Option --</option>
                        <option value="by-name" className="text-black">by Drink Name</option>
                        <option value="by-ingredient" className="text-black">by Ingredient</option>
                        <option value="by-category" className="text-black">by Category</option>
                    </select>
                    <ChevronDownIcon className="h-5 w-5 text-slate-800 pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2" />
                </div>
            </div>

            {searchFilters.searchType === 'by-name' && (
                <div className="space-y-4">
                    <label
                        htmlFor="drinkName"
                        className="block text-white uppercase font-extrabold text-lg"
                    >
                        Drink Name:
                    </label>

                    <input
                        type="text"
                        id="drinkName"
                        name="drinkName"
                        className="p-3 w-full rounded-lg focus:outline-none bg-white"
                        placeholder="Drink Name. E.g. Margarita, Martini, Mojito"
                        onChange={handleChange}
                        value={searchFilters.drinkName}
                    />
                </div>
            )}

            {searchFilters.searchType === 'by-ingredient' && (
                <div className="space-y-4">
                    <label
                        htmlFor="ingredient"
                        className="block text-white uppercase font-extrabold text-lg"
                    >
                        Ingredient:
                    </label>

                    <input
                        type="text"
                        id="ingredient"
                        name="ingredient"
                        className="p-3 w-full rounded-lg focus:outline-none bg-white"
                        placeholder="Ingredient. E.g. Vodka, Tequila, Coffee, Chocolate"
                        onChange={handleChange}
                        value={searchFilters.ingredient}
                    />
                </div>
            )}

            {searchFilters.searchType === 'by-category' && (
                <div className="space-y-4">
                    <label
                        htmlFor="category"
                        className="block text-white uppercase font-extrabold text-lg"
                    >
                        Category:
                    </label>

                    <div className="relative">
                        <select
                            id="category"
                            name="category"
                            className={
                                `appearance-none p-3 pr-7 w-full rounded-lg bg-white focus:outline-orange-800 ${searchFilters.category === "" ? "text-black/60" : "text-black"}`
                            }
                            onChange={handleChange}
                            value={searchFilters.category}
                        >
                            <option value="" disabled>-- Select an Option --</option>
                            {categories.drinks?.map(category => (
                                <option
                                    key={category.strCategory}
                                    value={category.strCategory}
                                    className="text-black"
                                >
                                    {category.strCategory}
                                </option>
                            ))}
                        </select>
                        <ChevronDownIcon className="h-5 w-5 text-slate-800 pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2" />
                    </div>
                </div>
            )}

            <input
                type="submit"
                value="Search Recipes"
                className="cursor-pointer bg-orange-800 hover:bg-orange-900 active:bg-orange-950 text-white font-extrabold w-full p-3 rounded-lg uppercase transition-colors duration-300"
            />
        </form>
    )
}
