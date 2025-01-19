import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { showAlert, showToast } from "../Utils/alerts";

const AddCategoryModal = ({ item, refetch }) => {
  let [isOpen, setIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      if (item) {
        const res = await axiosSecure.patch(`/category/${item._id}`, data);
        if (res.data.modifiedCount > 0) {
          showToast(`${item.name} is updated as ${data.name}!`, "success");
          setIsOpen(false);
          refetch();
        }
      } else {
        const res = await axiosSecure.post(`/category`, data);
        if (res.data.insertedId) {
          showToast(`${data.name} is added successfully!`, "success");
          setIsOpen(false);
          refetch();
        }
      }
    } catch (error) {
      if (error.status === 400) {
        return showAlert({
          title: "Already Exist!",
          text: `A category named with "${data.name}" is already added.`,
          icon: "warning",
          confirmButtonText: "Try Another Name",
        });
      }
      console.log(error);
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`${item ? "alert-button-success " : ""}`}
      >
        {`${item ? "Update" : "Add New"}`}
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
              className="w-full max-w-md rounded-xl bg-black/20 p-6 backdrop-blur-sm duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
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
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-2"
                >
                  <label className="text-xs">Category Name</label>
                  <input
                    defaultValue={item?.name}
                    {...register("name", { required: true })}
                    className="w-full bg-white/10 rounded-lg px-4 py-2 border border-white/20 focus:outline outline-white/50"
                  />
                  {errors.name && (
                    <p className="text-sm text-warning" role="alert">
                      Category Name is required!
                    </p>
                  )}
                  <label className="text-xs mt-2">Image URL</label>
                  <input
                    defaultValue={item?.categoryImage}
                    type="url"
                    {...register("categoryImage", { required: true })}
                    className="w-full bg-white/10 rounded-lg px-4 py-2 border border-white/20 focus:outline outline-white/50"
                  />
                  {errors.categoryImage && (
                    <p className="text-sm text-warning" role="alert">
                      Category Image URL is required!
                    </p>
                  )}
                  <input
                    type="submit"
                    value={`${item ? "Update" : "Add Now"}`}
                    className="green-button mt-6"
                  />
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
// ======
