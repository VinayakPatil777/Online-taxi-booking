import React, { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import { useRouter } from 'next/router'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { auth, provider } from '../firebase'

const Login =() => {

    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                router.push('/')
            }
        })
    }, [])
  return(
       <Wrapper>
      <DragonLogo src="https://voicepower.co.uk/wp-content/uploads/2018/07/Dragon-VoicePower-Ltd-384x300.png" /> 
      <Title>Log in to access your account</Title>
      <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
      <SignInButton onClick={() => signInWithPopup(auth, provider)}>Sign in with Google</SignInButton>
  </Wrapper>
  )
}

export default Login

const Wrapper = tw.div`
flex flex-col h-screen  p-4
`
const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8 self-center w-full  
`
const DragonLogo = tw.img`
h-24 w-auto object-contain self-start 
`
const Title = tw.div`
text-5xl pt-4 text-gray-500
`
const HeadImage = tw.img`
object 
`
