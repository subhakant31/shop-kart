import './ProductCard.css';
function ProductCard(props) {
    const productImage = props.product.productImage;
    const prodcutName = props.product.productName;
    const productCaption = props.product.productCaption;
    const productPrice = props.product.productPrice;
  return (
    <li className="product-card-container">
      <div className="product-image-container">
        <img src={productImage} alt="product image" className='product-image' />
        <img src="./assets/images/arrow.png" alt="" className='redirect-product-btn'/>
      </div>
      <h2 className="product-heading">
        {prodcutName}
      </h2>
      <p className="product-caption">
        {productCaption}
      </p>
      <span className='product-price'>
        {productPrice}
      </span>
    </li>
  );
}

export default ProductCard;
