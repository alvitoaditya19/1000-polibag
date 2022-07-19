/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios';
import Cookies from 'js-cookie';
import Link from "next/link";
import { useRouter } from 'next/router';
import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setLogin } from '../services/auth';
import jwt_decode from "jwt-decode";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onSubmit = async () => {
    const data = {
      email,
      password,
    };

    if (!email || !password) {
      
      toast.error("Email dan Password wajib diisi!!!!!");
    } else {
      const response = await setLogin(data);
      if (response.error) {
        toast.error(response.message);
        console.log(response.message);
      } else {
        const response = await setLogin(data);
        if (response.error) {
          toast.error(response.message);
        } else {
          toast.success('Login Berhasil');
          const { token } = response.data;
          const tokenBase64 = btoa(token);

          const decodedHeader = jwt_decode(token);
          const user = decodedHeader.user.role;

          if(user == "user"){
            Cookies.set('token', tokenBase64, { expires: 1 });
            router.push('/user/dashboard');
          }else{
            Cookies.set('token', tokenBase64, { expires: 1 });
            router.push('/admin/dashboard');
          }

        }
      }
    }
  };
  return (
    <>
      <div className="bg-bgDark z-[-1] max-h-screen ">
        <div className="relative">
          <div className="hidden lg:block fixed z-[1]">
            {/* <img
              src="/images/signin/banner.webp"
              className="max-h-screen"
              alt="stream"
            /> */}
            <img
              src="/images/img-people.png"
              className="max-h-screen"
              alt="stream"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-12 font-poppins relative pb-20 pt-8 mx-auto max-w-screen overflow-auto h-screen">
          {/* <!-- Ornament --> */}
          <span className="fixed z-0 top-0">
            <img
              src="/images/signin/bg-bubble.svg"
              className="h-screen w-screen"
              alt="stream"
            />
          </span>
          {/* <!-- ./ --> */}

          <div className="col-span-12 col-start-1 lg:col-start-2 xl:col-start-4">
            <div className="pt-[30px] relative">
              {/* <!-- Logo --> */}
              <div className=" flex flex-row justify-center items-center">
                <button href="/" className="block lg:mx-0 mx-6">
                  <img src="/icons/ic-logo.svg" alt="stream" />
                </button>
              </div>

              <div className="pt-[40px] flex flex-col items-center gap-5 px-3">
                <div className="font-bold text-white text-4xl lg:text-[45px] text-center capitalize leading-snug">
                  Sign-In
                </div>
                {/* <!-- Form login --> */}
                <section className="w-11/12 max-w-[460px]">
                  <div
                    action=""
                    className="mt-[20px] flex flex-col bg-white p-[30px] rounded-2xl gap-6"
                  >
                    <div className="form-input flex flex-col gap-3">
                      <label
                        htmlFor="email"
                        className="text-base font-medium text-stream-dark"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="rounded-full py-3 pr-3 pl-6 text-stream-dark placeholder:text-stream-gray placeholder:font-normal font-medium outline outline-stream-gray outline-1 text-base focus:outline-indigo-600 input-stream"
                        placeholder="Your email address"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                    <div className="form-input flex flex-col gap-3">
                      <label
                        htmlFor="password"
                        className="text-base font-medium text-stream-dark"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="rounded-full py-3 pr-3 pl-6 text-stream-dark placeholder:text-stream-gray placeholder:font-normal font-medium outline-stream-gray outline outline-1 text-base focus:outline-indigo-600 input-stream"
                        placeholder="Your password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </div>
              
                    <button
                      className="bg-indigo-600 rounded-full py-3 mt-4 text-center"
                      onClick={onSubmit}
                    >
                      <span className="font-semibold text-white text-base">
                        Continue
                      </span>
                    </button>
                    {/* <!-- <button type="submit" class="bg-indigo-600 rounded-full py-3 mt-4 text-center">
                                <span class="font-semibold text-white text-base">Continue</span>
                            </button> --> */}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
