import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import HomeHeader from "../components/HomeHeader";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState} from "react";
import { fetchCapsule, getSelectedCapsule } from "../redux/action";
import Footer from "../components/Footer"

const HomePage = () => {
  const navigate = useNavigate();

  let [type, setType] = useState("");
  let [status, setStatus] = useState("");
  let [launch, setLaunch] = useState("");

  const dispatch = useDispatch();
  const capsules = useSelector((store) => store.capsule);

  // console.log(capsules)

  useEffect(() => {
    dispatch(fetchCapsule((type = ""), (status = ""), (launch = "")));
  }, []);

  useEffect(() => {
    dispatch(fetchCapsule(type, (status = ""), (launch = "")));
  }, [type]);

  useEffect(() => {
    dispatch(fetchCapsule((type = ""), status, (launch = "")));
  }, [status]);

  useEffect(() => {
    dispatch(fetchCapsule((type = ""), (status = ""), launch));
  }, [launch]);

  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleLaunch = (e) => {
    setLaunch(e.target.value);
  };

  const handleSingle = (data) => {
    dispatch(getSelectedCapsule(data));
    navigate("/single");
  };

  return (
    <>
      <HomeHeader />

      <div className="maincont">
        <div>.</div>
        <div className="filterdiv">
          <select onChange={handleStatus}>
            <option>Status</option>
            <option value="upcoming">upcoming</option>
            <option value="past">past</option>
          </select>
          <select onChange={handleType}>
            <option>Types</option>
            <option value="Dragon 1.0">Dragon 1.0</option>
            <option value="Dragon 1.1">Dragon 1.1</option>
            <option value="Dragon 2.0">Dragon 2.0</option>
          </select>
          <select onChange={handleLaunch}>
            <option>Launch</option>
            <option value="2010-12-08T15:43:00.000Z">2010-12-08</option>
            <option value="2012-05-22T07:44:00.000Z">2012-05-22</option>
            <option value="2012-10-08T00:35:00.000Z">2012-10-08</option>
            <option value="2013-03-01T19:10:00.000Z">2013-03-01</option>
            <option value="2014-04-18T19:25:00.000Z">2014-04-18</option>
            <option value="2014-09-21T05:52:00.000Z">2014-09-21</option>
            <option value="2015-01-10T09:47:00.000Z">2015-01-10</option>
            <option value="2015-04-14T20:10:00.000Z">2015-04-14</option>
            <option value="2015-06-28T14:21:00.000Z">2015-06-28</option>
            <option value="2016-04-08T20:43:00.000Z">2016-04-08</option>
            <option value="2016-07-18T04:45:00.000Z">2016-07-18</option>
            <option value="2017-02-19T14:39:00.000Z">2017-02-19</option>
            <option value="2017-08-14T16:31:00.000Z">2017-08-14</option>
            <option value="2019-03-02T07:45:00.000Z">2019-03-02</option>
            <option value="2020-01-19T14:00:00.000Z">2020-01-19</option>
            <option value="2020-05-30T19:22:00.000Z">2020-05-30</option>
          </select>
        </div>

        <div className="datamaindiv">
          {capsules.map((capsule, i) => (
            <div
              key={i}
              className="contitem"
              onClick={() => handleSingle(capsule)}
            >
              <div className="imgdiv capimgdiv">
                <img
                  src="https://images.unsplash.com/photo-1601892782633-675465fa7f3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvY2tldCUyMGNhcHN1bGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <p className="sourcename">{capsule.capsule_serial}</p>
              <div className="titlediv">
                <h3 className="title">{capsule.type}</h3>
                <p className="para">{capsule.details}</p>
              </div>
              <div className="status">
                <p className="countrytext">{capsule.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
