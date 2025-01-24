import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { showAlert, showToast } from "../Utils/alerts";
import photoUpload from "../Utils/photoUpload";
import useAuth from "../Hooks/useAuth";
import { Helmet } from "react-helmet-async";

const AddCategoryModal = ({ refetch, categories, company }) => {
  let [isOpen, setIsOpen] = useState(false);
  const { userInfo } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //add a new medicine handler
  const onSubmit = async (data) => {
    const { image, ...formData } = data;
    const photoURL = await photoUpload(data.image[0]);

    formData.price = parseFloat(data.price);
    formData.discount = parseFloat(data.discount);

    formData.sellerEmail = userInfo.email;
    console.log(formData);
    formData.image = photoURL;

    if (photoURL) {
      axiosSecure
        .post("/items", formData)
        .then((res) => {
          if (res.data.insertedId) {
            showToast(`${formData.itemName} has been added successfully!`);
            setIsOpen(false);
            reset();
            refetch();
          }
        })
        .catch((error) => {
          showAlert({
            title: "Something went wrong!",
            text: error.message,
            icon: "error",
            confirmButtonText: "Try Again",
          });
          setIsOpen(false);
        });
    } else {
      showAlert({
        title: "Photo Upload Failed!",
        text: "",
        icon: "error",
        confirmButtonText: "Try Again",
      });
      setAuthLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Add Medicine | Medi Nest</title>
      </Helmet>
      <button onClick={() => setIsOpen(true)} className="py-1 md:text-xl">
        Add Medicine
      </button>

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
                <h1 className="font-bold text-xl mb-6">Add New Medicine</h1>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-4"
                >
                  <div className="col-span-1 lg:col-span-2">
                    <label className="text-xs">Item Name</label>
                    <input
                      {...register("itemName", { required: true })}
                      className="w-full bg-white/10 rounded-lg px-4 py-2 border border-white/20 focus:outline outline-white/50"
                    />
                    {errors.itemName && (
                      <p className="text-sm text-warning" role="alert">
                        Item Name is required!
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs">Generic Name</label>
                    <input
                      {...register("genericName", { required: true })}
                      className="w-full bg-white/10 rounded-lg px-4 py-2 border border-white/20 focus:outline outline-white/50"
                    />
                    {errors.genericName && (
                      <p className="text-sm text-warning" role="alert">
                        Generic Name is required!
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs">Short Description</label>
                    <textarea
                      {...register("description", { required: true })}
                      rows="3"
                      className="w-full bg-white/10 rounded-lg px-4 py-2 border border-white/20 focus:outline outline-white/50"
                    ></textarea>
                    {errors.shortDescription && (
                      <p className="text-sm text-warning" role="alert">
                        Description is required!
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs">Upload an Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      {...register("image", { required: true })}
                      className="w-full bg-white/10 rounded-lg px-4 py-2 border border-white/20 focus:outline outline-white/50"
                    />
                    {errors.image && (
                      <p className="text-sm text-warning" role="alert">
                        Image is required!
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs">Category</label>
                    <select
                      {...register("category", { required: true })}
                      className="w-full bg-white/10 rounded-lg px-4 py-2 border border-white/20 focus:outline outline-white/50 custom-select"
                    >
                      <option value="">Select a category</option>
                      {categories &&
                        categories.length > 0 &&
                        categories.map((category) => (
                          <option key={category._id} value={`${category.name}`}>
                            {category.name}
                          </option>
                        ))}
                    </select>
                    {errors.category && (
                      <p className="text-sm text-warning" role="alert">
                        Category is required!
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs">Company</label>
                    <select
                      {...register("company", { required: true })}
                      className="w-full bg-white/10 rounded-lg px-4 py-2 border border-white/20 focus:outline outline-white/50 custom-select"
                    >
                      <option value="">Select a company</option>
                      {company &&
                        company.length > 0 &&
                        company.map((com) => (
                          <option key={com._id} value={`${com.name}`}>
                            {com.name}
                          </option>
                        ))}
                    </select>
                    {errors.company && (
                      <p className="text-sm text-warning" role="alert">
                        Company is required!
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs">Item Mass Unit (Mg or ML)</label>
                    <input
                      {...register("massUnit", { required: true })}
                      placeholder="Enter Mg or ML"
                      className="w-full bg-white/10 rounded-lg px-4 py-2 border border-white/20 focus:outline outline-white/50"
                    />
                    {errors.massUnit && (
                      <p className="text-sm text-warning" role="alert">
                        Mass Unit is required!
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs">Per Unit Price</label>
                    <input
                      type="number"
                      step="0.01"
                      {...register("price", { required: true })}
                      className="w-full bg-white/10 rounded-lg px-4 py-2 border border-white/20 focus:outline outline-white/50"
                    />
                    {errors.unitPrice && (
                      <p className="text-sm text-warning" role="alert">
                        Unit Price is required!
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs">Discount Percentage</label>
                    <input
                      type="number"
                      step="0.01"
                      defaultValue={0}
                      {...register("discount", { required: false })}
                      className="w-full bg-white/10 rounded-lg px-4 py-2 border border-white/20 focus:outline outline-white/50"
                    />
                  </div>

                  <div className="col-span-1 lg:col-span-2">
                    <input
                      type="submit"
                      value="Add Now"
                      className="green-button mt-6"
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

export default AddCategoryModal;
