"use client"

import { EyeCloseIcon, EyeOpenIcon } from "assets";
import { Card, Input, Button } from "features/base";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { loginRequestProps } from "features/login";
import Cookies from "js-cookie";
import { token } from "config";
import { loginRequest } from "features/login";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  // rememeber, this use router shoud be import from next/navigation
  const router = useRouter(); 

  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };

  const {mutate} = useMutation({
    mutationFn: ( payload : loginRequestProps) => loginRequest(payload),
    onSuccess: (data) => {
        const {access_token} = data.data
        console.log("login success, received token", access_token)
        Cookies.set(token, access_token);
        console.log("token is set in cookies, now redirecting to product page")
        router.push("/product")
    },
    onError: (error) => {
        console.log("login failed", error)
    }
  })

  const loginHandler = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const email = formData.get("email")
      const password = formData.get("password")
    
      if (!email || !password) {
          console.log("email or password not found")
          return
      }

      const payload = {
          email: email!.toString(),
          password: password!.toString()
      }

      console.log("payload", payload)

      mutate(payload)
  }

  return (
    <Card className="space-y-2 shadow-lg p-5 rouded-lg">
        <form onSubmit={loginHandler} className="space-y-2" data-cy="login-form">
            <div className="flex justify-center">
            <Image
                src="/dummy/19.png"
                width={200}
                height={100}
                alt="WeRent Logo"
                className="object-center"
            />
            </div>
            <p className="text-center text-xl mb-2">Login Form</p>
            <Input label="E-mail" name="email" data-cy="email-input"/>
            <Input
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                rightNode={showPassword ? <EyeCloseIcon /> : <EyeOpenIcon />}
                rightNodeClick={showPasswordHandler}
                data-cy="password-input"
            />
            <Button
                type="submit"
                data-cy="login-button"
                className="bg-custom-blue text-white hover:bg-white hover:text-custom-blue font-bold py-2 px-4 rounded border border-custom-blue">
                Login
            </Button>
            <p className="text-center text-xs">
                Not registered? Click <a href="/register">Register</a>
            </p>
        </form>

    </Card>
  );
}
