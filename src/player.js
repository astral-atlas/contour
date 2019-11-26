// @flow strict
import { nameModel, stringModel, numberModel, modelObject, modelOptional } from '@lukekaalim/model';

/*::
import type { Model } from '@lukekaalim/model';

type PlayerID = string;
type Player = {
  id: PlayerID,
  displayName: string,
};

export type {
  Player,
  PlayerID,
};
*/

const playerModel/*: Model<Player>*/ = nameModel('Player', modelObject({
  id: stringModel,
  displayName: stringModel,
}));

export {
  playerModel,
};
