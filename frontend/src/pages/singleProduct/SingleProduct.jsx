import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethod";
import "./Singleproduct.scss";

const SingleProduct = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);


  return (
    <div className="single-product-main-content">
    <div className="layout">
        <div className="single-product-page">
            <div className="left">
                <img
                    src={product.img} alt="singleProduct" />
            </div>
            <div className="right">
                <span className="name">{product.title}</span>
                <span className="color">Color {product.color}</span>
                <span className="price">${product.price}</span>
                <span className="desc">{product.desc}</span>
                <span className="divider" />
                <div className="info-item">
                    <span className="text-bold">
                        Catégoria:{" "}
                        <span>{product.categories}</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default SingleProduct