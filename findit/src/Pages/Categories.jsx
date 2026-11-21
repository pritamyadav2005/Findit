import './Categories.css';

function Categories() {

  const categories = [
    { id: 1, name: "Science", image: "/image/products/science.png" },
    { id: 2, name: "AI & Technology", image: "/image/products/ai.png" },
    { id: 3, name: "Religion", image: "/image/products/religion.png" },
    { id: 4, name: "Development", image: "/image/products/development.png" },
    { id: 5, name: "History", image: "/image/products/history.png" },
    { id: 6, name: "Geography", image: "/image/products/geography.png" },
    { id: 7, name: "General Books", image: "/image/products/general.png" },
    { id: 8, name: "General Books", image: "/image/products/general.png" },
  ];

  const exploreCategory = (category) => {
    window.location.href = `/products?category=${encodeURIComponent(category)}`;
  };

  return (
    <section className="category-section">

      <div className="category-heading">
        <span>OUR COLLECTION</span>
        <h2>Explore Book Categories</h2>
        <p>Discover knowledge through every page</p>
      </div>

      <div className="category-container">

        {categories.map((item) => (

          <div className="category-card" key={item.id}>

            <div className="category-image">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="category-info">
              <h3>{item.name}</h3>

              <button
                className="category-btn"
                onClick={() => exploreCategory(item.name)}
              >
                Explore Books →
              </button>
            </div>

          </div>

        ))}

      </div>
    </section>
  );
}

export default Categories;