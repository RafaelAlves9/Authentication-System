import { Base } from "./Base.service";
import { IAuthenticationInterface } from "../Interfaces/IAuthentication.interface";
import { TApplicationUserSchemaResponse } from "@response/ApplicationUserResponse";
import { TApplicationUserSchemaRequest } from "@request/ApplicationUserRequest";
import { toastMessage } from "@utils/toastMessage";

export class AuthenticationService extends Base implements IAuthenticationInterface {

    async login(data: TApplicationUserSchemaRequest): Promise<TApplicationUserSchemaResponse> {
        try{
            const result = await this._public.post(
                "",
                data
            );
            
            toastMessage("Login feito com sucesso", "success");
            this.navigate("/");
            return result.data;
        }
        catch(error: any){
            toastMessage("Não foi possível fazer login com o Google", "error");
            throw null;
        };
    };
    
};
