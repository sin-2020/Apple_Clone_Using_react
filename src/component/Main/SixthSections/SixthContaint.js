import React, {Component } from 'react';
import './SixthContaint.css'
import ArcadeIcon from "../../../images/icons/arcade.png";
import StructureTwo from '../Containts/StructureTwo'

class SixthContaint extends Component {
    
    render() { 
        return (  
            <section className="sixth-heghlight-wrapper">
                <div className="container-fluid">
                    <div className="row">
                    <StructureTwo wrapperClass="left-side-wrapper"
                            innerClassName="left-side-container" 
                            linkColor="white"
                            description="With Amanda Gorman"link="Watch now now"></StructureTwo>
                      
                        <StructureTwo wrapperClass="right-side-wrapper"
                            innerClassName="right-side-container" 
                           
                            description="Get 3% Daily Cash back on
                            purchases from Apple when
                            you use Apple Card."link="Learn more"/>
                    </div>
                </div> 
            </section>
        );
    }
}
 
export default SixthContaint;