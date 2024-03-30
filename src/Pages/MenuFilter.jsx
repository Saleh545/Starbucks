import React, { useEffect, useState } from "react";

const MenuFilter = ({ data }) => {
  return (
    <div>
      {data.map((val) => (
        <div className="filter" key={val.id}>
          <img src={val.img} alt="" />
          <div className="card-body">
          <h4>
            
              {val.title}
            </h4>
            </div>
        </div>
      ))}
    </div>
  );
};

export default MenuFilter;
