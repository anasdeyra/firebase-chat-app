import { User } from "firebase/auth";
import { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../firebase";

export const authContext = createContext<AuthContextValue>({
  user: null,
  isLoading: true,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(auth.currentUser);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((u) => {
      setIsLoading(false);
      setUser(u);
    });
  }, []);

  const value = { user, isLoading };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

export const useAuth = () => useContext(authContext);

interface AuthContextValue {
  user: User | null;
  isLoading: boolean;
}
