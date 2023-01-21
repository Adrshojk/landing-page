import BreadCrumb from "../breadcrumb"
import NavBar from "../nav-bar"
import Happiness from "./Happiness"
import Info from "./Info"
import Motto from "./Motto"
import WhatWeDo from "./WhatWeDo"

const Main = () => {
    return <>
        <NavBar />
        <BreadCrumb />
        <Happiness />
        <WhatWeDo />
        <Motto />
        <Info />
    </>
}

export default Main