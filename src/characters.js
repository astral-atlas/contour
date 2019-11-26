// @flow strict
import {
  nameModel,
  stringModel,
  modelObject,
  modelOptional,
} from '@lukekaalim/model';
/*::
import type { Model } from '@lukekaalim/model'; 
import type { PlayerID } from './player'; 
*/

/*::
export type CharacterID = string;
export type Character = {
  id: CharacterID,
  name: string,
  playerId: PlayerID,
  dialogueCharacter: null | DialogueCharacterID,
};

export type DialogueCharacterID = string;
export type DialogueCharacter = {
  id: DialogueCharacterID,
  name: string,
};
*/

const characterModel/*: Model<Character>*/ = nameModel('Character', modelObject({
  id: stringModel,
  name: stringModel,
  playerId: stringModel,
  dialogueCharacter: modelOptional(stringModel),
}));

const dialogueCharacterModel/*: Model<DialogueCharacter>*/ = nameModel('Dialogue Character', modelObject({
  id: stringModel,
  name: stringModel,
}));

export {
  characterModel,
  dialogueCharacterModel,
}