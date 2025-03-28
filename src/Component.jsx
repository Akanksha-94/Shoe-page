
import "./Component.css";
export default function Component(){
    return(
        <div className="hero">
            <div className="hero-Content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES</p>

                <div className="hero-button">
                <button>Shop Now</button>
                <button className="secondary">Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="brand-icons">
                        <img src="/public/images/flipkart.png" alt="logo"/>
                        <img  src="/public/images/amazon.png" alt="logo"/>
                    </div>
                </div>
            </div>

            <div className="hero-img">
                <img src="/public/images/shoe_image.png" alt="shoe"/>
            </div>

        </div>
    );
}