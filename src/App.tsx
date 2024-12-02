import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { AdminPanel } from './pages/AdminPanel';
import { BlogDetail } from './pages/BlogDetail';
import { Classes } from './pages/Classes';
import { Trainers } from './pages/Trainers';
import { Pricing } from './pages/Pricing';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { BlogProvider } from './context/BlogContext';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/AuthContext';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}

function App() {
  return (
    <AuthProvider>
      <BlogProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Landing />} />
              <Route path="blog/:id" element={<BlogDetail />} />
              <Route path="classes" element={<Classes />} />
              <Route path="trainers" element={<Trainers />} />
              <Route path="pricing" element={<Pricing />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route
              path="/admin"
              element={
                <PrivateRoute>
                  <AdminPanel />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </BlogProvider>
    </AuthProvider>
  );
}

export default App;