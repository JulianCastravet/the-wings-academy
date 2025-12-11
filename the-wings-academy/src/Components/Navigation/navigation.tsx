import React, { useCallback, useEffect, useState } from "react";
import { languageOptions } from "../../utils/interfaces";
import Select from "react-select";
import "./navigation.css";
import { Link } from "react-scroll";
import Modal from "react-modal";
import { Language, useLanguage } from "../../utils/contexts/languageContext";
import { texts } from "../../utils/texts";

export const Navigation = () => {
  const { language, setLanguage } = useLanguage();

  const [width, setWidth] = useState<number>(window.innerWidth);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isMobile = width <= 768;
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const customStyles = {
    content: {
      top: "27%",
      left: "50%",
      right: "10%",
      bottom: "45%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const handleSetLanguage = (language: Language) => {
    setLanguage(language);
  };

  Modal.setAppElement("div");

  const handleOpenModal = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  return (
    <div id="navigation">
      <div className="parent">
        {!isMobile && (
          <>
            <div className="containerWrapper ">
              <div className="logo">
                <a
                  title="Home"
                  href="https://juliancastravet.github.io/the-wings-academy/"
                >
                  {" "}
                </a>
              </div>
              <div className="nav_options">
                <nav>
                  <ul>
                    <li>
                      <Link
                        to="aboutUs"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        {texts.links.about[language.value]}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="whatWeDo"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        {texts.links.whatWeDo[language.value]}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="contacts"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        {texts.links.contacts[language.value]}
                      </Link>
                    </li>
                  </ul>
                </nav>
                <Select
                  isSearchable={false}
                  defaultValue={language}
                  options={languageOptions}
                  onChange={(e) => handleSetLanguage(e!)}
                />
              </div>
            </div>
          </>
        )}
        {isMobile && (
          <>
            <div className="containerWrapper ">
              <div onClick={handleOpenModal} className="menuIcon">
                {!isOpen && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="menuClose"
                    viewBox="0 0 32 32"
                  >
                    <defs></defs>
                    <title>menu</title>
                    <rect x="4" y="6" width="24" height="2" />
                    <rect x="4" y="24" width="24" height="2" />
                    <rect x="4" y="12" width="24" height="2" />
                    <rect x="4" y="18" width="24" height="2" />
                    <rect
                      id="_Transparent_Rectangle_"
                      data-name="&lt;Transparent Rectangle&gt;"
                      className="cls-1"
                      width="32"
                      height="32"
                    />
                  </svg>
                )}

                {isOpen && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="menuOpen"
                    viewBox="0 0 32 32"
                  >
                    <title>close</title>
                    <polygon
                      className="cls-1"
                      points="24 9.4 22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4"
                    />
                    <rect className="cls-2" width="32" height="32" />
                  </svg>
                )}
              </div>

              <div className="logo">
                <a href="/" title="">
                  {" "}
                </a>
              </div>
              <Select
                isSearchable={false}
                defaultValue={language}
                options={languageOptions}
                onChange={(e) => handleSetLanguage(e!)}
              />
            </div>

            <Modal
              isOpen={isOpen}
              onRequestClose={handleOpenModal}
              style={customStyles}
              contentLabel="Navigation Menu"
            >
              <>
                <div className="nav_options">
                  <nav>
                    <ul>
                      <li>
                        <Link
                          to="aboutUs"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          {texts.links.about[language.value]}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="whatWeDo"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          {texts.links.whatWeDo[language.value]}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="contacts"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          {texts.links.contacts[language.value]}
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </>
            </Modal>
          </>
        )}
      </div>
    </div>
  );
};
