'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import axios from "axios"
import { Loader2, Panda, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Page() {
    const [items, setItems] = useState<any[]>([]);
    const [filteredItems, setFilteredItems] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const fetchItems = async (count = 9, append = false) => {
        try {
            setIsLoading(true);
            const promises = Array.from({ length: count }, () =>
                axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
            );
            const results = await Promise.all(promises);
            const meals = results.map(res => res.data.meals[0]);
            const newItems = append ? [...items, ...meals] : meals;
            setItems(newItems);
            setFilteredItems(filterMeals(newItems, searchQuery));
        } catch (error) {
            console.error("Failed to fetch meals", error);
        } finally {
            setIsLoading(false);
        }
    };

    const filterMeals = (meals: any[], query: string) => {
        return meals.filter(meal =>
            meal?.strMeal?.toLowerCase().includes(query.toLowerCase())
        );
    };

    useEffect(() => {
        fetchItems();
    }, []);

    useEffect(() => {
        setFilteredItems(filterMeals(items, searchQuery));
    }, [searchQuery, items]);

    const handleLoadMore = () => {
        fetchItems(18, true);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <>
            <div className="w-full px-6 md:px-40 py-5 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
                <div className="w-full md:w-1/4 flex justify-center md:justify-start items-center gap-3">
                    <Panda className="size-6" />
                    <h1 className="text-lg font-semibold">Pan 'n Plan</h1>
                </div>

                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <Input
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="w-full md:w-2/3 h-10 rounded-l-full px-6 text-base"
                        placeholder="Search any meal"
                    />
                    <Button
                        variant="secondary"
                        className="w-2/12 h-10 rounded-r-full px-3"
                        onClick={() => setFilteredItems(filterMeals(items, searchQuery))}
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

            {filteredItems.length === 0 && isLoading && (
                <div className="w-full flex justify-center items-center py-20">
                    <h2 className="text-3xl font-light shiny-text animate-text-shine">
                        Loading...
                    </h2>
                </div>
            )}

            {filteredItems.length > 0 && (
                <div className="w-full max-w-screen-xl mx-auto px-6 md:px-10 xl:px-20 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all">
                    {filteredItems.map((meal: any, idx: number) => (
                        <Link key={idx} href={`/meal/${meal?.idMeal}`} className="bg-zinc-900 border rounded-xl p-4 shadow-sm hover:shadow-md transition block">
                            <Image
                                src={meal?.strMealThumb}
                                alt={meal?.strMeal}
                                width={300}
                                height={300}
                                className="rounded-md mb-3 w-full h-48 object-cover"
                            />
                            <h2 className="text-xl font-semibold">{meal?.strMeal}</h2>
                            <p className="text-sm text-gray-500">
                                {meal?.strArea} • {meal?.strCategory}
                            </p>
                        </Link>
                    ))}
                </div>
            )}

            {filteredItems.length > 0 && (
                <div className="w-full flex flex-col items-center justify-center py-10">
                    <Button onClick={handleLoadMore} disabled={isLoading} className="px-6 py-2 text-base">
                        {isLoading ? (<Loader2 className="animate-spin" />) : 'Load More'}
                    </Button>
                </div>
            )}
        </>
    );
}
