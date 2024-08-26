"use client";
import {  signOut } from "next-auth/react"
import { Button } from "./ui/button";

export const ButtonLogout = () => {
    return <div>
    <Button onClick={() => signOut()}>LogOut</Button>
    
  </div>
}