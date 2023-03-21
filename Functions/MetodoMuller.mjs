
const fixed = 6;
let tableNull = false;

document.getElementById("dataInput_finish").addEventListener('input', ()=> calcular() );

const calcular=()=> {
    
    let x0 = parseFloat(document.getElementById("dataInput_x0").value);
    let x1 = parseFloat(document.getElementById("dataInput_x1").value);
    let x2 = parseFloat(document.getElementById("dataInput_x2").value);
    let tol = document.getElementById("dataInput_finish").value * 100;
    
    let error = [];
    
    let tabla = '<table class="powertable table table-bordered"><thead class="table-dark head"><tr><th scope="col">I</th><th scope="col">X0</th><th scope="col">X1</th><th scope="col">X2</th><th scope="col">f(X0)</th><th scope="col">f(X1)</th><th scope="col">f(X2)</th><th scope="col">H0</th><th scope="col">H1</th><th scope="col">δ0</th><th scope="col">δ1</th><th scope="col">a</th><th scope="col">b</th><th scope="col">c</th></th><th scope="col">R disc</th><th scope="col">X3</th><th scope="col">Ea</th><th scope="col">Terminacion</th></tr></thead><tbody>';
    
    for (let i = 0; i < 100; i++) {

        let h0 = x1 - x0;
        let h1 = x2 - x1;

        let delta0 = (f(x1) - f(x0)) / h0;
        let delta1 = (f(x2) - f(x1)) / h1;

        let a = (delta1 - delta0) / (h1 + h0);
        let b = delta1 + h1 * a;
        let c = f(x2);

        let rdisc = Math.sqrt(Math.pow(b, 2) - (4 * a * c));

        let x3;

        if (Math.abs(b + rdisc) > Math.abs(b - rdisc)) {
            x3 = x2 + ((-2 * c) / (b + rdisc));
        }
        else {
            x3 = x2 + ((-2 * c) / (b - rdisc));
        }

        error.push(Math.abs((x3 - x2) / x3) * 100);
        tabla += "<tr><td>" + i + "</td><td>" + x0.toFixed(fixed) + "</td><td>" + x1.toFixed(fixed) + "</td><td>" + x2.toFixed(fixed) + "</td><td>" + f(x0).toFixed(fixed) + "</td><td>" + f(x1).toFixed(fixed) + "</td><td>" + f(x2).toFixed(fixed) + "</td><td>" + h0.toFixed(fixed) + "</td><td>" + h1.toFixed(fixed) + "</td><td>" + delta0.toFixed(fixed) + "</td><td>" + delta1.toFixed(fixed) + "</td><td>" + a.toFixed(fixed) + "</td><td>" + b.toFixed(fixed) + "</td><td>" + c.toFixed(fixed) + "</td><td>" + rdisc.toFixed(fixed) + "</td><td>" + x3.toFixed(fixed) + "</td><td>" + error[i].toFixed(fixed) + "</td>";
        
        if (error[i] < tol) {
            tabla += "<td>Fin</td></tr>"
            break;
        } else {
            tabla += "<td>-</td></tr>"
        }

        x0 = x1;
        x1 = x2;
        x2 = x3;

    }

    tabla += "</tbody></table>";

    if( document.getElementById("dataInput_finish").value !="" ){
        document.getElementById("table").innerHTML = tabla;
    }else{
        document.getElementById("table").innerHTML = null;
    }

    Plotly.newPlot('graphic', [{ x: Array.from(Array(error.length).keys()), y: error, type: 'scatter', mode: 'lines+markers', name: 'Error estimado' }], { title: 'Ea vs i', xaxis: { title: 'Iteraciones' }, yaxis: { title: 'Error estimado' } });

}

const f =(x)=> Math.pow(x, 3) - (13 * x) - 12;