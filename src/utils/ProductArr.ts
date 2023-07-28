export type Product = {
  id: number;
  title: string;
  description: string;
  type: string;
  price: number;
  image: string;
};
const ProductsArr: Product[] = [
  {
    id: 1,
    title: "Beauty Oil",
    description:
      "Facial oil: Nourishing skincare product for hydrated, glowing skin.",
    type: "Oil",
    price: 56,
    image: "/images/BeautyOil.webp",
  },
  {
    id: 2,
    title: "BeFace Oil",
    description:
      "Facial oil: Nourishing skincare product for hydrated, glowing skin.",
    type: "Oil",
    price: 98,
    image: "/images/BeFaceOil.webp",
  },
  {
    id: 3,
    title: "Protect conditioner",
    description:
      "Facial oil: Nourishing skincare product for hydrated, glowing skin.",
    type: "Conditioner",
    price: 79,
    image: "/images/ColourProtect.webp",
  },
  {
    id: 4,
    title: "Eau de Toilette",
    description:
      "Facial oil: Nourishing skincare product for hydrated, glowing skin.",
    type: "Toilette",
    price: 15,
    image: "/images/EauDeToilette.webp",
  },
  {
    id: 5,
    title: "Hair conditioner",
    description:
      "Facial oil: Nourishing skincare product for hydrated, glowing skin.",
    type: "Conditioner",
    price: 61,
    image: "/images/HAirConditioner.webp",
  },
  {
    id: 6,
    title: "Restoring eye gel",
    description:
      "Facial oil: Nourishing skincare product for hydrated, glowing skin.",
    type: "Gel",
    price: 19,
    image: "/images/RestoringEyeGel.webp",
  },
  {
    id: 7,
    title: "Styling Cream",
    description:
      "Facial oil: Nourishing skincare product for hydrated, glowing skin.",
    type: "Cream",
    price: 36,
    image: "/images/StylingCream.webp",
  },
  {
    id: 8,
    title: "Toning Mist",
    description:
      "Facial oil: Nourishing skincare product for hydrated, glowing skin.",
    type: "Toning",
    price: 59,
    image: "/images/ToningMist.webp",
  },
];

export const getProductsObject = (array: Product[]) =>
  array.reduce(
    (object, product) => ({
      ...object,
      [product.id]: product,
    }),
    {}
  );

export default ProductsArr;
