import React from "react";
import RestoCard from "../Components/RestoCard";
import "./Restaurants.css"
export default function Restaurants(){
    const btn = document.querySelectorAll(".Restoselector button")
    Array.from(btn).forEach((b)=>{
        b.addEventListener("click",(e)=>{
            b.style.display = "inline";
            let name = e.target.innerHTML.toLowerCase();
            let classbox = document.querySelectorAll(`.${name}`)
            Array.from(classbox).forEach((c)=>{
                c.style.display = "none"
            });
        })
    });

    return(
        <>
            <div className="Restoselector">
                <h1>Filters : </h1>
                <div className="vn">
                    <button>
                        Veg
                    </button>
                    <button>
                        Non-Veg
                    </button>
                </div>
                <div className="cost">
                    <button>
                        Cheap
                    </button>
                    <button>
                        Average
                    </button>
                    <button>
                        Costly
                    </button>
                </div>
            </div>

            <div className="Restobox">
                <div className="non-veg">
                    <RestoCard name="24 Carot" foodtype="Veg & Non-veg" ratings="4.5" pricing="Costly" dish="Ghost Chicken"     image="https://files.propertywala.com/photos/3f/J751189525.clubhouse.21566015l.jpg" address="Door 3-143/1A, Yamuna Sports & Recreation Club, Yamuna Asha City, Kulai, Mangalore"></RestoCard>
                </div>
                <div className="non-veg">
                    <RestoCard name="Sai Palace" foodtype="Veg & Non-veg" ratings="4.5" pricing="Average" dish="Chicken 65" image="https://cf.bstatic.com/xdata/images/hotel/max1024x768/193215845.jpg?k=e1e27420f9be7d6a0722a1da6e478c8a9d04e1e0f72408ae0f4186124f09be09&o=&hp=1" address="KSR Road, opposite Citi center mall, Hampankatta, Mangaluru, Karnataka 575001"></RestoCard>
                </div>
                <div className="veg">
                    <RestoCard name="Janata Deluxe" foodtype="Veg" ratings="4" pricing="Cheap" dish="Gobi Manchurian" image="https://b.zmtcdn.com/data/pictures/7/3100417/da665e04a1169330486db982700eab64.jpg" address="K S Rao Road, Mangalore, Karnataka 575001 Ph : 0824 242 6889 Our sister concern Hotel Janatha Deluxe Pattumudi Soudha, Ballalbagh, Mangalore- 575003"></RestoCard>
                </div>
                <div className="non-veg">
                    <RestoCard name="Madhuvan's Village" foodtype="Veg & Non-Veg" ratings="4" pricing="Cheap" dish="Anjal Ghee Roast" image="https://i1.wp.com/www.skinnygirldiariez.com/wp-content/uploads/2016/12/DSC_0157.jpg?fit=640%2C426&ssl=1" address="Yeyyadi Airport Road, Mangalore 575008, India"></RestoCard>
                </div>
                <div className="non-veg">
                    <RestoCard name="Giri Manjas" foodtype="Veg & Non-Veg" ratings="4.5" pricing="Cheap" dish="Gobi Manchurian" image="https://i0.wp.com/tuluadda.com/wp-content/uploads/2021/01/giri-manjas-mangalore.jpg?fit=1440%2C919&ssl=1" address="Near Kalikamba Temple, Gopalkrishna Temple Road, Bhavathi, Mangalore Bhavathi"></RestoCard>
                </div>
            </div>
        </>
    )
} 