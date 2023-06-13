import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  enums: {
    Class: [
      "Babarian",
      "Bard",
      "Cleric",
      "Druid",
      "Fighter",
      "Monk",
      "Paladin",
      "Ranger",
      "Rogue",
      "Sorcerer",
      "Warlock",
      "Wizard",
    ]
  },

  tables: {
    ToDo: {
      schema: {
        done: "bool",
        body: "string",
      }
    },
    Stories: { schema: { 
                        game_startedby: "address",
                        name: "string", 
                        dm_system_message: "string",
                        questspecifics:"string",
                        user_description: "string",
                        game_description:"string",
                      } },
    StoryArt:{ 
        keySchema:{
          world: "bytes32",
          order: "int256",
        },
        schema:{
          context:"string",
          nft_url: "string",
          image_url: "string"
      }
    },

    Narratives:{  
      schema:{ world: "bytes32", order:"int256", from:"string", text:"string"}},

    Wallet: { keySchema: { owner: "address" }, schema: { balance: "uint256" }},

    Player: { keySchema:{ owner: "address", world:"bytes32"}, 
                schema:{class:"Class", name: "string", 
                player_description:"string", picture_url: "string"}},
                
    Health: { keySchema:{owner: "address", world:"bytes32"}, schema:{current: "uint256", maxHealth: "uint256"}},
    Xp: { keySchema:{owner: "address", world:"bytes32"}, schema:{current: "uint256"}},

    Strength: { keySchema:{owner: "address", world:"bytes32"}, schema:{value: "uint256"}},
    Dexterity: { keySchema:{owner: "address", world:"bytes32"}, schema:{value: "uint256"}},
    Constitution: { keySchema:{owner: "address", world:"bytes32"}, schema:{value: "uint256"}},
    Intelligence: { keySchema:{owner: "address", world:"bytes32"}, schema:{value: "uint256"}},
    Wisdom: { keySchema:{owner: "address", world:"bytes32"}, schema:{value: "uint256"}},
    Charisma: { keySchema:{owner: "address", world:"bytes32"}, schema:{value: "uint256"}},
    
    Counter: {
      keySchema: {},
      schema: "uint32",
    },
  },

  modules: [
    {
      name: "UniqueEntityModule",
      root: true,
      args: [],
    }
  ],
});
