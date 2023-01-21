
import happyImage from '../../../assets/mars-sector-6-7d4LREDSPyQ-unsplash.png'
export default () => {
    return <div className=" px-1 md:px-36 text-center font-robotto  flex flex-col items-center">
        <div className="flex items-center justify-around">
            <div className="p-6 relative">
                <div className="rounded-full absolute top-0 right-0 opacity-60 aspect-square h-4 bg-red-800"></div>
                <h6 className="text-2xl md:text-4xl  w-full text-red-800 mx-4">
                    Happiness Is Our Culture
                </h6>
                <div className="rounded-full absolute bottom-5 left-0 opacity-50 aspect-square h-4 bg-rose-300"></div>
            </div>
        </div>
        <p className="text-sm font-light text-gray-500  ">
            The productivity and prosperity of an organisation is the reflection of the happiness and contentment of its employees. We believe that is what builds a family and the nation too. Happy employees are not just an asset to the organisation, but the love, contentment and enthusiasm they display build the whole world.So it is our prime responsibility to give a conducive, happy work culture for our employees, a climate which gives them opportunities for self growth and skill development.
        </p>
        <img src={happyImage} className="p-2 md:w-2/3" />

    </div>
}