export enum ClassTypes {
    Babarian,
    Bard,
    Cleric,
    Druid,
    Fighter,
    Monk,
    Paladin,
    Ranger,
    Rogue,
    Sorcerer,
    Warlock,
    Wizard
}

type AttributeConfig = {
    Strength: number,
    Dexterity: number,
    Constitution: number,
    Intelligence: number,
    Wisdom: number,
    Charisma: number
}

export const classTypes: Record<ClassTypes, AttributeConfig> = {
    [ClassTypes.Babarian]: {
        Strength: 15,
        Dexterity: 13,
        Constitution: 14,
        Intelligence: 8,
        Wisdom: 12,
        Charisma: 10
    },
    [ClassTypes.Bard]: {
        Strength: 8,
        Dexterity: 14,
        Constitution: 12,
        Intelligence: 13,
        Wisdom: 10,
        Charisma: 15
    },
    [ClassTypes.Cleric]: {
        Strength: 14,
        Dexterity: 8,
        Constitution: 13,
        Intelligence: 12,
        Wisdom: 15,
        Charisma: 10
    },
    [ClassTypes.Druid]: {
        Strength: 8,
        Dexterity: 10,
        Constitution: 14,
        Intelligence: 12,
        Wisdom: 15,
        Charisma: 13
    },
    [ClassTypes.Fighter]: {
        Strength: 15,
        Dexterity: 14,
        Constitution: 13,
        Intelligence: 12,
        Wisdom: 8,
        Charisma: 10
    },
    [ClassTypes.Monk]: {
        Strength: 13,
        Dexterity: 15,
        Constitution: 12,
        Intelligence: 10,
        Wisdom: 14,
        Charisma: 8
    },
    [ClassTypes.Paladin]: {
        Strength: 15,
        Dexterity: 10,
        Constitution: 12,
        Intelligence: 8,
        Wisdom: 13,
        Charisma: 14
    },
    [ClassTypes.Ranger]: {
        Strength: 13,
        Dexterity: 15,
        Constitution: 12,
        Intelligence: 10,
        Wisdom: 14,
        Charisma: 8
    },
    [ClassTypes.Rogue]: {
        Strength: 10,
        Dexterity: 15,
        Constitution: 12,
        Intelligence: 14,
        Wisdom: 12,
        Charisma: 13
    },
    [ClassTypes.Sorcerer]: {
        Strength: 10,
        Dexterity: 12,
        Constitution: 14,
        Intelligence: 8,
        Wisdom: 13,
        Charisma: 15
    },
    [ClassTypes.Warlock]: {
        Strength: 8,
        Dexterity: 10,
        Constitution: 14,
        Intelligence: 12,
        Wisdom: 13,
        Charisma: 15
    },
    [ClassTypes.Wizard]: {
        Strength: 8,
        Dexterity: 14,
        Constitution: 12,
        Intelligence: 15,
        Wisdom: 13,
        Charisma: 10
    }
}

