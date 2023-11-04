import React from 'react'
import './Card.css'
import Button from './Button'
export default function Card(props){
    return(
        <>
            <div className="cardbox">
                <div className="head">
                    <img src={props.image}/>
                </div>
                <span className='heading'>
                    {props.Heading}
                </span>
                <p>{props.paragraph}</p>
                <a href={props.link}>
                    <Button Text={props.ButtonText}/>
                </a>
            </div>
        </>
    )
}