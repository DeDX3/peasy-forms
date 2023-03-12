import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PFButton, PFInput, PFModal } from "../../components";
import "./ManageAccount.css";

export function ManageAccount() {
  const [showCancelPlanModal, setShowCancelPlanModal] = useState(false);
  const [showCancelSuccess, setShowCancelSuccess] = useState(false);
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);
  const [showPaymentMethodModal, setShowPaymentMethodModal] = useState(false);
  const [showBillingDetailsModal, setShowBillingDetailsModal] = useState(false);

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
              <PFButton variant={"dark"} className="fw-normal" size={"small"}>
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
    </>
  );
}
