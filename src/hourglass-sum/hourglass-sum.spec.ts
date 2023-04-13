import { hourglassSum } from "./hourglass-sum";

describe("hourglassSum", () => {
    it("returns the correct sum for a 3x3 array", () => {
      const arr = [
        [1, 1, 1],
        [0, 1, 0],
        [1, 1, 1]
      ];
      expect(hourglassSum(arr)).toBe(7);
    });
  
    it("returns the correct sum for a 4x4 array", () => {
      const arr = [
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 1]
      ];
      expect(hourglassSum(arr)).toBe(7);
    });
  
    it("returns the correct sum for a 5x5 array", () => {
      const arr = [
        [1, 1, 1, 0, 0],
        [0, 1, 0, 0, 0],
        [1, 1, 1, 0, 0],
        [0, 0, 0, 1, 0],
        [1, 1, 1, 0, 0]
      ];
      expect(hourglassSum(arr)).toBe(7);
    });
  });
  