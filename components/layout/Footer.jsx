import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import axios from "axios";

const Footer = () => {
  const [footer, setFooter] = useState([]);
  useEffect(() => {
    const getFooter = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/footer`
        );
        setFooter(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getFooter();
  }, []);
  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto pt-16 pb-6">
        <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-6 ">
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Contact Us</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <a href="/" target="_blank" rel="noreferrer">
                <i className="fa fa-map-marker"></i>
                <span className="inline-block ml-2">SMK Wikrama Bogor</span>
              </a>
              <div>
                <i className="fa fa-phone"></i>
                <a
                  className="inline-block ml-2"
                  href="tel:6283811972903"
                >
                  083811972903
                </a>
              </div>
              <a href="mailto:ventuno@gmail.com">
                <i className="fa fa-envelope"></i>
                <span className="inline-block ml-2">ventuno@gmail.com</span>
              </a>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[38px]">Ventuno</Title>
            <p className="mt-3 font-bold">Harga Murah Rasanya Wah!</p>
            <div className="flex items-center justify-center mt-5 gap-x-2">
                <a
                  href="https://instagram.com/ventuno.idn"
                  className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:text-white hover:bg-primary transition-all transform hover:scale-110 "
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-instagram"></i>
                </a>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Opening Hours</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <div>
                <span className="inline-block ml-2">
                  Pre-Order | Bazaar
                </span>
              </div>
              <div>
                <span className="inline-block ml-2">
                  Coming Soon!
                </span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-10">
          © 2024 All Rights Reserved By Ventuno
        </p>
      </div>
    </div>
  );
};

export default Footer;
