import { useNavigate } from "react-router-dom";
import useAddToCart from "../Hooks/useAddToCart";
import useAuth from "../Hooks/useAuth";
import ItemDetailsModal from "../Modals/ItemDetailsModal";
import { showToast } from "../Utils/alerts";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Fade } from "react-awesome-reveal";
import { BiCategory } from "react-icons/bi";
import { FaSortNumericDown, FaSortNumericUp } from "react-icons/fa";
import { space } from "postcss/lib/list";
const MedicineCard = ({ apiEndPoint }) => {
  const { userInfo } = useAuth();
  const [addToCart] = useAddToCart();
  const [medicines, setMedicines] = useState([]);
  const axiosPublic = useAxiosPublic();
  const [sortPrice, setSortPrice] = useState(null);
  const medicineCount = medicines.totalItem;
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  // pagination setup
  const [currentPage, setCurrentPage] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(8);
  const totalPage = Math.ceil((medicineCount || 0) / (itemPerPage || 1));
  const pages = [...Array(totalPage).keys()];

  useEffect(() => {
    axiosPublic(
      `${apiEndPoint}?currentPage=${currentPage}&itemPerPage=${itemPerPage}&sort=${sortPrice}&search=${searchValue}`
    ).then((result) => setMedicines(result.data));
  }, [currentPage, itemPerPage, sortPrice, searchValue]);

  //add to cart
  const handleAddToCart = async (item) => {
    if (!userInfo?.email) {
      navigate("/login");
      return showToast("Please login to add cart!", "info");
    }
    addToCart(item);
  };

  const handleItemPerPage = (e) => {
    setItemPerPage(parseInt(e.target.value));
    setCurrentPage(0);
  };
  return (
    <div className="px-4">
      {/* Search input sort */}
      <div className="px-4 flex justify-between">
        <fieldset className="w-fit my-2 border border-gray-200/50 rounded-md  shadow-sm ">
          <label htmlFor="Search" className="hidden">
            Search
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2 ">
              <button
                type="button"
                title="search"
                className="p-1 focus:outline-none focus:ring"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 "
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              type="search"
              name="Search"
              placeholder="Search..."
              className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none  focus:dark:bg-gray-50 focus:dark:border-violet-600"
            />
          </div>
        </fieldset>
        <button
          onClick={() =>
            !sortPrice ? setSortPrice(1) : setSortPrice(sortPrice * -1)
          }
          className="green-button flex items-center gap-2"
        >
          Sort
          {!sortPrice || sortPrice === 1 ? (
            <span className="flex items-center gap-2">
              AZ
              <FaSortNumericDown />
            </span>
          ) : (
            <span className="flex items-center gap-2">
              ZA
              <FaSortNumericUp />
            </span>
          )}
        </button>
      </div>

      {/* Card */}
      <div className="overflow-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {medicines.result &&
            medicines.result.length > 0 &&
            medicines.result.map((item, index) => (
              <Fade key={item._id} triggerOnce delay={index * 100}>
                <div className="h-full shadow-md rounded-lg overflow-hidden p-4 flex flex-col transition hover:shadow-lg border border-gray-300/50">
                  <div className="w-full h-44 rounded-t-md overflow-hidden bg-center mb-4">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {/* Medicine Name */}
                  <h2 className="text-lg font-semibold">{item.itemName}</h2>
                  <p className="text-sm text-gray-500">{item.genericName}</p>

                  {/* Medicine Details */}
                  <div className="mt-3 flex flex-col gap-1 text-gray-500">
                    <p className="flex items-center gap-2">
                      <BiCategory />
                      <span>{item.category}</span>
                    </p>
                    <p>
                      <span className="text-sm">
                        {item.description.slice(0, 55)}...
                      </span>
                    </p>
                  </div>

                  {/* View Details */}
                  <ItemDetailsModal item={item}></ItemDetailsModal>
                  {/* Price & Discount */}

                  {/* Actions */}
                  <div className="mt-auto flex items-center justify-between border-t border-gray-300/50 pt-3">
                    <div className="mt-3 flex justify-between items-center">
                      {item.discount > 0 ? (
                        <p className="text-primary font-semibold">
                          <span className="line-through text-gray-400 mr-2">
                            ${item.price}
                          </span>
                          $
                          {(
                            item.price -
                            (item.price * item.discount) / 100
                          ).toFixed(2)}
                        </p>
                      ) : (
                        <p className="text-gray-500 font-semibold">
                          ${item.price.toFixed(2)}
                        </p>
                      )}
                    </div>
                    {/* Select Button */}
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="btn btn-sm bg-primary text-white rounded-full hover:bg-primary/30 hover:text-primary"
                    >
                      Add Cart
                    </button>
                  </div>
                </div>
              </Fade>
            ))}
        </div>
      </div>

      {/* Pagination*/}
      <div className="mx-auto text-center space-x-6 mt-6 md:mt-12 mb-2 flex md:flex-row flex-col justify-center items-center gap-4">
        {/* Numbers */}
        <div className="flex gap-6">
          <IoIosArrowBack
            onClick={() => currentPage > 0 && setCurrentPage(currentPage - 1)}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Previous"
            className="text-2xl w-8 h-10 outline-none cursor-pointer"
          />
          {pages.map((page, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={`p-1.5 outline outline-1 outline-gray-400/50 px-4 rounded-md font-semibold transition-all duration-300 ${
                page === currentPage && "bg-primary text-white "
              }`}
            >
              {page + 1}
            </button>
          ))}
          <IoIosArrowForward
            onClick={() =>
              currentPage < totalPage - 1 && setCurrentPage(currentPage + 1)
            }
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Next"
            className="text-2xl w-8 h-10 outline-none  cursor-pointer"
          />
        </div>
        {/* Limit */}
        <div className="flex items-center outline outline-1 outline-black/30 py-1.5 pl-2 rounded-md">
          <p> Limit </p>
          <select
            onChange={handleItemPerPage}
            className="text-center outline-none text-primary font-bold"
          >
            <option value="">Select</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={12}>12</option>
            <option value={15}>15</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default MedicineCard;
