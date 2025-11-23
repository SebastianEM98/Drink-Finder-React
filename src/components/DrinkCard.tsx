import { useAppStore } from "../stores/useAppStore"
import type { Drink } from "../types"

type DrinkCardProps = {
    drink: Drink
}

export default function DrinkCard({ drink }: DrinkCardProps) {

    const selectRecipe = useAppStore((state) => state.selectRecipe)

    return (
        <div className="border border-gray-200 shadow-lg">
            <div className="overflow-hidden">
                <img
                    src={drink.strDrinkThumb}
                    alt={`${drink.strDrink} drink picture`}
                    className="hover:scale-110 hover:rotate-2 transition-transform"
                />
            </div>

            <div className="p-5">
                <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
                <button
                    type="button"
                    className="cursor-pointer bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white sm:text-lg text-base font-bold uppercase rounded w-full p-3 mt-5 transition-colors duration-300"
                    onClick={() => selectRecipe(drink.idDrink)}
                >
                    View Recipe
                </button>
            </div>
        </div>
    )
}
