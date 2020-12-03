import React from "react";
import icon1 from "../images/svg-1.svg";
import icon2 from "../images/svg-2.svg";
import icon3 from "../images/svg-3.svg";
import icon4 from "../images/svg-1.svg";
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH1,
  ServicesH2,
  ServicesP,
} from "./styleSheet";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={icon1} />
          <ServicesH2>Reduce your expenses</ServicesH2>
          <ServicesP>
            With us reduce your banking fees and increase your overall savings.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={icon2} />
          <ServicesH2>Only a Single Tap Away</ServicesH2>
          <ServicesP>
            No waiting in the banks, we get to your door step within 48 hrs.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={icon1} />
          <ServicesH2>Reduce your expenses</ServicesH2>
          <ServicesP>
            With us reduce your banking fees and increase your overall savings.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={icon2} />
          <ServicesH2>Only a Single Tap Away</ServicesH2>
          <ServicesP>
            No waiting in the banks, we get to your door step within 48 hrs.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
