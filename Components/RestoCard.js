import React,{useState} from "react";
import "./Resto.css"
import Button from "./Button";

export default function RestoCard(props){
    const [btntext,setbtntext] = useState("Read More")
    
    const expand =()=>{
        let box = document.querySelectorAll(".nav")

        Array.from(box).forEach((e)=>{
            if(btntext=="Read Less"){
                setbtntext("Read More")
                e.style.display="none";
            }
            else{
                setbtntext("Read Less")
                e.style.display="inline";
            }
        })
    }
    return(
        <>
            <div className="Restocard-box">
                <img src={props.image}/>
                <section>
                    <h1>{props.name}</h1>
                    <h5>Adress</h5>
                    <p>{props.address}</p>
                    <div onClick={expand}>
                        <Button Text={btntext}></Button>
                    </div>
                </section>
                <nav className="nav">
                    <div>
                        <h6>Ratings</h6>
                        <span>{props.ratings}/5</span>
                    </div>
                    <div>
                        <h6>Best Dish</h6>
                        <span>{props.dish}</span>
                    </div>
                    <div>
                        <h6>Pricing</h6>
                        <span>{props.pricing}</span>
                    </div>
                    <div>
                        <h6>Food Type</h6>
                        <span>{props.foodtype}</span>
                    </div>
                </nav>
            </div>
        </>
    )
}
