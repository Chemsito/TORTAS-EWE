document.addEventListener("DOMContentLoaded", function() {
    const numPisosInput = document.getElementById('numPisos');
    const detallesPisos = document.getElementById('detallesPisos');
    const precioTotalSpan = document.getElementById('precioTotal');

    const precios = {
        sabor: {
            "vainilla": 5,
            "chocolate": 6,
            "fresa": 5,
            "limón": 4
        },
        tamano: {
            "pequeño": 10,
            "mediano": 15,
            "grande": 20
        }
    };

    function actualizarDetallesPisos() {
        detallesPisos.innerHTML = '';
        for (let i = 1; i <= numPisosInput.value; i++) {
            const div = document.createElement('div');
            div.innerHTML = `
                <h3>Piso ${i}</h3>
                <label for="sabor${i}">Sabor:</label>
                <select id="sabor${i}" name="sabor${i}">
                    <option value="vainilla">Vainilla</option>
                    <option value="chocolate">Chocolate</option>
                    <option value="fresa">Fresa</option>
                    <option value="limón">Limón</option>
                </select>
                <label for="tamano${i}">Tamaño:</label>
                <select id="tamano${i}" name="tamano${i}">
                    <option value="pequeño">Pequeño</option>
                    <option value="mediano">Mediano</option>
                    <option value="grande">Grande</option>
                </select>
            `;
            detallesPisos.appendChild(div);
        }
        calcularPrecio();
    }

    function calcularPrecio() {
        let precioTotal = 0;
        for (let i = 1; i <= numPisosInput.value; i++) {
            const sabor = document.getElementById(`sabor${i}`).value;
            const tamano = document.getElementById(`tamano${i}`).value;
            precioTotal += precios.sabor[sabor] + precios.tamano[tamano];
        }
        precioTotalSpan.textContent = precioTotal;
    }

    numPisosInput.addEventListener('change', actualizarDetallesPisos);
    detallesPisos.addEventListener('change', calcularPrecio);

    actualizarDetallesPisos();
});
