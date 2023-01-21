import homeIcon from '../../../assets/home.png'
const BreadCrumb = () => {
    return <div className="h-10 px-1 md:px-36 flex items-center font-light  font-poppins text-sm  justify-between">
        <div className='flex items-center'>

            <div className="aspect-square h-3 ">
                <img src={homeIcon} alt="h" />
            </div>
            <p className='font-thin px-1'>{'>'}</p>
            <p className='font-thin px-1 text-red-800 text-xs'>About Us</p>
        </div>
    </div>
}

export default BreadCrumb