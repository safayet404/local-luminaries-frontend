import React, { Fragment, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import tb1 from "../images/feature-thumb-0.jpg";
import tb2 from "../images/feature-thumb-1.jpg";
import tb3 from "../images/feature-thumb-2.jpg";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiDuration } from "react-icons/gi";
import { IoTime } from "react-icons/io5";
import { FaMobile } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { TbWorldPin } from "react-icons/tb";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

import { Link, useLocation,useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import axios from "axios";
import { base_url } from "../utils/base_url";

const TourDetails = () => {
  const [singleTour, setSingleTour] = useState([]);
  
  const locations = useLocation();
  const navigate = useNavigate();

  const id = locations.pathname.split("/")[2];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${base_url}tour/single-tour/${id}`);
        setSingleTour(response.data);
      } catch (error) {
        console.error("Something went wrong", error);
      }
    };
    fetchData();
  }, [id]);


  return (
    <Fragment>
      <Container className="mt-5 ">
        <Row>
          <Col lg={12} md={12} sm={12}>
            <img src={tb1} className="mb-3" />
          </Col>
          {/* <Col lg={6} md={12} sm={12}>
            <Row className="">
              <img src={tb2} alt="Image" className="section-image2" />
            </Row>
            <Row className="">
              <img src={tb3} alt="Image" className="section-image2" />
            </Row>
          </Col> */}
        </Row>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <h4 className="tdAbout">About</h4>
            <p
              className="tdAboutDetails"
              dangerouslySetInnerHTML={{ __html: singleTour.description }}
            ></p>
            <hr />
            <div>
              <ul className="padding-zero">
                <p className="list-text">
                  <FaPeopleGroup className="list" />
                  Ages 10-75
                </p>
                <p className="list-text">
                  <GiDuration className="list" />
                  Duration: 6–8 hours
                </p>
                <p className="list-text">
                  <IoTime className="list" />
                  Start time: Check availability
                </p>
                <p className="list-text">
                  <FaMobile className="list" />
                  Mobile ticket
                </p>
                <p className="list-text">
                  <TbWorldPin className="list" />
                  Live guide: English
                </p>
              </ul>
            </div>
            <div className="mt-5">
              <hr />
              <Accordion
                className="border-0 mb-4"
                allowZeroExpanded
                allowMultipleExpanded
              >
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton className="status">
                      What's included ?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <ul>
                      <li>TripAdvisor Experiences brokerage fee</li>
                      <li>Bottled water</li>
                      <li>Professional guide</li>
                      <li>Hotel pickup and drop-off</li>
                      <li>Entry/Admission - Curzon Hall</li>
                      <li>Entry/Admission - Dhaka City</li>
                      <li>Entry/Admission - Armenian Church</li>
                      <li>Entry/Admission - Star Mosque (Tara Masjid)</li>
                      <li>Entry/Admission - Sadarghat</li>
                    </ul>
                  </AccordionItemPanel>
                </AccordionItem>
                <hr />

                <AccordionItem className="mt-3">
                  <AccordionItemHeading>
                    <AccordionItemButton className="status">
                      What to expect?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      {" "}
                      <span className="mainMenu">Start :</span> Shahbag Flower
                      Market, Dhaka University Campus, Dhaka 1205, Bangladesh.{" "}
                      <br />
                      <br /> Morning Flower market in Dhaka is interesting, sits
                      early in the morning and lots of colors and festivity are
                      in market. best time to visit the market between
                      07:00-08:00 am in the morning. <br /> Duration: 30 minutes{" "}
                    </p>
                    <p>
                      <span className="mainMenu">Pickup Details :</span>Curzon
                      Hall, University Street, Dhaka City 1000 Bangladesh <br />{" "}
                    </p>
                    <p>
                      <span className="mainMenu">Hotel Pickup Offered :</span>
                      During checkout you will be able to select from the list
                      of included hotels.
                    </p>
                    <p>
                      <span className="mainMenu">End :</span>This activity ends
                      back at the meeting point.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <hr />

                <AccordionItem className="mt-3">
                  <AccordionItemHeading>
                    <AccordionItemButton className="status">
                      Departure and return
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      {" "}
                      <span className="mainMenu">Start :</span> Multiple pickup
                      locations offered.
                    </p>
                    <p>
                      <span className="mainMenu">Pickup Details :</span>We will
                      pickup you all from your pickup places even its home or
                      hotel inside Dhaka .
                    </p>
                    <p>
                      <span className="mainMenu">Hotel Pickup Offered :</span>
                      During checkout you will be able to select from the list
                      of included hotels.
                    </p>
                    <p>
                      <span className="mainMenu">End :</span>This activity ends
                      back at the meeting point.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <hr />
                <AccordionItem className="mt-3">
                  <AccordionItemHeading>
                    <AccordionItemButton className="status">
                      Accessibility
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <ul>
                      <li>Infant seats available</li>
                      <li>Not wheelchair accessible</li>
                      <li>Service animals allowed</li>
                      <li>Infants must sit on laps</li>
                    </ul>
                    <p className="accordion-details">
                      If you have questions about accessibility, we’d be happy
                      to help. Just call the number below and reference the
                      product code: 74936P4 +8801679175553
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <hr />
                <AccordionItem className="mt-3">
                  <AccordionItemHeading>
                    <AccordionItemButton className="status">
                      Additional Information
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="accordion-details">
                      <ul>
                        <li>
                          Confirmation will be received at time of booking
                        </li>
                        <li>Minimum age is 18 years</li>
                        <li>Infant meals not included</li>
                        <li>A minimum of 01 people per booking is required</li>
                        <li>Most travelers can participate</li>
                        <li>
                          This tour is to explore the city using local
                          transportation like rickshaw , tuktuk, uber .
                        </li>
                        <li>
                          Woman's need to cover the head during visiting mosque
                        </li>
                        <li>
                          This is a private tour/activity. Only your group will
                          participate
                        </li>
                      </ul>
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <hr />
                <AccordionItem className="mt-3">
                  <AccordionItemHeading>
                    <AccordionItemButton className="status">
                      Cancellation Policy
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="accordion-details">
                      For a full refund, cancel at least 24 hours in advance of
                      the start date of the experience.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <hr />
                <AccordionItem className="mt-3">
                  <AccordionItemHeading>
                    <AccordionItemButton className="status">
                      FAQ
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="accordion-details">
                      Which attractions will I visit with Explore Dhaka City in
                      a Local Way !!? During this experience, places you will
                      visit include: Sadarghat Armenian Church Star Mosque (Tara
                      Masjid) Curzon Hall New Market Discover and book Explore
                      Dhaka City in a Local Way !! on Tripadvisor How much is
                      Explore Dhaka City in a Local Way !!? Explore Dhaka City
                      in a Local Way !! price starts from $59.94. Discover and
                      book Explore Dhaka City in a Local Way !! on Tripadvisor
                      What is the Explore Dhaka City in a Local Way !!
                      cancellation policy? Explore Dhaka City in a Local Way !!
                      cancellation policy: For a full refund, cancel at least 24
                      hours in advance of the start date of the experience.
                      Discover and book Explore Dhaka City in a Local Way !! on
                      Tripadvisor Which company provides Explore Dhaka City in a
                      Local Way !!? Explore Dhaka City in a Local Way !! is
                      hosted by Bangladesh Eco Adventure. Read reviews, discover
                      additonal experiences or contact Bangladesh Eco Adventure
                      on Tripadvisor. Discover and book Explore Dhaka City in a
                      Local Way !! on Tripadvisor
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <hr />
                <AccordionItem className="mt-3">
                  <AccordionItemHeading>
                    <AccordionItemButton className="status">
                      Help
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="accordion-details">
                      If you have questions about this tour or need help making
                      your booking, we’d be happy to help. Just call the number
                      below and reference the product code: 74936P4 +1 855 275
                      5071
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <hr />
              </Accordion>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <div class="td-card">
              <h2 class="tdCard-title">Reserve Your Spot</h2>

              <Row>
                <Col lg={8}>
                  <h2 className="priceTag">
                    {singleTour.price} <TbCurrencyTaka />
                  </h2>
                  <p>per adult (price varies by group size)</p>
                </Col>
                <Col lg={4}>
                <Button variant="warning" className="btn-align" >
                      <HashLink
                        smooth
                        className="link-decoration"
                        
                        to={`/booking/${singleTour._id}#top`}
                        
                        
                      >
                        Book Now
                      </HashLink>
                    </Button>
                </Col>
                <hr className="mt-3" />
                <div>
                  <ul>
                    <li>Lowest price guarantee</li>
                    <li>Reserve now & pay later</li>
                    <li>Free cancellation</li>
                  </ul>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default TourDetails;
