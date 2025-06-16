import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, isAuthenticated, requiredRole }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  // If you have role-based access control
  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to={userRole === 'admin' ? '/admin' : '/'} replace />;
  }
  
  return children;
};

export default ProtectedRoute;