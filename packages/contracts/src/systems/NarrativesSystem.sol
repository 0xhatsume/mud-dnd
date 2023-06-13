// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { Narratives, NarrativesData } from "../codegen/Tables.sol";
import { getUniqueEntity } from "@latticexyz/world/src/modules/uniqueentity/getUniqueEntity.sol";

contract NarrativesSystem is System {
    function createNarrative(
        bytes32 world, int256 order, 
        string memory from, string memory text) 
    public returns(bytes32){

        bytes32 id = getUniqueEntity();
        Narratives.set(id, NarrativesData({
            world: world,
            order: order,
            from: from,
            text: text
        }));
        return id;
    }

    function editNarrative(
        bytes32 id, bytes32 world, int256 order, 
        string memory from, string memory text)
    public returns(bool){
        Narratives.set(id, NarrativesData({
            world: world,
            order: order,
            from: from,
            text: text
        }));
        return true;
    }

    function removeNarrative(bytes32 id) public returns(bool){
        Narratives.deleteRecord(id);
        return true;
    }
}