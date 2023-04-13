import { repeatedString } from "./repeated-string";

describe("repeatedString", () => {
    it("should return the correct result when s has only one character and it is 'a'", () => {
      const s = "a";
      const n = 10;
      expect(repeatedString(s, n)).toEqual(10);
    });
  
    it("should return the correct result when s has only one character and it is not 'a'", () => {
      const s = "b";
      const n = 10;
      expect(repeatedString(s, n)).toEqual(0);
    });
  
    it("should return the correct result when s contains only 'a's", () => {
      const s = "aaa";
      const n = 10;
      expect(repeatedString(s, n)).toEqual(10);
    });
  
    it("should return the correct result when s contains no 'a's", () => {
      const s = "bbb";
      const n = 10;
      expect(repeatedString(s, n)).toEqual(0);
    });
  
    it("should return the correct result when s contains both 'a's and other characters", () => {
      const s = "aba";
      const n = 10;
      expect(repeatedString(s, n)).toEqual(7);
    });
  
    it("should return the correct result when s is longer than n", () => {
      const s = "aba";
      const n = 2;
      expect(repeatedString(s, n)).toEqual(1);
    });
  });
  