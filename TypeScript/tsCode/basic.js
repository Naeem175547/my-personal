// let age: number = 10;
// console.log(age);
// age = true;
// console.log(age);
// function add(a: number, b: number): string {
//   return a + b;
// }
// console.log(add(10, 20));
// let age = 23;
// console.log(age);
// age = false;
// let user: {
//     name: string;
//     age: number;
//     isAdmin: boolean;
// } = {
//     name: "Naeem",
//     age: 22,
//     isAdmin: false
// };
// console.log(obj);
// obj.name=20
let user = {
    name: "Naeem",
    age: 22,
};
// let fun: (a: number, b: number) => number = (a, b) => {
//   return a + b;
// };
// let id: number | string = 22;
// console.log(id);
// id = "22";
// console.log(id);
// let data: "abc" | "ced" | 10;
// data = "abc";
// console.log(data);
// enum Role {
//   ADMIN,
//   USER,
//   GUEST,
// }
// let role: Role = Role.USER;
// console.log(role);
// console.log(user?.address?.city);
function identity(value) {
    return value;
}
identity("Hello");
identity(100);
export {};
