'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import axios from "axios"
import { Panda, Search } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Page() {
    const [items, setItems] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(false)

    const fetchItems = async () => {
        try {
            setIsLoading(true)
            const promises = Array.from({ length: 9 }, () =>
                axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
            );
            const results = await Promise.all(promises);
            const meals = results.map(res => res.data.meals[0]);
            setItems(meals);
        } catch (error) {
            console.error("Failed to fetch meals", error);
        } finally {
            setIsLoading(false)
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <>
        <div className="w-full px-6 md:px-40 py-5 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            <div className="w-full md:w-1/4 flex justify-center md:justify-start items-center gap-3">
                <Panda className="size-6" />
                <h1 className="text-lg font-semibold">Pan 'n Plan</h1>
            </div>

            <div className="w-full md:w-1/2 flex justify-center items-center">
                <Input
                className="w-full md:w-2/3 h-10 rounded-l-full px-6 text-base"
                placeholder="Search any meal"
                />
                <Button
                variant="secondary"
                className="w-2/12 h-10 rounded-r-full px-3"
                >
                <Search className="size-5" />
                </Button>
            </div>

            <div className="w-full md:w-1/4 flex justify-center md:justify-end items-center">
                <Link href="/notebook" className="text-zinc-500 underline text-sm md:text-base">
                notebook
                </Link>
            </div>
        </div>

        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-10 xl:px-20 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading && (
                <div className="w-[60vw] flex justify-center items-center py-20">
                    <h2 className="text-3xl font-light shiny-text animate-text-shine">
                        Loading...
                    </h2>
                </div>
            )}
            { items.map((meal: any, idx: number) => (
            <div
                key={idx}
                className="bg-zinc-900 border rounded-xl p-4 shadow-sm hover:shadow-md transition" >
                <img
                src={meal?.strMealThumb}
                alt={meal?.strMeal}
                className="rounded-md mb-3 w-full h-48 object-cover"
                />
                <h2 className="text-xl font-semibold">{meal?.strMeal}</h2>
                <p className="text-sm text-gray-500">
                {meal?.strArea} • {meal?.strCategory}
                </p>
            </div>
            ))}
        </div>
        </>
    );
}
