// // add to Local storage
// localStorage.setItem("name", "Binh Tom");

// // get value from local storage
// document.getElementById("demo").innerHTML = localStorage.getItem("name");
// let name = localStorage.getItem("name");
// console.log(name);

// // remove field
// // localStorage.removeItem("name");

// // parse && stringify (phan tich && xau chuoi)
// // array
// const myArr = ["foo", "bar", "foobar"];

// localStorage.setItem("myArr", myArr);

// // object
// const myObj = {
//   name: "Binh Tom",
//   job: "Developer",
//   tall: 178.6,
//   company: ["Stech", "MindX"],
//   area: {
//     city: "Ho Chi Minh",
//     country: "Viet Nam",
//   },
// };

// localStorage.setItem("myObj", myObj);

// const myObjStringify = JSON.stringify(myObj);

// localStorage.setItem("myObjStringify", myObjStringify);

// // const myObjParse = JSON.parse(myObjStringify);

// // document.getElementById("show").innerHTML = localStorage.getItem("myObjParse");
// // document.getElementById("show1").innerHTML = myObjParse.job;
// // document.getElementById("show2").innerHTML = myObjParse.area.city;

// // combine array && object
// const myObj1 = {
//   name: "Binh Tom1",
//   job: "Developer",
//   tall: 178.6,
// };

// const myObj2 = {
//   name: "Binh Tom2",
//   job: "Marketing",
//   tall: 170.6,
// };

// const myObj3 = {
//   name: "Binh Tom3",
//   job: "Sales",
//   tall: 172,
// };

// const myArrObj = [myObj1, myObj2, myObj3];

// console.log(myArrObj);

// const myArrObjFromLocalStorage = localStorage.setItem(
//   "myArrObj",
//   JSON.stringify(myArrObj)
// );
// console.log(myArrObjFromLocalStorage);

// const retrievedArrObjString = localStorage.getItem("myArrObj");
// console.log("retrievedArrObjString: ", retrievedArrObjString);

// const retrievedArrObjParse = JSON.parse(retrievedArrObjString);
// // console.log("retrievedArrObjParse: ", retrievedArrObjParse);
// document.getElementById("show2").innerHTML = retrievedArrObjParse[1].name;
