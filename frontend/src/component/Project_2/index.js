import React, { useState } from "react";
import "./style.css";
export default function FoodFilter() {
  const [data1, setData1] = useState([]);
  const data = [
    {
      id: "1",
      image:
        "https://png.pngitem.com/pimgs/s/334-3340184_rice-and-curry-png-transparent-png.png",
      name: "samosha",
    },
    {
      id: "2",
      image:
        "https://png.pngitem.com/pimgs/s/151-1519981_japanese-food-png-file-japanese-cuisine-png-transparent.png",
      name: "roti",
    },
    {
      id: "3",
      image:
        "https://png.pngitem.com/pimgs/s/151-1519912_pizza-pizza-clip-art-fast-food-image-pizza.png",
      name: "kela",
    },
    {
      id: "4",
      image:
        "https://png.pngitem.com/pimgs/s/152-1520122_bowl-of-kimchi-transparent-kimchi-png-png-download.png",
      name: "aaam",
    },
  ];
  const OnChangeFilter = (event) => {
    let inputValue = event.target.value;
    const res = data.filter((item) => {
      return item.name == inputValue;
    });
    setData1(res);
    console.log(res, "res");
  };
  return (
    <div className="outer_con">
      <div className="inner_con">
        <div className="heading_con">
          <h1>Filter Food By Name</h1>
        </div>
        <input
          className="input"
          type="text"
          placeholder="Enter Food Name..."
          autoComplete="off"
          onChange={(e) => {
            OnChangeFilter(e);
          }}
        />
      </div>
      <div className="line"></div>
      <div className="show_item">
        {data1.length < 1
          ? data.map((item) => {
              return (
                <div className="map_item">
                  <h1>
                    {item.id}
                    {item.name}
                  </h1>
                  <img className="img" src={item?.image} alt="image" />
                </div>
              );
            })
          : data1.map((item) => {
              return (
                <div className="map_item">
                  <h1>
                    {item.id}
                    {item.name}
                  </h1>
                  <img className="img" src={item?.image} alt="image" />
                </div>
              );
            })}
      </div>
    </div>
  );
}
