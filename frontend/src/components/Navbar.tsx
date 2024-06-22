import { Link } from "react-router-dom"
import LogOut from "./LogOut"

const Navbar = () => {
    return (
        <div className="bg-[#424874] py-4 px-4 xl:px-0">
            <div className="container m-auto flex items-center justify-between">
                <Link to='/' className="font-bold text-xl text-white focus:outline-none focus:ring ring-offset-2 ring-yellow-400 hover:text-[#F3752B] transition-all ease-linear duration-200">MERN auth</Link>
                <LogOut />
            </div>
        </div>
    )
}

export default Navbar;