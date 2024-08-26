"use client";
import { signIn, signOut } from "next-auth/react"
import { Button } from "./ui/button";

export const ButtonSignin = () => {
    return <div>
    <Button onClick={() => signIn()}>Signin</Button>
    
  </div>
}