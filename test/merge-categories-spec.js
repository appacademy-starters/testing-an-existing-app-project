const { expect } = require('chai');
const { mergeCategories } = require('../merge-categories');

describe("The mergeCategories function", () => {
  describe("For lists", () => {
    const template = `
      <div>
        <ul>
          <!-- Content here -->
        </ul>
      </div>
    `;

    it("should return no LIs for no categories", () => {
      expect.fail('please write this test');
    });

    it("should return a single LI for one categories", () => {
      expect.fail('please write this test');
    });

    it("should return an LI for each category", () => {
      expect.fail('please write this test');
    });
  });

  describe("For selects", () => {
    const template = `
      <div>
        <select>
          <!-- Content here -->
        </select>
      </div>
    `;

    it("should return no OPTIONs for no categories", () => {
      expect.fail('please write this test');
    });

    it("should return a single OPTION for one categories", () => {
      expect.fail('please write this test');
    });

    it("should return an OPTION for each category", () => {
      expect.fail('please write this test');
    });
  });
});
