function updatedTasks(person, ...newTasks) {

    if (person.length === 0) return {}

    const updatedPerson = {
      name: person.name,
      tasks: [...person.tasks, ...newTasks]
    };
  
    return updatedPerson;
  }

  

module.exports = updatedTasks;