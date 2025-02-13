import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CartLogoSkelton = () => {
  return (
    <div className='cart-log-skeleton'style={{width:'50px',height:'50px'}}>
      <Skeleton/>
    </div>
  )
}

export default CartLogoSkelton
