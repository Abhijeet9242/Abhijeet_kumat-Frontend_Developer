import img1 from "../images/destination_Image/img1.jpg";
import img2 from "../images/destination_Image/img2.jpg";
import img3 from "../images/destination_Image/img3.jpg";

const Destinations = () => {
  return (
    <section className="destinations">
      <h3 className="itemtext" id="itemhead">
        ROCKET AND CAPSULES
      </h3>
      <div className="grid">
        <div>
          <img src={img1} alt="destination-1" />
          <h3>CRS-26 MISSION</h3>
          <p>RECENT LAUNCH</p>
        </div>

        <div>
          <img src={img2} alt="destination-2" />
          <h3>EUTELSAT 10B MISSION</h3>
          <p>RECENT LAUNCH</p>
        </div>

        <div>
          <img src={img3} alt="destination-3" />
          <h3>STARSHIP UPDATE</h3>
          <p>
            STARSHIP SELECTED BY NASA TO SUPPORT SUSTAINED LUNAR EXPLORATION
          </p>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
