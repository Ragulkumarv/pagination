import Pagination from "./components/Pagination";

const App = () => {
  const items = Array.from({ length: 50 }).map(
    (_, index) => `Item ${index + 1}`
  );

  const itemsPerPage = 5;
  return (
    <section className="">
      <h1>Pagination Component</h1>
      <Pagination items={items} itemsPerPage={itemsPerPage} />
    </section>
  );
};

export default App;
