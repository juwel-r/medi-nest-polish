import { useNavigate } from "react-router-dom";
import useAddToCart from "../Hooks/useAddToCart";
import useAuth from "../Hooks/useAuth";
import ItemDetailsModal from "../Modals/ItemDetailsModal";
import './table.css'
//todo: need to change font
const Table = ({ items }) => {
  const { userInfo } = useAuth();
  const [addToCart, data, isLoading, refetch] = useAddToCart();
  const navigate = useNavigate();

  const handleAddToCart = async (item) => {
    if (!userInfo?.email) {
      navigate("/login");
    }
    addToCart(item);
  };
  return (
    <table className="table table-zebra shop-table mt-4 md:mt-8">
      {/* head */}
      <thead className="">
        <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Generic Name</th>
          <th>Category</th>
          <th>Company</th>
          <th className="text-center">Price</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={item._id}>
            <th>{index + 1}</th>
            <td>{item.itemName}</td>
            <td>{item.genericName}</td>
            <td>{item.category}</td>
            <td>{item.company}</td>
            <td className="text-right">
              {item.discount > 0 ? (
                <p>
                  <span className="line-through mr-2 text-gray-400">
                    ${item.price}
                  </span>
                  $
                  {(item.price - (item.price * item.discount) / 100).toFixed(2)}
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
  );
};

export default Table;
