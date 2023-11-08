import styles from "./Login.module.css";
import UseLoginController from "./Login.controller";

const Login = () => {
    const { Actions } = UseLoginController();
    // const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return(
       <div className={styles.container}>
            <div className={styles.background}>
                <div className={styles.shape}></div>
                <div className={styles.shape}></div>
            </div>
            <form onSubmit={Actions.handleSubmit(Actions.onSubmit)}>
                <h3>Login</h3>

                <label className={styles.input_group}>
                    <p>Email</p>
                    <input type="text" placeholder="Email" id="username" />
                    <div></div>
                </label>

                <label className={styles.input_group}>
                    <p>Senha</p>
                    <input type="password" placeholder="Password" id="username" />
                    <div></div>
                </label>

                <button type="submit">Login</button>
                <div className={styles.social}>
                </div>
            </form>
       </div>
    );
};

export default Login;