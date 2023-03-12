import { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import {
  PFButton,
  PFInput,
  PFModal,
  PFRadio,
  SVGIcons,
} from "../../components";
import PlanJuicy from "@images/icons/lemon-drops.svg";
import PlanDelicious from "@images/icons/lemon-half.svg";
import PlanTasty from "@images/icons/lemon-slice-round.svg";
import "../../components/PFModal/PlansModal.css";
import "./ManageAccount.css";

export function ManageAccount() {
  const [showCancelPlanModal, setShowCancelPlanModal] = useState(false);
  const [showCancelSuccess, setShowCancelSuccess] = useState(false);
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);
  const [showPaymentMethodModal, setShowPaymentMethodModal] = useState(false);
  const [showBillingDetailsModal, setShowBillingDetailsModal] = useState(false);
  const [showChangePlanModal, setShowChangePlanModal] = useState(false);
  const [showContinuePayment, setShowContinuePayment] = useState(false);

  const PlanCancelModal = () => {
    return (
      <>
        <h6 className="p fw-bold">Cancel your plan</h6>
        <p className="p-sm mb-0">
          If you cancel your plan you will no longer be able to create, modify
          or duplicate any forms. Are you sure you want to cancel?
        </p>

        <div className="d-flex gap-3 mt-4">
          <PFButton
            size="small"
            variant={"dark"}
            className={"fw-normal"}
            handleClick={() => {
              setShowCancelSuccess(true);
              setShowCancelPlanModal(false);
            }}
          >
            Yes, cancel de plan
          </PFButton>
          <PFButton
            size="small"
            variant={"dark-bordered"}
            className={"fw-normal"}
            handleClick={() => setShowCancelPlanModal(false)}
          >
            Don't cancel
          </PFButton>
        </div>
      </>
    );
  };

  const DeleteAccountModal = () => {
    return (
      <>
        <h6 className="p fw-bold">Delete your account</h6>
        <p className="p-sm mb-0">
          Are you sure you want to delete your account? You will lose all the
          information
        </p>

        <div className="d-flex gap-3 mt-4">
          <PFButton
            variant={"dark"}
            size="small"
            className={"fw-normal"}
            handleClick={() => setShowDeleteAccountModal(false)}
          >
            Yes, delete my account
          </PFButton>
          <PFButton
            variant={"dark-bordered"}
            size="small"
            className={"fw-normal"}
            handleClick={() => setShowDeleteAccountModal(false)}
          >
            Cancel
          </PFButton>
        </div>
      </>
    );
  };

  const UpdatePaymentMethodModal = () => {
    return (
      <>
        <h6 className="p fw-bold mb-4">Billing details</h6>

        <PFInput
          id={"name-on-card"}
          name={"name-on-card"}
          label={"Name on card*"}
          parentClassName="mb-4"
          labelClassName={"p-sm"}
          placeholder={"Name"}
          size="small"
        />

        <PFInput
          id={"credit-card"}
          name={"credit-card"}
          label={"Credit card"}
          parentClassName="mb-4"
          labelClassName={"p-sm"}
          placeholder={"**** **** 0000"}
          size="small"
        />

        <div className="d-flex gap-3 mt-4">
          <PFButton
            variant={"dark"}
            size="small"
            className={"fw-normal"}
            handleClick={() => setShowPaymentMethodModal(false)}
          >
            Save
          </PFButton>
          <PFButton
            variant={"dark-bordered"}
            size="small"
            className={"fw-normal"}
            handleClick={() => setShowPaymentMethodModal(false)}
          >
            Cancel
          </PFButton>
        </div>
      </>
    );
  };

  const UpdateBillingDetailsModal = () => {
    return (
      <>
        <Container>
          <h6 className="p fw-bold mb-4">Billing details</h6>

          <PFInput
            id={"name"}
            name={"name"}
            label={"Name or company name"}
            parentClassName="mb-4"
            labelClassName={"p-sm"}
            placeholder={"Estudio Guineueta"}
            size="small"
          />

          <PFInput
            id={"street"}
            name={"street"}
            label={"Street address"}
            parentClassName="mb-4"
            labelClassName={"p-sm"}
            placeholder={"Carrer  de la  Guineueta, 2-4, 5ª PLANNTA"}
            size="small"
          />

          <PFInput
            id={"country"}
            name={"country"}
            label={"Country"}
            parentClassName="mb-4"
            labelClassName={"p-sm"}
            placeholder={"Carrer  de la  Guineueta, 2-4, 5ª PLANNTA"}
            size="small"
          />

          <Row>
            <Col md={6}>
              <PFInput
                id={"city"}
                name={"city"}
                label={"City"}
                parentClassName="mb-4"
                labelClassName={"p-sm"}
                placeholder={"Carrer  de la  Guineueta, 2-4, 5ª PLANNTA"}
                size="small"
              />
            </Col>

            <Col md={6}>
              <PFInput
                id={"postal"}
                name={"postal"}
                label={"Postal code"}
                parentClassName="mb-4"
                labelClassName={"p-sm"}
                placeholder={"08629, Torrelles de llobregat, ES"}
                size="small"
              />
            </Col>
          </Row>

          <PFInput
            id={"VAT"}
            name={"VAT"}
            label={"VAT number (optional)"}
            parentClassName="mb-4"
            labelClassName={"p-sm"}
            placeholder={"ES-0000000000"}
            size="small"
          />

          <div className="d-flex gap-3 mt-4">
            <PFButton
              variant={"dark"}
              size="small"
              className={"fw-normal"}
              handleClick={() => setShowBillingDetailsModal(false)}
            >
              Save
            </PFButton>
            <PFButton
              variant={"dark-bordered"}
              size="small"
              className={"fw-normal"}
              handleClick={() => setShowBillingDetailsModal(false)}
            >
              Cancel
            </PFButton>
          </div>
        </Container>
      </>
    );
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

  return (
    <>
      <Container>
        <main className="py-4">
          <div className="mb-4">
            <h5 className="fw-bold dark-blue mb-0">Manage account</h5>
          </div>

          <div className="manage-card">
            <h6 className="manage-card-title">Plan</h6>

            <p className="p-sm mb-0">You have a DELICIOUS plan</p>

            <div className="manage-card-actions">
              <PFButton
                variant={"dark"}
                className="fw-normal"
                size={"small"}
                handleClick={() => setShowChangePlanModal(true)}
              >
                Change my plan
              </PFButton>
              <PFButton
                variant={"dark-bordered"}
                className="fw-normal ms-3"
                size={"small"}
                handleClick={() => setShowCancelPlanModal(true)}
              >
                Cancel
              </PFButton>
            </div>
          </div>

          <div className="manage-card">
            <h6 className="manage-card-title">Billing details</h6>

            <div className="mb-3">
              <h6 className="manage-card-category">Name or company name</h6>
              <p className="fw-bold mb-0 dark p-sm">Estudio Guineueta</p>
            </div>

            <div className="mb-3">
              <h6 className="manage-card-category">Street adress</h6>
              <p className="fw-bold mb-0 dark p-sm">
                Carrer de la Guineueta, 2-4, 5ª PLANNTA
              </p>
            </div>

            <div>
              <h6 className="manage-card-category">
                Postal code, city, country
              </h6>
              <p className="fw-bold mb-0 dark p-sm">
                08629, Torrelles de llobregat, ES
              </p>
            </div>

            <div className="manage-card-actions">
              <PFButton
                variant={"dark"}
                className="fw-normal"
                size={"small"}
                handleClick={() => setShowBillingDetailsModal(true)}
              >
                Edit billing details
              </PFButton>
            </div>
          </div>

          <div className="manage-card">
            <h6 className="manage-card-title">Payment method</h6>

            <div className="mb-3">
              <h6 className="manage-card-category">Card information</h6>
              <p className="fw-bold mb-0 dark p-sm">
                mastercard - ending in 0000
              </p>
            </div>

            <div>
              <h6 className="manage-card-category">Name on card</h6>
              <p className="fw-bold mb-0 dark p-sm">Julian Romero</p>
            </div>

            <div className="manage-card-actions">
              <PFButton
                variant={"dark"}
                className="fw-normal"
                size={"small"}
                handleClick={() => setShowPaymentMethodModal(true)}
              >
                Edit payment method
              </PFButton>
            </div>
          </div>

          <div className="manage-card">
            <h6 className="manage-card-title">Invoices</h6>

            <table className="invoices-table w-100">
              <tbody>
                <tr>
                  <td>May 25, 2023</td>
                  <td>Delicious plan</td>
                  <td className="text-center">4,99€</td>
                  <td className="text-end">
                    <a href="#" className="link underlined">
                      Download invoice
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Apr 25, 2023</td>
                  <td>Delicious plan</td>
                  <td className="text-center">4,99€</td>
                  <td className="text-end">
                    <a href="#" className="link underlined">
                      Download invoice
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="manage-card">
            <h6 className="manage-card-title">Delete account</h6>

            <div className="manage-card-actions">
              <PFButton
                variant={"orange"}
                size={"small"}
                handleClick={() => setShowDeleteAccountModal(true)}
              >
                Delete account
              </PFButton>
            </div>
          </div>
        </main>
      </Container>

      <PFModal
        isOpen={showCancelPlanModal}
        handleClose={() => setShowCancelPlanModal(false)}
      >
        <PlanCancelModal />
      </PFModal>

      <PFModal
        isOpen={showCancelSuccess}
        handleClose={() => setShowCancelSuccess(false)}
      >
        <h6 className="p fw-bold">Plan cancelled</h6>
        <p className="p-sm mb-0">
          You will still be able to log in to your account to view your old
          forms.
        </p>
      </PFModal>

      <PFModal
        isOpen={showDeleteAccountModal}
        handleClose={() => setShowDeleteAccountModal(false)}
      >
        <DeleteAccountModal />
      </PFModal>

      <PFModal
        isOpen={showPaymentMethodModal}
        handleClose={() => setShowPaymentMethodModal(false)}
      >
        <UpdatePaymentMethodModal />
      </PFModal>

      <PFModal
        isOpen={showBillingDetailsModal}
        size="large"
        handleClose={() => setShowBillingDetailsModal(false)}
      >
        <UpdateBillingDetailsModal />
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
