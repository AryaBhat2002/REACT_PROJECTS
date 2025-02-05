const HeroSection = () => {
  return (
    <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVES THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP 
                YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND 
                WE’RE HERE TO HELP YOU WITH OUR SHOES.
            </p>
            <div className="hero-button">   
                <button>Shop Now</button>
                <button className="secondary-button">Category</button>
            </div>

            <div className="shopping">
                <p>Also Available On</p>
                <div className="brand-items">
                    <img src="/images/amazon.png" alt="amazon" />
                    <img src="/images/flipkart.png" alt="flipkart" />
                </div>
            </div>
        </div>

        <div className="hero-image">
            <img src="/images/hero-image.png" alt="Hero-Image" />
        </div>
    </main>
  );
};

export default HeroSection;