import AddButtonIcon from "../assest/certIcon.svg"

const AddButton = () => {
  return (
    <div className="ml-[24px] mt-[25px]">
        <button className=" pt-[15px] w-[327px] h-[56px] bg-[#FF7E1B] flex justify-center rounded-[10px] shadow-[0px_10px_20px_rgba(255,122,0,0.3)]">
            <img className="mt-[5px] w-[18px] h-[17px]" src={AddButtonIcon} alt="AddButtonIcon" />
            <span className=" ml-[13px] mt-[4px] text-[17px] font-[700]  font-kumbh text-[#FFFFFF]">Add to cart</span>
        </button>
    </div>
  )
}

export default AddButton