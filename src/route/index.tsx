import LoadingState from "../components/LoadingState";
import { useAuth } from "../hooks/useAuth";
import Layout from "../Layout";
import { authRoutes, openRoutes } from "./data";
import { Navigate, Route, Routes } from "react-router-dom";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingState />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function AuthChecker({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  if (user) return <Navigate to="/" replace />;
  return children;
}

const Index = () => {
  //const { session, user, loading } = useAuth();
  //console.log("auth", session, user, loading);

  return (
    <Routes>
      <Route path="/" index element={<Navigate to="/reward-hub" />} />
      {openRoutes.map((rout) => (
        <Route
          key={rout.route}
          element={
            <AuthChecker>
              <rout.component />
            </AuthChecker>
          }
          path={rout.route}
        />
      ))}
      {authRoutes.map((rout) => (
        <Route
          key={rout.route}
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route element={<rout.component />} path={rout.route} />
        </Route>
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Index;
