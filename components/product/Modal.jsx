import React, { useState, useRef } from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

const Modal = ({ isOpen, closeModal, productTitle }) => {
  const formRef = useRef(null);
  const scriptUrl = process.env.NEXT_PUBLIC_API_URL;
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState();
  const [preOrder, setPreOrder] = useState(true)

  const handleChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (Number.isInteger(newQuantity) && newQuantity > 0) {
      setQuantity(newQuantity);
    } else {
      setQuantity(""); // Reset to 0 or display error message
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(scriptUrl, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((res) => {
        if (res.ok) {
          console.log("SUCCESSFULLY SUBMITTED");
          toast.success(`Berhasil memesan ${productTitle}`);
          setLoading(false);
          closeModal(true);
          // Optionally, you can close the modal here or show a success message.
        } else {
          throw new Error("Failed to submit form data");
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        // Handle error, show error message, etc.
      });
  };

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        &#8203;
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-20 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary sm:mx-0 sm:h-10 sm:w-10">
                <RiShoppingCart2Fill
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-3 text-left sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  {productTitle === "Sogurt"
                    ?  "Sogurt hanya tersedia di Bazaar" :
                    preOrder == false ? `Terimakasih telah memesan ${productTitle} tunggu PO selanjutnya!` : `Pre-Order ${productTitle}`}
                </h3>
                {productTitle !== "Sogurt" && preOrder == true ? (
                  <div className="mt-2">
                    <form
                      ref={formRef}
                      onSubmit={handleSubmit}
                      name="google-sheet"
                    >
                      <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2 sm:col-span-1">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-black"
                          >
                            Nama
                          </label>
                          <div className="mt-1 ">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              autoComplete="given-name"
                              required
                              placeholder="Masukan nama anda"
                              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            />
                          </div>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                          <label
                            htmlFor="address"
                            className="block text-sm font-medium text-black"
                          >
                            Alamat
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="address"
                              id="address"
                              autoComplete="address"
                              required
                              placeholder="Masukan alamat anda"
                              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            />
                          </div>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                          <label
                            htmlFor="phoneNumber"
                            className="block text-sm font-medium text-black"
                          >
                            Nomor telpon
                          </label>
                          <div className="mt-1">
                            <input
                              type="tel"
                              name="phoneNumber"
                              id="phoneNumber"
                              autoComplete="tel"
                              required
                              placeholder="Masukan nomor telpon anda"
                              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            />
                          </div>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                          <label
                            htmlFor="quantity"
                            className="block text-sm font-medium text-black"
                          >
                            Jumlah
                          </label>
                          <div className="mt-1">
                            <input
                              type="number"
                              name="quantity"
                              id="quantity"
                              required
                              placeholder="Masukan jumlah pesanan"
                              className={`appearance-none block w-full px-3 py-2 border ${
                                quantity < 0
                                  ? "border-red-500"
                                  : "border-gray-300"
                              } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm`}
                              value={quantity}
                              onChange={handleChange}
                            />
                            {quantity < 0 && (
                              <p className="text-red-500 text-xs">
                                Quantity must be greater than 0.
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <input
                        type="hidden"
                        name="product"
                        id="product"
                        value={productTitle}
                        required
                        placeholder="Masukan jumlah pesanan"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                      />
                      <div className="sm:col-span-1">
                        <label
                          htmlFor="description"
                          className="block text-sm font-medium text-black"
                        >
                          Deskripsi
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="description"
                            name="description"
                            rows="2"
                            placeholder="Masukan deskripsi"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                          ></textarea>
                        </div>
                      </div>
                      <div className="mt-4">
                        {loading ? (
                          <div className="inline-flex justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                            Loading...
                          </div>
                        ) : (
                          <input
                            type="submit"
                            className="inline-flex justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-primary hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer"
                            value="Pesan"
                          />
                        )}
                      </div>
                    </form>
                    <div className="mt-2">
                      <button
                        onClick={closeModal}
                        className="inline-flex justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                      >
                        Batal
                      </button>
                    </div>
                  </div>
                ) : productTitle == "Sogurt" ? (
                  <div className="mt-2">
                    <Image
                      src="/gif/menhera-chan.gif"
                      alt="menhera"
                      width={280}
                      height={280}
                    />
                    <button
                      onClick={closeModal}
                      className="inline-flex justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                    >
                      Close
                    </button>
                  </div>
                ) : ( <div className="mt-2">
                <Image
                  src="/gif/menhera.gif"
                  alt="menhera"
                  width={280}
                  height={280}
                />
                <button
                  onClick={closeModal}
                  className="inline-flex justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                >
                  Close
                </button>
              </div> )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
