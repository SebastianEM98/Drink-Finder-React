import type z from "zod";
import type { CategoriesAPIResponseSchema, DrinkAPIResponseSchema, DrinksAPIResponseSchema, SearchFilterSchema } from "../schemas/recipes-schema";


export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIResponseSchema>
export type Drink = z.infer<typeof DrinkAPIResponseSchema>