/*

var product = [
  {
    name: "iphone 7",
    price: 1000000,
    quatity: 2,
    discount: false,
  },
  {
    name: "iphone 8",
    price: 2000000,
    quatity: 1,
    discount: false,
  },
  {
    name: "iphone 10",
    price: 5000000,
    quatity: 3,
    discount: true,
  },
];

// tính tổng đơn hàng
// tính thêm discount: giảm giá 10%

var total = product.reduce(
  (a, b) => {
    let money = b.price * b.quatity;
    if (b.discount) {
      money *= 0.9;
    }
    return {
      d: a.d + money,
      e: a.e + b.quatity,
    };
  },
  { d: 0, e: 0 }
);

console.log(total);

var person = {
  name: "duc",
  phone: {
    name: "iphone 7",
    price: 1000,
  },
};

var {
  phone: { name },
} = person;

console.log(name);

*/

// tính tổng số quần và áo đã bán ra
// và được giảm giá 10%
// in ra lần lượt từng cái 1

/*
var products = [
  {
    name: "iphone 9",
    price: 2000000,
    quantity: 2,
    discount: false,
  },
  {
    name: "iphone 8",
    price: 1500000,
    quantity: 1,
    discount: false,
  },
  {
    name: "iphone 7",
    price: 1000000,
    quantity: 2,
    discount: true,
  },
  {
    name: "iphone X",
    price: 3000000,
    quantity: 3,
    discount: true,
  },
];

var result = products.reduce(
  ({ totalPhone, totalQuantity }, { quantity, price, discount }) => {
    let money = price * quantity;
    if (discount) {
      money *= 0.9;
    }
    return {
      totalPhone: totalPhone + money,
      totalQuantity: totalQuantity + quantity,
    };
  },
  { totalPhone: 0, totalQuantity: 0 }
);

console.log(result);
*/

//===============================================================================
/*
var lightIfon = true;

var messgee = lightIfon ? "đèn sáng" : "đèn tối";

var person1 = {
  name: "đức",
  age: 21,
  phone: {
    name: "iphone 7",
  },
};

var person2 = { ...person1, phone: { ...person1.phone } };
console.log(person2);
*/
