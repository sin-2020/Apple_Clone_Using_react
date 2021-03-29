import React, {Component } from 'react';
import Structure from "../Containts/Structure"
import './SecondContaint.css';

class SecondContaint extends Component {
    
    render() { 
        return ( 
            <section className="second-hightlight-wrapper">
			   <Structure titleColor= "white" title="iPhone 12 Pro" priceColor ="grey" offerColor="grey" footnoteColor="grey"
			    colorClass="white" description="It's a leap year"
				 price = "From $41.62/mo. or $999 before trade‑in."
				 offer="Buy directly from Apple with special carrier offers." footnote="2"

				/>
				
	        </section>
         );
    }
}
export default SecondContaint;