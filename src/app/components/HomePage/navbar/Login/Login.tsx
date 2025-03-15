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
        <UserButton  className='login-button'/>
      </SignedIn>
    </>
  )
}

export default Login;