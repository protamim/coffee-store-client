import { useLoaderData } from "react-router-dom";


const CoffeeDetails = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <>
            <h2>Coffee details: {data._id} </h2>
        </>
    );
};

export default CoffeeDetails;