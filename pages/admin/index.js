import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Image from "next/image";
import jwtDecode from "jwt-decode";

export default function Dashboard() {
  const [toggleViewMode, setToggleViewMode] = useState(true);
  const toggleNavbar = () => {
    setToggleViewMode(!toggleViewMode);
  };

  const [priceData, setPriceData] = useState(0);
  const countPrice = (type) => {
    let result = priceData;
    if (type === "plus") {
      result = priceData + 1;
    }
    if (type === "minus") {
      if (priceData > 1) {
        result = priceData - 1;
      }
    }
    setPriceData(result);
  };

  useEffect(() => {
    setPriceData(priceData);
  }, []);
  return (
    <>
      <div
        className={
          toggleViewMode
            ? "screen-cover d-xl-none d-none"
            : "d-xl-none screen-cover"
        }
      ></div>
      <div className="row">
        <Sidebar
          toggleViewMode={toggleViewMode}
          toggleNavbar={toggleNavbar}
          activeMenu="overview"
        />

        <div className="col-12 col-xl-9">
          <div className="nav">
            <div className="d-flex justify-between items-center w-100 mb-3 mb-md-0">
              <div className="d-flex  justify-start items-center">
                <button id="toggle-navbar" onClick={toggleNavbar}>
                  <img src="/global/burger.svg" alt="" />
                </button>
                <h2 className="nav-title ">Overview</h2>
              </div>
              <button className="btn-notif block md:hidden">
                <Image src="/global/bell.svg" alt="" width="24" height="24" />
              </button>
            </div>

            <div className="flex justify-between items-center nav-input-container">
              <button className="btn-notif hidden md:block">
                <Image src="/global/bell.svg" alt="" width="24" height="24" />
              </button>
            </div>
          </div>
          <div className="content">
            <div className="row">
              <div className="col-12">
                <h2 className="content-title mb-2">Statistics</h2>
                <h5 className="content-desc mb-5">Your business growth</h5>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="statistics-card">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column justify-content-between align-items-start">
                      <h5 className="content-desc">User</h5>

                      <h3 className="statistics-value">{priceData}</h3>
                    </div>

                    <button
                      className="btn-statistics"
                      onClick={() => countPrice("plus")}
                    >
                      <img src="/global/times.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="statistics-card">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column justify-content-between align-items-start">
                      <h5 className="content-desc">Plastik</h5>

                      <h3 className="statistics-value">{priceData}</h3>
                    </div>

                    <button
                      className="btn-statistics"
                      onClick={() => countPrice("plus")}
                    >
                      <img src="/global/times.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="statistics-card">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column justify-content-between align-items-start">
                      <h5 className="content-desc">Masker</h5>

                      <h3 className="statistics-value">{priceData}</h3>
                    </div>

                    <button
                      className="btn-statistics"
                      onClick={() => countPrice("plus")}
                    >
                      <img src="/global/times.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
