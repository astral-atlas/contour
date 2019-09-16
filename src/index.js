// @flow strict
/*::
import type { Model } from '@lukekaalim/model';
*/
import { nameModel, stringModel, numberModel, modelObject } from '@lukekaalim/model';

/*::
export type Session = {
  id: string,
  title: string,
  startTime: number,
};
*/

export const sessionModel/*: Model<Session>*/ = nameModel('Session', modelObject({
  id: stringModel,
  title: stringModel,
  startTime: numberModel,
}));