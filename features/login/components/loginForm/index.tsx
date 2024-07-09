import { EyeCloseIcon, EyeOpenIcon } from "assets";
import { Card, Input, Button } from "features/base";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  //const router = useRouter();
  const loginHandler = () => {

  };

  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Card className="space-y-2 shadow-lg p-5 rouded-lg">
        <form onSubmit={loginHandler} data-cy="register-form">
        <div className="flex justify-center">
          <Image
            src="/dummy/19.png"
            width={200}
            height={100}
            alt="WeRent Logo"
            className="object-center"
          />
        </div>
        </form>
      <p className="text-center text-xl mb-2">Login Form</p>
      <Input label="E-mail" data-cy="email-input"/>
      <Input
        label="Password"
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
    </Card>
  );
}
