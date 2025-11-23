import { useEffect, useState, type ChangeEvent, type FormEvent } from "react"
import { useAppStore } from "../stores/useAppStore"

export default function SearchDrinkForm() {

    const [searchFilters, setSearchFilters] = useState({
        ingredient: '',
        category: ''
    })

    const fetchCategories = useAppStore((state) => state.fetchCategories)
    const categories = useAppStore((state) => state.categories)
    const searchRecipes = useAppStore((state) => state.searchRecipes)
    const showNotification = useAppStore((state) => state.showNotification)

    useEffect(() => {
        fetchCategories()
    }, [])


    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearchFilters({
            ...searchFilters,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (Object.values(searchFilters).includes('') || searchFilters.ingredient.trim() === '') {
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
                    onChange={handleChange}
                    value={searchFilters.ingredient}
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
                    id="category"
                    name="category"
                    className={
                        `p-3 w-full rounded-lg bg-white focus:outline-orange-800 ${searchFilters.category === "" ? "text-black/60" : "text-black"}`
                    }
                    onChange={handleChange}
                    value={searchFilters.category}
                >
                    <option value="" disabled>-- Select an Option --</option>
                    {categories?.drinks?.map(category => (
                        <option
                            key={category.strCategory}
                            value={category.strCategory}
                            className="text-black"
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
    )
}
