import PopupModal from "../PopupModal";
import { useState } from "react";

const BenefitComponents = () => {

    const [open, setOpen] = useState(false);

    const handelOpen = () => {
        setOpen(true);
    }

    return(
        <section className="h-[80svh] bg-[#EEF5FF] flex flex-col items-center gap-12">
            <p className="text-4xl font-['Roboto'] font-meduim mt-8">How Do I <span className="text-[#1A73E8]">Refer?</span></p>
            <div className="w-[65%] bg-[url('./assets/images/Benefits.png')] h-[60%] bg-contain bg-bottom bg-no-repeat">

            </div>
            <button className="w-[12%] h-[7%] bg-[#1A73E8] text-white rounded-xl mt-10" onClick={handelOpen}>Refer Now</button>
            <PopupModal open={open} setOpen={setOpen}/>
        </section>
    )
}

export default BenefitComponents;