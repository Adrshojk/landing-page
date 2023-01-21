import Logo from '../../assets/fast-delivery.png'
export default () => {
    return <div className='col-span-6 md:col-span-2 flex p-10 border-r border-gray-500'>
        <div className='self-end ml-auto grid place-content-center'>
            <img src={Logo} className="mx-auto mb-2" />
            <span>Fast delivery in 3-5 Days</span>
        </div>
    </div>
}