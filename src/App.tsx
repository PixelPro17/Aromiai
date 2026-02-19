import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
import { Workouts } from './pages/Workouts';
import { Nutrition } from './pages/Nutrition';
import { AiCoach } from './pages/AiCoach';
import { CycleTracker } from './pages/CycleTracker';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />

            <Route path="dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="workouts" element={
              <ProtectedRoute>
                <Workouts />
              </ProtectedRoute>
            } />
            <Route path="nutrition" element={
              <ProtectedRoute>
                <Nutrition />
              </ProtectedRoute>
            } />
            <Route path="coach" element={
              <ProtectedRoute>
                <AiCoach />
              </ProtectedRoute>
            } />
            <Route path="cycle" element={
              <ProtectedRoute>
                <CycleTracker />
              </ProtectedRoute>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
