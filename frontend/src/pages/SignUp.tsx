import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = () => {

    }

    return (
        <div className="container m-auto min-h-screen px-4 xl:px-0">SignUp</div>
    )
}

export default SignUp