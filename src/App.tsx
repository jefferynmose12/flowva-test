import { BrowserRouter } from "react-router-dom";
import AppRoute from "./route";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthProvider";

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#167490",
              color: "#fff",
            },
          }}
        />
        <AppRoute />
      </BrowserRouter>
    </AuthProvider>
  );
}
