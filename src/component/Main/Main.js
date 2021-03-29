import React, { Component } from 'react';
import FirstContaint from './FirestSections/FirstContaint';



import SecondContaint from "./SecondSections/SecondContaint";
import ThirdContaint from "./ThirdSections/ThirdContaint";
import FourthContaint from "./FourthSection/FourthContaint";
import FifthContaint from "./FifthSections/FifthContaint"
import SixthContaint from "./SixthSections/SixthContaint";
// import Youtube from '../Youtube/Youtube';

import Alert from './AlertSection/Alert';


class Main extends Component {
  render(){
    return (
      <div>
        <Alert />

        <FirstContaint />
        <SecondContaint />
        <ThirdContaint />
        <FourthContaint />
        <FifthContaint />
        <SixthContaint />
       
                     
      </div>
      
    );
  }
  
}

export default Main;