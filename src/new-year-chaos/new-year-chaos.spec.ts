import { minimumBribes } from "./new-year-chaos";

describe("minimumBribes", () => {
    it("should return the minimum number of bribes required to get the queue into its current state", () => {
      const q = [1, 2, 3, 5, 4];
      spyOn(console, "log");
      minimumBribes(q);
      expect(console.log).toHaveBeenCalledWith(1);
    });
  
    it("should log 'Too chaotic' if the queue configuration is not possible", () => {
      const q = [2, 1, 6, 3, 4, 5];
      spyOn(console, "log");
      minimumBribes(q);
      expect(console.log).toHaveBeenCalledWith("Too chaotic");
    });
  });
  