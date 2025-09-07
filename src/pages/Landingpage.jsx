import Cuisines from "../components/Cuisines"
import Description from "../components/Description"
import Herosection from "../components/Herosection"
import Menu from "../components/Menu"
import ReservationPage from "../components/ReservationPage"
import Review from "../components/Review"

const Landingpage = () => {
  return (
    <>
      <Herosection /> 
      <Menu />
      <Description />
      <Cuisines />
      <ReservationPage />
      <Review />
    </>
  )
}

export default Landingpage