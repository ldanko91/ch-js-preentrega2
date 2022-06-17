document.addEventListener('DOMContentLoaded', function() {

const rubroTanquesCoti = JSON.parse(localStorage.getItem("rubroTanques"))

console.table(rubroTanquesCoti)

const tanquesCoti = []

for (const tanqueLS of rubroTanquesCoti){
    tanquesCoti.push(tanqueLS)
    }

console.log(tanquesCoti)


for (const tanque of tanquesCoti){
    
    let tarjetaCoti = document.createElement('div')
    tarjetaCoti.innerHTML = `<h3 style="background-color: lightgrey">` + tanque.nombre + `</h3><br>
                            <h4 style="background-color: lightgrey">Lista $` + tanque.precio + ` en 3 cuotas sin interés de $ ` + Math.round((tanque.precio / 3)) +  `</h4><br>
                            <h4 style="background-color: lightgrey">Efectivo $` + (tanque.precio - (tanque.precio / 4)) + `</h4><br><br>`;

    let divCoti = document.getElementById('tarjetasCoti')
    tarjetasCoti.append(tarjetaCoti)


    }

}, false);