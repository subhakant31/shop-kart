import "./ProductsPage.css";
import ProductCard from "./product card/ProductCard";

const products = [
  {
    productId: 1,
    productImage: "./assets/images/product1.png",
    productName: "florida jacket",
    productCaption:
      "Suffered alteration in some form, bysuffalterattion in some forme, byinjected humor, or randomised",
    productPrice: "$100",
  },
  {
    productId: 2,
    productImage: "./assets/images/product2.png",
    productName: "florida jacket",
    productCaption:
      "Suffered alteration in some form, bysuffalterattion in some forme, byinjected humor, or randomised",
    productPrice: "$100",
  },
  {
    productId: 3,
    productImage: "./assets/images/product3.png",
    productName: "florida jacket",
    productCaption:
      "Suffered alteration in some form, bysuffalterattion in some forme, byinjected humor, or randomised",
    productPrice: "$100",
  },
  {
    productId: 4,
    productImage: "./assets/images/product3.png",
    productName: "florida jacket",
    productCaption:
      "Suffered alteration in some form, bysuffalterattion in some forme, byinjected humor, or randomised",
    productPrice: "$100",
  },
];
function ProductsPage(props) {
  return (
    <div className="products-page-wrapper">
        <div className="products-container">
      <div className="heading-container">
        <h1 className="products-heading">new products</h1>
        <img src="./assets/images/star.png" alt="" />
      </div>
      <div className="category-products-wrapper">
        <div className="categories">
          <ul className="category-list">
            <li className="category-item">apparel</li>
            <li className="active-category category-item">accessories</li>
            <li className="category-item">best sellers</li>
            <li className="category-item">50% off</li>
          </ul>
            <ul className="result-product-list">
              {products.map((product) => {
                return <ProductCard product={product}></ProductCard>;
              })}
            </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProductsPage;
