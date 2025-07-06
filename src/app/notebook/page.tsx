'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Home } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SavedMealsPage() {
    const [meals, setMeals] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    const fetchMealById = async (id: string) => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            const data = await res.json()
            return data.meals ? data.meals[0] : null
        } catch (err) {
            console.error(`Failed to fetch meal ${id}`, err)
            return null
        }
    }

    useEffect(() => {
        const getSavedMeals = async () => {
            setLoading(true)
            const savedIds = JSON.parse(localStorage.getItem('savedMeals') || '[]')

            if (!Array.isArray(savedIds) || savedIds.length === 0) {
                setMeals([])
                setLoading(false)
                return
            }

            const promises = savedIds.map((id: string) => fetchMealById(id))
            const results = await Promise.all(promises)
            const validMeals = results.filter(Boolean) 
            setMeals(validMeals)
            setLoading(false)
        }

        getSavedMeals()
    }, [])

    if (loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center text-lg text-zinc-400">
                Loading saved meals...
            </div>
        )
    }

    if (meals.length === 0) {
        return (
            <div className="w-full h-screen flex items-center justify-center text-lg text-zinc-500">
                No saved meals found.
            </div>
        )
    }

    return (
        <>
            <div className="w-full h-14 px-96 flex justify-start items-center gap-7 " >
                <button className="size-12 rounded-full cursor-pointer bg-zinc-900 flex justify-center items-center" onClick={() => router.push('/home')} >
                    <Home />
                </button>
                <h1>Your notebook</h1>
            </div>
            <div className="max-w-3xl mx-auto px-6 py-10 space-y-6">
                {meals.map((meal) => (
                    <Link
                    key={meal.idMeal}
                    href={`/meal/${meal.idMeal}`}
                    className="flex gap-4 items-center bg-zinc-900 p-4 rounded-xl shadow hover:shadow-lg transition"
                    >
                        <Image
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                            width={100}
                            height={100}
                            className="rounded-lg w-24 h-24 object-cover"
                            />
                        <div>
                            <h2 className="text-lg font-semibold">{meal.strMeal}</h2>
                            <p className="text-sm text-gray-400">{meal.strArea} • {meal.strCategory}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}