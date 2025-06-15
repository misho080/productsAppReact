import { useState } from "react"
import decIcin from "../assest/decrementIcon.svg"
import incIcin from "../assest/increment.svg"

const Count = () => {
    const [count, setCount] = useState(0)

    const incFoo = () => {
        return setCount(count + 1)
    }

    const decFoo = () => {
        if (count > 0) {
            setCount(count - 1)
        }

    }

    return (
        <div className=" flex justify-between w-[327px] h-[56px] bg-[#d7d8d8] rounded-[10px] ml-[24px] mt-[25px]">
            <img className=" mt-[24px] ml-[20px] w-[20px] h-[10px]" onClick={decFoo} src={decIcin} alt="" />
            <span className=" font-kumbh mt-[17px] text-[20px] text-[#1D2026] font-[700]">{count}</span>
            <img className="mr-[23px]  mt-[19px] w-[20px] h-[20px]" onClick={incFoo} src={incIcin} alt="" />
        </div>
    )
}

export default Count