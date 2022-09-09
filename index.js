/* Your Code Here */

// * A 4-element Array of a `String`, `String`, `String`, and `Number`
// corresponding to a first name, family name, title, and pay rate per hour

function createEmployeeRecord(employee) {
  return {
    firstName: employee[0],
    familyName: employee[1],
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}

function createEmployeeRecords (employee) {
    
    return employee.map(data => createEmployeeRecord(data));
}

function createTimeInEvent(datestamp) {
  let [date, hour] = datestamp.split(' ');
  this.timeInEvents.push({
      type: 'TimeIn',
      hour: parseInt(hour),
      date: date
  });
  return this
}

function createTimeOutEvent(datestamp) {
  let [date, hour] = datestamp.split(' ');
  this.timeOutEvents.push({
      type: 'TimeOut',
      hour: parseInt(hour),
      date: date
  });
  return this
}

function hoursWorkedOnDate(date) {
  const inEvent = this.timeInEvents.find(inEvent => inEvent.date === date);
  const outEvent = this.timeOutEvents.find(outEvent => outEvent.date === date);
  return ((outEvent.hour - inEvent.hour) / 100)
}
function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.apply(this, [date]) * this.payPerHour
}

function calculatePayroll(employee) {
  let payroll = []
  employee.forEach(element => payroll.push(allWagesFor.call(element)))
  return payroll.reduce((a, b) => { return a + b })
}

function findEmployeeByFirstName(srcArray, targetName) {
  for (let i = 0; i < srcArray.length; i++) {
      if (srcArray[i].firstName === targetName) {
          return srcArray[i]
      }
  }
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};
