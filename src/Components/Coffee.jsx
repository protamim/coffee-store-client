import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const Coffee = ({ item, coffee , setCoffee }) => {
  const { name, _id, chef, photo } = item;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-server-protamim-protamims-projects.vercel.app/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            const deleted = coffee.filter(item => item._id !== id)
            setCoffee(deleted)
            console.log(data);
          });
      }
    });
  };

  return (
    <div className="flex px-5 gap-5 items-center justify-between bg-yellow-200">
      <div className="bg-transparent">
        <img className="w-36 bg-opacity-90" src={photo} alt="" />
      </div>
      <div className="flex-1 text-xl">
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Chef:</strong> {chef}
        </p>
        <p>
          <strong>Price:</strong> 890 Taka
        </p>
      </div>
      <div className="flex flex-col gap-5 text-white">
        <Link to={`/details/${_id}`} className="text-xl bg-pink-300 px-2 py-1 rounded-md">
          <AiOutlineEye />
        </Link>
        <Link
          to={`/update/${_id}`}
          className="text-xl bg-green-500 px-2 py-1 rounded-md"
        >
          <AiOutlineEdit />
        </Link>
        <Link
          onClick={() => handleDelete(_id)}
          className="text-xl bg-rose-600 px-2 py-1 rounded-md"
        >
          <AiOutlineDelete />
        </Link>
      </div>
    </div>
  );
};

Coffee.propTypes = {
  item: PropTypes.object.isRequired,
  setCoffee: PropTypes.func.isRequired,
  coffee: PropTypes.array.isRequired,
};

export default Coffee;
