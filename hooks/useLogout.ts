import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { logoutUser } from "@/store/slices/authSlice";

export const useLogout = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const logout = async () => {
    await dispatch(logoutUser());
    router.push("/auth/login");
  };

  return { logout };
};