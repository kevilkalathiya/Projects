import React, { useState } from "react";
import API from "./API/Tools_API";

function Tools(props) {
  const [data, setdata] = useState(API);
  console.log(data);
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center flex-wrap text-center Tools">
          {Object.entries(data).map((res, i) => {
            console.log(res);
            return (
              <div className="Tools_card px-xxl-4 py-xxl-0 p-3" key={i}>
                <img src={res[1].Image} alt="" className="mb-2" />
                <br />
                <a href="" className="text-decoration-underline ">
                  {res[1].title}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Tools;
