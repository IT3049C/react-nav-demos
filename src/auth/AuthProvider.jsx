import { useState } from "react";
import { AuthCtx } from "./AuthContext";

export function AuthProvider({ children }) {
  const [isAuthed, setIsAuthed] = useState(
    localStorage.getItem(`isAuthed`) === 1
  );

  const login = () => {
    localStorage.setItem(`isAuthed`, 1);
    setIsAuthed(true);
  };

  const logout = () => {
    localStorage.removeItem(`isAuthed`);
    setIsAuthed(false);
  };

  return (
    <AuthCtx.Provider value={{ isAuthed, login, logout }}>
      {children}
    </AuthCtx.Provider>
  );
}
