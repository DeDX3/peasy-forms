import React, { useState } from "react";
import Logo from "@/images/logos/logo.svg";
import Credits from "@/images/icons/lemon-slice.svg";
import { Container, Image, NavLink, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { PFButton } from "../PFButton";
import { PFModal } from "../PFModal";
import { PFRadio } from "../FormControls/PFRadio";
import { SVGIcons } from "../SVGIcons.jsx";
import PlanJuicy from "@images/icons/lemon-drops.svg";
import PlanDelicious from "@images/icons/lemon-half.svg";
import PlanTasty from "@images/icons/lemon-slice-round.svg";
import "../../components/PFModal/PlansModal.css";
import "./Header.css";

export function Header() {
  const [showNumberOfFormsModal, setShowNumberOfFormsModal] = useState(false);
  const [showChangePlanModal, setShowChangePlanModal] = useState(false);
  const [showContinuePayment, setShowContinuePayment] = useState(false);
  const navigate = useNavigate();

  const handleMenuOpen = () => {
    document.documentElement.classList.toggle("menu-open");
  };

  const ChangePlanModal = () => {
    return (
      <>
        <h6 className="p fw-bold mb-4">Upgrade your plan</h6>

        <div className="upgrade-plan-wrap">
          <div className="upgrade-plan">
            <div className="plan-card">
              <div className="d-flex align-items-center gap-2 mb-2">
                <Image src={PlanTasty} alt="" width={14} height={14} fluid />
                <p className="mb-0 text-uppercase">Tasty</p>
              </div>
              <div className="plan-desc">
                <p className="p-sm">Try us for free</p>
              </div>

              <div className="plan-pricing">
                <p className="mb-2 orange">
                  Just for the
                  <span className="fw-bold"> first 5.000 users!</span>
                </p>
                <h2>5 FREE FORMS</h2>
              </div>

              <ul className="plan-features ps-4">
                <li>Try Peasy Forms for free</li>
                <li>Create personalized forms and surveys</li>
                <li>Need extra forms? 0,50€ each</li>
                <li>
                  It is for you if you don't expect to create many forms and
                  just want to try
                </li>
                <li>Active for 3 months only!</li>
              </ul>

              <div className="text-center mt-auto">
                <PFButton variant={"secondary"} disabled>
                  Current Plan
                </PFButton>
              </div>
            </div>

            <div className="plan-card plan-active">
              <div className="d-flex align-items-center gap-2 mb-2">
                <Image
                  src={PlanDelicious}
                  alt=""
                  width={14}
                  height={14}
                  fluid
                />
                <p className="mb-0 text-uppercase">Delicious</p>
              </div>
              <div className="plan-desc">
                <p className="p-sm">Generate monthly easy peasy forms</p>
              </div>
              <div className="plan-pricing">
                <p className="mb-2 orange">
                  <strike className="h2 fw-bold me-2">9.99 €</strike>
                  Until 30th of June
                </p>

                <h2>4,95€/ month</h2>
              </div>
              <ul className="plan-features ps-4">
                <li>25 forms per month</li>
                <li>Need extra forms? 0,20€ each</li>
                <li>
                  Monthly plan for companies and independent professional use
                </li>
                <li>
                  It is for you if you don't expect to create many forms and
                  just want to try
                </li>
              </ul>

              <div className="text-center mt-auto">
                <PFButton variant={"secondary"}>Upgrade</PFButton>
              </div>
            </div>

            <div className="plan-card">
              <div className="d-flex align-items-center gap-2 mb-2">
                <Image src={PlanJuicy} alt="" width={14} height={14} fluid />
                <p className="mb-0 text-uppercase">JUICY</p>
              </div>
              <div className="plan-desc">
                <p className="p-sm">Pay your forms as you go</p>
              </div>
              <div className="plan-pricing">
                <h2>0,50€/ form</h2>
              </div>
              <ul className="plan-features ps-4">
                <li>Create personalized forms and surveys</li>
                <li>Easy-peasy: pay as you go.</li>
                <li>
                  It is for you if you just need an occasional form creator
                </li>
              </ul>

              <div className="text-center mt-auto">
                <PFButton variant={"secondary"}>Upgrade</PFButton>
              </div>
            </div>
          </div>
          <div className="plan-bill-wrap">
            <div className="plan-bill mb-5">
              <div className="bill-divider">
                <h6 className="p mb-0 fw-bold mb-0">Upgrade plan</h6>
              </div>
              <div className="bill-divider bill-info">
                <h6 className="p mb-2 fw-medium">Billing cycle</h6>
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                  <div className="bill-info-title">
                    <PFRadio id={"annual"} label="Annual" name={"bill-cycle"} />
                  </div>
                  <div className="bill-info-content d-flex justify-content-end">
                    <PFRadio
                      id={"monthly"}
                      label="Monthly"
                      name={"bill-cycle"}
                    />
                  </div>
                </div>
              </div>
              <div className="bill-divider bill-info">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                  <div className="bill-info-title">
                    25 forms per month *12 months
                  </div>
                  <div className="bill-info-content">59.88€</div>
                </div>
              </div>
              <div className="bill-divider bill-info">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                  <div className="bill-info-title p">Subtotal</div>
                  <div className="bill-info-content h6 fw-bold mb-0 h5">
                    59.88€
                  </div>
                </div>
              </div>
            </div>

            <PFButton
              variant={"blue"}
              className="w-100 mt-auto"
              handleClick={() => {
                setShowChangePlanModal(false);
                setShowContinuePayment(true);
              }}
            >
              Next: payment information
            </PFButton>
          </div>
        </div>
      </>
    );
  };

  const EnterPaymentDetailsModal = () => {
    return (
      <>
        <h6 className="p fw-bold mb-4">Enter your payment details</h6>

        <form>
          <Row>
            <Col xs={12}>
              <div className="fc-wrap cc-input">
                <div className="cc-img">{SVGIcons.CreditCard}</div>

                <input
                  type="number"
                  placeholder="Card Number"
                  className="custom-fc"
                />

                <div className="cc-extra">
                  <input
                    type="number"
                    placeholder="MM / YY"
                    className="expiry-fc"
                  />
                  <input
                    type="number"
                    placeholder="CVC"
                    className="cvc-fc"
                    maxLength={"3"}
                  />
                </div>
              </div>
            </Col>
            <Col xs={12}>
              <div className="fc-wrap">
                <input
                  type="text"
                  placeholder="Street address"
                  className="custom-fc"
                />
              </div>
            </Col>
            <Col xs={12}>
              <div className="fc-wrap">
                <input
                  type="text"
                  placeholder="Apt, unit, suite, etc. (optional)"
                  className="custom-fc"
                />
              </div>
            </Col>
            <Col xs={12}>
              <div className="fc-wrap">
                <select
                  type="text"
                  placeholder="Apt, unit, suite, etc. (optional)"
                  className="custom-fc custom-select-fc"
                >
                  <option value="">Country</option>
                  <option value="1">Spain</option>
                  <option value="2">Portugal</option>
                  <option value="3">India</option>
                </select>
              </div>
            </Col>
            <Col xs={12}>
              <div className="fc-wrap">
                <input
                  type="text"
                  placeholder="City / Town / Village"
                  className="custom-fc"
                />
              </div>
            </Col>
            <Col sm={6}>
              <div className="fc-wrap">
                <input
                  type="text"
                  placeholder="Province / Region"
                  className="custom-fc"
                />
              </div>
            </Col>
            <Col sm={6}>
              <div className="fc-wrap">
                <input
                  type="number"
                  placeholder="Postal code"
                  className="custom-fc"
                />
              </div>
            </Col>
          </Row>
        </form>
      </>
    );
  };

  const NumberOfFormsModal = () => {
    return (
      <>
        <div className="d-flex justify-content-center align-items-center mb-4">
          <Image src={Credits} width={60} height={64} className="me-2" fluid />
          <span className="display-1">5</span>
        </div>

        <div className="mb-3">
          <h6 className="p dark">
            With your Yummy plan you have 5 free forms to use in 3 months.
          </h6>
        </div>

        <div className="d-flex gap-3 mt-4">
          <PFButton
            variant={"dark"}
            size="small"
            className={"fw-normal"}
            handleClick={() => {
              setShowNumberOfFormsModal(false);
              navigate("/create-form");
            }}
          >
            Start creating
          </PFButton>
          <PFButton
            variant={"dark"}
            size="small"
            className={"fw-normal"}
            handleClick={() => {
              setShowNumberOfFormsModal(false);
              setShowChangePlanModal(true);
            }}
          >
            Upgrade Plan
          </PFButton>
          <PFButton
            variant={"dark-bordered"}
            size="small"
            className={"fw-normal"}
            handleClick={() => setShowNumberOfFormsModal(false)}
          >
            Close
          </PFButton>
        </div>
      </>
    );
  };

  return (
    <>
      <header className="header">
        <Container>
          <div className="header-inner">
            <Link className="d-block" to={"/"}>
              <Image
                src={Logo}
                width={211}
                height={34}
                alt="Peasy Forms"
                fluid
              />
            </Link>

            <button className="hamburger d-md-none" onClick={handleMenuOpen}>
              <div></div>
            </button>

            <ul className="header-nav list-unstyled">
              <li className="nav-item">
                <NavLink
                  to="/manage-account"
                  className={({ isActive }) => {
                    return isActive ? "link active" : "link";
                  }}
                >
                  Manage Account
                </NavLink>
              </li>
              <li className="nav-item">
                <button
                  className="link button-flushed avl-credits"
                  onClick={() => setShowNumberOfFormsModal(true)}
                >
                  <Image
                    src={Credits}
                    width={22}
                    height={22}
                    alt="Lemon Slice"
                    fluid
                  />
                  <div className="credits-count dark-purple ms-2">5</div>
                </button>
              </li>
              <li className="nav-item">
                <PFButton variant={"secondary"} size={"small"}>
                  Log Out
                </PFButton>
              </li>
            </ul>
          </div>
        </Container>
      </header>

      <PFModal
        isOpen={showNumberOfFormsModal}
        handleClose={() => setShowNumberOfFormsModal(false)}
      >
        <NumberOfFormsModal />
      </PFModal>

      <PFModal
        isOpen={showChangePlanModal}
        size="large"
        handleClose={() => setShowChangePlanModal(false)}
      >
        <ChangePlanModal />
      </PFModal>

      <PFModal
        isOpen={showContinuePayment}
        handleClose={() => setShowContinuePayment(false)}
      >
        <EnterPaymentDetailsModal />
      </PFModal>
    </>
  );
}
