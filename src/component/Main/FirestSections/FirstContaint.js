import React, {Component}from "react"
import "./FirstContaint.css";
import Structure from "../Containts/Structure";

class FirstContaint extends Component {
    render() { 
        return ( 
            <section className="first-hightlight-wrapper">
               <Structure titleColor= "black" title="iPhone 12" priceColor ="grey" offerColor="grey" footnoteColor="grey"
			    colorClass="black" description="Blast past fast."
				 price = "From $29.12/mo. for 24 mo. or $699 before trade‑in."footnote="1"
				 offer="Buy directly from Apple with special carrier offers."

				/>
	        </section>
         );
    }
}
 
export default FirstContaint;
