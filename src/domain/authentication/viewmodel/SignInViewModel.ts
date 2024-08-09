import { useRef, useState } from "react"
import { validateEmailAddress } from "../../../common/utility/validation"
import { useDispatch } from "react-redux"
import useToggle from "../../../common/hooks/useToggle"
import { useNavigate } from "react-router-dom"
import authentication, { setAccessToken, setMember } from "../../../common/store/slice/authentication"
import { access } from "fs"
import { decodeJWT, emailPasswordSignIn } from "../api/api"
import { LoginResponse } from "../dto/LoginResponse"

const useSignInViewModel = () => {
  // const [email, setEmail] = useState<string>("")
  // const [password, setPassword] = useState<string>("")
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onClickSubmitButton = () => {
    if(!validateEmailAddress(emailRef.current?.value||"")) {      
      alert("Invalid email format.")
      return ;
    }

    if(emailRef.current?.value && passwordRef.current?.value) {
      emailPasswordSignIn(emailRef.current.value, passwordRef.current.value)
      .then((res)=>{
        alert("Success to login, Page will go back to your last visited.")
        navigate(-1)
      })
      .catch((err)=>{
        console.log(err)
        alert("Failed to sign in, Check email address or password.")
      })
    }
  }

  return {
    emailRef: emailRef,
    passwordRef: passwordRef,
    onSubmit : onClickSubmitButton,
  }
}

export default useSignInViewModel
export type LoginViewModel = ReturnType<typeof useSignInViewModel>