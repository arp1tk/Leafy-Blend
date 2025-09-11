"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

type User = {
  name: string
  email: string
}

type AuthContextType = {
  user: User | null
  login: (userData: User) => void
  logout: () => void
    setUser: (user: User | null) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  // Load user from localStorage on first render
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("userInfo")
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
    }
  }, [])

  const login = (userData: User) => {
    localStorage.setItem("userInfo", JSON.stringify(userData))
    setUser(userData)
    router.push("/") // redirect after login
  }

  const logout = () => {
    localStorage.removeItem("userInfo")
    setUser(null)
    router.push("/login")
  }

  return (
    <AuthContext.Provider value={{ user, login, logout ,setUser}}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook for easy usage
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}
