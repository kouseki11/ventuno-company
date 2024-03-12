import Image from "next/image";
import Title from "./ui/Title";
import Slider from "react-slick";
import Link from "next/link";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 30000,
    appenDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
    ),
  };

  return (
    <div className="h-screen w-full container mx-auto -mt-[88px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
          <Image
            src="/images/ocis.jpg"
            alt=""
            layout="fill"
            priority
            objectFit="cover"
          />
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className="relative text-white top-48 flex flex-col items-start gap-y-10">
            <Title addClass="text-6xl">OreoChez</Title>
            <p className="text-sm sm:w-2/5 w-full">
              Oreochez adalah camilan kekinian yang memadukan oreo dan cream
              cheese. Dibuat dengan mencampur oreo hancur dan cream cheese.
              Rasanya manis, gurih, dan sedikit pahit dengan tekstur renyah di
              luar dan lembut di dalam.
            </p>
            <Link href="/menu">
              <button type="button" className="btn-primary">
                Order Now
              </button>
            </Link>
          </div>
        </div>
        <div>
          <div className="mt-48  text-white flex flex-col items-start gap-y-10">
            <Title addClass="text-6xl">Gotaram</Title>
            <p className="text-sm sm:w-2/5 w-full">
              Goreng tahu cabe garam adalah hidangan camilan atau lauk yang
              terbuat dari tahu goreng yang dibalut dengan bumbu cabe garam yang
              gurih dan pedas. Hidangan ini populer di Indonesia dan banyak
              ditemukan di restoran, warung makan, dan pedagang kaki lima.
            </p>
            <Link href="/menu">
              <button type="button" className="btn-primary">
                Order Now
              </button>
            </Link>
          </div>
        </div>
        <div>
          <div className="relative text-white top-48 flex flex-col items-start gap-y-10">
            <Title addClass="text-6xl">Sogurt</Title>
            <p className="text-sm sm:w-2/5 w-full">
              Soda yogurt atau sogurt adalah tren kekinian yang memadukan Sprite
              dan Yakult. Rasanya manis, asam, dan segar dengan cara pembuatan
              yang mudah. Sogurt dapat dimodifikasi dengan buah-buahan, soda
              rasa lain, dan bentuk penyajian sesuai selera.
            </p>
            <Link href="/menu">
              <button type="button" className="btn-primary">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
