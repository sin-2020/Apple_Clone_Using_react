import React, {Component} from 'react';
import './FifthContaint.css'
// import AppleTvLogo from "../../../images/icons/apple-tv-logo.png"
// import WatchSeries5Logo from "../../../images/icons/watch-series5-logo.png"
// import tvtitle from "../../../images/icons/tv-title-large.png"
import StructureTwo from '../Containts/StructureTwo';

class FifthContaint extends Component {
    
    render() { 
        return ( 
            <section className="fifth-heghlight-wrapper">
                <div className="container-fluid">
                    <div className="row">
                     
                         <StructureTwo wrapperClass="left-side-wrapper"
                            innerClassName="left-side-container" titleColor="white" 
                            descriptionColor="black"
                            description="A new fitness experience for everyone. Powered by Apple Watch."
                            link="Learn more"><a href="">Try it free<sup>4</sup></a> </StructureTwo>


                            <StructureTwo wrapperClass="right-side-wrapper"
                            innerClassName="right-side-container" titleColor="white" 
                            descriptionColor="black"
                            description="with Active Noise Cancellation." 
                            link="Watch the film" ><a href="">Buy</a>  </StructureTwo>
                            
                          
                            
                            
                    </div>
                </div> 
            </section>
         );
    }
}
 
export default FifthContaint;