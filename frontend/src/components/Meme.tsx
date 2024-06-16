import dogImage from '../assets/dog.jpg';
const Meme = () => {
    return (
        <div className='container m-auto flex items-center justify-center pt-8  px-4 xl:px-0'>
            <img src={dogImage} alt="iamge of a meme dog" className=' rounded-md border-double border-4  border-red-500 ' />
        </div>
    )
}

export default Meme;