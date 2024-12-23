// App Component

function App() {
  const assets = {
    mobile: "./images/image-product-mobile.jpg",
    desktop: "./images/image-product-desktop.jpg",
  };

  return (
    <>
      <main className="main">
        <article className="card">
          <picture class="card-picture">
            <source srcset={assets.desktop} media="(min-width: 50em)" />
            <img src={assets.mobile} alt="" className="picture"/>
          </picture>
          <section className="product-description">
            <div className="section-wrapper">
              <p className="category">PERFUME</p>
              <h1 className="title">Gabrielle Essence Eau De Parfum</h1>
              <p className="product-description-text">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
              <div className="price-wrapper">
                <p className="new-price">$149.99</p>
                <p className="old-price">$169.99</p>
              </div>
              <button className="button">Add to Cart</button>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

// Render the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
