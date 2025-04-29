const ProductCard = ({ product }) => {
    return (
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-blue-600">
              {product.price.toLocaleString()} ₽
            </span>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;