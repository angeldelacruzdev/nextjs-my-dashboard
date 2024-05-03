import { CartCounter } from "@/shopping-cart/components";
<<<<<<< HEAD

 
=======
>>>>>>> 8b2b7e7495f3ff05ddc360e7204a197290af383b

export const metadata = {
  title: "Shopping Cart",
  description: "Carrito de compra",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter value={5} />
    </div>
  );
}
