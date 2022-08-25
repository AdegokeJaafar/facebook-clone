/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { signIn } from "next-auth/react"

function Login() {
  return (
    <div className='grid place-items-center'>
        <img 
            src="https://www.freeiconspng.com/thumbs/facebook-logo-png/facebook-logo-3.png" 
            height={400}
            width={400}
            objectfit="contain"
        />
        <h1 
            onClick={signIn}
            className='p-5 bg-blue-500 rounded-full text-white 
            text-center cursor-pointer'>
            Login with Facebook
        </h1>
    </div>
  )
}

export default Login;