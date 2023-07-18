import React, { useState } from "react";
import For_business from "./API/For_business";

function Surface(props) {
  const [Data, setdata] = useState(For_business);
  console.log(Data);
  return (
    <>
      <div className="side_padding pt-5 mb-xxl-5 For_business">
        <h2>For business</h2>
        <div className="row">
          {Object.entries(Data).map((res, i) => {
            console.log(res, i);
            return (
              <div className="col-xxl-3 surface mb-xxl-0 mb-5" key={i}>
                <a href="">
                  <img src={res[1].Image} alt="" />
                  <h3 className="my-3">{res[1].title}</h3>
                  <p>{res[1].info}</p>
                  <a href="" className="more">
                    <span>{res[1].more}</span>
                    &nbsp;&nbsp;<i class="fa-solid fa-chevron-right"></i>
                  </a>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Surface;
