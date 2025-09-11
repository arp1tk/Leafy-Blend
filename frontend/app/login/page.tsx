"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Footer } from "@/components/footer"
import axios from "axios"
import { useAuth } from "@/context/authContext/context"

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
const {setUser} = useAuth();  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      })

    if (response.data) {
  localStorage.setItem("userInfo", JSON.stringify(response.data))
  setUser(response.data) // ✅ update global context
  router.push("/")        // ✅ redirect
}
    } catch (error) {
      alert("Invalid credentials, please try again.")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <section className="min-h-[70vh] flex items-center justify-center bg-[#f9f9f6] px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
          {/* Title */}
          <div className="text-center space-y-2">
            <h1 className="font-serif text-3xl font-bold text-[#1a1f16]">Welcome Back</h1>
            <p className="text-sm text-muted-foreground">Login to continue your journey</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
              className="rounded-xl"
            />
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
              className="rounded-xl"
            />

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#394931] hover:bg-[#2f3b2b] rounded-xl py-5 text-base"
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-muted-foreground">
            Don’t have an account?{" "}
            <Link href="/signup" className="font-medium text-[#394931] hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
