import SliderHeader from "./SliderHeader";
import TopBrands from "./TopBrands";
import { PopularCollection as PopCollection } from "./PopularCollectoins";
import TrendingNow from "./TrendingNow";
import AllCollections from "./AllCollections";
import Showrooms from "./Showrooms";
import MemberContainer from "./MemberContainer";
import DiscoverAll from "./DiscoverAll";
import Tshirt from "../../../public/tshirt.png";

const ClientHomePage = () => {
  return (
    <main className="client-home">
      <SliderHeader />
      <TopBrands />
      <PopCollection />
      <TrendingNow />
      <AllCollections
        name="All Collection"
        image={Tshirt}
        price="150.00"
        title="Nike T Shirt for Men"
      />
      <DiscoverAll />
      <Showrooms />
      <MemberContainer />
    </main>
  );
};

export default ClientHomePage;
