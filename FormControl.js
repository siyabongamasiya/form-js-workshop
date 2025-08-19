
export default class FormControl {
  constructor(num1, email) {
    this.num1 = num1;
    this.email = email;
  }

  submitHandler() {
    if (this.checkIsNotNumber(this.num1) || !this.isValidEmail()) {
      return false;
    } else {
      alert(`Success:number is ${this.num1} and email is ${this.email}`);
      this.setEmail()
      return true;
    }
  }

  checkIsNotNumber(number) {
    return isNaN(number) || !number;
  }

  isValidEmail() {
    return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(this.email);
  }
}