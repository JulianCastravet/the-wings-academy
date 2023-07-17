import React from 'react';
import { ShowCard } from '../../utils/ShowCard/ShowCard';
import "./index.css"

export const Offers = ({language}:any)=>{

    const romanian = language.value ==="ro"
    const english = language.value ==="eng"

    function firstBtnTitle():string{
        if(romanian) {
            return "Solicita"
        } else if(english){
            return "Request"
        }
        return "Получить"
    }
    function secondBtnTitle():string{
        if(romanian) {
            return "Inscrie-te"
        } else if(english){
            return "Register"
        }
        return "Регистрироватся"
    }
    function thirdBtnTitle():string{
        if(romanian) {
            return "Solicita"
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
            return "Personal training"
        }
        return "Индивидуальная подготовка"
    }
    function secondCardTitle():string {
        if(romanian) {
            return 'Start-Up Maraton "Come and Fly" '
        }
        else if(english) {
            return 'Start-Up Marathon "Come and Fly"'
        }
        return 'Стартап Маратон "Come and Fly"'
    }
    function thirdCardTitle():string {
        if(romanian) {
            return "Redactarea sau crearea unui CV perfect"
        }
        else if(english) {
            return "Build or upgrade to a perfect CV"
        }
        return "Создание или редактирование отличного резюме"
    }


    return (
        <div className='offer_wrapper'>
<ShowCard language={language} btnTitle={firstBtnTitle()} cardTitle={firstCardTitle()}></ShowCard>
<ShowCard zoomed language={language} btnTitle={secondBtnTitle()} cardTitle={secondCardTitle()}></ShowCard>
<ShowCard language={language} btnTitle={thirdBtnTitle()} cardTitle={thirdCardTitle()}></ShowCard>
            

        </div>
    )
}