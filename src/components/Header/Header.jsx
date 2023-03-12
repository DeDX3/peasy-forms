import React, { useState } from "react";
import Logo from "@/images/logos/logo.svg";
import Credits from "@/images/icons/lemon-slice.svg";
import { Container, Image, NavLink } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { PFButton } from "../PFButton";
import { PFModal } from "../PFModal";
import "./Header.css";

export function Header() {
  const [showNumberOfFormsModal, setShowNumberOfFormsModal] = useState(false);
  const navigate = useNavigate();

  const handleMenuOpen = () => {
    document.documentElement.classList.toggle("menu-open");
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
    </>
  );
}
