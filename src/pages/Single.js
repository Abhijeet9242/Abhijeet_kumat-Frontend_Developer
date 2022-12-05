
import HomeHeader from "../components/HomeHeader";
import Footer from "../components/Footer";
import "./Single.css";
import { useSelector } from "react-redux";

const Single = () => {
  const selectedCapsule = useSelector((store) => store.selectedCapsules);

  return (
    <>
      <HomeHeader />

      <div className="singlemain">
        <div className="divitem">
          <div>
            <div className="imgdiv">
            <img  src="https://images.unsplash.com/photo-1601892782633-675465fa7f3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvY2tldCUyMGNhcHN1bGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <h5>{selectedCapsule.capsule_serial}</h5>
            <h4>{selectedCapsule.capsule_id}</h4>
            <p>{selectedCapsule.details}</p>
            <p>{selectedCapsule.status}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Single;
