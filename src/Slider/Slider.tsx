import { useState } from 'react'

import image1 from "../assest/productImage1.svg"
import image2 from "../assest/productImage2.svg"
import image3 from "../assest/productImage3.svg"
import leftSlideIcon from "../assest/leftScroll.svg"
import rightSlideIcon from "../assest/rightScroll.svg"

const Slider = () => {

    const [sliderImage, setSliderImage] = useState(0)

    const images: string[] = [
        image1,
        image2,
        image3
    ]

    const nextImage = () => {
        setSliderImage((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    }


    const backImage = () => {
        setSliderImage((prev) =>
            prev === images.length ? 0 : prev + 1
        )
    }

    return (
        <div>
            <div className='flex justify-between absolute '>
                <button className=' w-[40px] h-[40px] ml-[16px] mt-[198px] z-10 ' onClick={nextImage}>
                    <img className='' src={leftSlideIcon} alt="leftSlideIcon" />
                </button>
                <button className=' w-[40px] h-[40px] ml-[290px] mt-[198px] z-10' onClick={backImage}>
                    <img className='' src={rightSlideIcon} alt="leftSlideIcon" />
                </button>
            </div>
            <img className='w-[400px] h-[400px]' src={images[sliderImage]} alt="" />


        </div>
    )
}

export default Slider