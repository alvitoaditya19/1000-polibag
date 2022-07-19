/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import SidebarItem from "./SidebarItem";
import NavbarTimes from "/public/images/navbar-times.svg";
import Image from "next/image";
import { ReactComponent as TestSvg } from "/public/images/navbar-times.svg";

import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";
import { SVGCustom } from 'svg-fill-custom';

export default function Sidebar({ toggleViewMode, toggleNavbar, activeMenu }) {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    avatar: "",
    email: "",
    id: "",
    name: "",
    username: "",
  });
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload = jwt_decode(jwtToken);
      const userFromPayload = payload.user;
      const IMG = process.env.NEXT_PUBLIC_IMG;
      user.avatar = `${IMG}/${userFromPayload.avatar}`;
      setIsLogin(true);
      setUser(user);
    }
  }, []);

  const onLogout = () => {
    Cookies.remove("token");
    router.push("/");
    setIsLogin(false);
  };
  return (
    <>
      <div
        className={
          toggleViewMode
            ? "col-12 col-lg-3 col-navbar d-xl-block d-none"
            : "col-12 col-lg-3 col-navbar d-xl-block"
        }
      >
        <aside className="sidebar display-none">
          <a href="#" className="sidebar-logo">
            <div className="d-flex justify-start items-center">
              <img src="/icons/ic-logo.svg" alt="" className=" w-60" />
            </div>

            <button id="toggle-navbar" onClick={toggleNavbar}>
              <Image src="/images/navbar-times.svg" width={30} height={30} />
            </button>
          </a>

          <h5 className="sidebar-title">Daily Use</h5>
          <SidebarItem
            image={
              <Image
                src="/icons/ic-screen.svg"
                height="30"
                width="30"
                alt="stream"
              />
            }
            title="Overview"
            href="/admin"
            active={activeMenu == "overview"}
          />
          <SidebarItem
            image={
              <Image
                src="/icons/ic-screen.svg"
                height="30"
                width="30"
                alt="stream"
                fill={'red'}
              />
            }
            title="User"
            href="/admin/user"
            active={activeMenu == "user"}
          />
          <button onClick={onLogout}>
            <h5 className="mt-20 text-[#ABB3C4]">Logout</h5>
          </button>
        </aside>
      </div>
    </>
  );
}
