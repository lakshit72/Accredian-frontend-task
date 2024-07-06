import BenefitComponents from "../BenefitComp";
import ImageHeader from "../ImageHeader";
import InfoBanner from "../InfoBanner";
import NavBar from "../NavBar";

const ReferPage = ({props}) => {
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