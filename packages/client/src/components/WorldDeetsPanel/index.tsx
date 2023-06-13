import React from 'react';
import { useMUD } from '../../MUDContext';
import { useLocation } from 'react-router-dom';
import { getComponentValueStrict, Entity } from '@latticexyz/recs';

export const WorldDeetsPanel = () => {

  const { 
    components:{Stories}
  } = useMUD();

  const location = useLocation();
  const storyId = location.pathname.replace("/story/", "");

  const story = getComponentValueStrict(Stories, storyId as Entity);
  const game_description = story?.game_description.replace(
                              "\n    Here is the topic for a Dungeons & Dragons game: ",""
                              ).replace(" \n    There is one player in this game: the protagonist, Player1. \n", "");

  return (
    <div className="absolute bottom-0 w-full p-4">
        <div className="border border-[#E8DEDA] p-1 rounded-lg">
        <div className="bg-gradient-to-b from-[#E8DEDA]/60 to-[#E8DEDA] backdrop-blur-sm p-4 rounded-md">
            <h3 className="font-proto font-semibold text-lg">
              {story.name ? story.name : "Loading..."}
            </h3>
            <p className="text-sm">{game_description ? game_description: "Loading..."}</p>
        </div>
        </div>
    </div>
  )
}