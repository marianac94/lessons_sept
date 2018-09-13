// console.log('hello');
//
// Scope is the restriction of where in your code that you can access or use variables
//
//
// Block scope
// {
// // anything between two brakets
//   const item = ' book';
//     console.log('item');
// // Let and const are only available in the block that they are used
// }
//
// const item = 'meatball';
// const setItem = () => {
//   return item;
// }
//
// console.log(setItem());
//
//
// Local scope  <-- this is what we're going to use!
// for(let i = 0; i < 10; i++){
// }
// console.log(i, ' can I access I outside the loop');
// this CANT access the loop because 'let' is only for local scopes, it works only inside the brakets and only apply the changes that its inside
//
//
//
// Global scope  <-- this is not the way we're gonna do it
// for(var i = 0; i < 10; i++){
// }
// console.log(i, ' can I access I outside the loop');
// this CAN access the loop because 'var' is for accesing global scopes, it works with inside and global (ouside) brakets
//
//
// Global scope example=
// const checkSquare = (num) => {
//   if(Math.sqrt(num) % 1 === 0){
//   return true;
// } else {
//   return false;
// }
// };
// console.log(checkSquare(49));
