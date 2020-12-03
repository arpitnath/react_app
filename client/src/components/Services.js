import React from "react";
import icon1 from "../images/icon2.svg";
import icon2 from "../images/icon1.svg";
import icon3 from "../images/icon3.svg";
import icon4 from "../images/icon4.svg";
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH1,
  ServicesH2,
} from "./styleSheet";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={icon1} />
          <ServicesH2>Reduce your expenses</ServicesH2>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={icon2} />
          <ServicesH2>Only a Single Tap Away</ServicesH2>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={icon4} />
          <ServicesH2>24 hrs Banking Support</ServicesH2>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={icon3} />
          <ServicesH2>Instant Loan</ServicesH2>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
