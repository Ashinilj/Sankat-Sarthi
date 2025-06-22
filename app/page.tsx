"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser, registerUser } from "@/utils/firebaseAuth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FirebaseError } from "firebase/app";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        await registerUser(email, password);
      } else {
        await loginUser(email, password);
      }
      router.push("/dashboard");
    } catch (error: unknown) {
      const firebaseError = error as FirebaseError;
      alert(firebaseError.message);
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden flex items-center justify-center bg-[#f6f9ff] px-4">
      {/* Animated Gradient Blobs */}
      <div className="absolute w-72 h-72 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full top-[-60px] left-[-60px] opacity-30 animate-pulse blur-2xl z-0"></div>
      <div className="absolute w-96 h-96 bg-gradient-to-tr from-blue-200 to-pink-300 rounded-full bottom-[-100px] right-[-80px] opacity-30 animate-spin-slow blur-2xl z-0"></div>
      <div className="absolute w-52 h-52 bg-gradient-to-t from-gray-200 to-blue-100 rounded-full top-1/2 left-[30%] opacity-40 animate-ping blur-xl z-0"></div>

      {/* Login Card */}
      <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl flex overflow-hidden z-10">
        {/* Left Side */}
        <div className="w-1/2 p-10 flex flex-col justify-center bg-gradient-to-br from-[#f0f4ff] to-[#e1ecff]">
          <h2 className="text-3xl font-extrabold text-blue-700 mb-4">
            Welcome to our community!
            <br />
            <span className="text-blue-500">Sankat Sarthi</span>
          </h2>
          <Image
            src="/images/login-illustration.svg"
            alt="Login Illustration"
            width={400}
            height={400}
            className="w-full max-w-sm h-auto"
          />
        </div>

        {/* Right Side */}
        <div className="w-1/2 p-10 bg-white flex flex-col justify-center">
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-1 text-sm">
              <span className="text-blue-700 font-semibold border-b-2 border-blue-600 pb-1">
                {isRegistering ? "Register" : "Sign In"}
              </span>
              <button
                onClick={() => setIsRegistering(!isRegistering)}
                className="ml-4 bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium"
              >
                {isRegistering ? "Back to Login" : "Register"}
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-[#f3f6fc] border-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="relative">
              <Input
                type="password"
                placeholder="Password"
                className="w-full bg-[#f3f6fc] border-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="absolute right-4 top-3 text-gray-400 cursor-pointer">👁️</span>
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md"
            >
              {isRegistering ? "SIGN UP" : "SIGN IN"}
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
