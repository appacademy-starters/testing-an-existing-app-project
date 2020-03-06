const { expect } = require('chai');
const { mergeItems } = require('../merge-items');
describe("The mergeItems function", () => {
  const template = `
    <table>
      <tbody>
        <!-- Content here -->
      </tbody>
    </table>
  `;
  it("should return no TRs and no TDs for no items", () => {
    expect.fail('please write this test');
  });

  it("should return a single TR, four TDs, and a FORM for one uncompleted item", () => {
    expect.fail('please write this test');
  });

  it("should return a single TR, four TDs, and no FORM for one completed item", () => {
    expect.fail('please write this test');
  });

  it("should return three TRs for three items", () => {
    expect.fail('please write this test');
  });
});
