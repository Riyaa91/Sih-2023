import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Lawyer from "../../images/lawyer.jpg";
import Client from "../../images/client.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row py-3 py-lg-5">
          <div className="col-6">
            <div className="card shadow rounded text-center">
              <div className="rounded-circle" style={{ height: "240px", width: "auto" }}>
                <img src={Client}/>
              </div>
              <span className="text-primary fw-bold"> Client Login</span>
            </div>
          </div>
          <div className="col-6">
            <div className="card shadow rounded text-center">
              <div className="rounded-circle"  style={{ height: "240px", width: "auto" }}>
                <img src={Lawyer} className="pt-3" style={{ height: "200px", width: "auto" }}/>
              </div>
              <span className="text-primary fw-bold">Lawyer Login</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
