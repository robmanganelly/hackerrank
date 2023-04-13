import { countingValleys } from "./counting-valleys";

describe("countingValleys", () => {
  it('returns 1 for 8 steps "UDDDUDUU"', () => {
    expect(countingValleys(8, "UDDDUDUU")).toEqual(1);
  });

  it('returns 2 for 12 steps "DDUUDDUUDDUU"', () => {
    expect(countingValleys(12, "DDUUDDUUDDUU")).toEqual(3);
  });

  it('returns 0 for 20 steps "UUUUUUUUUDDDDDDDDDD"', () => {
    expect(countingValleys(20, "UUUUUUUUUUDDDDDDDDDD")).toEqual(0);
  });

  it('returns 0 for 14 steps "UUUUDDDDUUUUDDDD"', () => {
    expect(countingValleys(14, "UUUUDDDDUUUUDDDD")).toEqual(0);
  });
});
