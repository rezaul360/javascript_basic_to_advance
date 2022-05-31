let person = {
  name: "Rezaul Karim",
  email: "rezaulkarim@gmail.com",
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};

let {
  name,
  email,
  address: { city, country },
} = person;

console.log(name, email, city, country);

let arr = [1, 2, 3, 4, 5];

let [first, second, , , last] = arr;
console.log(first, second, last);
