import ProductQualityCheck from "../components/services/ProductQualityCheck.jsx";
import ThreePlService from "../components/services/ThreePlService.jsx";
import Storage from "../components/services/Storage.jsx";
import Sourcing from "../components/services/Sourcing.jsx";

export const serviceSlugs = [
  "storage",
  "sourcing",
  "threeplservice",
  "productqualitycheck",
];

export const serviceComponents = {
  storage: Storage,
  sourcing: Sourcing,
  threeplservice: ThreePlService,
  productqualitycheck: ProductQualityCheck,
};

export const serviceMetadata = {
  storage: {
    title: "Shipping & Storage | Naxi",
    description:
      "All-in-one shipping, warehousing, and logistics solutions for your eCommerce growth.",
    sections: [
      {
        title: "Shipping & Custom Clearance",
        image: "/ser1 (1).png",
        description:
          "We are Naxi, helping more than 50,000 sellers build their businesses. We have been operating for the last 5 years in the United Arab Emirates. We provide high-quality products at low prices because we have different teams in China located across multiple cities, allowing us to get low prices from companies and ensure quality inspection of the products.",
      },
      {
        title: "Warehousing & Fulfillment",
        image: "/ser1 (4).png",
        description:
          "We are Naxi, helping more than 50,000 sellers build their businesses. We have been operating for the last 5 years in the United Arab Emirates. We provide high-quality products at low prices because we have different teams in China located across multiple cities, allowing us to get low prices from companies and ensure quality inspection of the products.",
      },
         {
    title: "Product Quality Check ",
            image: "/last (3).png",

    description:
          "We are Naxi, helping more than 50,000 sellers build their businesses. We have been operating for the last 5 years in the United Arab Emirates. We provide high-quality products at low prices because we have different teams in China located across multiple cities, allowing us to get low prices from companies and ensure quality inspection of the products.",
  },
      {
        title: "Order Confirmation & Follow Up",
        image: "/last (2).png",
        description:
          "We are Naxi, helping more than 50,000 sellers build their businesses. We have been operating for the last 5 years in the United Arab Emirates. We provide high-quality products at low prices because we have different teams in China located across multiple cities, allowing us to get low prices from companies and ensure quality inspection of the products.",
      },
   
      
     
      {
        title: "COD Remittance",
        image: "/last (1).png",
        description:
          "We are Naxi, helping more than 50,000 sellers build their businesses. We have been operating for the last 5 years in the United Arab Emirates. We provide high-quality products at low prices because we have different teams in China located across multiple cities, allowing us to get low prices from companies and ensure quality inspection of the products.",
      },
    ],
  },
  sourcing: {
    title: "Sourcing | Naxi",
    description:
      "Source high-quality products globally with Naxi’s trusted platform.",
  },
  threeplservice: {
    title: "3PL Service | Naxi",
    description:
      "Streamline your logistics with Naxi’s reliable 3PL services.",
  },
  productqualitycheck: {
    title: "Product Quality Check | Naxi",
    description:
      "Ensure top-notch product quality with Naxi’s comprehensive inspection services.",
  },
};
