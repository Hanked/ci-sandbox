QUnit.module('General');

QUnit.test("isDivisibleBy cases", function(assert) {
    // fail if we do not make 8 assertions
    assert.expect(8);

    // extract function call in to a function that does the evaluation/assertion
    function divide(a, b, expected) {
        assert.equal(Lib.isDivisibleBy(a, b), expected);
    }

    // call divide function for each test case
    divide(50, 10, true);
    divide(50, 5, true);
    divide(99, 9, true);
    divide(20, 5, true);
    divide(56, 8, true);
    divide(36, 6, true);
    divide(60, 1, true);
    divide(99, 10, false);
    divide(100, 3, false);
    divide(5, 0, "Cannot divide by 0");
});

QUnit.test("isPositive cases", function(assert) {
    assert.expect(5);

    // extract function call in to a function that does the evaluation/assertion
    function positive(a, expected) {
        assert.equal(Lib.isPositive(a), expected);
    }

    positive(9, true);
    positive(12, true);
    positive(165, true);
    positive(-99, false);
    positive(-1, false);
});

