import { Dictionary, Request, Response } from "express-serve-static-core";
declare type WowServer = "Incendius";
declare type CrudOperations = "create" | "replace" | "update" | "delete";
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
export declare type DatabaseDriver<RecordType extends keyof RecordTypes> = {
    [crudOp in CrudOperations]?: DatabaseCrudOperation<RecordType>;
};
export declare type DatabaseCrudOperation<RecordType extends keyof RecordTypes> = (req: Request<Dictionary<string>>, res: Response) => RecordTypes[RecordType] | undefined;
export {};
