import { minimumSwaps } from "./minimum-swaps";

describe("minimumSwaps", () => {
  it("should return the minimum number of swaps to sort the array", () => {
    expect(minimumSwaps([4, 3, 1, 2])).toBe(3);
    expect(minimumSwaps([2, 3, 4, 1, 5])).toBe(3);
    expect(minimumSwaps([1, 3, 5, 2, 4, 6, 7])).toBe(3);
  });
});