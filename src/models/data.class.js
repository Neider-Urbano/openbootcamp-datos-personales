import { Age } from "./levels.enum";
class Data {
  name = "";
  lastname = "";
  age = Age.Max;
  email = "";
  connect = false;
  constructor(name, lastname, age, email, conect) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.age = age;
    this.connect = conect;
  }
}

export default Data;
