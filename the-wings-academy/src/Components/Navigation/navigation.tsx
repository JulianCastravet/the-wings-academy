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
          <Flag code="ro"height={16} /> Romanian
        </>
      )    },
    {
      value: "ru",
      label: (
        <>
          <Flag code="ru"  height={16}/> Русский
        </>
      )
    },
    {
      value: "eng",
      label: (
        <>
          <Flag code="gb" height={16} /> English
        </>
      )
    }
  ];



let english = selectValue.value === "eng";
let russian = selectValue.value === "ru";
let romanian = selectValue.value === "ro"

return (
    <div id="navigation" className="parent">
        <div className="containerWrapper">
            <div className="logo">
                <a href='#'></a>
            </div>
            <div className="nav_options">
              {
                english && (
                    <nav>
                    <ul>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">What we Do?</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
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
                            <a href="#">О Нас</a>
                        </li>
                        <li>
                            <a href="#">Что Мы Делаем?</a>
                        </li>
                        <li>
                            <a href="#">Контакты</a>
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
                            <a href="#">Despre Noi</a>
                        </li>
                        <li>
                            <a href="#">Ce Facem?</a>
                        </li>
                        <li>
                            <a href="#">Contacteaza-ne</a>
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
)
}