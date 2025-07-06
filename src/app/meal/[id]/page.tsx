'use client';

import axios from 'axios';
import { useEffect, useState, use } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChevronLeftIcon, Heart, Loader2 } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';

export default function MealPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [meal, setMeal] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    const fetchMeal = async () => {
        try {
            setIsLoading(true);
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            setMeal(res.data.meals[0]);
        } catch (error) {
            console.error('Failed to fetch meal', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSaveMeal = () => {
        try {
        const savedIds = JSON.parse(localStorage.getItem('savedMeals') || '[]');
        if (!savedIds.includes(meal.idMeal)) {
            const updated = [...savedIds, meal.idMeal];
            localStorage.setItem('savedMeals', JSON.stringify(updated));
            toast.success('Meal saved ✅');
        } else {
            toast.info('Meal already saved');
        }
        } catch (error) {
            toast.error('Failed to save meal');
        }
    };

    useEffect(() => {
        fetchMeal();
    }, []);

    if (isLoading || !meal) {
        return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center text-center py-20">
            <Loader2 className="animate-spin size-12 text-zinc-400 mb-4" />
            <p className="text-lg text-zinc-500">Loading Meal...</p>
        </div>
        );
    }

    return (
        <div className="w-full max-w-3xl mx-auto px-6 py-10">
        <ToastContainer position="top-center" autoClose={2000} />

        <div className="flex justify-between items-center mb-6">
            <div className="flex justify-start items-center gap-3">
            <button className="size-12 flex justify-center items-center bg-zinc-900 rounded-full cursor-pointer hover:bg-zinc-800 transition" onClick={() => router.back()} >
                <ChevronLeftIcon className="text-white" />
            </button>
            <h1 className="text-3xl font-bold">{meal.strMeal}</h1>
            </div>

            <button className="bg-zinc-900 size-12 flex justify-center items-center rounded cursor-pointer hover:bg-zinc-800" onClick={handleSaveMeal} >
                <Heart className="text-white" />
            </button>
        </div>

        <Image src={meal.strMealThumb} alt={meal.strMeal} width={600} height={400} className="rounded-lg mb-6 w-full h-80 object-cover"
        />

        <div className="text-zinc-400 mb-4">
            <p><strong>Category:</strong> {meal.strCategory}</p>
            <p><strong>Area:</strong> {meal.strArea}</p>
        </div>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Instructions</h2>
        <p className="text-gray-200 whitespace-pre-line">{meal.strInstructions}</p>

        {meal.strYoutube && (
            <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Video Tutorial</h3>
            <iframe className="w-full aspect-video rounded-md" src={`https://www.youtube.com/embed/${meal.strYoutube.split('v=')[1]}`} title={meal.strMeal} allowFullScreen />
            </div>
        )}
        </div>
    );
}
