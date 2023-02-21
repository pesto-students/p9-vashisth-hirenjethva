const mathCalc = require('./calulator')

test("Sum of two number 5+4 = 9 ", () =>{
    expect(mathCalc.sum(5,4)).toBe(9);
}
); 

test("Minus of two number 5-4 = 1", () =>{
    expect(mathCalc.diff(5,4)).toBe(1);
}
);

test("Multiply of two number 5*4 = 20", () =>{
    expect(mathCalc.product(5,4)).toBe(20);
}
);

test("Divison of two number 5/5 = 1", () =>{
    expect(mathCalc.division(5,5)).toBe(1);
}
);

//--------------O/P
// > test
// > jest

//  PASS  excersise4/calculator.test.js
//   √ Sum of two number 5+4 = 9  (2 ms)
//   √ Minus of two number 5-4 = 1
//   √ Multiply of two number 5*4 = 20
//   √ Divison of two number 5/5 = 1 (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       4 passed, 4 total
// Snapshots:   0 total
// Time:        1.544 s
// Ran all test suites.

