import React from "react";
import AppBody from "../AppBody";
import { CreateWorldModal, Carousel, NavTop } from "../../components";
import { createWorldModalAtom } from "../../store";
import { useAtomValue } from "jotai";
import { useMUD } from "../../MUDContext";
import { Has, getComponentValueStrict } from "@latticexyz/recs";
import { useEntityQuery } from "@latticexyz/react";
import { Link } from "react-router-dom";


const Home = () => {
  const WorldModalVisible = useAtomValue(createWorldModalAtom);

  const {
    components: { Stories },
    systemCalls: { createStory, 
                    //increment, addToDo 
                },
    network: { singletonEntity, 
        // worldSend, storeCache 
    },
  } = useMUD();

  const stories = useEntityQuery([Has(Stories)]);

  return (
    <AppBody>
      <NavTop />

      <Carousel />

      
      <div className="mt-3 flex flex-col items-center text-[#5F5453]">
        <hr className="w-3/4 border-orange-800 drop-shadow-2xl"></hr>
        </div>
      
      <div className="my-4 flex flex-col items-center">

        <span className="w-3/4">Enter a world you created now!</span>
        <div className="w-3/4 h-full border-red flex 
          overflow-x-auto overflow-y-hidden">
          {
            stories && (
              stories.map((s) => {
                const story = getComponentValueStrict(Stories, s);
                //)
                return <Link to={`/story/${s}`}><div className="
                  h-[18rem] py-4 px-2 mx-1 my-2 
                  flex flex-col justify-between
                  border-2 border-orange-800 rounded-lg shadow-2xl drop-shadow-2xl 
                  hover:cursor-pointer hover:shadow-none hover:drop-shadow-none
                  "
                  style={{backgroundImage: `url(/img/thumbnail2.jpg)`, 
                            backgroundRepeat: "no-repeat", backgroundPosition: "center",
                            backgroundSize: "cover"
                        }}
                  >
                    <h5 className="mb-2 text-xl font-sans font-bold
                      bg-white/40 rounded-lg py-1 px-2 mr-auto
                      text-orange-900">
                      {story.name}
                    </h5>
                    <p className="w-[16.5rem] h-[9rem] mt-2 font-mono italic text-xs 
                    font-semiold
                    text-orange-900 
                    bg-white/50 rounded-lg p-2
                    text-ellipsis break-words overflow-y-hidden
                    ">{`"${story.dm_system_message}"`}
                    </p>
                </div>
                </Link>
              })
            ) 
            }
        </div>
      </div>

      <CreateWorldModal visible={WorldModalVisible}/>
    </AppBody>
  );
};

export default Home;