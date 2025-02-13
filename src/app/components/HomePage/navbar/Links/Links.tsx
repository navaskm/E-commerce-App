import Link from "next/link";

type Menu = {
  open? : boolean,
}
function Links({open}:Menu) {
  return(
    <ul className={`nav-links ${open? 'active':''}`}>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/components/checkoutpage">Cart</Link></li>
      <li><Link href="/components/orderpage">Your order</Link></li>
    </ul>
  )
}

export default Links;