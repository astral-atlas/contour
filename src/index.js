// @flow strict
/*::
import type { Model } from '@lukekaalim/model';
*/
import { nameModel, stringModel, numberModel, modelObject, modelOptional } from '@lukekaalim/model';

/*::
export type LocationID = string;
export type Location = {
  id: LocationID,
  name: string,
};

export type SessionID = string;
export type Session = {
  id: SessionID,
  title: string,
  startTime: number,
  startLocation: null | LocationID,
};
*/

export const locationIdModel/*: Model<LocationID>*/ = nameModel('LocationID', stringModel);
export const locationModel/*: Model<Location>*/ = nameModel('Location', modelObject({
  id: locationIdModel,
  name: stringModel,
}));

export const seesionIdModel/*: Model<SessionID>*/ = nameModel('SessionID', stringModel);
export const sessionModel/*: Model<Session>*/ = nameModel('Session', modelObject({
  id: seesionIdModel,
  title: stringModel,
  startTime: numberModel,
  startLocation: modelOptional(locationIdModel),
}));