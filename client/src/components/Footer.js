import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterLinkContainer,
  FooterWrap,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterLinkWrapper,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "../components/styleSheet";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>

              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>

              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">LinkDin</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
              <FooterLink to="/">Instagram</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>

          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>

              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Location</FooterLink>
              <FooterLink to="/">+100 45678</FooterLink>
              <FooterLink to="/">contact@rebank.com</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Terms & Services</FooterLinkTitle>

              <FooterLink to="/">Terms of Services</FooterLink>
              <FooterLink to="/">Privacy Policies</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Re-bank</SocialLogo>
            <WebsiteRights>
              Re-bank &#169; {new Date().getFullYear()} | All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkdin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
