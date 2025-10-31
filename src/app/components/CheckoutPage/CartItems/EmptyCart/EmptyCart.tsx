import Link from "next/link"

const EmptyCart = () => {
  return (
    <div className="empty-cart-container">
        <img src="/EmptyCart/emptyImage.png" alt=""/>
        <h5>Your cart is empty!</h5>
        <p>Add items to it now.</p>
        <Link href="/" style={{textDecoration:"none",color:"white"}}>Start Shopping</Link>
    </div>
  )
}

export default EmptyCart