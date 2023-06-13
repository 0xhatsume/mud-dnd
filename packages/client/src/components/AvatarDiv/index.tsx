import React from 'react';
import { useSetAtom } from 'jotai';
import { createPlayerModalAtom } from '../../store';

export const AvatarDiv = () => {

  const setCreatePlayerModalVisible = useSetAtom(createPlayerModalAtom);

  const invokeCreatePlayerModal = () => {
    setCreatePlayerModalVisible(true)
  }

  return (
    <div className="flex items-center justify-center mt-4">
      <figure className="w-20 h-20 relative rounded-2xl bg-[#5F5453] 
          ring-offset-2 ring-offset-[#E8DEDA] text-xs text-[#E8DEDA] ring-2 ring-[#5F5453] 
          flex items-center justify-center text-center
          shadow-2xl drop-shadow-2xl
          hover:shadow-none hover:drop-shadow-none 
          hover:cursor-pointer
          "
          onClick={invokeCreatePlayerModal}
          >
        Create Player
        <span className="w-8 h-0.5 rounded-b absolute top-0 bg-[#E8DEDA]"></span>
        <span className="w-8 h-0.5 rounded-t absolute bottom-0 bg-[#E8DEDA]"></span>
      </figure>
    </div>
  )
}