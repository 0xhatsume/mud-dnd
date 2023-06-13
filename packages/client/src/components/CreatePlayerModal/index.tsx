import React from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import { createPlayerModalAtom } from '../../store';
import { ClassTypes, classTypes } from '../../types/classtypes';


export const CreatePlayerModal = ({visible}: {visible: boolean}) => {
    if(!visible) return null;
    
    const setCreatePlayerModalVisible = useSetAtom(createPlayerModalAtom);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const handleBackdropClick = (e: React.MouseEvent<HTMLElement>) => {
        if(e.target.id === "createPlayerBackdrop"){
            setCreatePlayerModalVisible(false)
            console.log("ouch")
        }
    }

    const classes = Object.keys(ClassTypes).map(c=> ClassTypes[c]).filter(
        value => typeof value === 'string') as string[];
    
    //console.log((Object.keys(ClassTypes) as (keyof typeof ClassTypes)[]))
    // (Object.keys(ClassTypes) as (keyof typeof ClassTypes)[]).map(
    //     (c)=>{
    //         console.log(c)
    //     }
    // )

    return (
        <div id='createPlayerBackdrop'
            className="fixed inset-0 bg-black bg-opacity-30 
            backdrop-blur-sm flex items-center justify-center"
            onClick={handleBackdropClick}
            >
            <form
                className="w-3/5 h-3/4 flex justify-center items-center flex-col"
                onSubmit={handleSubmit}
                >
                    <div className="px-10 h-full rounded-lg border-2 border-[#5F5453]
                        drop-shadow-lg bg-[#E8DEDA] flex flex-col justify-start items-center">
                            <h1 className="text-center text-2xl font-bold pb-2 mt-12 my-2">
                                - Pick Your Character Class -</h1>
                            
                            <div className="flex flex-wrap gap-2 justify-center items-center">
                                {
                                    classes.map((c, i) => {
                                        return (
                                        <button 
                                        id={c}
                                        className='py-4 px-2 w-[10rem]
                                        flex flex-col justify-center items-center 
                                        border-2 border-[#5F5453] rounded-lg 
                                        shadow-2xl drop-shadow-2xl 
                                        hover:shadow-none hover:drop-shadow-none 
                                        hover:cursor-pointer
                                        focus:ring-2 focus:ring-stone-700 
                                        focus:shadow-none focus:drop-shadow-none
                                        '>
                                            {c}
                                        </button>)
                                    })
                                }
                            </div>
                        </div>
            </form>
        </div>
    )
}
