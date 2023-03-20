import useLoginModal from '@/hooks/useLoginModal'
import React, { useCallback, useState } from 'react'
import Input from '../Input'

const LoginModal = () => {
    const loginModal = useLoginModal()

    const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
 const [isLoading, setIsLoading] = useState(false)

const onSubmit = useCallback(async () =>{

try {
    setIsLoading(true)
    // add log in
    loginModal.onClose()
} catch (error) {
    console.log(error)
    
}finally{
    setIsLoading(false)
}

},[loginModal])

const bodyContent = (
    <div className='flex flex-col gap-4'>
<Input
placeholder='Email'
onChange={(e) => setEmail(e.target.value)}
value={email}
disabled={isLoading}
/>
    </div>
)

  return (
    <div>LoginModal</div>
  )
}

export default LoginModal