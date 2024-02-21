const calculator = {
  add: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Invalid arguments - must be numbers');
    }

    return a + b;
  },

  subtract: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Invalid arguments - must be numbers');
    }

    return a - b;
  },

  multiply: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Invalid arguments - must be numbers');
    }

    return a * b;
  },

  divide: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Invalid arguments - must be numbers');
    }

    if (b === 0) {
      throw new Error('Division by zero');
    }

    return a / b;
  },
};

export default calculator;
