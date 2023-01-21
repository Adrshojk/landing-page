import searchIcon from '../../../assets/search.png'
import cartIcon from '../../../assets/shopping-cart.png'

const NavBar = () => {
    return <div className="h-20 px-1 md:px-36 flex items-center font-light  font-poppins text-sm p-1 justify-between">
        <p className="text-red-800 font-medium text-4xl">
            Logo
        </p>
        <div className="uppercase hidden sm:flex ">
            <p className="mx-4">
                Home
            </p>
            <p className="mx-4">
                Men
            </p>
            <p className="mx-4">
                Girls
            </p>
            <p className="mx-4">
                Boys
            </p>
        </div>
        <div className="flex float-right ">
            <div className="mx-4 aspect-square h-5">
                <img src={searchIcon} alt="s" />
            </div>
            <div className="mx-4 aspect-square h-5">
                <img src={cartIcon} alt="s" />
            </div>
        </div>
    </div>
}
export default NavBar