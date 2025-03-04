export default async function ProductDetails({ params }) {
  const { productId } = params; //Asynchroniczne pobieranie danych

  return <h1>Product Details Page {productId}</h1>;
}
