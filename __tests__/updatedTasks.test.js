const updatedTasks = require("../katas/updatedTasks")

describe('updatedTasks', () => {
  test('should return an empty object when no tasks are provided', () => {
    const person = { name: 'Anat', tasks: [] };
    const result = updatedTasks(person);
    expect(result).toEqual({ name: 'Anat', tasks: [] });
  });

  test('should add new tasks to the existing tasks', () => {
    const person = { name: 'Anat', tasks: ['feed Schnitzel', 'Go to pottery'] };
    const result = updatedTasks(person, 'read books', 'tidy room');
    expect(result).toEqual({
      name: 'Anat',
      tasks: ['feed Schnitzel', 'Go to pottery', 'read books', 'tidy room']
    });
  });

  test('should return the same person object if no new tasks are provided', () => {
    const person = { name: 'Anat', tasks: ['feed Schnitzel', 'Go to pottery'] };
    const result = updatedTasks(person);
    expect(result).toEqual(person);
  })

  test("Check if the original array is unchanged / not been mutated", function(){
    // arrange
    const person = { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] }
    const updatedPerson = { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] }
    // act
    updatedTasks(person)
    // assert
    expect(person).toEqual(updatedPerson)
})
});


// This function should take as its arguments:

// A person object (with name and tasks properties).
// One or more new tasks.
// The function should return a new person object with a new tasks property. The tasks property from the input object should not be mutated.

// updateTasks(
//   { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] },
//   "read books",
//   "tidy room"
// );

/* 
should return 

{
  name: 'Anat',
  tasks: ['feed Schnitzel', 'Go to pottery', 'read books', 'tidy room']
}
*/