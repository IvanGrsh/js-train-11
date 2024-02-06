// const set = new Set(["123", "123", "123", 123, null]);

// console.log(set);

const userIdList = new Set([12345, 76542, 65432, 59876]);

// console.log(userIdList);

// for (const value of userIdList) {
//   console.log(value);
// }

// userIdList.forEach((value, value2, set) => console.log(value));

// console.log(userIdList.size);

// //=================

// userIdList.add(12344);

// console.log(userIdList);
// console.log(userIdList.size);

// //=================

// userIdList.add(12346);

// console.log(userIdList);
// console.log(userIdList.size);

// //=================

// const result = userIdList.delete(12346);

// console.log(userIdList);
// console.log(userIdList.size);

// // console.log(result);

// //=================

// console.log(userIdList.has(12346));
// console.log(userIdList.has(12345));

// //=================

// userIdList.clear();
// console.log(userIdList);

// //=================

// const key = userIdList.keys();
// console.log(key);

// //=================

// const key = userIdList.values();
// console.log(key);

// //=================

// const key = userIdList.entries();
// console.log(key);

// //=================

// const entry = userIdList.entries();

// const obj = Object.fromEntries(entry);

// console.log(obj);

// //=================

// const valueList = userIdList.values();

// const arr = Array.from(valueList);

// console.log(arr);

// //=================

// const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

// const set = new Set(arr);

// const arr2 = [...set];

// console.log(arr2);

// // //=================

// const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

// const set = new Set(arr);

// const arr2 = Array.from(set.values());

// console.log(arr2);

// // //=================

// const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

// const set = new Set(arr);

// const arr2 = Array.from(set);

// console.log(arr2);

// // //=================

// const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

// const set = new Set(arr);

// const arr2 = [...set];

// console.log(arr2);

// //=================

// const categoryList = new Set();

// function addCategory(category) {
//   if (categoryList.has(category)) {
//     console.log("Ця категорія вже є");

//     return false;
//   }
//   categoryList.add(category);
//   return true;
// }
// console.log(addCategory("спорт"));
// console.log(addCategory("спорт"));
// console.log(addCategory("їжа"));

// //=================

const students = [
  { id: 1, name: "Marta", course: "Math" },
  { id: 2, name: "Jane", course: "Science" },
  { id: 3, name: "Jhon", course: "English" },
  { id: 4, name: "Adam", course: "Math" },
  { id: 5, name: "Sylvi", course: "Science" },
];

// const course = students.map((student) => student.course);

// console.log(course);

// const courseList = new Set(students.map((student) => student.course));

const courseList = new Set(students.map((student) => student.course));
console.log(Array.from(courseList));
