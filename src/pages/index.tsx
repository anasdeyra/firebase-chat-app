import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useAuth } from "../context/auth";

export default function Index() {
  const { user, isLoading } = useAuth();

  if (isLoading) return "Loading";

  if (!user)
    return (
      <div className="container  mx-auto mt-24 flex items-center justify-center gap-4">
        <Link className="rounded-md bg-blue-600 p-4 text-white" to={"/login"}>
          login
        </Link>
        <Link className="rounded-md bg-blue-600 p-4 text-white" to={"/signup"}>
          signup
        </Link>
      </div>
    );

  return (
    <div className="container mx-auto mt-auto flex max-w-xl flex-col gap-2">
      <h3>Hello {user.displayName}!</h3>
      <button
        onClick={() => {
          signOut(auth);
        }}
        className="rounded-md bg-blue-600 p-4 text-white"
      >
        logout
      </button>
    </div>
  );
}
