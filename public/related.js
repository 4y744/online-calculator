fetch('/math.html').then(res => res.innerHTML).then(data => console.log(data));

let related = `
<div class="related-container">
            
            <ul class="related">
                <h2>Math calculators</h2>
                <li><a href="/math/calculator.html">Calculator</a></li>
                <li><a href="/math/greatest-common-divisor.html">Greatest common divisor</a></li>
                <li><a href="/math/least-common-multiple.html">Least common multiple</a></li>
                <li><a href="/math/average.html">Average calculator</a></li>
                <li><a href="/math/random-number-generator.html">Random number generator</a></li>
                <li><a href="/math/root-calculator.html">Root calculator</a></li>
            <li><a href="/math/probability.html">Probability calculator</a></li>
            </ul>
            <ul class="related">
                <h2>Physics calculators</h2>
                <li><a href="#">Calculator</a></li>
                <li><a href="#">Greatest common divisor</a></li>
                <li><a href="#">Greatest common divisor</a></li>
                <li><a href="#">Greatest common divisor</a></li>
                <li><a href="#">Greatest common divisor</a></li>
            </ul>
            <ul class="related">
                <h2>Health calculators</h2>
                <li><a href="#">Calculator</a></li>
                <li><a href="#">Greatest common divisor</a></li>
                <li><a href="#">Greatest common divisor</a></li>
                <li><a href="#">Greatest common divisor</a></li>
                <li><a href="#">Greatest common divisor</a></li>
            </ul>
            <ul class="related">
                <h2>Networking calculators</h2>
                <li><a href="#">Calculator</a></li>
                <li><a href="#">Greatest common divisor</a></li>
                <li><a href="#">Greatest common divisor</a></li>
                <li><a href="#">Greatest common divisor</a></li>
                <li><a href="#">Greatest common divisor</a></li>
            </ul>
        </div>
`;

document.head.innerHTML += `<link rel="stylesheet" href="/css/related.css">`;
document.getElementsByClassName('related-container')[0].insertAdjacentHTML('afterbegin', related);

