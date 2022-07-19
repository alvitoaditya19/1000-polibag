import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Pagination from "./table";
import Image from "next/image";
import { getUser } from "../../services/user";

export default function User() {
  const [toggleViewMode, setToggleViewMode] = useState(true);
  const toggleNavbar = () => {
    setToggleViewMode(!toggleViewMode);
  };

  // useEffect(() => {
  //   getUser()
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

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
          activeMenu="myTeam"
        />
        <div className="col-12 col-xl-9">
          <div className="nav">
            <div className="d-flex justify-between items-center w-100 mb-3 mb-md-0">
              <div className="d-flex  justify-start items-center">
                <button id="toggle-navbar" onClick={toggleNavbar}>
                  <img src="/global/burger.svg" alt="" />
                </button>
                <h2 className="nav-title">Employees</h2>
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
          <div className="md:ml-0 ml-4 md:py-6 md:px-6 px-1 py-4 bg-white rounded-2xl md:mr-10 mr-4 flex overflow-x-auto">
            <Pagination className="container w-screen" />
          </div>
        </div>
      </div>
    </>
  );
}
