import { TApplicationUserSchemaRequest } from "@request/ApplicationUserRequest";
import { TApplicationUserSchemaResponse } from "@response/ApplicationUserResponse";

export interface IAuthenticationInterface {
    login(data: TApplicationUserSchemaRequest): Promise<TApplicationUserSchemaResponse>
};
