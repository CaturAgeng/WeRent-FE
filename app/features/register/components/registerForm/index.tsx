import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { Card, Input, Button } from "@/app/features/base";


export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);

  const showPasswordHandler = (callBack: Dispatch<SetStateAction<boolean>>) => {
    callBack((prev) => !prev);
  }; 

  
  return (
    <Card className="space-y-2 shadow-lg p-5 rounded-lg">
      <form  className="space-y-2">
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

        <Button type="submit" className="bg-green-500">
          Register
        </Button>
      </form>
      

      <p className="text-center text-xs">
        Already have an account? Login
      </p>
    </Card>
  );
}
