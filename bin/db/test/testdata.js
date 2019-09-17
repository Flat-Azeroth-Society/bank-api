"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testFaker = {
    characterName: "faker",
    server: "Incendius",
};
var testRudy = {
    characterName: "Rhona",
    server: "Incendius",
};
var testJoe = {
    characterName: "Dinggratzer",
    server: "Incendius",
};
exports.TestItemData = [
    { id: "foo", count: 69, location: testFaker },
    { id: "foo", count: 420, location: testRudy },
    { id: "asdf21", count: 3, location: testJoe },
    { id: "qwerasdf", count: 2, location: testFaker },
    { id: "baz", count: 42, location: testRudy },
];
exports.TestCharacterData = [testFaker, testJoe, testRudy];
//# sourceMappingURL=testdata.js.map