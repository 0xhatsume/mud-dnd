import React from 'react';
import { WorldDeetsPanel } from '../WorldDeetsPanel';

export const WorldScenePanel = () => {
  return (
    <div className="w-1/4 relative">
          <figure className="p-1.5 absolute inset-0 flex items-center justify-center">
            
            {/* left panel image */}
            <img
              src="/img/cyberpunk_preview.png"
              className="rounded-md h-full object-cover"
            />

            {/* left bottom panel description */}
            <WorldDeetsPanel />

          </figure>
    </div>
  )
}
