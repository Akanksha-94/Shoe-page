
import "./Nav.css"
export default function Nav(){
    return(
        <div>
            <nav>
                <div className="logo">
                    <img src="/public/images/brand_logo.png" alt="logo"/>
               </div>
                
                <ul>
                    <li href="#">MENU</li>
                    <li href="#">LOCATION</li>
                    <li href="#">ABOUT</li>
                    <li href="#">CONTACT</li>
                </ul>
                <button>Login</button>

            </nav>
        </div>
    );
}