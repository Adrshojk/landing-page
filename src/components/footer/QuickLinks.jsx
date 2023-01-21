export default ({ title, links = [] }) => {
    return <div className="col-span-3 md:col-span-1 px-5 flex flex-col justify-between">
        <h5 className="text-base leading-10">{title}</h5>
        <ul className="text-xs flex-1 flex flex-col justify-evenly ">
            {
                links.map((link, i) => {
                    return <li>
                        {link}
                    </li>
                })
            }
        </ul>
    </div>
}