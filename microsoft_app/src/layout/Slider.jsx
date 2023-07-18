import React from "react";

function Slider(props) {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide mb-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <div className="circle">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active rounded-circle slider_circle "
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className="rounded-circle slider_circle"
            ></button>
          </div>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="img/office_slider.jpg"
              className="d-block w-100 Micro365_img"
              alt="microsoft 365"
            />

            <div class="micro_365">
              <h2 className="">Microsoft 365</h2>
              <p className="py-0">
                Turn your ideas into reality, stay safer online and off, and
                focus on what matters most with Microsoft 365 apps
              </p>
              <a href="">
                <button className="btn me-4">For one person</button>
              </a>
              <a href="" className="py-2">
                <span>For uo to six people</span>&nbsp;&nbsp;
                <i class="fa-solid fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="img/Minecraft-Legends.jpg"
              className="d-block w-100 Minecraft_img"
              alt="Minecraft"
            />
            <div className="Minecraft p-xxl-5">
              <h2>Unite the Overworld in Minecraft Legends</h2>
              <p>
                Explore lush biomes, make alliances with new friends and
                familiar mobs, then face the piglins in epic battles. But be
                warned—they always fight back.
              </p>
              <button className="btn">Get Minecraft Legends now</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon prev_btn"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next prev_next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon next_btn"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Slider;
