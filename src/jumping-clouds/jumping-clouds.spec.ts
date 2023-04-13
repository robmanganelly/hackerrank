import { jumpingOnClouds } from "./jumping-clouds";

describe('jumpingOnClouds', () => {
      
    it('should return 1 for an array with two clouds', () => {
      expect(jumpingOnClouds([0, 0])).toBe(1);
    });
  
    it('should return 1 for an array with three clouds', () => {
      expect(jumpingOnClouds([0, 0, 0])).toBe(1);
      expect(jumpingOnClouds([0, 1, 0])).toBe(1);
    });
  
    it('should return the correct number of leaps for arrays with more than three clouds', () => {
      expect(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0])).toBe(3);
      expect(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])).toBe(4);
      expect(jumpingOnClouds([0, 0, 0, 0, 1, 0])).toBe(3);
    });
  });
  
