declare type WowServer = "Incendius";
declare type CrudOperations = "create" | "replace" | "update" | "delete";
declare type QueryOperations = "get" | "list";
export declare type RecordTypes = {
    item: WowItem;
    character: WowCharacter;
};
export declare type WowItem = {
    id: string;
    count: number;
    location: WowCharacter;
};
export declare type WowCharacter = {
    characterName: string;
    server: WowServer;
};
export declare type DatabaseCrudOperationMap<RecordType extends keyof RecordTypes> = {
    [crudOp in CrudOperations]?: DatabaseCrudOperation<RecordType>;
};
export declare type DatabaseQueryOperationMap<RecordType extends keyof RecordTypes> = {
    [queryOp in QueryOperations]?: DatabaseQueryOperation<RecordType>;
};
export declare type DatabaseCrudOperation<RecordType extends keyof RecordTypes> = (input?: Partial<RecordTypes[RecordType]>) => Promise<RecordTypes[RecordType] | undefined>;
export declare type DatabaseQueryOperation<RecordType extends keyof RecordTypes> = (input?: Partial<RecordTypes[RecordType]>) => Promise<RecordTypes[RecordType][]>;
export {};
