class Person {
  constructor(name, age, sex, occupation, birthday) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.occupation = occupation;
    this.birthday = birthday;
  }
}

const person1 = new Person("Peter", 20, "M", "Developer", "21st March");
console.log(person1);
