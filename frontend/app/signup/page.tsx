"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Footer } from "@/components/footer"

export default function LoginPage() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // TODO: Add login logic
    setTimeout(() => setLoading(false), 1500)
  }

  return (
    <div>
    <section className="min-h-[70vh] flex items-center justify-center bg-[#f9f9f6] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="font-serif text-3xl font-bold text-[#1a1f16]">Welcome Back</h1>
          <p className="text-sm text-muted-foreground">Signup to continue your journey</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input type="email" placeholder="Email" required className="rounded-xl" />
          <Input type="password" placeholder="Password" required className="rounded-xl" />

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
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-[#394931] hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </section>
    <Footer/>
</div>
  )
}
