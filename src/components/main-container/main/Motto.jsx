
import roundedBg from '../../../assets/block.png'
import teaImg from '../../../assets/andrew-neel-cckf4TsHAuw-unsplash.png'
import articleImage from '../../../assets/Article.png'

const Point = ({ children }) => {
    return <span className='text-sm font-light leading-7'>
        {children}
    </span >
}
const POINTS = [
    "Ensure the quality of the product excellence through monitoring at every stages of production till delivery and customer satisfaction.",
    "Focus on widening the business every year through a progressive approach of associating with prospective textile shops, appointing distributors and contracting with business agents.",
    "Share part of the profit to ensure the welfare of the employees, society & the environment."
]
export default () => {
    return <div className="px-1 xl:px-32 flex text-white flex-wrap font-robotto">
        <div className="space-y-4 md:w-1/2 w-auto overflow-hidden" >
            <div className="h-60 xl:p-12 p-0 bg-repeat-round" style={{ backgroundImage: `url(${roundedBg})`, backgroundSize: 'cover' }}>
                <div className="p-5">
                    <h2 className='text-2xl'>
                        Our Visions
                    </h2>
                    <Point>
                        Our vision is to provide prime value to customers by delivering supreme quality undergarments in the global market with the intent to touch the lives of our employees, immediate society and the world community with the understanding -‘we exist because they exist’.
                    </Point>

                </div>
            </div>
            <div className='px-3 hidden sm:block mr-0'>
                <img src={teaImg} className="mr-0 bg-repeat" style={{ width: "-webkit-fill-available" }} />
            </div>
        </div>
        <div className='p-0 xl:p-10 overflow-hidden pb-6 md:w-1/2 bg-repeat-space' style={{ backgroundImage: `url(${articleImage})`, backgroundSize: 'cover' }}>
            <div className="p-5">
                <h2 className='text-2xl'>
                    Our Mission
                </h2>
                <ul className='list-disc' style={{ listStyle: 'inside' }}>
                    {
                        POINTS.map((point, index) => {
                            return <li key={index} className='pl-1'>
                                <Point>
                                    {point}
                                </Point>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
}