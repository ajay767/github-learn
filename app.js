console.log('my function is making billion dollar in an hour!!');

class Payment {
  constructor(receipentDepartment, amountPaid) {
    this.receipentDepartment = receipentDepartment;
    this.amountPaid = amountPaid;
  }
}

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
