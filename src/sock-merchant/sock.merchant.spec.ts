import { sockMerchant } from "./sock-merchant";

describe("sockMerchant", () => {



    it("returns 0 when given an empty array", () => {
      expect(sockMerchant(0, [])).toEqual(0);
    });
  
    it("returns 0 when given an array of unique elements", () => {
      expect(sockMerchant(4, [1, 2, 3, 4])).toEqual(0);
    });
  
    it("returns the correct number of pairs when given an array of pairs", () => {
      expect(sockMerchant(6, [1, 2, 1, 2, 1, 2])).toEqual(2);
    });
  
    it("returns the correct number of pairs when given an array with extra elements", () => {
      expect(sockMerchant(7, [1, 2, 1, 2, 1, 2, 3])).toEqual(2);
    });
  
    it("returns the correct number of pairs when given an array with multiple pairs", () => {
      expect(sockMerchant(8, [1, 2, 1, 2, 1, 2, 3, 4, 4])).toEqual(3);
    });
  });
  