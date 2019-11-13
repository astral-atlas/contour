// @flow strict
import {
  nameModel,
  stringModel,
  modelObject,
  modelLiteral,
  modelDisjointUnion,
} from '@lukekaalim/model';
/*::
import type { Model } from '@lukekaalim/model'; 
*/

/*::
export type AtlasSRDNodeID = string;
export type AtlasSRDNode =
  | AtlasSRDTextNode
  | AtlasSRDEmptyNode

export type AtlasSRDTextNode = {
  id: AtlasSRDNodeID,
  type: 'text',
  content: string,
};

export type AtlasSRDEmptyNode = {
  id: AtlasSRDNodeID,
  type: 'empty',
  content: AtlasSRDNodeID,
};
*/

const textNodeModel/*: Model<AtlasSRDTextNode>*/ = nameModel('Atlas SRD Text Node', modelObject({
  type: modelLiteral('text'),
  id: stringModel,
  content: stringModel,
}));

const emptyNodeModel/*: Model<AtlasSRDEmptyNode>*/ = nameModel('Atlas SRD Empty Node', modelObject({
  type: modelLiteral('empty'),
  id: stringModel,
  content: stringModel,
}));

const nodeModel/*: Model<AtlasSRDNode>*/ = nameModel('Atlas SRD Node', modelDisjointUnion('type', {
  empty: emptyNodeModel,
  text: textNodeModel,
}));

export {
  nodeModel,
  textNodeModel,
  emptyNodeModel
};