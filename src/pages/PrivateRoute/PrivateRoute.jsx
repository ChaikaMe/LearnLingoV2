import { Navigate } from "react-router-dom";
import { auth } from "../../firebase";

const PrivateRoute = ({ element }) => {
  return auth.currentUser ? element : <Navigate to="/" />;
};

export default PrivateRoute;
