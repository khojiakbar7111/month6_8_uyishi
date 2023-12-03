import { useGlobalContext } from "../contex"
import Service from "./Service";


export default function Crads() {

    const {cart, clearCart} = useGlobalContext();
  return (
    <div>
        {cart.map((item) => <Service key={item.id} {...item}/>)}
        <button className="crads_btn" onClick={()=> clearCart()}>clear</button>
    </div>
  )
}
