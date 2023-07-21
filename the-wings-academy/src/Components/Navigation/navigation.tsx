import React, { useCallback, useEffect, useState } from "react";
import { OptionType } from "../../utils/interfaces";
import Select from "react-select";
import "./navigation.css";
import Flag from "react-world-flags";
//@ts-ignore
import { Link } from "react-scroll";
//@ts-ignore
import Modal from "react-modal";

export const Navigation = (props: any) => {
  const { selectValue, setSelectValue } = props;

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

  Modal.setAppElement("div");

  const handleOpenModal = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  const colourOptions: OptionType[] = [
    {
      value: "ro",
      label: (
        <>
          <Flag code="ro" height={20} />
        </>
      ),
    },
    {
      value: "ru",
      label: (
        <>
          <Flag code="ru" height={20} />
        </>
      ),
    },
    {
      value: "eng",
      label: (
        <>
          <Flag code="gb" height={16} />
        </>
      ),
    },
  ];

  let english = selectValue.value === "eng";
  let russian = selectValue.value === "ru";
  let romanian = selectValue.value === "ro";

  return (
    <div id="navigation">
      <div className="parent">
        {isMobile === false ? (
          <div className="containerWrapper ">
            <div className="logo">
              <a title="Home" href="/" />
            </div>
            <div className="nav_options">
              {english && (
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
                        About Us
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
                        What We Do?
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
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              )}
              {russian && (
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
                        О Нас
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
                        Что Мы Делаем?
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
                        Контакты
                      </Link>
                    </li>
                  </ul>
                </nav>
              )}
              {romanian && (
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
                        Despre Noi
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
                        Ce Facem?
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
                        Contactează-ne
                      </Link>
                    </li>
                  </ul>
                </nav>
              )}

              <Select
                isSearchable={false}
                defaultValue={selectValue}
                options={colourOptions}
                onChange={setSelectValue}
              />
            </div>
          </div>
        ) : (
          <>
            {/* mobile version */}
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
                <a href="/" title="" />
              </div>
              <Select
                isSearchable={false}
                defaultValue={selectValue}
                options={colourOptions}
                onChange={setSelectValue}
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
                  {english && (
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
                            About Us
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
                            What We Do?
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
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  )}
                  {russian && (
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
                            О Нас
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
                            Что Мы Делаем?
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
                            Контакты
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  )}
                  {romanian && (
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
                            Despre Noi
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
                            Ce Facem?
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
                            Contactează-ne
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  )}
                </div>
              </>
            </Modal>
          </>
        )}
      </div>
    </div>
  );
};
