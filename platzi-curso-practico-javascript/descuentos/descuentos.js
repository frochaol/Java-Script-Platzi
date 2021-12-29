function calcularPrecioConDescuento(precio, descuento) {
    porcentajePrecioConDescuento = 100 - descuento; 
    var precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
};

function validarCupon(cupon) {
    if (cupon === 'CuponDescuento') {
        return 10;  // retorna el valor del descuento
    } else {
        return 0;
    }
}

function onClickButtonPriceDiscount() {
    var inputPrice = document.getElementById("InputPrice");
    var price = inputPrice.value;
    var inputDiscount = document.getElementById("InputDiscount");
    var discount = inputDiscount.value;
    var inputCupon = document.getElementById("InputCupon");
    var cupon = inputCupon.value;
    if (cupon != null) {
        var valido = validarCupon(cupon);   // retorna 0 si no existe el cupon
        if (valido != 0) {
            discount = parseInt(discount) + valido;
            var priceWithDiscount = calcularPrecioConDescuento(price, discount);
            var resultP = document.getElementById("ResultP");
        }
    } else {
        var priceWithDiscount = calcularPrecioConDescuento(price, discount);
        var resultP = document.getElementById("ResultP");
    }    
    resultP.Text = `El precio en descuento es: $${priceWithDiscount}`;
};