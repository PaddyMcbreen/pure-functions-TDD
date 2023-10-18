const calculateConfectioneryCost = require("../katas/calculateConfectioneryCost")

  describe("testing the functionality of the function calculateConfectioneryCost", () => {
    test("should return an empty array if passed an empty array", () => {
      expect(calculateConfectioneryCost([])).toEqual([]);
    });


    test("should return a new array with the updated objects", () => {
        // act
        const input = [
          {
            name: "Celeb1",
            purchaseToday: { costPerItem: 2, amountBought: 3 },
            yearlyCumulativeSpend: "£100",
          },
        ];
        // arrange
        const result = calculateConfectioneryCost(input);

        //assert
        expect(result).not.toBe(input);
      });
  
    test("should calculate the yearly confectionery cost", () => {
      const input = [
        {
          name: "Celeb1",
          purchaseToday: { costPerItem: 2, amountBought: 3 },
          yearlyCumulativeSpend: "£100",
        },
      ];
  
      const expectedOutput = [
        { name: "Celeb1", yearlyCumulativeSpend: "£106" },
      ];
  
      const result = calculateConfectioneryCost(input);
      expect(result).toEqual(expectedOutput);
    });
  
  
    test("should not mutate the original array", () => {
      const input = [
        {
          name: "Celeb1",
          purchaseToday: { costPerItem: 2, amountBought: 3 },
          yearlyCumulativeSpend: "£100",
        },
      ];
  
      const originalInput = [...input]; // Create a copy of the input
  
      const result = calculateConfectioneryCost(input);
  
      // Ensure the original input array is not mutated
      expect(result).not.toBe(originalInput);
      expect(input).toEqual(originalInput);
    });
  });
  

// ---- TESTS ---- //
// return an empty array if passed an empty array
// should calculate the yearlyconfectionerycost
// return a new array with the new objects
// should not mutate the original array



// ---- To-Do ---- //

// Write a function that takes an array of pop star objects with information about the amount they have spent so far this year on confectionery at the cinema, and how much they have spent on today's visit. It should return a new array of new objects with a property for the pop star's name and the yearlyCumulativeSpend property updated to include today's costs. 

// --------------- //


// amount bought * price + CumulativeSpend (something like that)


// This:
// {
//     name: "Beyonce Bowls",
//     yearlyCumulativeSpend: "£44",
//     purchaseToday: {
//       item: "White mice",
//       costPerItem: "£3",
//       amountBought: 17,
//     }

// Should become this:
// {
//     name: 'Beyonce Bowls',
//     yearlyCumulativeSpend: £95
// },