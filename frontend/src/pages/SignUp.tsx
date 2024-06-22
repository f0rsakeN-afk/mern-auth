import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { dataTypes } from "../types/data";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Wrapper from "../components/Wrapper";
import Label from "../components/Label";
import { useState } from "react";

const SignUp: React.FC = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<dataTypes>();
    const navigate = useNavigate();
    const [show, setShow] = useState<boolean>(false);
    const [imagePreview, setImagePreview] = useState<string | null>(null);


    const handleImagePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImagePreview(imageUrl);
        } else {
            setImagePreview(null)
        }
    }

    const onSubmit = (data: dataTypes) => {
        console.log(data);

        reset();

    };

    return (
        <div className="container m-auto h-screen">
            <div className="flex flex-col items-center justify-center py-40">
                <h2 className="pb-4 text-5xl font-semibold italic text-red-500">MERN auth</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="border border-gray-200 rounded-md shadow-xl p-4 flex flex-col space-y-3">
                    <Wrapper>
                        <Label text="Username" />
                        <input type="text" {...register("userName", { required: "Username is required" })} className="border border-gray-200 rounded-sm focus:outline-none focus:ring ring-blue-300 ring-offset-2 p-1" />
                        {errors.userName && <span className="text-red-500">{errors.userName.message}</span>}
                    </Wrapper>

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

                    <Wrapper>
                        <Label text="Image" />
                        <input type="file" {...register('image')} className="rounded-sm focus:outline-none" onChange={handleImagePreview}
                        />
                        {imagePreview && <img src={imagePreview} className="h-32 w-32 rounded-full"/>}
                    </Wrapper>

                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">Sign Up</button>
                </form>
                <h3 className="pt-4 text-gray-700">Already a user? <Link to='/login' className="underline text-blue-500">Login</Link></h3>
            </div>
        </div>
    );
};

export default SignUp;
