console.log('my function is making billion dollar in an hour!!'); //this is my conflict arrising commit

//this is payment method handler
class Payment {
  constructor(receipentDepartment, amountPaid) {
    this.receipentDepartment = receipentDepartment;
    this.amountPaid = amountPaid;
  }
}

//this is new student admission handler
class Student {
  constructor(name, birthYear, standard) {
    this.name = name;
    this.birthYear = birthYear;
    this.standard = standard;
    this.feePaid = 0;
    this.paymentHistory = [];
  }

  payFee(amount, paidTo) {
    const receipt = new Payment(amount, paidTo);
    this.paymentHistory.push(receipt);
    this.feePaid += amount;
  }
}

//this is new teacher apointer
class Teacher {
  constructor(name, department, experience) {
    this.name = name;
    this.department = department;
    this.experience = experience;
  }
}
