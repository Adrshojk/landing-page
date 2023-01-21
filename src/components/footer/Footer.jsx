import LogoContainer from "./LogoContainer"
import NewsLetter from "./NewsLetter"
import QuickLinks from "./QuickLinks"
const QUICK_LINKS = {
    title: 'QUICK LINKS',
    links: [
        'Gift Card', 'Lookbook 2021', 'Privacy Policy', ' Shipping & Refund'
    ]
}
const COMPANY = {
    title: 'COMPANY',
    links: [
        'About Us', 'Contact Us', 'Pricing Plan', 'Knowledge Base'
    ]
}
export default () => {
    return <div className="md:h-72 h-max  bg-black text-white font-poppins flex-col font-thin text-xs ">
        <div className="md:h-60 grid grid-cols-6 py-10 bg-">
            <LogoContainer />
            <QuickLinks {...QUICK_LINKS} />
            <QuickLinks {...COMPANY} />
            <NewsLetter />
        </div>
        <div className="mt-auto border-gray-200 border-t h-10 self-end  flex items-center justify-center  ">
            © 2021 Alba. All Rights Reserved.
        </div>
    </div>
}