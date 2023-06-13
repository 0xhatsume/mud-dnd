// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { Player, PlayerData,
Health, HealthData, Xp,
Strength, Dexterity, Constitution, 
Intelligence, Wisdom, Charisma
} from "../codegen/Tables.sol";
import { Class } from "../codegen/Types.sol";

contract PlayerSystem is System {
    function createPlayer(
        address owner,
        bytes32 world,  
        Class charclass, string memory name,
        string memory player_description,
        string memory picture_url,
        uint256 healthpoints
        ) 
    public returns(bool){

        Player.set(owner, world, PlayerData({
            class: charclass,
            name: name,
            player_description: player_description,
            picture_url: picture_url
        }));

        Health.set(owner, world, HealthData({
            current: healthpoints,
            maxHealth: healthpoints
        }));

        Xp.set(owner, world, 0);
        return true;
    }

    // ===== View Functions =====
    function viewPlayerName(address owner, bytes32 world) public view
    returns(string memory){
        return Player.getName(owner, world);
    }

    function viewPlayerClass(address owner, bytes32 world) public view
    returns(Class){
        return Player.getClass(owner, world);
    }

    function viewPlayerDescription(address owner, bytes32 world) public view
    returns(string memory){
        return Player.getPlayer_description(owner, world);
    }

    function viewPlayerPictureUrl(address owner, bytes32 world) public view
    returns(string memory){
        return Player.getPicture_url(owner, world);
    }

    function viewPlayerHealth(address owner, bytes32 world) public view
    returns(uint256, uint256){
        return (
            Health.get(owner, world).current,
            Health.get(owner, world).maxHealth
        );
    }

    function viewPlayerXp(address owner, bytes32 world) public view
    returns(uint256){
        return (
            Xp.get(owner, world)
        );
    }

    function viewPlayerScoreSheet(address owner, bytes32 world) public view 
    returns(uint256, uint256, uint256,uint256, uint256, uint256){
        return (
            Strength.get(owner, world),
            Dexterity.get(owner, world),
            Constitution.get(owner, world),
            Intelligence.get(owner, world),
            Wisdom.get(owner, world),
            Charisma.get(owner, world)
        );
    }

    // ===== Update Functions =====
    function updatePlayerName(address owner, bytes32 world, string memory name) public
    returns(bool){
        Player.setName(owner, world, name);
        return true;
    }

    function updatePlayerClass(address owner, bytes32 world, Class charclass) public
    returns(bool){
        Player.setClass(owner, world, charclass);
        return true;
    }

    function updatePlayerDescription(address owner, bytes32 world, 
        string memory player_description) public
    returns(bool){
        Player.setPlayer_description(owner, world, player_description);
        return true;
    }

    function updatePlayerPictureUrl(address owner, bytes32 world, string memory picture_url) public
    returns(bool){
        Player.setPicture_url(owner, world, picture_url);
        return true;
    }

    function updatePlayerCurrentHealth(address owner, bytes32 world, uint256 current) public
    returns(bool){
        Health.setCurrent(owner, world, current);
        return true;
    }

    function updatePlayerMaxHealth(address owner, bytes32 world, uint256 max) public
    returns(bool){
        Health.setMaxHealth(owner, world, max);
        return true;
    }

    function updatePlayerCurrentXp(address owner, bytes32 world, uint256 current) public
    returns(bool){
        Xp.set(owner, world, current);
        return true;
    }

    function updatePlayerStrength(address owner, bytes32 world, uint256 strength) public
    returns(bool){
        Strength.set(owner, world, strength);
        return true;
    }

    function updatePlayerDexterity(address owner, bytes32 world, uint256 dexterity) public
    returns(bool){
        Dexterity.set(owner, world, dexterity);
        return true;
    }

    function updatePlayerConstitution(address owner, bytes32 world, uint256 constitution) public
    returns(bool){
        Constitution.set(owner, world, constitution);
        return true;
    }

    function updatePlayerIntelligence(address owner, bytes32 world, uint256 intelligence) public
    returns(bool){
        Intelligence.set(owner, world, intelligence);
        return true;
    }

    function updatePlayerWisdom(address owner, bytes32 world, uint256 wisdom) public
    returns(bool){
        Wisdom.set(owner, world, wisdom);
        return true;
    }

    function updatePlayerCharisma(address owner, bytes32 world, uint256 charisma) public
    returns(bool){
        Charisma.set(owner, world, charisma);
        return true;
    }

    function updatePlayerScoreSheet(address owner, bytes32 world, 
    uint256 strength, uint256 dexterity, uint256 constitution, 
    uint256 intelligence, uint256 wisdom, uint256 charisma) public
    returns(bool){
        Strength.set(owner, world, strength);
        Dexterity.set(owner, world, dexterity);
        Constitution.set(owner, world, constitution);
        Intelligence.set(owner, world, intelligence);
        Wisdom.set(owner, world, wisdom);
        Charisma.set(owner, world, charisma);
        return true;
    }
    // ===== Delete Functions =====
    function removePlayer(address owner, bytes32 world)
        public returns(bool){

        Player.deleteRecord(owner, world);
        return true;
    }
}