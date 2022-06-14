const coupons = [
   "cupon 1",
   "cupon 2",
   "cupon 3",
];


function calcularDescuento(precio,descuento) {
const PorcentajeDelPrecioConDescuento = 100 - descuento;
   const PrecioDescuento = (precio * PorcentajeDelPrecioConDescuento)/ 100;

   return PrecioDescuento;

}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  
  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

  const resultCoupon = document.getElementById("resultCoupon");
  const  results= resultCoupon.value;


  let descuento;
  let PrecioDescuento;

  switch (true) {
      case couponValue === "cupon 1":
          descuento = 15;
          PrecioDescuento = calcularPrecioConDescuento(priceValue,descuento,results);
          results.innerText =`Cupón es valido el precio con descuento es de: $${PrecioDescuento } dolores`
          
          break;

          case couponValue === "cupon 2":
          descuento = 30;
          PrecioDescuento  = calcularPrecioConDescuento(priceValue,descuento,results);
          results.innerText =`Cupón es valido el precio con descuento es de: $${PrecioDescuento } dolores`
          break;

          case couponValue === "cupon 3":
          descuento = 25;
          PrecioDescuento = calcularPrecioConDescuento(priceValue,descuento,results);
          results.innerText =`Cupón es valido el precio con descuento es de: $${PrecioDescuento } dolores`
          break;
  
      default:
        results.innerText = "el cupón ingresado no es valido"
          break;
  }
}