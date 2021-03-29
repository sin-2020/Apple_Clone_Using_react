import React, {Component } from 'react';
import './FourthContaint.css'
import StructureTwo from '../Containts/StructureTwo'

class FourthContaint extends Component {
    render() { 
        return ( 
            <section className="fourth-heghlight-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <StructureTwo wrapperClass="left-side-wrapper" 
                            innerClassName="left-side-container" titleColor="white" 
                            descriptionColor="white" 
                            title= "MacBook Air" description="Power. It’s in the Air."
                            
                             link="Learn more"><a href="">Buy</a></StructureTwo>
                        <StructureTwo wrapperClass="right-side-wrapper"
                            innerClassName="right-side-container" titleColor="white" 
                            descriptionColor="black"
                            description="Bundle up to six Apple services. And enjoy more for less."
                            link="Learn more"><a href="">Try it free<sup>5</sup></a></StructureTwo>
                    </div>
                </div> 
	        </section>
         );
    }
}
 
export default FourthContaint;