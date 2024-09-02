import { iconsImgs } from "../../utils/images";
import "./Loans.css";

const Loans = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c7">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text"><Menu:c></Menu:c>Mining demo</h3>
            <button className="grid-c-title-icon">
                <img src={iconsImgs.plus} />
            </button>
        </div>
        <div className="grid-c7-content">
            <div className="progress-bar">
                <div className="percent">
                    <svg>
                        <circle cx="105" cy="105" r="50"></circle>
                        {/* <circle cx="105" cy="105" r="50" style="--percent: 50"></circle> */}
                    </svg>
                    <div className="number">
                        <h3>49<span>%</span></h3>
                    </div>
                </div>
            </div>
            <ul className="data-list">
                <li className="data-item text-silver-v1">
                    <span className="data-item-text">Mining Target</span>
                    <span className="data-item-value">$ 50,000</span>
                </li>
                <li className="data-item text-silver-v1">
                    <span className="data-item-text">Target Reached</span>
                    <span className="data-item-value">$ 24,604</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Loans