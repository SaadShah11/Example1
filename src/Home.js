import React from 'react';
import './home.css';

function Home() {
    
       function pc1(e) {
        e.target.setAttribute( 'src', '/img/hero/hero-2.jpg');
        
      }
      function pc2(e) {
        e.target.setAttribute( 'src', '/img/hero/ip-5.jpg');
        
      }
      function pc3(e) {
        e.target.setAttribute( 'src', '/img/hero/hero-3.jpg');
       
      }
      function click(e) {
        
        e.target.setAttribute( 'src', 'https://www.youtube.com');
      }
       
  return (
       
 <div className="head">
           
     <div className="logo"> <img src="/img/logo.png" alt=""/>
     </div>
     <hr/>
     
        <div className="pc">
        <img src="/img/hero/hero-3.jpg" alt="pic1" onClick={pc1} />
        </div>
    
        <div className="pic">
        <img src="/img/hero/ip-6.jpg" alt="pic1" onClick={pc2} />
        </div>

        <div className="piic">
        <img src="/img/hero/hero-2.jpg" alt="pic1" onClick={pc3} />
        </div>

        <div className="pic21">
        <img src="/img/categories/cat-1.jpg" alt="pic1" onClick={click} />
        </div>

        <div className="pic22">
        <img src="/img/categories/cat-2.jpg" alt="pic1" onClick={pc2} />
        </div>

        <div className="pic23">
        <img src="/img/categories/cat-3.jpg" alt="pic1" onClick={pc2} />
        </div>

        <div className="pic24">
        <img src="/img/categories/cat-4.jpg" alt="pic1" onClick={pc2} />
        </div>


</div>
    
      

);
}
export default Home;
