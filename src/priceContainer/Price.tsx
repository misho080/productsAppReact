
const Price = () => {
    return (
        <div className="flex justify-between w-[326px] h-[34px] mt-[25px]  ml-[24px] ">
            <div className="flex">
                <span className=" mt-[-3px] text-[28px] text-[#1D2026] font-[700] font-kumbh tracking-[0px]">$125.00</span>
                <div className=" mt-[3px] ml-[18px] w-[51px] h-[27px] bg-[#f27f2630] rounded-[5px]">
                    <span className=" text-[16px] text-[#FF7E1B] font-[700]  pl-[12px]">50%</span>
                </div>
            </div>
            <div>
                <span className="mt-[-10px] text-[20px] text-[#B6BCC8] font-[700] font-kumbh tracking-[0px]">$250.00</span>
                <div className="mt-[-15px] border-[2px] " ></div>
            </div>
        </div>
    )
}

export default Price