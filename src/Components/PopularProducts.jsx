import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Coffee from "./coffee";

const PopularProducts = () => {

  const [coffee, setCoffee] = useState([]);

  useEffect(()=> {
    fetch('http://localhost:5001/coffee')
    .then(res => res.json())
    .then(data => {
      setCoffee(data);
    })
  },[])

  //  console.log(coffee);

  return (
    <>
      <section className="mb-12">
        <div className="container mx-auto px-5">
          <div className="text-center my-8 space-y-5">
            <h2 className="text-4xl">Our Popular Products</h2>
            <Link to="/addCoffee" className="block">
              <button className="text-xl bg-yellow-600 px-4 py-1 text-white">
                Add Coffee
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Item start */}
            {
              coffee.map(item => <Coffee key={item._id} item={item} coffee={coffee} setCoffee={setCoffee} />)
            }
           
            {/* Item end */}
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularProducts;
