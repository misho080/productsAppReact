import AddButton from "./addToCart/AddButton"
import CompanyName from "./companyName/CompanyName"
import Count from "./countContainer/Count"
import Header from "./Header/Header"
import Price from "./priceContainer/Price"
import ProductMoreInfo from "./productMoreInfo/ProductMoreInfo"
import ProductTitle from "./productTitle/ProductTitle"
import Slider from "./Slider/Slider"

function App() {

  return (
    <>
      <div className="flex items-center justify-center ">

        <div className="">
          <Header />
          <Slider/>
          <CompanyName/>
          <ProductTitle/>
          <ProductMoreInfo/>
          <Price/>
          <Count/>
          <AddButton/>
        </div>
        

      </div>
    </>
  )
}

export default App
