"use client"

import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { Card, Button, Input } from "features/base";
import { EyeCloseIcon, EyeOpenIcon } from "assets";
import { useMutation } from "@tanstack/react-query";
import { registerRequestProps } from "features/register";
import { registerRequest } from "features/register/api";
import { token } from "config";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Image from 'next/image';

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);

  const router = useRouter();
  

  const showPasswordHandler = (callBack: Dispatch<SetStateAction<boolean>>) => {
    callBack((prev) => !prev);
  }; 

  const {mutate} = useMutation({
    mutationFn:( payload: registerRequestProps ) => registerRequest(payload),
    onSuccess: (data)=> {
      const {access_token} = data
      Cookies.set(token, access_token)
      router.push("/product")
    },
    onError: (error)=> {
      console.log(error)
    }
  })

  const registerHandler = (event: FormEvent<HTMLFormElement>)=> {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const username = formData.get("username")
    const email = formData.get("email")
    const password = formData.get("password")
    const confirm_password = formData.get("confirm_password")
    
    if (password !== confirm_password) {
      console.log("password tidak sama")
      return
    }

    const payload = {
      username: username!.toString(),
      password: password!.toString(),
      email: email!.toString()
    }
    
    mutate(payload)
  }

  return (
    <Card className="space-y-2 shadow-lg p-5 rounded-lg">
      <form onSubmit={registerHandler} className="space-y-2">
        <div className="flex justify-center">
        <Image
          src="/dummy/19.png"
          width={200}
          height={100}
          alt="WeRent Logo"
          className="object-center"
        />
        </div>
        
        <p className="text-center text-xl mb-2">Register Form</p>
        <Input label="E-mail" name="email"/>

        <Input label="Username" name="username"/>

        <Input
          label="Password"
          type={showPassword ? "text" : "password"}
          rightNode={showPassword ? <EyeCloseIcon /> : <EyeOpenIcon />}
          rightNodeClick={() => showPasswordHandler(setShowPassword)}
          name="password"
        />

        <Input
          name="confirm_password"
          label="Confirm Password"
          type={confirmShowPassword ? "text" : "password"}
          rightNode={confirmShowPassword ? <EyeCloseIcon /> : <EyeOpenIcon />}
          rightNodeClick={() => showPasswordHandler(setConfirmShowPassword)}
        />

        <Button type="submit" className="bg-custom-blue text-white hover:bg-white hover:text-custom-blue font-bold py-2 px-4 rounded border border-custom-blue">
          Register
        </Button>
      </form>
      

      <p className="text-center text-xs">
        Already have an account? <a href="">Login</a>
      </p>
    </Card>
  );
}
