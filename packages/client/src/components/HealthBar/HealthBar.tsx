import React from 'react'

export const HealthBar = () => {
  return (
    <div className="mt-2">
        <div className="flex items-end justify-between">
            <h5>Health</h5>
            <span>900/1000</span>
        </div>
        
        {/* health amount bar */}
        <div className="relative flex bg-[#5F5453]/20 font-protoshade font-semibold rounded-sm overflow-hidden">
            <span className="bg-[#10CB81] w-[90%] text-xs text-[#E8DEDA] h-2"></span>
        </div>
    </div>
  )
}
