const expect = require('chai').expect;
const sliding_window_average = require('../sliding_window_average');

describe('sliding_window_average()', function () {
  it('1. Sliding window length test ((n-k)+1)', function () {
    
    // 1. ARRANGE
    const input_array = [1,2,3,4];
    const k = 2;
    const n = input_array.length;
    const expected_output_seq_length = (n-k)+1;   

    // 2. ACT
    const output_seq = sliding_window_average(input_array, k);

    // 3. ASSERT
    expect(output_seq.length).to.be.equal(expected_output_seq_length);

  });

  it('2. negative number input array test', function () {
    
    // 1. ARRANGE
    const input_array = [-1,2,3,4];
    const k = 2;
    const expected_result = (input_array[0]+input_array[1])/k   

    // 2. ACT
    const output_seq = sliding_window_average(input_array, k);

    // 3. ASSERT
    expect(output_seq[0]).to.be.equal(expected_result);

  });

  it('3. window size = 0 exception test', function () {
    
    // 1. ARRANGE
    const input_array = [1,2,3,4];
    const k = 0;
    const expected_result = "window_length cannot be zero or less than zero";

    // 2. ACT
    const actual_result = sliding_window_average(input_array, k);

    // 3. ASSERT
    expect(actual_result.message).to.be.equal(expected_result);

  });
  it('4. calling sliding_window_average function without window size  test', function () {
    
    // 1. ARRANGE
    const input_array = [1,2,3,4];
    const expected_result = input_array;

    // 2. ACT
    const actual_result = sliding_window_average(input_array);

    // 3. ASSERT
    expect(actual_result).to.deep.equal(expected_result);

  });
  it('5. calling sliding_window_average function with null input_array exception test', function () {
    
    // 1. ARRANGE
    const input_array = null;
    const expected_result = "input_array cannot be null or undefined";
    const window_length = 2;
    // 2. ACT
    const actual_result = sliding_window_average(input_array,window_length);

    // 3. ASSERT
    expect(actual_result.message).to.be.equal(expected_result);

  });
  it('6. calling sliding_window_average function with null window_length  - exception test', function () {
    
    // 1. ARRANGE
    const input_array = [1,2,3];
    const expected_result = "window_length cannot be null or undefined";
    const window_length = null;
    // 2. ACT
    const actual_result = sliding_window_average(input_array,window_length);

    // 3. ASSERT
    expect(actual_result.message).to.be.equal(expected_result);

  });
  it('7. Basic happy test case', function () {
    
    // 1. ARRANGE
    const input_array = [10,20,30,40,50,60,70,80,90,100]
    const window_length = 4;
    const expected_result = [25,35,45,55,65,75,85];
    
    // 2. ACT
    const actual_result = sliding_window_average(input_array,window_length);

    // 3. ASSERT
    expect(actual_result).to.deep.equal(expected_result);

  });
});