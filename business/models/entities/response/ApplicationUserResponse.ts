import * as superstruct from "superstruct";

export const LoginResponse = superstruct.object({
  accessToken: superstruct.string(),
  expiry: superstruct.number(),
  message: superstruct.string(),
});

export type TApplicationUserSchemaResponse = superstruct.Infer<typeof LoginResponse>;
