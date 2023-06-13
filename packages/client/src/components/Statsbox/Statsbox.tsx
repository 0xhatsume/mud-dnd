import React from 'react'

export const Statsbox = () => {
  return (
    <div className="mt-2 mb-2 border-2 border-[#5F5453] p-1 rounded">
            <div className="border border-[#5F5453] p-2 rounded-sm">
              <h3 className="font-bold text-sm mb-1">_Stats</h3>
              <hr className="border-[#5F5453] -mx-2" />
              <div className="text-xs mt-2 flex items-center justify-between">
                <h5>Strength</h5>
                <span className="font-bold">
                  <span className="text-emerald-600">&#x25b2;10</span>{" "}
                  <span>25</span>
                </span>
              </div>
              <div className="text-xs mt-2 flex items-center justify-between">
                <h5>Dexterity</h5>
                <span className="font-bold">
                  <span className="text-emerald-600">&#x25b2;3</span>{" "}
                  <span>10</span>
                </span>
              </div>
              <div className="text-xs mt-2 flex items-center justify-between">
                <h5>Constitution</h5>
                <span className="font-bold">10</span>
              </div>
              <div className="text-xs mt-2 flex items-center justify-between">
                <h5>Intelligence</h5>
                <span className="font-bold">10</span>
              </div>
              <div className="text-xs mt-2 flex items-center justify-between">
                <h5>Wisdom</h5>
                <span className="font-bold">10</span>
              </div>{" "}
              <div className="text-xs mt-2 flex items-center justify-between">
                <h5>Charisma</h5>
                <span className="font-bold">10</span>
              </div>
            </div>
          </div>
  )
}
