import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PFButton, PFInput, PFModal, SVGIcons } from "../../components";
import { PFCheckBox } from "../../components";
import "./FormPreview.css";

export function FormPreview() {
  const [showFormReadyModal, setShowFormReadyModal] = useState(false);
  const [showRestartModal, setShowRestartModal] = useState(false);

  const StartAgainModal = () => {
    return (
      <>
        <div className="mb-4">
          <h6 className="p fw-bold">Are you sure you want to start again?</h6>
          <p className="p-sm mb-0">Starting over will spend another form</p>
        </div>

        <PFCheckBox
          id={"dontShow"}
          label="Don't show me again"
          parentClassName="mb-3"
        />

        <div className="d-flex gap-3 mt-4">
          <PFButton
            variant={"dark"}
            size="small"
            className={"fw-normal"}
            handleClick={() => setShowRestartModal(false)}
          >
            Yes, delete my account
          </PFButton>
          <PFButton
            variant={"dark-bordered"}
            size="small"
            className={"fw-normal"}
            handleClick={() => setShowRestartModal(false)}
          >
            Cancel
          </PFButton>
        </div>
      </>
    );
  };

  const FormReadyModal = () => {
    return (
      <>
        <div className="mb-4">
          <h2 className="fw-bold dark-blue">
            Voilà! <span className="h1">🎊</span>
          </h2>
        </div>

        <div className="mb-4">
          <h3 className="h2 mb-1 dark-blue">¡Your form is ready!</h3>
          <p className="p">Use this link to go to Google Forms:</p>
        </div>

        <div className="d-flex gap-2">
          <PFInput
            size={"small"}
            parentClassName={"w-100 fw-normal"}
            value={
              "https://googledrive.com/googleforms/peasyforms/formballet/peasyforms/formballet"
            }
          />
          <PFButton
            size={"small"}
            variant={"primary"}
            className="flex-shrink-0 gap-3"
          >
            {SVGIcons.Copy} Copy
          </PFButton>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <PFButton
            variant={"secondary"}
            size="small"
            className={"fw-normal"}
            handleClick={() => setShowRestartModal(false)}
          >
            Open form
          </PFButton>
        </div>
      </>
    );
  };

  return (
    <>
      <Container>
        <main className="py-4">
          <div className="mb-4">
            <h5 className="fw-bold dark-blue">This will be your form!</h5>
            <p className="mb-0">
              Review all the fields and generate your form with a click.
            </p>
          </div>

          <Row>
            <Col lg={6}>
              <div className="form-control-preview">
                <PFInput placeholder="Name" size={"small"} />
                <button className="remove-form-control">
                  {SVGIcons.Dustbin}
                </button>
              </div>
              <div className="form-control-preview">
                <PFInput placeholder="Surface" size={"small"} />
                <button className="remove-form-control">
                  {SVGIcons.Dustbin}
                </button>
              </div>
              <div className="form-control-preview">
                <PFInput placeholder="Address" size={"small"} />
                <button className="remove-form-control">
                  {SVGIcons.Dustbin}
                </button>
              </div>
              <div className="form-control-preview">
                <PFInput
                  placeholder="Nemo enim ipsam voluptatem quia"
                  size={"small"}
                />
                <button className="remove-form-control">
                  {SVGIcons.Dustbin}
                </button>
              </div>
              <div className="form-control-preview">
                <PFInput placeholder="Opsam voluptatem quia" size={"small"} />
                <button className="remove-form-control">
                  {SVGIcons.Dustbin}
                </button>
              </div>
              <div className="form-control-preview">
                <PFInput placeholder="Opsam voluptatem quia" size={"small"} />
                <button className="remove-form-control">
                  {SVGIcons.Dustbin}
                </button>
              </div>
              <div className="form-control-preview">
                <PFInput
                  placeholder="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium"
                  size={"small"}
                />
                <button className="remove-form-control">
                  {SVGIcons.Dustbin}
                </button>
              </div>
              <div className="form-control-preview">
                <PFInput placeholder="Opsam voluptatem quia" size={"small"} />
                <button className="remove-form-control">
                  {SVGIcons.Dustbin}
                </button>
              </div>
              <div className="form-control-preview">
                <PFInput
                  placeholder="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium"
                  size={"small"}
                />
                <button className="remove-form-control">
                  {SVGIcons.Dustbin}
                </button>
              </div>
            </Col>
            <Col lg={6}>
              <div className="form-control-preview">
                <PFInput placeholder="Surname" size={"small"} />
                <button className="remove-form-control">
                  {SVGIcons.Dustbin}
                </button>
              </div>
              <div className="form-control-preview">
                <PFInput placeholder="Postcode" size={"small"} />
                <button className="remove-form-control">
                  {SVGIcons.Dustbin}
                </button>
              </div>
              <div className="form-control-preview">
                <PFInput placeholder="Card details" size={"small"} />
                <button className="remove-form-control">
                  {SVGIcons.Dustbin}
                </button>
              </div>
              <div className="form-control-preview">
                <PFInput
                  placeholder="Quis autem vel eum iure?"
                  size={"small"}
                />
                <button className="remove-form-control">
                  {SVGIcons.Dustbin}
                </button>
              </div>
              <div className="form-control-preview">
                <PFInput
                  placeholder="Quis autem vel eum iure reprehenderit"
                  size={"small"}
                />
                <button className="remove-form-control">
                  {SVGIcons.Dustbin}
                </button>
              </div>
              <div className="form-control-preview">
                <PFInput
                  placeholder="Quis autem vel eum iure reprehenderit"
                  size={"small"}
                />
                <button className="remove-form-control">
                  {SVGIcons.Dustbin}
                </button>
              </div>
              <div className="form-control-preview">
                <PFInput
                  placeholder="Ut enim ad minima veniam, quis nostrum exercitationem?"
                  size={"small"}
                />
                <button className="remove-form-control">
                  {SVGIcons.Dustbin}
                </button>
              </div>
              <div className="form-control-preview">
                <PFInput
                  placeholder="Quis autem vel eum iure reprehenderit"
                  size={"small"}
                />
                <button className="remove-form-control">
                  {SVGIcons.Dustbin}
                </button>
              </div>
              <div className="form-control-preview">
                <PFInput
                  placeholder="Ut enim ad minima veniam, quis nostrum exercitationem?"
                  size={"small"}
                />
                <button className="remove-form-control">
                  {SVGIcons.Dustbin}
                </button>
              </div>
            </Col>
            <Row className="mt-3">
              <Col sm={6} className="d-flex justify-content-end">
                <PFButton
                  variant={"primary"}
                  handleClick={() => setShowFormReadyModal(true)}
                >
                  Generate Form
                </PFButton>
              </Col>
              <Col sm={6}>
                <PFButton
                  variant={"secondary-bordered"}
                  handleClick={() => setShowRestartModal(true)}
                >
                  Start Again
                </PFButton>
              </Col>
            </Row>
          </Row>
        </main>
      </Container>

      <PFModal
        isOpen={showRestartModal}
        handleClose={() => setShowRestartModal(false)}
      >
        <StartAgainModal />
      </PFModal>

      <PFModal
        isOpen={showFormReadyModal}
        handleClose={() => setShowFormReadyModal(false)}
      >
        <FormReadyModal />
      </PFModal>
    </>
  );
}
