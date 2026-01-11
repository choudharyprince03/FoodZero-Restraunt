import Cuisines from "../components/Cuisines"
import Description from "../components/Description"
import Herosection from "../components/Herosection"
import Menu from "../components/Menu"
import ReservationComponent from "../components/Reservation"
import Review from "../components/Review"

const Landingpage = () => {
  return (
    <>
      <Herosection /> 
      <Menu />
      <Description />
      <Cuisines />
      <ReservationComponent/>
      <Review />
    </>
  )
}

export default Landingpage