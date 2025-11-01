import Link from "next/link";
import { Menu } from "@/types/type";

function Links({open}:Menu) {
  return(
    <ul className={`nav-links ${open? 'active':''}`}>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/checkout">Cart</Link></li>
      <li><Link href="/components/OrderPage">Your order</Link></li>
    </ul>
  )
}

export default Links;