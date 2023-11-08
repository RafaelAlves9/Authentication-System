import { useForm } from "react-hook-form";
import { AuthenticationService } from "@service/Authentication.service";
import { setLoading } from "../../../store/reducers/loading/loadingSlice";
import { useDispatch } from "react-redux";

export interface IFormValue {
    email: string;
    password: string;
};

const UseLoginController = () => {
    const authenticationService = new AuthenticationService();
    const dispatch = useDispatch();

    const { watch, register, handleSubmit, formState: {errors} } = useForm<IFormValue>({
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const login = async () => {
        dispatch(setLoading(true));
        await authenticationService.login(watch())
        .then((res) => {
            if(res !== null){
            }else {
            };
        })
        .finally(() => {
            dispatch(setLoading(false));
        });
    };
    
    const onSubmit = async () => {
        login();
    };

    return {
        Actions: {
            handleSubmit: handleSubmit,
            onSubmit: onSubmit,
        },
        States: {
            errors: errors,
            watch: watch,
        },
        Setters: {
            register: register
        },
    };
};

export default UseLoginController;
