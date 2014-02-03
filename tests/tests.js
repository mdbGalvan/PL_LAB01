var assert = chai.assert;

suite('temperature', function() {
    test('32F = 0 Celsius', function() {
        original.value = "32F";
        calculate();
        assert.deepEqual(converted.innerHTML, "0.00 Celsius");
    });
	test('23E+4F = 0 Celsius', function() {
        original.value = "23e4f";
        calculate();
        assert.deepEqual(converted.innerHTML, "127760.00 Celsius");
    });
    test('45C = 113.00 Farenheit', function() {
        original.value = "45C";
        calculate();
        assert.deepEqual(converted.innerHTML, "113.00 Farenheit");
    });
	test('-45.1c = -49.18 Farenheit', function() {
        original.value = "-45.1c";
        calculate();
        assert.deepEqual(converted.innerHTML, "-49.18 Farenheit");
    });
    test('5X = error', function() {
        original.value = "5X";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });
	test('-3 = error', function() {
        original.value = "-3";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });
});