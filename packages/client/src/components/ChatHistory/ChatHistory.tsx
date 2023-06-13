import React from 'react'

export const ChatHistory = () => {
  return (
    <div className="h-[89.5vh] py-1.5 justify-end flex-grow px-2 text-sm space-y-1 overflow-y-auto">
            
            {/* system reply */}
            <div className="flex space-x-2 items-center justiy-start">
              <span className="font-semibold text-amber-800">System:</span>
              <span>lorem ipsum dolor si amet_</span>
            </div>

            {/* replies */}
            {[...Array(323)].map((_, i) => (
              <div
                key={i}
                className="flex space-x-2 items-center justiy-start bg-gradient-to-r from-[#5F5453]/10 via-transparent to-transparent"
              >
                <span className="font-protoshade font-semibold">You:</span>
                <span>lorem ipsum dolor si amet_</span>
              </div>
            ))}


          </div>
  )
}
