import Link from "next/link";
import { Menu } from "@/types/type";

function Links({open}:Menu) {
  return(
    <ul className={`nav-links ${open? 'active':''}`}>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/checkout">Cart</Link></li>
      <li><Link href="/ordered-products">Your order</Link></li>
    </ul>
  )
}

export default Links;