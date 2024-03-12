import Image from "next/image";
import Link from "next/link";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { useState } from "react";
import Modal from "./Modal";
import productList from "./products"; // Import productList

const MenuItem = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({ name: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (productId) => {
    setSelectedProduct(productId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    closeModal();
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        handleSubmit={handleSubmit}
        formData={formData}
        handleInputChange={handleInputChange}
        productTitle={
          selectedProduct
            ? productList.find((product) => product.id === selectedProduct).title
            : ""
        }
      />
      {productList.map((product) => (
        <div key={product.id} className="bg-secondary rounded-3xl relative">
          <div className="w-full bg-[#f1f2f3] h-[210px] grid place-content-center rounded-bl-[46px] rounded-tl-2xl rounded-tr-2xl ">
            <Link href={`/product/${product.id}`}>
              <div className="relative w-36 h-36 hover:scale-110 transition-all">
                <Image src={product.img} alt="" layout="fill" className="rounded-full" />
              </div>
            </Link>
          </div>
          <div className="p-[25px] text-white ">
            <h4 className="text-xl font-semibold mb-3 ">{product.title}</h4>
            <p className="text-[15px]">{product.desc}</p>
            <div className="flex justify-between items-center mt-4">
              <span>{product.prices}</span>
              <button
                className="btn-primary !w-10 !h-10 !rounded-full !p-0 grid place-content-center absolute bottom-4 right-5"
                onClick={() => {
                  openModal(product.id);
                }}
              >
                <RiShoppingCart2Fill />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuItem;
