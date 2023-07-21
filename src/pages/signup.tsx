import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <form
      className="grid grid-cols-1 gap-2 container mx-auto max-w-xl mt-32"
      onSubmit={(e) => {
        e.preventDefault();

        const { email, password } = e.currentTarget;
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email.value, password.value)
          .then(() => {
            navigate("/app");
          })
          .finally(() => {
            setIsLoading(false);
          });
      }}
    >
      <input
        type="email"
        name="email"
        placeholder="email"
        className="p-2 border border-neutral-300 rounded-md"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        className="p-2 border border-neutral-300 rounded-md"
      />
      <button
        disabled={isLoading}
        className="diabled:bg-blue-300 bg-blue-600 p-2 rounded-md text-white font-medium"
        type="submit"
      >
        {isLoading ? "Submitting.." : "Sbumit"}
      </button>
    </form>
  );
}
