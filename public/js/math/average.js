let input_box = document.getElementById("input-box");
let output_label = document.getElementById("output-label");
let input, num1;

function calculate()
{
    num1 = 0;
    input = input_box.value.split(/(?:,| |[a-z]|[\n])+/);
    input = input.filter(val => val !== "");

    console.log(input);

    for(let i = 0; i < input.length; i++)
    {
        num1 += parseFloat(input[i]);
        console.log(num1);
    }
    num1 /= input.length;
    num1 = parseFloat(num1.toPrecision(12));
    output_label.innerText = num1;
}
