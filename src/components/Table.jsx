import { useNavigate } from "react-router-dom";
import useAddToCart from "../Hooks/useAddToCart";
import useAuth from "../Hooks/useAuth";
import ItemDetailsModal from "../Modals/ItemDetailsModal";
import "./table.css";
import { showToast } from "../Utils/alerts";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsSortNumericUpAlt } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
//todo: need to change font
const Table = ({ apiEndPoint }) => {
  const { userInfo } = useAuth();
  const [addToCart] = useAddToCart();
  const [medicines, setMedicines] = useState([]);
  const axiosPublic = useAxiosPublic();
  const [sortPrice, setSortPrice] = useState(null);
  const medicineCount = medicines.totalItem;
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  // pagiantion setup
  const [currentPage, setCurrentPage] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(5);
  const totalPage = Math.ceil((medicineCount || 0) / (itemPerPage || 1));
  const pages = [...Array(totalPage).keys()];

  console.log(searchValue);
  useEffect(() => {
    axiosPublic(
      `${apiEndPoint}?currentPage=${currentPage}&itemPerPage=${itemPerPage}&sort=${sortPrice}&search=${searchValue}`
    ).then((result) => setMedicines(result.data));
    console.log(apiEndPoint);
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
  console.log(sortPrice);
  return (
    <div className="px-4">
      {/* Search input */}
      <div>
        <fieldset className="w-fit dark:text-gray-800 my-2 border rounded-md shadow-sm ">
          <label htmlFor="Search" className="hidden">
            Search
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="button"
                title="search"
                className="p-1 focus:outline-none focus:ring"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 dark:text-gray-800"
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
              className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600"
            />
          </div>
        </fieldset>
      </div>
      <table className="table table-zebra shop-table mt-4 md:mt-8">
        {/* head */}
        <thead className="">
          <tr className="text-base">
            <th>Index</th>
            <th>Name</th>
            <th>Generic Name</th>
            <th>Category</th>
            <th>Company</th>
            <th
              onClick={() =>
                !sortPrice ? setSortPrice(1) : setSortPrice(sortPrice * -1)
              }
              className="text-center flex items-center justify-center gap-1 cursor-pointer hover:text-primary btn btn-ghost hover:bg-primary/10 text-gray-500"
            >
              <span className="text-base"> Price </span>
              <BsSortNumericUpAlt className="text-xl" />
            </th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {medicines.result &&
            medicines.result.length > 0 &&
            medicines.result.map((item, index) => (
              <tr key={item._id}>
                <th><Fade direction="down" delay={index*100}>{index + 1}</Fade></th>
                <td><Fade direction="down" delay={index*100}>{item.itemName}</Fade></td>
                <td><Fade direction="down" delay={index*100}>{item.genericName}</Fade></td>
                <td><Fade direction="down" delay={index*100}>{item.category}</Fade></td>
                <td><Fade direction="down" delay={index*100}>{item.company}</Fade></td>
                <td className="text-right">
                  {item.discount > 0 ? (
                    <p>
                      <span className="line-through mr-2 text-gray-400">
                        ${item.price}
                      </span>
                      $
                      {(
                        item.price -
                        (item.price * item.discount) / 100
                      ).toFixed(2)}
                    </p>
                  ) : (
                    <span>$ {item.price.toFixed(2)}</span>
                  )}
                </td>
                {/* eye icon */}

                <td className="flex items-center justify-evenly gap-2 border-l">
                  <ItemDetailsModal item={item}></ItemDetailsModal>

                  {/* select button */}
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="btn btn-xs bg-primary text-white rounded-full hover:bg-primary/30 hover:text-primary"
                  >
                    Select
                  </button>
                  {/* //i want to use isLoading at here */}
                </td>
              </tr>
            ))}
          {/* row 1 */}
        </tbody>
      </table>
      <div className="mx-0 m-auto text-center space-x-6 mt-6 mb-2 flex justify-center items-center">
        <IoIosArrowBack
          onClick={() => currentPage > 0 && setCurrentPage(currentPage - 1)}
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Previous"
          className="text-2xl w-8 h-10 outline-none cursor-pointer"
        />
        {pages.map((page) => (
          <button
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
        <div className="flex items-center outline outline-1 outline-black/30 py-1.5 pl-2 rounded-md">
          <p> Limit </p>
          <select
            onChange={handleItemPerPage}
            className="text-center outline-none text-primary font-bold"
          >
            <option value="">Select</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Table;
