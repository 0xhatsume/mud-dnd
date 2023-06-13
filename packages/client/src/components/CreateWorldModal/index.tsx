import React from 'react';
import { useCreateWorld, useCreateDmSysMsg } from "../../hooks";
import { useAtomValue, useSetAtom } from "jotai";
import { createWorldModalAtom, createStoryLoadingAtom } from "../../store";
import { useMUD } from '../../MUDContext';
import { useComponentValue } from "@latticexyz/react";
import { useEntityQuery } from '@latticexyz/react';
import { LoadingTag } from '../LoadingTag';
import { getComponentValueStrict, Has } from '@latticexyz/recs';
import { StoryCard } from '../StoryCard';


export const CreateWorldModal = ({visible}: {visible: boolean}) => {
    if(!visible) return null;

    const {
        components: { Counter, Stories },
        systemCalls: { createStory, 
                        //increment, addToDo 
                    },
        network: { singletonEntity, 
            // worldSend, storeCache 
        },
        world
    } = useMUD();

    const { isLoading: createWorldLoading, mutateAsync:createWorldAsync } = useCreateWorld();
    const { isLoading: createDmSysMsgLoading, mutateAsync:createDmSysMsgAsync } = useCreateDmSysMsg();

    const setCreateWorldModalVisible = useSetAtom(createWorldModalAtom);
    const createStoryLoading = useAtomValue(createStoryLoadingAtom);

    const counter = useComponentValue(Counter, singletonEntity);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const worldName = e.currentTarget.worldName.value as string;
        const quest = e.currentTarget.quest.value as string;
        
        // console.log(e.currentTarget.worldName.value.toUpperCase())
        // console.log(quest)

        
        const game_description = await createWorldAsync({
            quest, 
            temperature: 1 //temperature is only at maximum 2
        }, {
            onSuccess: (d) => {
                //console.log(`world_description: ${d.worlddescription}`); //equivalent to questspecifics for chat initiation
                //console.log(`game_description: ${d.game_description}`); //required for createdmsysmsg(next step) and playercreation
                const dmSySmsg = createDmSysMsgAsync({
                    game_description: d.game_description,
                    temperature: 1
            }, {
                onSuccess: (dd) => {
                    // console.log("Final Result:")
                    // console.log(`name: ${worldName}`);
                    // console.log(`dmSySmsg: ${dd.dmsysmsg}`);
                    // console.log(`questspecifics: ${d.worlddescription}`);
                    // console.log(`user_description: ${quest}`);
                    // console.log(`game_description: ${d.game_description}`);

                    createStory({
                        name: worldName,
                        dm_system_message: dd.dmsysmsg,
                        questspecifics: d.worlddescription,
                        user_description: quest,
                        game_description: d.game_description,
                        //picture_url: "./"
                    });
                    
                    console.log("Story Created")
                    setCreateWorldModalVisible(false);
                    //equivalent to questspecifics for chat initiation
                }
            })},
        });


        // create Story in Mud Table
        
    };

    // console log when cancel button is clicked
    const handleCancel = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //console.log('cancel clicked')
        //increment();
        setCreateWorldModalVisible(false);
    }

    const handleBackdropClick = (e: React.MouseEvent<HTMLElement>) => {
        if(e.target.id === "createWorldBackdrop"){
            setCreateWorldModalVisible(false);
        }
    }

    return (
        <div id='createWorldBackdrop'
            className="fixed inset-0 bg-black bg-opacity-30 
            backdrop-blur-sm flex items-center justify-center"
            onClick={handleBackdropClick}
            >
                <form
                className="h-3/4 flex justify-center items-center flex-col"
                onSubmit={handleSubmit}
                >
                    <div className="px-10 h-full rounded-lg border-2 border-[#5F5453]
                        drop-shadow-lg bg-[#E8DEDA] flex flex-col justify-start items-center">
                            <h1 className="text-center text-3xl font-bold pb-2 mt-14 my-2">- Craft A World -</h1>
                            
                            {/* loading indicator */}
                            {/* {createStoryLoading && ( */}
                                {(createWorldLoading || createDmSysMsgLoading) ? (
                                    <LoadingTag />
                                ): null}
                            <div className="my-4 w-full">
                                <label className="text-lg font-sans font-medium">Enter a name for your world!</label>
                                <input className="my-2 py-2 px-4 w-full rounded-lg border-2 border-stone-700
                                font-bold
                                "
                                placeholder='Enter World Name' name="worldName" required
                                />
                            </div>


                            <div className="w-full h-3/4 flex flex-col justify-start items-center">
                                <label className="text-lg font-sans font-medium">Enter an adventurous quest description to 
                                inspire the moment!</label>
                                <textarea
                                className="p-4 mt-3 italic font-sans text-lg h-full w-full rounded-lg 
                                    border-2 border-stone-700 resize-y"
                                placeholder="Enter Quest"
                                name="quest" required
                                />
                            </div>
                            
                            <div className="text-white flex justify-between items-center my-7">
                                {/* <span>{counter?.value ?? "??"}</span>
                                <button id="cancelcreateworld" className="rounded-lg bg-gray-500 mx-1 px-4 py-2 drop-shadow-xl"
                                    onClick={handleCancel}
                                >
                                    Cancel :'(
                                </button> */}
                                <button id="createworldbutton"
                                    className="rounded-lg bg-[#5F5453] mx-1 px-4 py-2
                                    drop-shadow-xl 
                                    hover:bg-[#E8DEDA] hover:text-[#5F5453] 
                                    hover:border-2 hover:border-[#5F5453] hover:drop-shadow-none
                                " type="submit">
                                Create World
                                </button>
                            </div>
                    </div>
            </form>
        </div>
    )
}
