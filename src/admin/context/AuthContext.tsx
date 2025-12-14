import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface Admin {
  id: number;
  email: string;
}

interface AuthContextType {
  admin: Admin | null;
  isAuthenticated: boolean;
  login: (admin: Admin) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [admin, setAdmin] = useState<Admin | null>(() => {
    const stored = localStorage.getItem("admin");
    return stored ? JSON.parse(stored) : null;
  });

  const login = (adminData: Admin) => {
    setAdmin(adminData);
    localStorage.setItem("admin", JSON.stringify(adminData));
  };

  const logout = () => {
    setAdmin(null);
    localStorage.removeItem("admin");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        admin,
        isAuthenticated: !!admin,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth harus digunakan dalam AuthProvider");
  }
  return ctx;
};
