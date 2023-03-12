import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { PFButton, PFInput, PFTextArea, SVGIcons } from "../../components";
import TemplatePreview from "@/images/template-preview.svg";
import "swiper/css";
import "swiper/css/pagination";
import "./CreateForm.css";

export function CreateForm() {
  const templateSliderSettings = {
    modules: [Pagination],
    spaceBetween: 10,
    slidesPerView: 1,
    pagination: {
      el: ".custom-pagination",
      clickable: true,
    },
  };

  return (
    <Container>
      <main className="py-4">
        <h5 className="fw-bold dark-blue mb-4">
          Write Here <span className="h3 ms-2"> ✏️👇</span>
        </h5>
        <Row>
          <Col lg={8}>
            <PFInput
              id={"name-form"}
              name={"name-form"}
              label={"Name your form"}
              parentClassName="mb-4"
              placeholder={"Form's names"}
              floatingLabel
            />

            <div className="position-relative recordable-textarea mb-4">
              <PFTextArea
                id={"name-form"}
                name={"name-form"}
                label={"Create your form"}
                rows={16}
                placeholder={"Write here..."}
                floatingLabel
              />

              <button
                className="button-flushed record-using-mic p-sm fw-medium"
                style={{ color: "#3737b8" }}
              >
                <span>{SVGIcons.Microphone}</span> Record using microphone
              </button>
            </div>

            <PFButton variant={"primary"}>Create!</PFButton>
          </Col>
          <Col lg={4}>
            <div>
              <Swiper {...templateSliderSettings} className="template-slider">
                <SwiperSlide>
                  <div className="template-card">
                    <div className="template-details">
                      <h6 className="p fw-bold">
                        Feedback and evaluation forms
                      </h6>
                      <p className="mb-0">
                        I want to know my employee's opinion about our last
                        meeting.
                      </p>
                    </div>
                    <div className="template-image">
                      <Image
                        src={TemplatePreview}
                        alt=""
                        width={175}
                        height={117}
                        fluid
                      />
                    </div>
                  </div>
                  <PFButton variant={"secondary-bordered"} size={"small"}>
                    Use this template
                  </PFButton>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="template-card">
                    <div className="template-details">
                      <h6 className="p fw-bold">
                        Feedback and evaluation forms
                      </h6>
                      <p className="mb-0">
                        I want to know my employee's opinion about our last
                        meeting.
                      </p>
                    </div>
                    <div className="template-image">
                      <Image
                        src={TemplatePreview}
                        alt=""
                        width={175}
                        height={117}
                        fluid
                      />
                    </div>
                  </div>
                  <PFButton variant={"secondary-bordered"} size={"small"}>
                    Use this template
                  </PFButton>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="template-card">
                    <div className="template-details">
                      <h6 className="p fw-bold">
                        Feedback and evaluation forms
                      </h6>
                      <p className="mb-0">
                        I want to know my employee's opinion about our last
                        meeting.
                      </p>
                    </div>
                    <div className="template-image">
                      <Image
                        src={TemplatePreview}
                        alt=""
                        width={175}
                        height={117}
                        fluid
                      />
                    </div>
                  </div>
                  <PFButton variant={"secondary-bordered"} size={"small"}>
                    Use this template
                  </PFButton>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="template-card">
                    <div className="template-details">
                      <h6 className="p fw-bold">
                        Feedback and evaluation forms
                      </h6>
                      <p className="mb-0">
                        I want to know my employee's opinion about our last
                        meeting.
                      </p>
                    </div>
                    <div className="template-image">
                      <Image
                        src={TemplatePreview}
                        alt=""
                        width={175}
                        height={117}
                        fluid
                      />
                    </div>
                  </div>
                  <PFButton variant={"secondary-bordered"} size={"small"}>
                    Use this template
                  </PFButton>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="template-card">
                    <div className="template-details">
                      <h6 className="p fw-bold">
                        Feedback and evaluation forms
                      </h6>
                      <p className="mb-0">
                        I want to know my employee's opinion about our last
                        meeting.
                      </p>
                    </div>
                    <div className="template-image">
                      <Image
                        src={TemplatePreview}
                        alt=""
                        width={175}
                        height={117}
                        fluid
                      />
                    </div>
                  </div>
                  <PFButton variant={"secondary-bordered"} size={"small"}>
                    Use this template
                  </PFButton>
                </SwiperSlide>
              </Swiper>
              <div className="custom-pagination text-center mt-4"></div>
            </div>
          </Col>
        </Row>
      </main>
    </Container>
  );
}
