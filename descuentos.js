// const precioOriginal = 120;
// const descuento= 18;

function calcularPrecioConDescuento (precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

const coupons = [
    {
        name: "buenfinplata",
        discount: 15,
    },
    {
        name: "buenfinoro",
        discount: 20,
    },
    {
        name: "buenfinplatino",
        discount: 25,
    }
]

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    console.log(couponValue);
    
    let discountValue;

    const isCouponValueValid = function(coupon){
        return coupon.name === couponValue;        
    }

    const userCoupon = coupons.find(isCouponValueValid); //devuelve el objeto que cumpla con la condición de la función
    console.log(userCoupon,!userCoupon);
    if (!userCoupon){
        alert("El cupón " + couponValue + " no es válido");
        //userCoupon trae el objeto que coincide con un valor del arreglo y su negación es falsa por lo que pasa a else
        //en caso de no traer un objeto válido su valor undefinied y su negación es verdadera por lo que se cumplen las condiciones de if
    } else {
        const discountValue = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);
        const resultP = document.getElementById("resultPrice");
        resultP.innerText = "El precio con Descuento es $" + precioConDescuento;
    }
}

// function onClickButtonPriceDiscount(){
//     const inputPrice = document.getElementById("inputPrice");
//     const priceValue = inputPrice.value;
//     const inputDiscount = document.getElementById("inputDiscount");
//     const discountValue = inputDiscount.value;
//     console.log("priceValue " + priceValue);
//     console.log("discountValue " + discountValue);
//     const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);
//     const resultP = document.getElementById("resultPrice");
//     resultP.innerText = "El precio con Descuento es $" + precioConDescuento;
// }

//errores detectados:
//escribir Document para atraer elementos por ID
//En el botón, el atributo onclick debe incluir los parentesis

// console.log ({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// })
