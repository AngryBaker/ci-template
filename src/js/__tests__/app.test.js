import healthCheker from '../app';

test('should health status be healthy', () => {
  const result = healthCheker({name: 'Маг', health: 90});

  expect(result).toBe("healthy");
});

test('should health status be wounded', () => {
  const result = healthCheker({name: 'Маг', health: 45});

  expect(result).toBe("wounded");
});

test('should health status be critical', () => {
  const result = healthCheker({name: 'Маг', health: 12});

  expect(result).toBe("critical");
});