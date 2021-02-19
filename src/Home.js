import React from 'react';
import "./Home.css";
import Product from './Product.js'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a?mode=scale&q=90&h=1080&w=1920" alt="" />
                <div className="home__row">
                    <Product id="1" title='The lean startup' price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5} />
                    <Product id="2" title='Kenwood kMix' price={239.0} image="https://cf.shopee.com.my/file/bae8ec2ec93409a7fe2641c00fbafe8c" rating={4}/>
                </div>
                <div className="home__row">
                    <Product id="3" title="Samsung LED Gaming Monitor" price={199.99} image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" rating={3}/>
                    <Product id="4" title="Amazon Echo" price={98.99} image="http://mobileimages.lowes.com/product/converted/841667/841667166834.jpg" rating={5}/>
                    <Product id="5" title="New Apple iPad Pro" price={598.99} image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" rating={4}/>
                    
                </div>
                <div className="home__row">
                    <Product id="6" title="Curved LED Laptop" price={1049.99} image="https://techcrunch.com/wp-content/uploads/2016/12/acer-predator_21_x_gx21-71_left-facing_eye-tracking-lights_keyboard-image_touchpad-e1483133762429.jpg" rating={4}/>
                </div>
            </div>
        </div>
    )
}

export default Home
