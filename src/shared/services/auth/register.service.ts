import { api } from "@/shared/api/base.api"
import { PATH_ROUTES_AUTH } from "@/shared/const/path/public/auth.module.path"
import { useMutation } from "@tanstack/react-query"
import { IRegisterValues } from "./values/register.values"
import { IRegisterResponse } from "./responses/register.response"

export const registerService = () => {
    const useRegisterMutation = useMutation({
        mutationFn(values: IRegisterValues) {
            return api.post<IRegisterResponse>(PATH_ROUTES_AUTH.REGISTER, values.body)
        },  

        onSuccess(data, variables){
            console.log(data);
        },

        onError(error: any, variables, context) {
            
        },
    })

    return {
        useRegisterMutation
    }

}


