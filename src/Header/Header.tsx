import burgerIcon from "../assest/burger.svg"
import cartIcon from "../assest/headerCartIcon.svg"
import avatarIcon from "../assest/profileImg.svg"
import logoIcon from "../assest/logo.svg"

const Header = () => {
  return (
    <>
      <div className=" justify-between px-5 py-4  flex w-[400px] 	border-2 ">
        <div className="flex">
          <img className="w-[15px] h-[15px] mt-[5px]" src={burgerIcon} alt="" />
          <img className="w-[137px] h-[20px] ml-5" src={logoIcon} alt="logoIcon" />
        </div>
        <div >
          <ul className="flex">
            <li><img className="mr-[20px] mt-[3px]" src={cartIcon} alt="cartItemImg" /></li>
            <li><img className="w-[24px] h-[24px] " src={avatarIcon} alt="avatarIcon" /></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header