
import happyImage from '../../../assets/Group 467.png'
import tickIcon from '../../../assets/Group 446.svg'
const POINTS = [
    "Listen to them. We give opportunities for them to express their views- personal and official.",
    "Appreciate the employees for the effort put in verbally and also through incentives, awards, accolades and public acknowledgements in meetings.",
    "Organise training programmes to enhance their professional skills, and also for personal re engineering to build strong self- esteem, develop interpersonal, social, team communication skills and attitude.",
    "The work environment is made proactive, positive, calm, joyful, effective, productive and enjoyable through meditation and other Self Building activities.",
    "Timely Financial assistance is rendered as a part of employee welfare scheme as and when required."
]
export default () => {
    return <div className="px-1 md:px-36 grid md:grid-cols-2 my-10">
        <img src={happyImage} className="p-2 " />
        <div className=''>
            <h1 className='text-2xl mb-6'>
                What Do We Do To Make Our Employees Stay Happy And Satisfied ?
            </h1>
            <div className='space-y-5 text-sm' >
                {
                    POINTS.map((point, index) => {
                        return <div key={index} className='flex items-start pt-1 '>
                            <div className='pt-1 pr-1'>
                                <img src={tickIcon} className="h-4   max-w-none aspect-square" />
                            </div>
                            <p>{point}</p>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}