import React from 'react';
import { WalletButton } from "../WalletButton";
import { InvokeCreateWorldModal} from "../InvokeCreateWorldModal";

export const NavTop = () => {
  return (
    <nav className="bg-transparent
        flex items-center justify-between mx-4 px-4 py-2
        ">
          {/* left items */}
          <div className="flex items-center justify-between ">
            <span className='w-24 h-20 overflow-y-visible'><img className="mx-2 h-28 absolute" src='/img/favicon.png' /></span>
            <span className="text-6xl font-black mx-2 drop-shadow-2xl" 
              style={{fontFamily: "Luminari"}}>Dungeon Stories</span>
          </div>

          {/* mid items */}
          <div></div>

          {/* right items */}
          <div className='flex'>
            <InvokeCreateWorldModal />
            <WalletButton />
          </div>
          
      </nav>
  )
}
