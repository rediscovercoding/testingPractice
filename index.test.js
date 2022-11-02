import {
  add,
  capitalize,
  reverse,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./index";

test("addition test", () => expect(add(2, 3)).toBe(5));

test("capitalize", () => expect(capitalize("orange")).toBe("Orange"));

test("reverse", () => expect(reverse("morty")).toBe("ytrom"));

test("Calculate-multiply", () => expect(calculator.multiply(2, 3)).toBe(6));

test("ceaser-Cipher", () => expect(caesarCipher("cbd Efg!")).toBe("dce Fgh!"));

test("Analyzed Array", () =>
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  }));
