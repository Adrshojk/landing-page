import youtubeIcon from '../../assets/Icon metro-youtube2.svg'
import facebookIcon from '../../assets/Icon awesome-facebook-f.svg'
import linkedinIcon from '../../assets/Icon awesome-linkedin.svg'
import twitterIcon from '../../assets/Icon awesome-twitter.svg'

const LogoIcon = ({ children }) => {
    return <div className='h-6 rounded-full aspect-square border-white border grid place-content-center m-1'>
        <img src={children} />
    </div>
}
export default () => {
    return <div className="col-span-6 md:col-span-2 flex flex-col p-5 md:px-0">
        <h5 className="text-base leading-10">
            NEWSLETTER
        </h5>
        <span className="leading-8">Sign up & get all our latest updates and special offers</span>
        <div className="md:w-3/4">
            <div className=" grid grid-cols-10 h-8 ">
                <input className="col-span-8 outline-none p-2" placeholder="Enter Your Email address" />
                <div className="col-span-2 bg-gray-400 grid place-content-center p-2 text-xs">
                    SUBSCRIBE
                </div>
            </div>
            <div className="flex justify-end">
                <LogoIcon>
                    {youtubeIcon}
                </LogoIcon>
                <LogoIcon>
                    {facebookIcon}
                </LogoIcon>
                <LogoIcon>
                    {linkedinIcon}
                </LogoIcon>
                <LogoIcon>
                    {twitterIcon}
                </LogoIcon>
            </div>
        </div>
    </div>
}