let input_num = document.getElementById("num");
let input_root = document.getElementById("root");
let output_label = document.getElementById("output-label");
let num, root, result;

function calculate()
{
    num = parseFloat(input_num.value);
    root = parseFloat(input_root.value);
    result = Math.pow(num, 1 / root);
    result = parseFloat(result.toPrecision(12));
    
    output_label.innerText = `Answer: ${result}`;
}
