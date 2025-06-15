import closeButton from "../assest/xButton.svg"

const MenuBar = ({ closeButtonOnclick }: any) => {
  return (
    <div className="absolute w-[250px] h-[900px] bg-[#FFFFFF] z-20" >
      <button className="ml-[30px] mt-[25px]">
        <img onClick={closeButtonOnclick} src={closeButton} alt="closeButton" />
      </button>
      <div className="ml-[30px] mt-[50px]">
        <ul className="text-[18px] font-[700]  font-kumbh tracking-[0px] text-[#1D2026] grid gap-6">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

    </div>
  )
}

export default MenuBar