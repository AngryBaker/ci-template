import healthCheker from '../app';

test.each([
    [ {name: 'Маг', health: 90}, "healthy"],
    [ {name: 'Маг', health: 45}, "wounded"],
    [ {name: 'Маг', health: 12}, "critical"],
])("testing health status function with %o", (obj, expected) => {
    const result = healthCheker(obj);
    expect(result).toBe( expected);
});
