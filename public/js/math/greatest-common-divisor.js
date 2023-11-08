let input_box = document.getElementById("input-box");
let output_label = document.getElementById("output-label");
let input, num1, num2;

function calculate()
{
    input = input_box.value.split(/(?:,| )+/);

    for(let i = 0; i < input.length; i++)
    {
        if(i == 0) {num1 = parseFloat(input[i]); continue;}
        num2 = parseFloat(input[i]);
        while(num1 != num2)
        {
            if(num1 > num2) {num1 -= num2;}
            else {num2 -= num1;}
        }
    }
   output_label.innerText = `Answer: ${num1}`;
}
