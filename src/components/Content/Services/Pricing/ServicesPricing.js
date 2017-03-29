import React from 'react';
import PricingDescription from './Description';
import AdvancedTable from './AdvancedTable';

class ServicesPricing extends React.Component {
  render() {
    return(
      <div id="services3" className="mad_section v_align_center_blocks inset_none">
        <PricingDescription/>
        {/* <AdvancedTable/> */}
      </div>
    )
  }
}

export default ServicesPricing;
