const {
  expect
} = require('chai');
const {
  mergeCategories
} = require('../merge-categories');

describe("mergeCategories()", () => {
  context("Using <li> tags", () => {
      const template = `
      <div>
        <ul>
          <!-- Content here -->
        </ul>
      </div>
    `;

    it("should return no <li>s for no categories", () => {
      //Todo
      //? arrange
      const categories = []

      //? act
      let mergedCategories = mergeCategories(template, categories, 'li')

      //? assert
      expect(mergedCategories).to.contain('<div>')
      expect(mergedCategories).to.contain('</div>')
      expect(mergedCategories).to.contain('<ul>')
      expect(mergedCategories).to.contain('</ul>')


      expect(mergedCategories).to.not.contain('<li>')
      expect(mergedCategories).to.not.contain('</li>')
      expect(mergedCategories).to.not.contain('<!-- Content here -->')
    });
    it("should return a single <li> for one category", () => {
      //? arrange

      const categories = ["test category"]

      //? act

      let mergedCategories = mergeCategories(template, categories, 'li')
      //? assert

      expect(mergedCategories).to.contain('<div>')
      expect(mergedCategories).to.contain('</div>')
      expect(mergedCategories).to.contain('<ul>')
      expect(mergedCategories).to.contain('</ul>')
      expect(mergedCategories).to.contain('<li>test category</li>')


      expect(mergedCategories).to.not.contain('<li></li>')
      expect(mergedCategories).to.not.contain('<!-- Content here -->')
    });
    it("should return an <li> for each category", () => {
      const categories = ['cat1', 'cat2', 'cat3']
      const mergedCategories = mergeCategories(template, categories, 'li')
      expect(mergedCategories).to.contain('<div>')
      expect(mergedCategories).to.contain('</div>')
      expect(mergedCategories).to.contain('<ul>')
      expect(mergedCategories).to.contain('</ul>')
      expect(mergedCategories).to.contain('<li>cat1</li>')
      expect(mergedCategories).to.contain('<li>cat2</li>')
      expect(mergedCategories).to.contain('<li>cat3</li>')
      expect(mergedCategories).to.not.contain('<li></li>')
      expect(mergedCategories).to.not.contain('<!-- Content here -->')
    });
  });


  context("using <option> tags", () => {
    const template = `
      <div>
        <select>
          <!-- Content here -->
        </select>
      </div>
    `;

    it("should return no <option>s for no categories", () => {
      const categories = []
      const mergedCategories = mergeCategories(template, categories, 'option')
      expect(mergedCategories).to.contain('<div>')
      expect(mergedCategories).to.contain('</div>')
      expect(mergedCategories).to.contain('<select>')
      expect(mergedCategories).to.contain('</select>')

      expect(mergedCategories).to.not.contain('<option>')
      expect(mergedCategories).to.not.contain('</option>')
      expect(mergedCategories).to.not.contain('<!-- Content here -->')
    });

    it("should return a single <option> for one category", () => {
      const categories = ['op1']
      const mergedCategories = mergeCategories(template, categories, 'option')
      expect(mergedCategories).to.contain('<div>')
      expect(mergedCategories).to.contain('</div>')
      expect(mergedCategories).to.contain('<select>')
      expect(mergedCategories).to.contain('</select>')
      expect(mergedCategories).to.contain('<option>op1</option>')

      expect(mergedCategories).to.not.contain('<!-- Content here -->')
    });

    it("should return an <option> for each category", () => {
      const categories = ['op1', 'op2', 'op3']
      const mergedCategories = mergeCategories(template, categories, 'option')
      expect(mergedCategories).to.contain('<div>')
      expect(mergedCategories).to.contain('</div>')
      expect(mergedCategories).to.contain('<select>')
      expect(mergedCategories).to.contain('</select>')
      expect(mergedCategories).to.contain('<option>op1</option>')
      expect(mergedCategories).to.contain('<option>op2</option>')
      expect(mergedCategories).to.contain('<option>op3</option>')
      expect(mergedCategories).to.not.contain('<!-- Content here -->')
    });
  });
});
