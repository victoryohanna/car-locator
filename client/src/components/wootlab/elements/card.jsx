import React from "react";
import { Link } from "react-router-dom";

import Banner from "./banner";

const MainCard = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <Banner title="Wootlab Innovations" subtitle="Car Hire Services">
        <div className="row">
          <div className="col-md-4 card-hover">
            <div className="card">
              <div className="card-body card-link d-flex justify-content-center">
                <Link to="/register">Register Car</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body card-link d-flex justify-content-center">
                <Link to="/maps" className="link">
                  {" "}
                  Add Car Location
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body card-link d-flex justify-content-center">
                <Link to="/location">View Locations</Link>
              </div>
            </div>
          </div>
        </div>
      </Banner>
    </div>
  );
};

export default MainCard;