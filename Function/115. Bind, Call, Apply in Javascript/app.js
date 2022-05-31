function myFunc(c, d) {
  //console.log(this);
  console.log(this.a + this.b + c + d);
}

// myFunc.call({ a: 50, b: 100 }, 10, 20);
// myFunc.apply({ a: 100, b: 50 }, [30, 10]);
const testBind = myFunc.bind({ a: 10, b: 20 }, 5, 15);
testBind();
