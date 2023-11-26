let input_k = document.getElementById("k");
let input_n = document.getElementById("n");
let input_order = document.getElementById("count-order");
let output_label = document.getElementById("output-label");
let n, k, count_order, result;

function calculate()
{
    k = parseFloat(input_k.value);
    n = parseFloat(input_n.value);
    count_order = input_order.checked;

    if(!isValid(k) || !isValid(n))
    {
        output_label.innerText = `Invalid input`;
        return;
    }

    if(count_order)
    {
        result = factorial(n) / factorial(n - k);
    }
    else
    {
        result = factorial(n) / (factorial(n - k) * factorial(k));
    }

    result = parseFloat(result.toPrecision(12));

    output_label.innerText = `Answer: ${result}`;
}

function factorial(num)
{
    if(num == 0 || num == 1) return 1;
    return num * factorial(num - 1);
}

function isValid(num)
{
    if(num < 0 || isNaN(num)) return false;
    else return true;
}