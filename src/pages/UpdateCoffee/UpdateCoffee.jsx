import { BiArrowBack } from "react-icons/bi";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const data = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = data;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const coffeeInfo = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    // console.log(coffeeInfo);

    fetch(`http://localhost:5001/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeeInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            icon: "success",
            text: "Updated successfully",
          });
        }
      });
  };

  return (
    <>
      <section>
        <div className="container mx-auto px-5">
          {/* Breadcam start */}
          <div className="my-8 text-xl">
            <Link to="/" className="flex gap-3 items-center">
              <BiArrowBack />
              <p> Back to Home</p>
            </Link>
          </div>
          {/* Breadcam end */}
          <div className="bg-yellow-100 px-12 py-10 space-y-12">
            <div className="text-center w-3/4 mx-auto space-y-4">
              <h2 className="text-3xl">Update Existing Coffee Details</h2>
              <p className="text-xl">
                It is a long established fact that a reader will be distraceted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here.
              </p>
            </div>
            <div>
              <form onSubmit={handleUpdateCoffee}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2 text-xl">
                    <span>Name</span>
                    <input
                      type="text"
                      name="name"
                      defaultValue={name}
                      placeholder="Coffee Name"
                    />
                  </div>
                  <div className="flex flex-col gap-2 text-xl">
                    <span>Chef</span>
                    <input
                      type="text"
                      name="chef"
                      defaultValue={chef}
                      placeholder="Coffee Chef"
                    />
                  </div>
                  <div className="flex flex-col gap-2 text-xl">
                    <span>Supplier</span>
                    <input
                      type="text"
                      name="supplier"
                      defaultValue={supplier}
                      placeholder="Coffee Supplier"
                    />
                  </div>
                  <div className="flex flex-col gap-2 text-xl">
                    <span>Taste</span>
                    <input
                      type="text"
                      name="taste"
                      defaultValue={taste}
                      placeholder="Coffee Taste"
                    />
                  </div>
                  <div className="flex flex-col gap-2 text-xl">
                    <span>Category</span>
                    <input
                      type="text"
                      name="category"
                      defaultValue={category}
                      placeholder="Coffee Category"
                    />
                  </div>
                  <div className="flex flex-col gap-2 text-xl">
                    <span>Details</span>
                    <input
                      type="text"
                      name="details"
                      defaultValue={details}
                      placeholder="Coffee Details"
                    />
                  </div>
                  <div className="col-span-2 flex flex-col text-xl">
                    <span>Photo</span>
                    <input
                      type="text"
                      name="photo"
                      defaultValue={photo}
                      placeholder="Photo URL"
                    />
                  </div>
                </div>
                <div className="text-center mt-8">
                  <button className="bg-indigo-300 w-full text-2xl text-yellow-950">
                    Update Coffee Details
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdateCoffee;
