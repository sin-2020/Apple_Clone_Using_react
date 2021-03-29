import React, {Component } from 'react';
import Structure from "../Containts/Structure";
import './ThirdContaint.css'

class ThirdContaint extends Component {
   
    render() { 
        return ( 
            <section className="third-hightlight-wrapper">
              <Structure titleColor= "black" title="iPad Air" priceColor ="grey" offerColor="grey"
			    colorClass="black" description="Powerful. Colorful. Wonderful."
				

				/>
	        </section>
         );
    }
}
 
export default ThirdContaint;

