import React from "react";
import "./Busroute.css"
export default function BusRoute() {
    return (
        <>
            <div className="BusBox">
                <div className="buscontainer">
                    <label for="Buses">Select Local Bus Number:</label>
                    <select id="Buses">
                        <option>1</option>
                        <option>1B</option>
                        <option>2</option>
                        <option>2A</option>
                        <option>2C</option>
                        <option>3A</option>
                        <option>3B</option>
                        <option>3D</option>
                        <option>4</option>
                        <option>4A</option>
                        <option>4C</option>
                        <option>5</option>
                        <option>6A</option>
                        <option>6B</option>
                        <option>6C</option>
                        <option>7</option>
                        <option>9A</option>
                        <option>9B</option>
                        <option>10A</option>
                        <option>10B</option>
                    </select>
                    <button onClick={reveal}>Get Bus Routes</button>
                </div>
                <div className="busoutput">
                    <div class="output" id="1">
                        <h2>Bus Number : <span id="busnumber"></span></h2>
                        <span>Bus Route in Order</span>
                        <ul>
                            <li id="city1"></li>
                            <li id="city2"></li>
                            <li id="city3"></li>
                            <li id="city4"></li>
                            <li id="city5"></li>
                            <li id="city6"></li>
                            <li id="city7"></li>
                            <li id="city8"></li>
                            <li id="city9"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

const reveal=()=>{
    const selectint = document.getElementById("Buses");
    let input = null
    const busnumber = document.getElementById("busnumber")

    const city1 = document.getElementById("city1")
    const city2 = document.getElementById("city2")
    const city3 = document.getElementById("city3")
    const city4 = document.getElementById("city4")
    const city5 = document.getElementById("city5")
    const city6 = document.getElementById("city6")
    const city7 = document.getElementById("city7")
    const city8 = document.getElementById("city8")
    const city9 = document.getElementById("city9")

    input = selectint.value
    busnumber.innerHTML = input

    switch(input){
        case "1":
            city1.innerHTML="State Bank"
            city2.innerHTML="Car Street"
            city3.innerHTML="Mannagudda"
            city4.innerHTML="Ladyhill"
            city5.innerHTML="Chilimbi"
            city6.innerHTML="Urva Store"
            city7.innerHTML="Kavoor"
            city8.innerHTML="MCF Colony"
            city9.innerHTML="Kunjathbail"
            break;
            
            
        case "1B":
            city1.innerHTML="State Bank"
            city2.innerHTML="Lalbagh"
            city3.innerHTML="Urva Store"
            city4.innerHTML="Kulur"
            city5.innerHTML="Tannirbhavi"
            city6.innerHTML=""
            city7.innerHTML=""
            city8.innerHTML=""
            city9.innerHTML=""
        break;
        
        case "1B":
            city1.innerHTML="State Bank"
            city2.innerHTML="Lalbagh"
            city3.innerHTML="Urva Store"
            city4.innerHTML="Kulur"
            city5.innerHTML="Tannirbhavi"
            city6.innerHTML=""
            city7.innerHTML=""
            city8.innerHTML=""
            city9.innerHTML=""
        break;

        case "2":
            city1.innerHTML="State Bank"
            city2.innerHTML="Lalbagh"
            city3.innerHTML="Ashok Nagar"
            city4.innerHTML="Baikampady"
            city5.innerHTML="Surathkal"
            city6.innerHTML="Mukka"
            city7.innerHTML=""
            city8.innerHTML=""
            city9.innerHTML=""
        break;
        
        case "2A":
            city1.innerHTML="State Bank"
            city2.innerHTML="Lalbagh"
            city3.innerHTML="Ashok Nagar"
            city4.innerHTML="Baikampady"
            city5.innerHTML="Surathkal"
            city6.innerHTML="Mukka"
            city7.innerHTML="Sasihitlu"
            city8.innerHTML=""
            city9.innerHTML=""
        break;
        
        case "2C":
            city1.innerHTML="State Bank"
            city2.innerHTML="Lalbagh"
            city3.innerHTML="Ashok Nagar"
            city4.innerHTML="Baikampady"
            city5.innerHTML="Baikampady Industrial"
            city6.innerHTML="Jokatte"
            city7.innerHTML=""
            city8.innerHTML=""
            city9.innerHTML=""
        break;

        case "3B":
            city1.innerHTML="State Bank"
            city2.innerHTML="Car Street"
            city3.innerHTML="Mannagudda"
            city4.innerHTML="Ladyhill"
            city5.innerHTML="Chilimbi"
            city6.innerHTML="Urva Store"
            city7.innerHTML="Kavoor"
            city8.innerHTML="MCF Colony"
            city9.innerHTML="Kunjathbail"
        break;
        case "3D":
            city1.innerHTML="State Bank"
            city2.innerHTML="Jyothi"
            city3.innerHTML="Bunts Hostel"
            city4.innerHTML="Baikampady"
            city5.innerHTML="Baikampady Industrial"
            city6.innerHTML="Kadri"
            city7.innerHTML=""
            city8.innerHTML=""
            city9.innerHTML=""
        break;
        case "4":
            city1.innerHTML="State Bank"
            city2.innerHTML="Falnir"
            city3.innerHTML="Kankanady"
            city4.innerHTML="Bendoor Well"
            city5.innerHTML="Mallikatte"
            city6.innerHTML="Kulshekar Chowki"
            city7.innerHTML=""
            city8.innerHTML=""
            city9.innerHTML=""
        break;

    }

    console.log(input);
}