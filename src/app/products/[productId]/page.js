export const generateMetadata = async ({ params }) => {
  const { productId } = await params; // Asynchroniczne pobieranie danych

  return {
    title: `Product - ${productId} Page`,
    description: "Page with detailed information about a product",
    keywords: ["product", "details", "page"],
  };
};

export default async function ProductDetails({ params }) {
  const { productId } = await params; //Asynchroniczne pobieranie danych

  return <h1>Product Details Page {productId}</h1>;
}
