import React from "react";
import "./home.css";
import Card from "../Components/Card";
export default function Home() {
    return (
        <>
            <div className="image">
                <img src="https://mangaloremerijaan.com/wp-content/uploads/2023/02/maxresdefault.jpg" alt=""/>
                    <h1>EXPLORE MANGALORE</h1>
            </div>

            <h1 className="text-dark m-5 text-center text-white">SERVICES</h1>
            <div className="card-group m-4">
                <Card Heading="Local Bus Routes" date="aug 4" likes="103" ButtonText="Browse Bus Routes" image="https://i.ytimg.com/vi/zc3OFT85MFE/maxresdefault.jpg" paragraph="Simplify urban travel with all the bus routes in town. Access up-to-date schedules and stops through our website, making city navigation a breeze." link="/BusRoute"></Card>
                <Card Heading="Places" date="aug 4" likes="103" ButtonText="Check best Bus to Board on" image="https://i.ytimg.com/vi/zGRNlEc6OMo/maxresdefault.jpg" paragraph="Simplify urban travel with all the bus routes in town. Access up-to-date schedules and stops through our website, making city navigation a breeze." link="/Cities"></Card>
                <Card Heading="Restaurants" date="aug 4" likes="103" ButtonText="Browse Restaurants" image="https://10619-2.s.cdn12.com/rests/original/110_514653097.jpg" paragraph="Find all the restaurants in town. Our website simplify your dining choices with detailed listings, menus, and reviews. " link="/Restaurants"></Card>
            </div>
        </>
    )
}