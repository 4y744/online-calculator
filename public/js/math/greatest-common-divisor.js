let input_box = document.getElementById("input-box");
let output_label = document.getElementById("output-label");
let input, num1, num2;

function calculate()
{
    input = input_box.value.split(/(?:,|[.]| |[a-z]|[\n])+/);
    input = input.filter(val => val !== "");
    input = input.filter(val => val !== "0");

    if(input.length < 2) return;

    num1 = parseFloat(input[0]);

    for(let i = 1; i < input.length; i++)
    {
        num2 = parseFloat(input[i]);
        while(num1 != num2)
        {
            if(num1 > num2) {num1 -= num2;}
            else {num2 -= num1;}
        }
    }
   output_label.innerText = `${num1}`;
}
