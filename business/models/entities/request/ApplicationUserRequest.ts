import * as superstruct from "superstruct";

export const ApplicationUserRequest = superstruct.object({
  email: superstruct.string(),
  password: superstruct.string(),
});

export type TApplicationUserSchemaRequest = superstruct.Infer<typeof ApplicationUserRequest>;
