const greet = require('./greet');

describe('greet function', () => {
  test('should return greeting with name', () => {
    const result = greet('Ali');
    expect(result).toBe('Hello, Ali!');
  });

  test('should work with different names', () => {
    expect(greet('Ayşe')).toBe('Hello, Ayşe!');
    expect(greet('Mehmet')).toBe('Hello, Mehmet!');
    expect(greet('Fatma')).toBe('Hello, Fatma!');
  });

  test('should handle single character names', () => {
    expect(greet('A')).toBe('Hello, A!');
  });

  test('should handle names with spaces', () => {
    expect(greet('Ali Veli')).toBe('Hello, Ali Veli!');
  });

  test('should handle names with special characters', () => {
    expect(greet('Ömer')).toBe('Hello, Ömer!');
    expect(greet('Çağla')).toBe('Hello, Çağla!');
  });

  test('should handle empty string', () => {
    expect(greet('')).toBe('Hello, !');
  });

  test('should handle numbers as names', () => {
    expect(greet('123')).toBe('Hello, 123!');
  });

  test('should handle long names', () => {
    const longName = 'Abdurrahman';
    expect(greet(longName)).toBe('Hello, Abdurrahman!');
  });
});