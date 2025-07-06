'use client'

import { Button } from "@/components/ui/button"

export default function Page(){
    return (
        <>
        <div className="w-full h-screen flex justify-center items-center flex-col gap-5" >
            <h1 className="text-2xl"> Why do you want to know about me ?</h1>
            <div className="flex justify-center items-center gap-5" >
                <Button variant={'secondary'} onClick={() => history.back()}>
                    I dont wanna know
                </Button>
                <Button>
                    <a target="_blank" href="https://github.com/zeni-42">I really wanna know.</a>
                </Button>
            </div>
        </div>
        </>
    )
}