import { useState } from "react";
import PopupModal from "../PopupModal";

const BenefitInfo = () => {

    const {open, setOpen} = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <section className="h-svh w-full flex flex-col items-center justify-evenly">
            <p className="font-['Roboto'] text-3xl capitalize">What Are The <span className="text-[#1A73E8] ">Referral Benefits?</span></p>
            <div className="bg-slate-950 h-[72%] w-[70%]">
                <table className="">
                    
                </table>
            </div>
            <button className="h-[6%] w-[12%] bg-[#1A73E8] text-white rounded-lg" onClick={handleOpen}>Refer Now</button>
            <PopupModal open={open} setOpen={setOpen} />
        </section>
    )
}

export default BenefitInfo;