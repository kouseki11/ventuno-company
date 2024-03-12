import Image from "next/image";
import Title from "./ui/Title";

const About = () => {
  return (
    <div className="bg-secondary py-14">
      <div className="container mx-auto flex items-center text-white gap-20 justify-center flex-wrap-reverse">
        <div className="flex justify-center">
          <div className="relative sm:w-[445px] sm:h-[400px]  flex justify-center w-[300px] h-[300px]">
            <Image src="/images/ventuno.jpg" alt="" layout="fill" />
          </div>
        </div>
        <div className="md:w-1/2 ">
          <Title addClass="text-[40px]">We Are Ventuno</Title>
          <p className="my-5 flex flex-col items-center">
            Ventuno company berdiri sejak Februari 2024 dan perusahaan yang
            bergerak di bidang F&B Product. Kami bercita - cita untuk menjadi
            perusahaan yang dikenal oleh masyarakat dengan kelezatan produk yang
            kita hadirkan. Kita mempunyai 3 produk yang akan dipasarkan. Yang
            pertama ada Soda Yogurt (Sogurt), Oreo Cream Cheese (OreoChez), dan
            Tahu Cabai Garam (GoTaram). Dengan produk yang kami miliki, kami
            berharap masyarakat dapat menikmati produk yang kami keluarkan
            dengan perasaan yang bahagia dan puas atas kelezatan produk yang
            kami miliki.
          </p>
          <p className="my-5 flex flex-col items-center">
            "Ventuno Company" adalah kombinasi kata yang terdiri dari Ventuno
            dalam bahasa Italia yang berarti "dua puluh satu," dan "Company"
            dalam bahasa Inggris yang berarti perusahaan. Sehingga secara
            harfiah, "Ventuno Company" dapat diartikan sebagai "Perusahaan Dua
            Puluh Satu."
          </p>
          <a href="https://instagram.com/ventuno.idn" target="_blank" rel="noopener noreferrer" className="btn-primary">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default About;
