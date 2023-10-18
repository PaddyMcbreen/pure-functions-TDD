const cloneObjects = require("../katas/cloneObjects")

describe('cloneObjects', () => {
  test('should return an empty object when given an empty source object', () => {
    const source = {};
    const target = {};
    cloneObjects(target, source);

    expect(target).toEqual({});
  });

  test('should clone an object with primitive properties', () => {
    const source = { name: 'John', age: 30, city: 'New York' };
    const target = {};
    cloneObjects(target, source);

    expect(target).toEqual(source);
  });

  test('should clone an object with nested objects', () => {
    const source = { person: { name: 'Alice', age: 25 }, city: 'Los Angeles' };
    const target = {};
    cloneObjects(target, source);

    expect(target).toEqual(source);
  });

  test('should clone an object with arrays', () => {
    const source = { fruits: ['apple', 'banana', 'cherry'], color: 'red' };
    const target = {};
    cloneObjects(target, source);

    expect(target).toEqual(source);
  });

  test('should clone an object with functions', () => {
    const source = { greet: () => 'Hello', age: 40 };
    const target = {};
    cloneObjects(target, source);

    expect(target).toEqual(source);
  });

});





// ---- Question Desc ---- //

// This function should take as its arguments:

// A target object (values are only primitives).
// A source object (values are only primitives).
// The function should return the target object with all the key-value pairs from the source object copied over. This function should mutate the target object. This function has identical functionality to Object.assign().

// Note: make sure you are testing to check the original object has been mutated!

// --------------------- //