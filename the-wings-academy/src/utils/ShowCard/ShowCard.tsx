import { Button } from "../Button/Button"
import "./index.css"

interface Props {
    language:any;
    zoomed?: boolean;
    cardTitle: string;
    btnTitle:string;
    imgSrc: any;
    onClick:()=>void
}

export const ShowCard = (props:Props)=>{
    const {zoomed, cardTitle, btnTitle,imgSrc, onClick} = props;

    return (
        <div className={`card_wrapper ${zoomed? "zoomed":""}` } >
            
            <div className="card_icon"><img src={imgSrc} alt="image"></img></div>
            <div className="card_title">{cardTitle}</div>

            <Button title={btnTitle} onClick={onClick}></Button>

        </div>
    )
}