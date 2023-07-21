import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <form
      className="container mx-auto mt-40 grid max-w-xl grid-cols-1 gap-2 rounded-xl border border-neutral-50 bg-white p-8 shadow-lg"
      onSubmit={(e) => {
        e.preventDefault();

        const { email, password } = e.currentTarget;
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email.value, password.value)
          .then(() => {
            navigate("/app");
          })
          .finally(() => {
            setIsLoading(false);
          });
      }}
    >
      <div className="mx-auto mb-4 flex w-fit items-center gap-1">
        <img src="/logo.png" alt="logo" className="aspect-square w-12" />
        <h1 className="text-4xl font-bold text-neutral-900">Wave</h1>
      </div>

      <h2 className="mb-8 text-center text-2xl font-bold text-neutral-900">
        welcome back!
      </h2>

      <input
        type="email"
        name="email"
        placeholder="email"
        className="rounded-md border border-neutral-300 p-2 outline-blue-400"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        className="rounded-md border border-neutral-300 p-2 outline-blue-400"
      />
      <button
        disabled={isLoading}
        className="diabled:bg-blue-300 mt-2 rounded-md bg-gradient-to-r from-brand-green to-brand-blue p-2 font-medium text-white outline-blue-400 transition-colors duration-1000 active:from-[#01A4E1] active:to-[#7DBC53]"
        type="submit"
      >
        {isLoading ? "Submitting.." : "Sbumit"}
      </button>
    </form>
  );
}
