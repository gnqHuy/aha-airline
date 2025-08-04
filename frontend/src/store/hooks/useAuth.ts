import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { loginRequest, logout, registerRequest } from "../slice/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, accessToken, loading, error } = useSelector((state: RootState) => state.auth);

  const login = (usernameOrEmail: string, password: string) => {
    dispatch(loginRequest({ usernameOrEmail, password }));
  };

  const register = (data: {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => {
    dispatch(registerRequest(data));
  };

  return {
    user,
    accessToken,
    loading,
    error,
    login,
    register,
    logout: () => dispatch(logout()),
  };
};
