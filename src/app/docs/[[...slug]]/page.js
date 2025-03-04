export default async function Docs({ params }) {
  const slug = params.slug || [];

  if (slug.length === 2) {
    return (
      <h1>
        Documentation Page: {slug[0]} and {slug[1]}
      </h1>
    );
  } else if (slug.length === 1) {
    return <h1>Documentation Page: {slug[0]}</h1>;
  } else {
    return <h1>Documentation Page</h1>;
  }
}
