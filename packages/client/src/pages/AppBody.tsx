import React from 'react';

const AppBody = ({children, ...rest}) => {
  return (
    <div className="bg-[#E8DEDA] selection:bg-[#5F5453]/20 
    text-[#5F5453] font-proto p-2.5 min-h-screen 
    flex flex-col content-center relative"
    
    {...rest}
    >
        {children}</div>
  )
}

export default AppBody;