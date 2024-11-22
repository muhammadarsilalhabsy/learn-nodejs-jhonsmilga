module.exports.items = ["basketball", "t-shirt", "toaster"];
const person = {
  name: "my-simple-name",
};
module.exports.singlePerson = person;

console.log(module);

/*
the result should be like this:
exports: {
    items: [ 'basketball', 't-shirt', 'toaster' ],
    singlePerson: { name: 'my-simple-name' }
  }, 
*/
