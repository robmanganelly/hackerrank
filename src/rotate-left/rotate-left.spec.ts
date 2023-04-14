import { rotLeft } from "./rotate-left";

describe("rotLeft", () => {
    it("should return the rotated array", () => {
      expect(rotLeft([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5, 1, 2]);
      expect(rotLeft([1, 2, 3], 1)).toEqual([2, 3, 1]);
      expect(rotLeft([1, 2, 3, 4], 3)).toEqual([4, 1, 2, 3]);
      expect(rotLeft([1], 0)).toEqual([1]);
    });
  
    it("should not modify the original array", () => {
      const input = [1, 2, 3, 4, 5];
      rotLeft(input, 2);
      expect(input).toEqual([1, 2, 3, 4, 5]);
    });
  });
  
