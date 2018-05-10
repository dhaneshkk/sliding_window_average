/**
 * Author: Dhanesh kasinathan
 * Description: sliding_window_average should give sliding window avaerage sequence for given input array and window size.
 * @method sliding_window_average
 * @param {array} input_array 
 * @param {int} window_length 
 * 
 * The sliding window average with window size k=4 of a ten-value sequence (n=10) is shown below

   i   1   2   3   4   5   6   7    8   9  10
=====  ==  ==  ==  ==  ==  ==  ==  ==  ==  ==
Input  10  20  30  40  50  60  70  80  90 100
y1     25 = (10+20+30+40)/4
y2         35 = (20+30+40+50)/4
y3             45 = (30+40+50+60)/4
y4                 55 = (40+50+60+70)/4
y5                     65 = (50+60+70+80)/4
y6                         75 = (60+70+80+90)/4
y7                             85 = (70+80+90+100)/4
Thus, the sliding window average sequence has (n-k)+1=(10-4)+1=7 values.
With output [25,35,45,55,65,75,85]
 */
function sliding_window_average(input_array, window_length=1)
{
    let output_array = [];

    if (input_array === null){
        return new Error("input_array cannot be null or undefined")
    }
    if (window_length === null){
        return new Error("window_length cannot be null or undefined")
    }
    if (window_length <= 0){
        return new Error("window_length cannot be zero or less than zero")
    } 
         
    if(input_array.length >= window_length){

        for (let index = 0; index < input_array.length; index++) {

            if(input_array.length-index >= window_length){
                
                const end = index + window_length;
                const sum = sum_array(input_array, index, end);
                const average = sum/window_length;
                output_array.push(average)        
            }
        
        }
    }

    return output_array 
}

function sum_array(input_array, start, end){
    
    let sum = 0;
    
    for (let index = start; index < end ; index++) {
        sum = sum + input_array[index];
    }
    
    return sum;
}

module.exports = sliding_window_average;
