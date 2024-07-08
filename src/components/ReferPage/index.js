import { useEffect } from "react";
import BenefitComponents from "../BenefitComp";
import BenefitInfo from "../BenefitInfo";
import ImageHeader from "../ImageHeader";
import InfoBanner from "../InfoBanner";
import NavBar from "../NavBar";

const ReferPage = ({props}) => {

    useEffect(()=>{
        window.alert("For refer Form please add abc@gmail.com as the Refferrer Email Id as it is the only user saved in the Database.")
    },[])

    return(
        <section>
            <InfoBanner />
            <NavBar />
            <ImageHeader />
            <BenefitComponents />
        </section>
    )
}

export default ReferPage;