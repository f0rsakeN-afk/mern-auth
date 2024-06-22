import { useState } from "react";
import { useForm } from "react-hook-form"
import { useNavigate, Link } from "react-router-dom";
import { dataTypes } from "../types/data"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Wrapper from "../components/Wrapper";
import Label from "../components/Label";



const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<dataTypes>();
    const navigate = useNavigate();
    const [show, setShow] = useState<boolean>(false)


    const onSubmit = (data: dataTypes) => {
        console.log(data);


        reset();
    }

    return (
        <div className="container m-auto h-screen">
            <div className="flex flex-col items-center justify-center py-40">
                <h2 className="pb-4 text-5xl font-semibold italic text-red-500">MERN auth</h2>

                <form className="border border-gray-200 rounded-md shadow-xl p-4 flex flex-col space-y-3" onSubmit={handleSubmit(onSubmit)}>
                    <Wrapper>
                        <Label text="Email" />
                        <input type="email" {...register('email', { required: "Email is required" })} className="border border-gray-200 rounded-sm focus:outline-none focus:ring ring-blue-300 ring-offset-2 p-1" />
                        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    </Wrapper>
                    <Wrapper>
                        <Label text="Password" />
                        <section className="relative">
                            <input type={show ? "text" : "password"} {...register('password', { required: "Password is required" })} className="border border-gray-200 rounded-sm focus:outline-none focus:ring ring-blue-300 ring-offset-2 p-1" />
                            <button type="button" className="absolute right-8 top-2" onClick={() => setShow(!show)}>
                                {show ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </section>
                        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                    </Wrapper>
                    <button className="bg-orange-400 text-white  text-xl rounded-md py-2 focus:outline-none hover:bg-orange-600 transition-all ease-linear duration-200 " type="submit">Submit</button>
                </form>
                <h3 className="pt-4 text-gray-700">Not a user? <Link to='/register' className="underline text-blue-500">Register</Link></h3>
            </div>
        </div>
    )
}

export default Login