// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { Stories, StoriesData } from "../codegen/Tables.sol";
import { getUniqueEntity } from "@latticexyz/world/src/modules/uniqueentity/getUniqueEntity.sol";

contract StoriesSystem is System {
    function createStory(string memory name, 
    string memory dm_system_message, string memory questspecifics,
    string memory user_description, string memory game_description
    ) public returns(bytes32){
        bytes32 id = getUniqueEntity();

        Stories.set(id, StoriesData({
            name: name,
            dm_system_message: dm_system_message,
            questspecifics: questspecifics,
            user_description: user_description,
            game_description: game_description,
            game_startedby: _msgSender()
        }));
        return id;
    }

    // ===== View Functions =====
    function viewName(bytes32 id) public view
        returns(string memory){
            return Stories.getName(id);
    }

    function viewQuestSpecifics(bytes32 id) public view
        returns(string memory){
            return Stories.getQuestspecifics(id);
    }

    function viewDmSystemMessage(bytes32 id) public view
        returns(string memory){
            return Stories.getDm_system_message(id);
    }

    function viewUserDescription(bytes32 id) public view
        returns(string memory){
            return Stories.getUser_description(id);
    }

    function viewGameDescription(bytes32 id) public view
        returns(string memory){
            return Stories.getGame_description(id);
    }

    function viewGameStartedBy(bytes32 id) public view
        returns(address){
            return Stories.getGame_startedby(id);
    }

    // function viewPictureUrl(bytes32 id) public view
    //     returns(string memory){
    //         return Stories.getPicture_url(id);
    // }

    // ===== Set Functions =====
    function setName(bytes32 id, string memory name) 
        public returns(bool){
        Stories.setName(id, name);
        return true;
    }

    function setQuestspecifics(bytes32 id, string memory description) 
        public returns(bool){
        Stories.setQuestspecifics(id, description);
        return true;
    }

    function setDmSystemMessage(bytes32 id, string memory dmSystemMessage) 
        public returns(bool){
        Stories.setDm_system_message(id, dmSystemMessage);
        return true;
    }

    function setUserDescription(bytes32 id, string memory userDescription) 
        public returns(bool){
        Stories.setUser_description(id, userDescription);
        return true;
    }

    function setGameDescription(bytes32 id, string memory gameDescription) 
        public returns(bool){
        Stories.setGame_description(id, gameDescription);
        return true;
    }

    // function setPictureUrl(bytes32 id, string memory pictureUrl) 
    //     public returns(bool){
    //     Stories.setPicture_url(id, pictureUrl);
    //     return true;
    // }


    function destroyStory(bytes32 id) public returns(bool){
        Stories.deleteRecord(id);
        return true;
    }

}