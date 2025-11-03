import { Link, useLoaderData, useNavigate, useParams } from "react-router";

const ProductsDetails = () => {
  const { _id } = useParams();
  const products = useLoaderData();
  console.log(products);
  const product = products.find((item) => item._id === _id);
  console.log("get product", product);
  const navigate = useNavigate();
  //   if (loading) return <div>Loading...</div>;
  //   if (!product) return <div>Product not found.</div>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover mb-4"
      />
      <p className="mb-2">{product.description}</p>
      <p className="mb-2 font-semibold">
        Price: ৳
        {product.minPrice === product.maxPrice
          ? product.minPrice
          : `${product.minPrice}  ${product.maxPrice}`}
      </p>
      <p className="mb-2">Condition: {product.condition}</p>
      <p className="mb-2">Location: {product.location}</p>
      <div className="flex items-center gap-2 mt-4">
        <img
          src={product.sellerImage}
          alt={product.seller_name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <div>
            <p className="font-semibold">{product.sellerName}</p>
            <p>Contact: {product.sellerEmail}</p>
            <p>Contact: {product.sellerContact}</p>
          </div>
          <div className="flex gap-2 mt-2">
             <button className="btn" onClick={() => navigate(`/update/${product._id}`)}>
            Update
        </button>
            <button className="btn">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
