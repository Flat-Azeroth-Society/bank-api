import { DatabaseCrudOperation, DatabaseQueryOperation } from "../../types";
import { TestItemData } from "./testdata";

export const getItem: DatabaseQueryOperation<"item"> = async item =>
  TestItemData.filter(i => !!item && !!item.id && i.id === item.id);
