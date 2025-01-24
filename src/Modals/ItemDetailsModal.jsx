import { Dialog, DialogPanel } from "@headlessui/react";
import { useEffect, useState } from "react";

import React from "react";
import { FaEye } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAddToCart from "../Hooks/useAddToCart";
import { Helmet } from "react-helmet-async";

const ItemDetailsModal = ({ item }) => {
  let [isOpen, setIsOpen] = useState(false);
  const {
    itemName,
    genericName,
    category,
    company,
    massUnit,
    discount,
    price,
    description,
    image,
  } = item || {};
  const { userInfo } = useAuth();
  const [addToCart, isLoading, refetch] = useAddToCart();
  const navigate = useNavigate();

  const handleAddToCart = async (item) => {
    console.log(item);
    if (!userInfo?.email) {
      navigate("/login");
    }
    addToCart(item);
  };

  return (
    <>
      <Helmet>
        <title>{itemName} Details | Medi Nest</title>
      </Helmet>
      <button
        onClick={() => setIsOpen(true)}
        className="text-primary px-2 h-5 flex items-center rounded-xl text-xl cursor-pointer hover:text-black transition-colors duration-300"
      >
        <FaEye className="" />
      </button>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen  overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4 my-10">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl p-6 border-2 backdrop-blur-md duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className=" inset-0  flex justify-center items-center">
                <div className=" rounded-lg">
                  {/* Close Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-red-600 hover:scale-110 transition-all duration-300 hover:text-primary bg-white rounded-full w-8 h-8 p-1 flex items-center justify-center border-2"
                  >
                    <IoClose />
                  </button>

                  {/* Product Image */}
                  <div className="w-full h-64 bg-gray-100 overflow-hidden rounded-md">
                    <img
                      src={image}
                      alt={itemName}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-blue-600">
                      {itemName}
                    </h2>
                    <p className="text-sm text-gray-500 italic">
                      {genericName}
                    </p>
                    <p className=" mt-2 text-gray-800">
                      <span className="font-semibold">Category: </span>
                      {category}
                    </p>
                    <p className=" text-gray-800">
                      <span className="font-semibold">Company: </span> {company}
                    </p>
                    <p className=" text-gray-800">
                      <span className="font-semibold">Mass Unit: </span>
                      {massUnit}
                    </p>

                    {/* Price and Discount */}
                    <div className="mt-4 flex items-center gap-4">
                      <p className="text-lg font-bold text-green-600">
                        {discount > 0 ? (
                          <p>
                            ${(price - (price * discount) / 100).toFixed(2)}{" "}
                            &nbsp;
                            <span className="line-through mr-2 text-gray-400 text-base font-semibold">
                              ${price}
                            </span>
                          </p>
                        ) : (
                          <span>$ {price.toFixed(2)}</span>
                        )}
                      </p>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold">
                        {" "}
                        Save &nbsp;$
                        {discount > 0 &&
                          (price - (price - (price * discount) / 100)).toFixed(
                            2
                          )}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-gray-600">{description}</p>

                    {/* Action Buttons */}
                    <div className="mt-6 flex justify-between items-center"></div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <button className="green-button" onClick={()=>handleAddToCart(item)}>
                  Add To Cart
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ItemDetailsModal;
// ======
