// 22.4 template string, multiple line string

const firstName = "Justin";
const lastName = "TimberLake";
const fullName = firstName + " " + lastName + " is a good boy";
console.log(fullName);

// with es6--- same output asbe
const fullName2 = `${firstName} ${lastName} is a good boy`
console.log(fullName2);

const multiline = " my name is arpita"
+ " i live in jashore\n"
+ " i am a good person\n";
console.log(multiline);

const multiline2 = `my name is arpita
i live in jashore
i am a good person.`
console.log(multiline2);