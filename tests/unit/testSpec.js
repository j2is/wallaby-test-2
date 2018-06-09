let test = require('../../src/js/modules/test');

describe('test model', () => {

  beforeEach(() =>{
    this.test = new test();
  });

  it('should add numbers', ()=> {
    expect(this.test.number).toBe(1);
  });
});
