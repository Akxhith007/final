import React from "react";
import "./Busroute.css"

export default function BusRoute() {
    return (
        <>
            <div className="BusBox">
                <div className="buscontainer">
                    <label for="Buses">Select place where you want to visit:</label>
                    <select id="Buses">
                        <option>State Bank</option>
                        <option>Car Street</option>
                        <option>Mannagudda</option>
                        <option>Ladyhill</option>
                        <option>Chilimbi</option>
                        <option>Kavoor</option>
                        <option>Kunjathbail</option>
                        <option>Urva Stores</option>
                        <option>MCF Colony</option>
                        <option>Lalbagh</option>
                        <option>Kulur</option>
                        <option>Thannirbhavi</option>
                        <option>Ashok Nagar</option>
                        <option>Baikampady</option>
                        <option>Surathkal</option>
                        <option>Mukka</option>
                        <option>Sasihitlu</option>
                        <option>Jokatte</option>
                        <option>Jyoti</option>
                        <option>Kadri</option>
                        <option>Bunts Hostel</option>
                    </select>
                    <button onClick={reveal}>Get Buses</button>
                </div>
                <div className="busoutput">
                    <div class="output" id="1">
                        <h2>Place Name : <span id="busnumber"></span></h2>
                        <span>Buses that can take you there :</span>
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
        case "State Bank":
            city1.innerHTML="1"
            city2.innerHTML="1B"
            city3.innerHTML="2"
            city4.innerHTML="2A"
            city5.innerHTML="2C"
            city6.innerHTML="3A"
            city7.innerHTML="3D"
            city8.innerHTML="4"
            city9.innerHTML="4A"
            break;
            
            
        case "Car Street":
            city1.innerHTML="1"
            city2.innerHTML="3B"
            city3.innerHTML=""
            city4.innerHTML=""
            city5.innerHTML=""
            city6.innerHTML=""
            city7.innerHTML=""
            city8.innerHTML=""
            city9.innerHTML=""
        break;
        
        case "Mannagudda":
            city1.innerHTML="1"
            city2.innerHTML="3B"
            city3.innerHTML=""
            city4.innerHTML=""
            city5.innerHTML=""
            city6.innerHTML=""
            city7.innerHTML=""
            city8.innerHTML=""
            city9.innerHTML=""
        break;

        case "Ladyhill":
            city1.innerHTML="1"
            city2.innerHTML="3B"
            city3.innerHTML=""
            city4.innerHTML=""
            city5.innerHTML=""
            city6.innerHTML=""
            city7.innerHTML=""
            city8.innerHTML=""
            city9.innerHTML=""
        break;

        case "Chilimbi":
            city1.innerHTML="1"
            city2.innerHTML="3B"
            city3.innerHTML=""
            city4.innerHTML=""
            city5.innerHTML=""
            city6.innerHTML=""
            city7.innerHTML=""
            city8.innerHTML=""
            city9.innerHTML=""
        break;

        case "Kavoor":
            city1.innerHTML="1"
            city2.innerHTML="3B"
            city3.innerHTML=""
            city4.innerHTML=""
            city5.innerHTML=""
            city6.innerHTML=""
            city7.innerHTML=""
            city8.innerHTML=""
            city9.innerHTML=""
        break;

        case "Kunjathbail":
            city1.innerHTML="1"
            city2.innerHTML="3B"
            city3.innerHTML=""
            city4.innerHTML=""
            city5.innerHTML=""
            city6.innerHTML=""
            city7.innerHTML=""
            city8.innerHTML=""
            city9.innerHTML=""
        break;

        case "Urva Stores":
            city1.innerHTML="1"
            city2.innerHTML="1B"
            city3.innerHTML="3B"
            city4.innerHTML=""
            city5.innerHTML=""
            city6.innerHTML=""
            city7.innerHTML=""
            city8.innerHTML=""
            city9.innerHTML=""
        break;

        case "MCF Colony":
            city1.innerHTML="1"
            city2.innerHTML="3B"
            city3.innerHTML=""
            city4.innerHTML=""
            city5.innerHTML=""
            city6.innerHTML=""
            city7.innerHTML=""
            city8.innerHTML=""
            city9.innerHTML=""
        break;

        case "Lalbagh":
            city1.innerHTML="1B"
            city2.innerHTML="5"
            city3.innerHTML="2"
            city4.innerHTML="2A"
            city5.innerHTML="2C"
            city6.innerHTML="3A"
            city7.innerHTML="3B"
            city8.innerHTML="3D"
            city9.innerHTML="4"
        break;

        case "Kulur":
            city1.innerHTML="1B"
            city2.innerHTML=""
            city3.innerHTML=""
            city4.innerHTML=""
            city5.innerHTML=""
            city6.innerHTML=""
            city7.innerHTML=""
            city8.innerHTML=""
            city9.innerHTML=""
        break;

        case "Thannirbhavi":
            city1.innerHTML="1B"
            city2.innerHTML=""
            city3.innerHTML=""
            city4.innerHTML=""
            city5.innerHTML=""
            city6.innerHTML=""
            city7.innerHTML=""
            city8.innerHTML=""
            city9.innerHTML=""
        break;

        case "Ashok Nagar":
            city1.innerHTML="1"
            city2.innerHTML="1B "
            city3.innerHTML="2"
            city4.innerHTML="2A"
            city5.innerHTML="2C"
            city6.innerHTML="3A"
            city7.innerHTML="3B"
            city8.innerHTML="3D"
            city9.innerHTML="4"
        break;

        case "Baikampady":
            city1.innerHTML="2"
            city2.innerHTML="2A "
            city3.innerHTML="3A"
            city4.innerHTML="3D"
            city5.innerHTML="4A"
            city6.innerHTML="4C"
            city7.innerHTML="5"
            city8.innerHTML="6A"
            city9.innerHTML="6B"
        break;

        case "Surathkal":
            city1.innerHTML="2"
            city2.innerHTML="2A "
            city3.innerHTML=""
            city4.innerHTML=""
            city5.innerHTML=""
            city6.innerHTML=""
            city7.innerHTML=""
            city8.innerHTML=""
            city9.innerHTML=""
        break;

        case "Mukka":
            city1.innerHTML="2"
            city2.innerHTML="2A "
            city3.innerHTML=""
            city4.innerHTML=""
            city5.innerHTML=""
            city6.innerHTML=""
            city7.innerHTML=""
            city8.innerHTML=""
            city9.innerHTML=""
        break;

        case "Sasihitlu":
            city1.innerHTML="2A"
            city2.innerHTML=""
            city3.innerHTML=""
            city4.innerHTML=""
            city5.innerHTML=""
            city6.innerHTML=""
            city7.innerHTML=""
            city8.innerHTML=""
            city9.innerHTML=""
        break;

        case "Jokatte":
            city1.innerHTML="2C"
            city2.innerHTML="3A"
            city3.innerHTML="6B"
            city4.innerHTML=""
            city5.innerHTML=""
            city6.innerHTML=""
            city7.innerHTML=""
            city8.innerHTML=""
            city9.innerHTML=""
        break;

        case "Jyoti":
            city1.innerHTML="3D"
            city2.innerHTML=""
            city3.innerHTML=""
            city4.innerHTML=""
            city5.innerHTML=""
            city6.innerHTML=""
            city7.innerHTML=""
            city8.innerHTML=""
            city9.innerHTML=""
        break;

        case "Jyoti":
            city1.innerHTML="3D"
            city2.innerHTML=""
            city3.innerHTML=""
            city4.innerHTML=""
            city5.innerHTML=""
            city6.innerHTML=""
            city7.innerHTML=""
            city8.innerHTML=""
            city9.innerHTML=""
        break;

        case "Kadri":
            city1.innerHTML="3D"
            city2.innerHTML=""
            city3.innerHTML=""
            city4.innerHTML=""
            city5.innerHTML=""
            city6.innerHTML=""
            city7.innerHTML=""
            city8.innerHTML=""
            city9.innerHTML=""
        break;

        case "Kadri":
            city1.innerHTML="3D"
            city2.innerHTML=""
            city3.innerHTML=""
            city4.innerHTML=""
            city5.innerHTML=""
            city6.innerHTML=""
            city7.innerHTML=""
            city8.innerHTML=""
            city9.innerHTML=""
        break;
    }

    console.log(input);
}