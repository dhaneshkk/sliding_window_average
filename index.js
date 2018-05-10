const sliding_window_average = require('./sliding_window_average');

//const input_array = [1,2,3,4];
const input_array = [10,20,30,40,50,60,70,80,90,100]
const window_length = 4;

const output_array = sliding_window_average(input_array,window_length);

if ( output_array instanceof Error ) {
    console.log(output_array.message)
}
else {
    output_array.forEach(element => {
    console.log(element);
    });
}