const { expect } = require('chai');
const { getValueFromBody } = require('../get-value-from-body');

describe("The getValueFromBody function", () => {
  it('returns an empty string for an empty body', () => {
    const body = "";
    const key = "notThere";
    const res = getValueFromBody(key)
    expect(res).to.eql(body);
  });

  it('returns an empty string for a body without the key', () => {
    const body = "name=Bess&age=29&job=Boss";
    const key = "notThere";
    const res = getValueFromBody(body)
    expect(res).to.eql('');
  });

  it('returns the value of the key in a simple body', () => {
    const body = "name=Bess";
    const key = "name";
   const res = getValueFromBody(body, key)
    expect(res).to.eql('Bess');
  });

  it('returns the value of the key in a complex body', () => {
    const body = "name=Bess&age=29&job=Boss";
    const key = "name";
    const res = getValueFromBody(body, key)

    expect(res).to.eql('Bess');
  });

  it('decodes the return value of URL encoding', () => {
    const body = "name=Bess&age=29&job=Boss&level=Level%20Thirty-One";
    const key = "level";
    const res = getValueFromBody(body, key)
    expect(res).to.eql('Level Thirty-One');
  });
});
