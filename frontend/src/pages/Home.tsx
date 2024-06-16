import Meme from "../components/Meme";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Meme />
        </div>
    )
}

export default Home;