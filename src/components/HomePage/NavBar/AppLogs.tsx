import Link from "next/link";

const AppLogs =   () => {
  return(
    <Link href="/" className="app-logo-link" > 
      <img src="/Logo/app-logo.png" alt="" className="app-logo" loading="lazy"/>
    </Link>
  )
}

export default AppLogs