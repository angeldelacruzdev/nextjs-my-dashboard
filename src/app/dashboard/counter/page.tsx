import { CartCounter } from "@/shopping-cart/components";

 

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
