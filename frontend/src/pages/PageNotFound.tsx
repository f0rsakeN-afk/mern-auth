import { Link } from "react-router-dom"

const PageNotFound = () => {
    return (
        <div className="min-h-screen container m-auto flex items-center  flex-col justify-center space-y-4 px-4 xl:px-0 text-center">
            <h2 className=" text-2xl text-gray-800 font-semibold">The page you are trying to visit could not be found.</h2>
            <Link to='/' className="text-xl font-semibold text-white px-4 py-2 rounded-md focus:outline-none hover:bg-orange-500 transition-colors ease-in duration-200 bg-orange-400">
                Return Home
            </Link>
        </div>
    )
}

export default PageNotFound
