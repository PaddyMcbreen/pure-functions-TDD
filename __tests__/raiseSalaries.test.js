const raiseSalaries = require("../katas/raiseSalaries")

describe('raiseSalaries', function() {
    test("If passed an empty object, return an empty object", function() {
        expect(raiseSalaries([])).toEqual([]);
    });

    test('Should increase salaries by a positive raise', () => {
        // act
        const salaries = [{ name: "Alice", salary: 3000 }, { name: "Bob", salary: 2000 }, { name: "Vel", salary: 4500 }];
        
        // arrange
        const raise = 10;
        const result = raiseSalaries(salaries, raise);

        // assert
        expect(result).toEqual([{ name: 'Alice', salary: 3300 }, { name: 'Bob', salary: 2200 }, { name: 'Vel', salary: 4950 }]);
    });

    test('Should decrease salaries by a negative raise', function() {
        // act
        const salaries2 = [{ name: "Alice", salary: 3000 }, { name: "Bob", salary: 2000 }, { name: "Vel", salary: 4500 }];

        // arrange
        const raise2 = -5;
        const result2 = raiseSalaries(salaries2, raise2);

        // assert
        expect(result2).toEqual([{ name: 'Alice', salary: 2850 }, { name: 'Bob', salary: 1900 }, { name: 'Vel', salary: 4275 }]);
    });

    test('Should not change salaries with zero raise', function() {
        // act
        const salaries4 = [{ name: "Alice", salary: 3000 }, { name: "Bob", salary: 2000 }, { name: "Vel", salary: 4500 }];

        // arrange
        const raise4 = 0;
        const result4 = raiseSalaries(salaries4, raise4);

        // assert
        expect(result4).toEqual(salaries4);
    });
});
