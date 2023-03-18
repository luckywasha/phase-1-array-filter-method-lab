// Code your solution here
const drivers = [
    { name: 'John', hometown: 'New York' },
    { name: 'Mike', hometown: 'Los Angeles' },
    { name: 'Sara', hometown: 'Chicago' },
    { name: 'Adam', hometown: 'San Francisco' },
    { name: 'Emily', hometown: 'Boston' }
  ];
  
  function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }
  
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }
  
  function matchName(drivers, query) {
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
  }