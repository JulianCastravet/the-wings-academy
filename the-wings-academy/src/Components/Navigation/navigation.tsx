import React from "react"
import { OptionType } from "../../utils/interfaces";
import Select from 'react-select';
import "./navigation.css"
import Flag from "react-world-flags"




export const Navigation = (props:any) =>{

const {selectValue, setSelectValue} = props;


 const colourOptions: OptionType[] = [
    {
      value: "ro",
      label: (
        <>
          <Flag code="ro"height={16} /> <span>Română</span> 
        </>
      )    },
    {
      value: "ru",
      label: (
        <>
          <Flag code="ru"  height={16}/> <span>Русский</span>
        </>
      )
    },
    {
      value: "eng",
      label: (
        <>
          <Flag code="gb" height={16} /><span> English</span>
        </>
      )
    }
  ];



let english = selectValue.value === "eng";
let russian = selectValue.value === "ru";
let romanian = selectValue.value === "ro"

return (
    <div id="navigation">
      <div className="parent">
      <div className="containerWrapper ">
            <div className="logo">
                <a href='/'></a>
            </div>
            <div className="nav_options">
              {
                english && (
                    <nav>
                    <ul>
                        <li>
                            <a href="#aboutUs">About Us</a>
                        </li>
                        <li>
                            <a href="#whatWeDo">What We Do?</a>
                        </li>
                        <li>
                            <a href="#contacts">Contact Us</a>
                        </li>
                    </ul>
                </nav>
                )
              }
              {
                russian && (
                    <nav>
                    <ul>
                        <li>
                            <a href="#aboutUs">О Нас</a>
                        </li>
                        <li>
                            <a href="#whatWeDo">Что Мы Делаем?</a>
                        </li>
                        <li>
                            <a href="#contacts">Контакты</a>
                        </li>
                    </ul>
                </nav>
                )
              }
              {
                romanian && (
                    <nav>
                    <ul>
                        <li>
                            <a href="#aboutUs">Despre Noi</a>
                        </li>
                        <li>
                            <a href="#whatWeDo">Ce Facem?</a>
                        </li>
                        <li>
                            <a href="#contacts">Contactează-ne</a>
                        </li>
                    </ul>
                </nav>
                )
              }

<Select isSearchable={false}
        defaultValue={selectValue}
        options={colourOptions}
      onChange={setSelectValue}
      />


                
            </div>
        </div>
      </div>


    </div>
)
}