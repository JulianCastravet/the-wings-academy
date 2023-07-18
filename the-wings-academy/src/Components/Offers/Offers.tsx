import React from 'react';
import { ShowCard } from '../../utils/ShowCard/ShowCard';
import { Title2 } from '../../utils/Title2/Title2';
import "./index.css"

export const Offers = ({language}:any)=>{

    const romanian = language.value ==="ro"
    const english = language.value ==="eng"
    const russian = language.value ==="ru"

    const individual = require("../../assets/one-to-one.png")
    const marathon = require("../../assets/marathon.png")
    const cvEdit = require("../../assets/cv_edit.png")

    function firstBtnTitle():string{
        if(romanian) {
            return "Solicită"
        } else if(english){
            return "Request"
        }
        return "Получить"
    }
    function secondBtnTitle():string{
        if(romanian) {
            return "Înscrie-te"
        } else if(english){
            return "Register"
        }
        return "Регистрироватся"
    }
    function thirdBtnTitle():string{
        if(romanian) {
            return "Solicită"
        } else if(english){
            return "Request"
        }
        return "Получить"
    }

    function firstCardTitle():string {
        if(romanian) {
            return "Pregătire individuală"
        }
        else if(english) {
            return "Individual training"
        }
        return "Индивидуальное обучение"
    }
    function secondCardTitle():string {
        if(romanian) {
            return `Start-Up Maraton "Come and Fly" `
        }
        else if(english) {
            return 'Start-Up Marathon "Come and Fly"'
        }
        return 'Стартап Маратон "Come and Fly"'
    }
    function thirdCardTitle():string {
        if(romanian) {
            return "Redactarea unui CV"
        }
        else if(english) {
            return "Writing a CV"
        }
        return "Написание Резюме"
    }


    return (
        <>
        <div className='containerWrapper'>
       <div className='parent'>
      {romanian && <Title2  centered title='Mai Oferim Și:'/>}
      {russian && <Title2  centered title='Предлагаем Ешё:'/>}
      {english && <Title2 centered title='We Also Offer:'/>}
        <div className='offer_wrapper'>
<ShowCard language={language} btnTitle={firstBtnTitle()} cardTitle={firstCardTitle()} imgSrc={individual}/>
<ShowCard zoomed language={language} btnTitle={secondBtnTitle()} cardTitle={secondCardTitle()} imgSrc={marathon}/>
<ShowCard language={language} btnTitle={thirdBtnTitle()} cardTitle={thirdCardTitle()} imgSrc={cvEdit}/>
            

        </div>
       </div>
        </div>
        </>
    )
}