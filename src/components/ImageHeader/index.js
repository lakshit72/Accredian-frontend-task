const ImageHeader = () => {
    return(
        <section className="h-[86svh]">
            <div className="w-full h-[6%] my-8 flex justify-center items-center">
                <div className="w-2/5 bg-[#1A73E8]/15 h-full rounded-3xl">
                    <ul className="text-lg h-full flex flex-row gap-4 items-center justify-evenly">
                        <p className="hover:text-[#1A73E8]">Refer</p>
                        <p className="hover:text-[#1A73E8]">Benefits</p>
                        <p className="hover:text-[#1A73E8]">FAQs</p>
                        <p className="hover:text-[#1A73E8]">Support</p>
                    </ul>
                </div>
            </div>
            <div className="w-full h-3/4 my-10 flex justify-center items-start">
                <div className="w-4/6 h-full rounded-3xl bg-[#EEF5FF] flex flex-row gap-1 shadow-2xl">
                    <div className="w-2/5 flex flex-col items-center justify-center mt-16">
                        <div className="w-10/12 h-4/5">
                            <p className="text-[5rem] leading-[6rem] font-[550] font-['Roboto']">Let's Learn & Earn</p>
                            <p className="text-[2.5rem] my-4 leading-[3.5rem] font-['Roboto']">Get a chance to win up-to <span className="text-[2.6rem] text-[#1A73E8] font-bold">Rs. 15,000</span></p>
                            <button className="bg-[#1A73E8] w-6/12 text-white h-[11%] my-7 rounded-lg">Refer Now</button>
                        </div>
                    </div>
                    <div className="w-3/5 overflow-hidden relative">
                        <img src="https://s3-alpha-sig.figma.com/img/6da5/530f/c90be82b93f2066608be1f96ef347467?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QMFcRlpwXRit2txvUmeNO3IXQ1Ut0i6JJiv-X4fx03kHq6~U9MBQeJHPu9LTsjMmUHB0SfN50tqW2rrEIxrxd2g7Nix-Ouj6br98~nqzo8NWTocxEmm9nJHz6P1VjnJNtT-yVlkzuL936Qs4vjLiIsT0J65E8QMNg68~KYmTAiWluaK9wzFnnNNKfyjutvf~N4I9fSublwB3nZyw4KtODCcvEG9U2P76twuAyN-ROQM-BwWqVVHxsuBE7W~Hhfwn1JhpscUqZRuIFALlVzWoZu2jyc~nWjPPzxTe~cwVpHRVRn0nBx8EvGZ2MkPVsdZhQ~X5mrK1CQ2lc1SyOk8OSg" className="max-w-[120%] max-h-[180%] absolute top-[-20%] left-[-8%]" alt="heroImg"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImageHeader;