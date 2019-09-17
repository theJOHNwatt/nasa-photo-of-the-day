import React from "react";

const Card = props => {
    return (
        <div className='ApodCard'>
            <h2>{props.title}</h2>
            <h3>Taken By: {props.copyright}</h3>
            <p>{props.date}</p>
            <img src={props.url}/>
            <h3>{props.explanation}</h3>
            <a href={props.url}>Link To Image</a>
        </div>
        
    );
};

export default Card;