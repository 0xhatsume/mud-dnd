import { getComponentValue } from "@latticexyz/recs";
import { awaitStreamValue } from "@latticexyz/utils";
import { ClientComponents } from "./createClientComponents";
import { SetupNetworkResult } from "./setupNetwork";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls(
  { worldSend, txReduced$, singletonEntity }: SetupNetworkResult,
  { Counter, Stories }: ClientComponents
) {

  const increment = async () => {
    const tx = await worldSend("increment", []);
    await awaitStreamValue(txReduced$, (txHash) => txHash === tx.hash);
    return getComponentValue(Counter, singletonEntity);
  };

  interface Story {
    name:string, dm_system_message:string, 
    questspecifics:string,
    user_description:string, game_description:string,
    //picture_url: string
  }
  const createStory = async ({
    name, 
    dm_system_message, 
    questspecifics, 
    user_description, 
    game_description,
    //picture_url
    }: Story) => {
    
    const tx = worldSend("createStory", [
      name, dm_system_message, 
      questspecifics, user_description, 
      game_description,
      //picture_url
    ])
    await awaitStreamValue(txReduced$, (txHash) => txHash === tx.hash);
    return true;
  };

  const addToDo = async (body: string) => {
    const tx = await worldSend("addToDo", [body]);
    return true;
  }

  return {
    increment,
    createStory,
    addToDo
  };
}
