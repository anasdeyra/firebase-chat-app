import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Index from "./pages";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { useAuth } from "./context/auth";
import MainApp from "./pages/app/index";
import AppShell from "./components/AppShell/AppShell";

function App() {
  return (
    <BrowserRouter>
      <ProtectedRoutes />
    </BrowserRouter>
  );
}

export default App;

function ProtectedRoutes() {
  const { user, isLoading } = useAuth();

  if (isLoading)
    return (
      <div className="flex h-screen w-screen items-center justify-center text-3xl font-bold">
        Loading...
      </div>
    );

  if (!user)
    return (
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<h2 className="text-7xl font-bold">404</h2>} />
      </Routes>
    );

  return (
    <AppShell>
      <Routes>
        <Route path="/app">
          <Route path="" element={<MainApp />} />
        </Route>
        <Route path="/" element={<Navigate to={"/app"} />} />
        <Route path="*" element={<h2 className="text-7xl font-bold">404</h2>} />
      </Routes>
    </AppShell>
  );
}
