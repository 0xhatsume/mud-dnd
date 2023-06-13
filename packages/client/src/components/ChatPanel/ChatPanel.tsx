import React from 'react'

export const ChatPanel = () => {
  return (
    <div>
        {/* action panel */}
        <div className="flex space-x-1 px-2 justify-end text-sm">
            <button className="bg-[#5F5453]/80 hover:bg-[#5F5453]/90 focus:bg-[#5F5453] text-[#E8DEDA] px-2 py-0.5 rounded">
            Action A
            </button>
            <button className="bg-[#5F5453]/80 hover:bg-[#5F5453]/90 focus:bg-[#5F5453] text-[#E8DEDA] px-2 py-0.5 rounded">
            Action B
            </button>
            <button className="bg-[#5F5453]/80 hover:bg-[#5F5453]/90 focus:bg-[#5F5453] text-[#E8DEDA] px-2 py-0.5 rounded">
            Action C
            </button>
        </div>

        <div className="p-2 pb-4 relative">
            <span className="bg-[#5F5453] rounded-t w-12 h-1 absolute bottom-0 right-2"></span>
            <input
            type="text"
            placeholder="What do you do?"
            className="bg-white/10 focus:bg-white/30 placeholder:text-[#5F5453]/50 border border-[#5F5453]/50 focus:border-[#5F5453] rounded-md w-full px-2 py-1.5 focus:outline-none border"
            />
            <span className="absolute right-0 top-0 h-full p-2 pb-4">
            <button className="text-[#5F5453] h-full flex items-center justify-center">
                <svg className="h-5 w-12" viewBox="0 0 364 322">
                <g opacity="1">
                    <path
                    d="M300.161 201.899C300.2 136.634 247.323 83.6947 182.058 83.6559C116.793 83.617 63.8535 136.493 63.8147 201.759L-18.9065 201.709C-18.8404 90.7585 71.1566 0.868666 182.107 0.934744C293.058 1.00082 382.948 90.9978 382.882 201.949L300.161 201.899Z"
                    fill="currentColor"
                    />
                    <path
                    d="M62.6579 201.758C62.6187 267.661 116.014 321.118
            181.915 321.157C247.816 321.196 301.275 267.803 301.314
            201.9L62.6579 201.758Z"
                    fill="currentColor"
                    />
                </g>
                </svg>
            </button>
            </span>
        </div>
    </div>
  )
}
