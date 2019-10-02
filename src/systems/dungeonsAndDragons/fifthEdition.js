// @flow strict
/*::
import type { Model } from '@lukekaalim/model';
*/
const { modelObject, stringModel, numberModel, modelDisjointUnion, modelTagUnion, modelArray, modelLiteral } = require('@lukekaalim/model');

/*::
export type CreatureStatistic = {
  id: string,

  name: string,
  maximumHitpoints: number,
  size: 'small' | 'medium' | 'large',
  creatureTypes: Array<'humanoid' | 'construct'>,

  armorClass: number,
  speed: number,

  abilityScores: {
    strength: number,
    dexterity: number,
    constitution: number,
    intelligence: number,
    wisdom: number,
    charisma: number,
  },
};
*/
export const creatureStatisticModel/*: Model<CreatureStatistic>*/ = modelObject({
  id: stringModel,
  name: stringModel,
  maximumHitpoints: numberModel,
  size: modelTagUnion(['small', 'medium', 'large']),
  creatureTypes: modelArray(modelTagUnion(['humanoid', 'construct'])),
  armorClass: numberModel,
  speed: numberModel,
  abilityScores: modelObject({
    strength: numberModel,
    dexterity: numberModel,
    constitution: numberModel,
    intelligence: numberModel,
    wisdom: numberModel,
    charisma: numberModel,
  }),
});

/*::
export type SpellID = string;
export type Spell = {
  id: SpellID,

  name: string,

  level: number,
  castingTime: (
    | { type: 'action' }
    | { type: 'bonus-action' }
    | { type: 'reaction', triggerDescription: string }
    | { type: 'minutes', timeInMinutes: number }
  ),
  components: Array<(
    | { type: 'verbal' }
    | { type: 'somantic' }
    | { type: 'material', items: Array<{ priceInCopper: number, description: string }> }
  )>,

  description: string,
};
*/

const castingTimeModel = modelDisjointUnion('type', {
  'action':       modelObject({ type: modelLiteral('action') }),
  'bonus-action': modelObject({ type: modelLiteral('bonus-action') }),
  'reaction':     modelObject({ type: modelLiteral('reaction'), triggerDescription: stringModel }),
  'minutes':      modelObject({ type: modelLiteral('minutes'), timeInMinutes: stringModel })
});

const componentModel = modelDisjointUnion('type', {
  'verbal':   modelObject({ type: modelLiteral('verbal') }),
  'somantic': modelObject({ type: modelLiteral('somantic') }),
  'material': modelObject({ type: modelLiteral('material'), items: modelArray(modelObject({ priceInCopper: numberModel, description: stringModel })) }),
})

export const spellModel/*: Model<Spell>*/ = modelObject({
  id: stringModel,
  name: stringModel,
  level: numberModel,
  castingTime: castingTimeModel,
  components: modelArray(componentModel),
  description: stringModel,
});

/*::
export type MagicItemID = string;
export type MagicItem = {
  id: MagicItemID,

  name: string,
  description: string,
}
*/

export const magicItemModel/*: Model<MagicItem>*/ = modelObject({
  id: stringModel,
  name: stringModel,
  description: stringModel,
});

/*::
export type PlayerCharacter = {
  id: string,
  classes: Array<{
    level: number,
    class: (
      | { type: 'wizard', arcaneTradition: 'evocation' | 'artillery', spellIds: Array<SpellID> }
      | { type: 'artificer', specialisation: 'alchemist' | 'mechanist', spellIds: Array<SpellID> }
    )
  }>,
  statistic: CreatureStatistic,
  magicItems: Array<MagicItemID>,
}
*/

const wizardClassModel = modelObject({
  type: modelLiteral('wizard'),
  arcaneTradition: modelTagUnion(['evocation', 'artillery']),
  spellIds: modelArray(stringModel),
});
const artificerClassModel = modelObject({
  type: modelLiteral('artificer'),
  specialisation: modelTagUnion(['alchemist', 'mechanist']),
  spellIds: modelArray(stringModel),
});

export const playerCharacterModel/*: Model<PlayerCharacter>*/ = modelObject({
  id: stringModel,
  classes: modelArray(modelObject({
    level: numberModel,
    class: modelDisjointUnion('type', {
      'wizard': wizardClassModel,
      'artificer': artificerClassModel,
    })
  })),
  statistic: creatureStatisticModel,
  magicItems: modelArray(stringModel),
});