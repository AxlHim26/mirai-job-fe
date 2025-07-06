import { AuthLayout } from "@/components/layouts";
import { Outlet } from "react-router-dom";

const AuthRoot = () => {
    return (
        <AuthLayout>
            <Outlet />
        </AuthLayout>
    )
}

export default AuthRoot;
