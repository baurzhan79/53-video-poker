import React from "react";
import "../../assets/cards.css";

const Card = (props) => {
    let suitName = "";
    let suitSymbol = "";

    switch (props.suit) {
        case "H":
            suitName = "hearts";
            suitSymbol = "\u2665"; // ♥
            break;

        case "D":
            suitName = "diams";
            suitSymbol = "\u2666"; // ♦
            break;

        case "C":
            suitName = "clubs";
            suitSymbol = "\u2663"; // ♣
            break;

        case "S":
            suitName = "spades";
            suitSymbol = "\u2660"; // ♠
            break;

        default:
            return null;
    }

    return (
        <div className={`card rank-${props.rank.toLowerCase()} ${suitName}`}>
            <span className="rank">{props.rank}</span>
            <span className="suit">{suitSymbol}</span>
        </div>
    )
}

export default Card;