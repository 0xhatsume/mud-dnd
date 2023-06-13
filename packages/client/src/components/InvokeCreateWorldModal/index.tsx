import React from 'react';
import { useSetAtom } from 'jotai';
import { createWorldModalAtom } from '../../store';

export const InvokeCreateWorldModal = () => {
  const setWorldModalVisible = useSetAtom(createWorldModalAtom);
  return (
    <button className="mx-1 py-2 px-3 rounded-lg 
              bg-orange-500
              drop-shadow-2xl 
              focus:ring-4 focus:ring-orange-800 focus:ring-opacity-50
              hover:bg-orange-800 text-white
              hover:drop-shadow-none"
        
        onClick={() => setWorldModalVisible(true)}
        >
                  Create World
              </button>
  )
}
