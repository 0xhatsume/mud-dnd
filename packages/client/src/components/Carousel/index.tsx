import React , { useState, useEffect } from 'react';

export const Carousel = () => {

    const slides = ["/img/world4.jpg", "/img/world5.jpg",
        "/img/world6.jpg", "/img/world7.jpg",
        // "/img/world1.jpg", "/img/world2.jpg", 
        "/img/world3.jpg", ];
    
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null) as any;
    const delay = 3500;
    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            ),
          delay
    );

        return () => {
            resetTimeout();
        };
    }, [index]);

    const prevSlide = () => {
        const isFirstSlide = index === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : index - 1;
        setIndex(newIndex);
    };
    
    const nextSlide = () => {
        const isLastSlide = index === slides.length - 1;
        const newIndex = isLastSlide ? 0 : index + 1;
        setIndex(newIndex);
    };

  return (
    <div className="mt-3 flex items-center justify-center">
        {/* max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group */}
        <div className="overflow-hidden max-w-[1400px] h-[400px] w-full rounded-lg border-2 border-[#5F5453] relative group" >
            
            
            {/* Slider Itself */}
            <div className="w-full" style={{ transition: "ease 1000ms", whiteSpace: "nowrap", 
                transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                
                {slides.map((url, index) => (
                    // <div className="inline-flex h-[400px] w-full justify-center bg-slate-700" 
                    <div className="inline-block h-[400px] w-full bg-slate-700 hover:cursor-pointer" 
                        key={index} style={{backgroundImage: `url(${url})`, 
                            backgroundRepeat: "no-repeat", backgroundPosition: "center",
                            backgroundSize: "cover"
                        }}>
                        {/* <img src={`${url}`} 
                            style={{objectFit:"cover"}}
                        /> */}
                    </div>
                ))}
                
            </div>
            {/* Left Arrow */}
            <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5
                text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <button type="button" onClick={prevSlide} className="flex items-center justify-center h-full px-4 
                    cursor-pointer group focus:outline-none">
                <span className="inline-flex items-center justify-center 
                    w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30
                    group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4
                    group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5
                    text-white sm:w-6 sm:h-6 dark:text-gray-800" 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7">
                        </path>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
                </button>
            </div>
            {/* Right Arrow */}
            <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5
                text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <button type="button" onClick={nextSlide} className="flex items-center justify-center h-full px-4 
                    cursor-pointer group focus:outline-none">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 
                group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 
                group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    <span className="sr-only">Next</span>
                </span>
                </button>
            </div>  
            {/* Bottom Buttons */}
            <div className="text-center absolute bottom-0 inset-x-0 mb-2">
                {slides.map((_, idx) => (
                <div
                    key={idx}
                    className={`${index === idx ? "" : "bg-opacity-50"} bg-orange-900 inline-block`}
                    style={{ width: "70px", height: "10px", margin: "15px 7px 0px", cursor: "pointer"}}
                    onClick={() => {
                    setIndex(idx);
                    }}
                ></div>
                ))}
            </div>   
            {/* Top Left Narrative */}
            <div className='absolute top-2 left-5 text-3xl font-bold p-2 text-[#E8DEDA]
                rounded-md bg-black/50
                '>
                <p className="">Exciting New World Awaits!</p>
                <p> Join a world now!</p>
            </div>

        </div>
    </div>
  )
}
