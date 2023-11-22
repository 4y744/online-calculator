let input_box = document.getElementById("input-box");
let output_label = document.getElementById("output-label");
let input, num1, num2, lcm;

function calculate()
{
    input = input_box.value.split(/(?:,|[.]| |[a-z]|[\n])+/);
    input = input.filter(val => val !== "");
    input = input.filter(val => val !== "0");

    lcm = parseFloat(input[0]);
    console.log(input);

    for(let i = 1; i < input.length; i++)
    {
        num1 = lcm;
        num2 = parseFloat(input[i]);
        while(num1 != num2)
        {
            if(num1 > num2) {num1 -= num2;}
            else {num2 -= num1;}
        } 

        lcm = (parseFloat(input[i]) * lcm) / num1;
    }


   output_label.innerText = `Answer: ${lcm}`;
}