// @flow strict
import {
  nameModel,
  stringModel,
  modelObject,
  modelArray,
  modelDisjointUnion,
  modelLiteral
} from '@lukekaalim/model';
/*::
import type { Model } from '@lukekaalim/model'; 
import type { DialogueCharacterID } from './characters';
import type { AtlasSRDNodeID } from './text';
*/

/*::
type ChapterID = string;
type Chapter = {
  id: ChapterID,
  title: string,
  events: ChapterEventID[],
};
*/

const chapterModel/*: Model<Chapter>*/ = nameModel('Chapter', modelObject({
  id: stringModel,
  title: stringModel,
  events: modelArray(stringModel),
}));

/*::
type ChapterEventID = string;

type ChapterPageEvent = {
  id: ChapterEventID,
  type: 'page',
  subEvents: ChapterEventID[],
};

type ChapterDialogueEvent = {
  id: ChapterEventID,
  type: 'dialogue',
  speaker: DialogueCharacterID,
  dialogue: AtlasSRDNodeID,
};

type ChapterNarrativeEvent = {
  id: ChapterEventID,
  type: 'narrative',
  dialogue: AtlasSRDNodeID,
};

type ChapterPlayerInputEvent = {
  id: ChapterEventID,
  type: 'player-input',
};
*/

const pageModel/*: Model<ChapterPageEvent>*/ = nameModel('Chapter Page Event', modelObject({
  id: stringModel,
  type: modelLiteral('page'),
  subEvents: modelArray(stringModel),
}));

const dialogueModel/*: Model<ChapterDialogueEvent>*/ = nameModel('Chapter Dialogue Event', modelObject({
  id: stringModel,
  type: modelLiteral('dialogue'),
  speaker: stringModel,
  dialogue: stringModel,
}));

const narrativeModel/*: Model<ChapterNarrativeEvent>*/ = nameModel('Chapter Narrative Event', modelObject({
  id: stringModel,
  type: modelLiteral('narrative'),
  dialogue: stringModel,
}));

const playerInputModel/*: Model<ChapterPlayerInputEvent>*/ = nameModel('Chapter Player Input Event', modelObject({
  id: stringModel,
  type: modelLiteral('player-input'),
}));

/*::
type ChapterEvent =
  | ChapterDialogueEvent
  | ChapterNarrativeEvent
  | ChapterPageEvent
  | ChapterPlayerInputEvent
*/

const chapterEventModel/*: Model<ChapterEvent>*/ = nameModel('ChapterEvent', modelDisjointUnion('type', {
  'page': pageModel,
  'dialogue': dialogueModel,
  'narrative': narrativeModel,
  'player-input': playerInputModel,
}));

export {
  // A Chapter
  chapterModel,
  // Chapter Events in general
  chapterEventModel,
  // Specific Chapter Events
  pageModel,
  dialogueModel,
  narrativeModel,
  playerInputModel,
}