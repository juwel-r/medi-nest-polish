import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { showAlert, showToast } from "../Utils/alerts";
import photoUpload from "../Utils/photoUpload";
import useAuth from "../Hooks/useAuth";
import { Helmet } from "react-helmet-async";

const AdvertisementRequestModal = ({ item, refetch }) => {
  let [isOpen, setIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const [selectedImage, setSelectedImage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  //add a new medicine handler
  const onSubmit = async (data) => {
    const { bannerImage, ...formData } = data;
    try {
      const photoURL = await photoUpload(data.bannerImage[0]);
      try {
        formData.bannerImage = photoURL;
        formData.status = "Requested";
        const res = await axiosSecure.patch(
          `/items/slider/${item._id}?type=request`,
          formData
        );
        if (res.data.modifiedCount > 0) {
          showToast(
            `${item.itemName} successfully Requested to add!`,
            "success"
          );
          refetch();
        }
      } catch (error) {
        showAlert({
          title: "Something went wrong!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      showAlert({
        title: "Image Upload Failed!",
        text: error.message,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Advertisement Request Info | Medi Nest</title>
      </Helmet>
      <button onClick={() => setIsOpen(true)}>Add</button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-[600px]  rounded-xl bg-black/50 p-6 backdrop-blur-sm duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              {/* close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-red-600 hover:scale-110 transition-all duration-300 hover:text-primary bg-white rounded-full w-8 h-8 p-1 flex items-center justify-center border-2"
              >
                <IoClose />
              </button>
              {/* content */}
              <div className="text-white">
                <h1 className="font-bold text-xl mb-6">
                  {`${item ? "Update Category Details" : "Add New Category"}`}
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="">
                  <div>
                    <label className="text-xs">Upload Image For Slider</label>
                    <input
                      onChange={handleImageChange}
                      type="file"
                      accept="image/*"
                      {...register("bannerImage", { required: true })}
                      className="w-full bg-white/10 rounded-lg px-4 py-2 border border-white/20 focus:outline outline-white/50"
                    />
                    {errors.bannerImage && (
                      <p className="text-sm text-warning" role="alert">
                        Image is required!
                      </p>
                    )}
                    {selectedImage && (
                      <div className="mt-4">
                        <img
                          src={selectedImage}
                          alt="Selected"
                          className="max-w-full h-auto rounded-md"
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="text-xs">Short Description</label>
                    <textarea
                      {...register("bannerDescription", { required: true })}
                      rows="3"
                      className="w-full bg-white/10 rounded-lg px-4 py-2 border border-white/20 focus:outline outline-white/50"
                    ></textarea>
                    {errors.bannerDescription && (
                      <p className="text-sm text-warning" role="alert">
                        Short Description is required!
                      </p>
                    )}
                  </div>

                  <div className="flex justify-end">
                    <input
                      type="submit"
                      value="Send Request"
                      className="green-button mt-6 cursor-pointer"
                    />
                  </div>
                </form>
              </div>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-black/30 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-black/10 focus:outline-none data-[hover]:bg-white/20 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700 "
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default AdvertisementRequestModal;
