import { WowItem, WowCharacter } from "../../types";

const testFaker: WowCharacter = {
  characterName: "faker",
  server: "Incendius",
};

const testRudy: WowCharacter = {
  characterName: "Rhona",
  server: "Incendius",
};

const testJoe: WowCharacter = {
  characterName: "Dinggratzer",
  server: "Incendius",
};

export const TestItemData: WowItem[] = [
  { id: "foo", count: 69, location: testFaker },
  { id: "foo", count: 420, location: testRudy },
  { id: "asdf21", count: 3, location: testJoe },
  { id: "qwerasdf", count: 2, location: testFaker },
  { id: "baz", count: 42, location: testRudy },
];

export const TestCharacterData: WowCharacter[] = [testFaker, testJoe, testRudy];
