import React from "react";
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Customers = () => {
  function NextBtn({ onClick }) {
    return (
      <button
        className="absolute -bottom-12 left-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full text-white"
        onClick={onClick}
      >
        <IoIosArrowForward />
      </button>
    );
  }

  function PrevBtn({ onClick }) {
    return (
      <button
        className="absolute -bottom-12 right-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full text-white mr-2"
        onClick={onClick}
      >
        <IoIosArrowBack />
      </button>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto mb-20 mt-12">
      <Title addClass="text-[40px] text-center">What Says Our Customers</Title>
      <Slider {...settings}>
        <CustomerItem
          name="Menhera"
          from="Menhera-chan"
          imgSrc="/images/menhera-1.png"
          comment="Enak enakk pedesnya nampol gile sih, cuma agak keras diterigunya aja mungkin harus anget ya baru crispy, overall mantap sih, thanks😁👍🏻"
        />
        <CustomerItem
        name="Raiden Ei"
        from="Genshin Impact"
        imgSrc="/images/ei.png"
        comment="Tahunya enakkk, pedesnya pass menurut gua yang ga lebayyy. terus lagii kalo diganti ayam menunya enakk btl btll"
        />
        <CustomerItem
          name="Menhera"
          from="Menhera-chan"
          imgSrc="/images/menhera-1.png"
          comment="Anjay impruve gini oreochez lu tekstur pas, rasa ny skrg lebih kerasa keju nya, bubuk oreo ny lebih halus cream ny rata gada yg ngegumpel kyk yg sebelumnya, enak lah pokoknya"
        />
        <CustomerItem
        name="Raiden Ei"
        from="Genshin Impact"
        imgSrc="/images/ei.png"
        comment="Entr klo ad lgi Blang yau, Ak mau mesen lgi 100000/10 Enakkk tauuu"
        />
      </Slider>
    </div>
  );
};

export default Customers;
