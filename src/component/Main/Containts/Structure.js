import React, {Component } from 'react';
class Structure extends Component {
  
    render() { 
        const {alert, title ,description,price,offer,footnote,footnoteColor,titleColor,colorClass,priceColor,offerColor} = this.props;
        return (  
            <div className="container unit-copy-wrapper">
          
			<div className={`title-wraper bold ${titleColor}`}>
				{title}
			</div> 

			<div className={`description-wrapper ${colorClass}`}>
				{description}
			</div>

			<div className={`price-wrapper ${priceColor}`}>
				{price}<sup className={`footnote-1 ${footnoteColor}`}>
				{footnote}
			</sup>
			</div>
			
			<div className={`description-wraper ${offerColor}`}>
				{offer}
			</div>

			<div className="links-wrapper">
				<ul>
					<li><a href="#top">Learn more </a></li>
					<li><a href="#top">Buy</a></li>
				</ul> 
			</div>
		</div>			
        );
    }
}
 
export default Structure;