import React, { useState } from "react";
import Product from "./Product";
import { FaApple } from "react-icons/fa";
const Home = () => {
  const products = [
    {
      id: 1,
      logo:<FaApple />,
      title: "iPhone 15 pro",
      description: "pro Series",
      price: 150000,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-3-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081542150",
    },
    {
      id: 2,
      logo:<FaApple />,
      title: "iPhone 15 Plus",
      description: "15 series",
      price: 89000,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-digitalmat-gallery-4-202309?wid=728&hei=666&fmt=png-alpha&.v=1693011169045",
    },

    {
      id: 3,
      logo:<FaApple />,
      title: "iPhone 14 Plus",
      description: "14 Series",
      price: 79000,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      images:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone14-digitalmat-gallery-3-202209?wid=728&hei=666&fmt=png-alpha&.v=1662055813794",
    },
    {
      id: 4,
      logo:<FaApple />,
      title: "Airpords",
      description: "Airpords is officially announced on 2019",
      price: 21000,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "Apple",
      category: "Airpords",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images:
        "https://www.apple.com/v/airpods-pro/j/images/overview/magical_case__epo6duhktocy_large_2x.png",
    },
    {
      id: 5,
      logo:<FaApple />,
      title: "MagSafe Charger",
      description: "MagSafe Charger its  officially announced on 2017",
      price: 25999,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Apple",
      category: "charger",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MHXH3?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1661269793559",
    },
    {
      id: 6,
      logo:<FaApple />,
      title: "20W USB-C Power Adapter",
      description: " Power Adapter ",
      price: 5990,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "USB-C Power",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU862?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1591824860000",
    },
    {
      id: 7,
      logo:<FaApple />,
      title: "Macbook Pro 14 ",
      description: "Macbook Pro 14 ",
      price: 211999,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "Apple",
      category: "Mac",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      images:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-14-digitalmat-gallery-7-202310?wid=728&hei=666&fmt=png-alpha&.v=1696971527085",
    },
    {
      id: 8,
      logo:<FaApple />,
      title: "I - Mac",
      description: "IOS Processor",
      price: 189999,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "Apple",
      category: "MAC book",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      images:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac24-digitalmat-gallery-2-202310?wid=728&hei=666&fmt=png-alpha&.v=1697559004207",
    },
    {
      id: 9,
      logo:<FaApple />,
      title: " I Pad Pro ",
      description: "Pad Pro ",
      price:101999,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "Apple",
      category: "I pad",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      images:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipadpro11-digitalmat-gallery-1-202210?wid=728&hei=666&fmt=png-alpha&.v=1664477161220",
    },
  ];
  const [productValue, setProductValue] = useState(products);
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {productValue.map((item, index) => {
          return (
            <div key={index}>
              <Product item={item} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;