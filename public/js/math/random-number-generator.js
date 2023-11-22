let input_min = document.getElementById("min");
let input_max = document.getElementById("max");
let output_label = document.getElementById("output-label");
let min, max, rand;

function calculate()
{
    min = parseFloat(input_min.value);
    max = parseFloat(input_max.value);
    
    rand = Math.floor(Math.random() * (max - min + 1) + min);
    /*
    Math.random() returns a random float in the range [0; 1).
    This float gets multpiplied by (max - min + 1) to get a number in the appropriate range.
    The value min is added again to shift the random number to its original boundtries.
    Math.floor() rounds down to a whole number.
    The value of (max - min) gets incremented by 1, because the range of Math.random(),
    which is [0; 1) does not allow the value of max to be rolled;
        As shown here, specific ranges of [0; 1) represent specific numbers.
        For example, if our range is [5; 10] and we roll 0.45,
        we get the value 0.45 * (10 - 5 + 1) = 2.7 , which is incremented by 5
        to get 7.7, which is further rounded down to just 7. 
        The range for 7 can be determined by reverse engineering the process.
        (7.000 - 5) / 6 = 0.333
        (7.999 - 5) / 6 = 0.499
        If we roll any float in the approximate range [0.333; 0.499], we get the number 7.
        TLDR: By using Math.floor() we can create ranges for specifig integers in a range of numbers,
        and then use these ranges to assign Math.random() number ranges specific numbers.
        
        [0.......................................1)
        [min...................................max]
    */
    
    output_label.innerText = `Answer: ${rand}`;
}
