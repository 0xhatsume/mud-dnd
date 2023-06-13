import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Statsbox, HealthBar, ExperienceBar,
  PlayerNameWallet, AvatarDiv, WorldScenePanel,
  ChatPanel, ChatHistory, CreatePlayerModal
} from "../../components";
import AppBody from '../AppBody';
import { useAtomValue } from 'jotai';
import { createPlayerModalAtom } from '../../store';


const Story = () => {
  const CreatePlayerModalVisible = useAtomValue(createPlayerModalAtom);

  return (
    <AppBody>
        {/* brown border container */}
        <div className="rounded-lg border-2 border-[#5F5453] flex flex-1 h-full w-full relative">
          
          {/* left panel */}
          <WorldScenePanel />

          {/* middle panel */}
          <div className="w-full border-l-2 border-r-2 border-[#5F5453] flex flex-col h-full justify-end flex-1">
            
            {/* chat history */}
            <ChatHistory/>

            {/* chat panel */}
            <ChatPanel />


          </div>

          {/* right panel */}
          <div className="w-1/5 p-2 flex flex-col">

            <div className="mt-6"></div>
            {/* avatar div */}
            <AvatarDiv />

            {/* wallet address */}
            <PlayerNameWallet />

            <hr className='mt-8 border-[#5F5453]'></hr>
            {/* experience bar */}
            <ExperienceBar />
            
            {/* health bar */}
            <HealthBar />
            <hr className='mt-5 border-[#5F5453]'></hr>
            {/* <div className="h-full w-full flex-1"></div> */}

            {/* bottom right stats panel */}
            <Statsbox />

          </div>

        </div>
        <CreatePlayerModal visible={CreatePlayerModalVisible}/>
    </AppBody>
  )
}

export default Story;
