# Drink Finder (React + TypeScript + Vite)

Drink Finder is a cocktail and beverage search application built with **React**, **TypeScript**, and **Vite**.  
It allows users to explore drinks fetched from **TheCocktailDB API**, view detailed recipes in a modal, and save their favorite beverages using **localStorage**.  
The project also includes an **AI-powered recipe generator** through **OpenRouter**, enabling users to generate custom drink recipes instantly.

A modern and responsive UI is built with **Tailwind CSS**, routes are handled with **React Router DOM**, global state is managed with **Zustand**, and API responses are validated using **Zod**.


## 🚀 Features

- **Search drinks and cocktails** via TheCocktailDB API
- **AI-powered drink recipe generator** using OpenRouter
- **Save favorite drinks** with localStorage persistence
- **View full recipes** in a modal powered by **Headless UI**
- **SPA navigation** using React Router DOM
- **Global state management** with **Zustand** (slice pattern)
- **Type-safe API responses** using **Zod**
- Responsive UI built with **Tailwind CSS**


## 🛠️ Technologies Used

- **React**  
- **TypeScript**  
- **Vite** (project setup & bundler)  
- **Tailwind CSS**  
- **React Router DOM** (SPA routing)  
- **Headless UI** (modal interactions)  
- **Heroicons** (icons)  
- **Zustand** (global state management with slice pattern)  
- **Zod** (response schema validation)  
- **localStorage** (favorite drinks persistence)  
- **OpenRouter API** (AI-based recipe generation)  
- **TheCocktailDB API** (drink data)


## 📦 Installation

```bash
git clone https://github.com/SebastianEM98/Drink-Finder-React.git
cd Drink-Finder-React
npm install
npm run dev
```


## 🔑 Environment Variables

Create a local environment file:

```text
VITE_OPENROUTER_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual OpenRouter key.


## ⚙️ Project Structure

```text
src/
  components/
  layouts/
  lib/
  pages/
  schemas/
  services/
  stores/
  types/
```


## 📄 License

This project is licensed under the MIT License.