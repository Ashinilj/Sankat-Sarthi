import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    UserCredential,
  } from "firebase/auth";
  import { auth } from "@/lib/firebase";
  
  // Register new user
  export const registerUser = async (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };
  
  // Login existing user
  export const loginUser = async (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    return await signInWithEmailAndPassword(auth, email, password);
  };
  
  // Logout user
  export const logoutUser = async (): Promise<void> => {
    return await signOut(auth);
  };
  