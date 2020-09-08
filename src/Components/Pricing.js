import React from "react";
import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import { Button } from "./pages/Button";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
///Styles
import "./Pricing.css";
import pricingHover, { PricingHover } from "./PricingHover";

function Pricing() {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff", size: "64" }}>
        <div className="pricing__section">
          <div className="pricing__wrapper">
            <h1 className="pricing__heading"></h1>
            <div className="pricing__container">
              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <FaFire />
                  </div>
                  {<PricingHover text={"Starter"} />}
                  <h4>$8.99</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>100 Transactions</li>
                    <li>2% Cash Back</li>
                    <li>$10,000 Limit</li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Choose Plan
                  </Button>
                </div>
              </Link>
              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <BsXDiamondFill />
                  </div>
                  {<PricingHover text={"Gold"} />}
                  <h4>$29.99</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>1000 Transactions</li>
                    <li>3.5% Cash Back</li>
                    <li>$100,000 Limit</li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Choose Plan
                  </Button>
                </div>
              </Link>
              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <GiCrystalize />
                  </div>
                  {<PricingHover text={"Diamond"} />}
                  <h4>$99.99</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>Unlimited Transactions</li>
                    <li>5% Cash Back</li>
                    <li>Unlimited Spending</li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Choose Plan
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Pricing;
