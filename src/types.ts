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

export type DatabaseCrudOperationMap<RecordType extends keyof RecordTypes> = {
  [crudOp in CrudOperations]?: DatabaseCrudOperation<RecordType>;
};

export type DatabaseQueryOperationMap<RecordType extends keyof RecordTypes> = {
  [queryOp in QueryOperations]?: DatabaseQueryOperation<RecordType>;
};

export type DatabaseCrudOperation<RecordType extends keyof RecordTypes> = (
  input?: Partial<RecordTypes[RecordType]>
) => Promise<RecordTypes[RecordType] | undefined>;

export type DatabaseQueryOperation<RecordType extends keyof RecordTypes> = (
  input?: Partial<RecordTypes[RecordType]>
) => Promise<RecordTypes[RecordType][]>;
