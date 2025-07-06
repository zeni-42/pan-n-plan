'use client'

import { Panda } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar(){
    const router = useRouter()

    return (
        <>
        <div className="w-full h-14 bg-zinc-900 px-96 flex justify-between items-center" >
            <div className="w-1/2 h-full flex justify-start items-center gap-4" >
                <Panda className="" />
                <h1 className="text-lg ">Pan 'n Plan</h1>
            </div>
            <div className="w-1/2 h-full flex justify-end items-center" >
                <button className="w-40 bg-primary h-3/5 rounded-full cursor-pointer" onClick={() => router.push('/home')} > Get started </button>
            </div>
        </div>
        </>
    )
}