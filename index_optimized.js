const sliding_window_average = require('./sliding_window_average_optimized');

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



/*const input_array = [10,20,30,40,50,60,70,80,90,100]
const window_length = 4;
let out_arr = [];

for (let index = window_length; index <= input_array.length; index++) {
    let sum =0;
    for (let i = window_length;i!=0;i--)
    {
        sum = sum +input_array[index-i] 
    }
    out_arr.push(sum/window_length);

}

out_arr.forEach(element => {
    console.log(element);   
});
*/