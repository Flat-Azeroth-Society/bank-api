import { Dictionary, Request, Response } from "express-serve-static-core";

type WowServer = "Incendius";

type CrudOperations = "create" | "replace" | "update" | "delete";

type QueryOperations = "get" | "list";

export type RecordTypes = {
  item: WowItem;
  character: WowCharacter;
};

export type WowItem = {
  id: string;
  count: number;
  location: WowCharacter;
};

export type WowCharacter = {
  characterName: string;
  server: WowServer;
};

export type DatabaseDriver<RecordType extends keyof RecordTypes> = {
  [crudOp in CrudOperations]?: DatabaseCrudOperation<RecordType>;
};

export type DatabaseCrudOperation<RecordType extends keyof RecordTypes> = (
  req: Request<Dictionary<string>>,
  res: Response
) => RecordTypes[RecordType] | undefined;
