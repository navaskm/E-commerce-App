import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

const Login = () => {
  return(
    <>
      <SignedOut>
        <SignInButton mode="modal"  className='login-button'/>
      </SignedOut>

      <SignedIn>
        <UserButton  className='user-button'/>
      </SignedIn>
    </>
  )
}

export default Login;