import PublicErrorBoundary from "@/shared/components/error-boundary/public-error-boundary";
import { PATH_ROUTER_AUTH } from "@/shared/const/path/public/auth.module.path";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";


const RegisterPage = lazy(() => import("@public/auth/modules/register/Register"))

const PublicModules = () => {

    return (

        <PublicErrorBoundary>
            <Routes>
                <Route path={PATH_ROUTER_AUTH.REGISTER} element={<RegisterPage/>} />
            </Routes>
        </PublicErrorBoundary>
    )
}

export default PublicModules;