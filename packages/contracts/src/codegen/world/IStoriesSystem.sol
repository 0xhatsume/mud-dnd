// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

/* Autogenerated file. Do not edit manually. */

interface IStoriesSystem {
  function createStory(
    string memory name,
    string memory dm_system_message,
    string memory questspecifics,
    string memory user_description,
    string memory game_description
  ) external returns (bytes32);

  function viewName(bytes32 id) external view returns (string memory);

  function viewQuestSpecifics(bytes32 id) external view returns (string memory);

  function viewDmSystemMessage(bytes32 id) external view returns (string memory);

  function viewUserDescription(bytes32 id) external view returns (string memory);

  function viewGameDescription(bytes32 id) external view returns (string memory);

  function viewGameStartedBy(bytes32 id) external view returns (address);

  function setName(bytes32 id, string memory name) external returns (bool);

  function setQuestspecifics(bytes32 id, string memory description) external returns (bool);

  function setDmSystemMessage(bytes32 id, string memory dmSystemMessage) external returns (bool);

  function setUserDescription(bytes32 id, string memory userDescription) external returns (bool);

  function setGameDescription(bytes32 id, string memory gameDescription) external returns (bool);

  function destroyStory(bytes32 id) external returns (bool);
}
