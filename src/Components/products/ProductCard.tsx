interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image?: string;
}

const ProductCard = ({ name, price, image }: ProductCardProps) => {
  return (
    <div className="product-card">
      {image && <img src={image} alt={name} />}
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
};

export default ProductCard;
