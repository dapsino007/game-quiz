import {moneyPyramid} from "../../data";
import "./money.scss";

const Money = ({questionNumber}) => {
    return (
     <>
        <ul className="moneyList">
            {moneyPyramid.map((money) => (
                <li
                  className={
                    questionNumber === money.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{money.id}</span>
                  <span className="moneyListItemAmount">{money.amount}</span>
                </li>
            ))}
        </ul>
     </>
    )
}

export default Money;
