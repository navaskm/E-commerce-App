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
        <div className="user-button">
          <UserButton />
        </div>
      </SignedIn>
    </>
  )
}

export default Login;