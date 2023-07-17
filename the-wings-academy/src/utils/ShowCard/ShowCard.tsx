import { Button } from "../Button/Button"
import "./index.css"

interface Props {
    language:any;
    zoomed?: boolean;
    cardTitle: string;
    btnTitle:string;
}

export const ShowCard = (props:Props)=>{
    const {language,zoomed, cardTitle, btnTitle} = props;

    return (
        <div className={`card_wrapper ${zoomed? "zoomed":""}` } >
            
            <div className="card_icon"></div>
            <div className="card_title">{cardTitle}</div>

            <Button title={btnTitle}></Button>

        </div>
    )
}