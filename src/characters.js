// @flow strict
import {
  nameModel,
  stringModel,
  modelObject,
} from '@lukekaalim/model';
/*::
import type { Model } from '@lukekaalim/model'; 
*/

/*::
export type CharacterID = string;
export type Character = {
  id: CharacterID,
  name: string,
  dialogueCharacter: DialogueCharacterID,
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
  dialogueCharacter: stringModel,
}));

const dialogueCharacterModel/*: Model<DialogueCharacter>*/ = nameModel('Dialogue Character', modelObject({
  id: stringModel,
  name: stringModel,
}));

export {
  characterModel,
  dialogueCharacterModel,
}