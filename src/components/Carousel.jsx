"use client";

import { register } from "swiper/element/bundle";
import Image from "next/image";

export default function Carousel() {
  register();

  return (
    <swiper-container
      className="mySwiper"
      space-between="30"
      slides-per-view="3"
      navigation="true"
    >
      <swiper-slide>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image
              src="/images/jeep.jpg"
              alt="Shoes"
              width={400}
              height={400}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image
              src="/images/luminescent_sky.jpg"
              alt="Shoes"
              width={400}
              height={400}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image
              src="/images/hero.jpg"
              alt="Shoes"
              width={400}
              height={400}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
    </swiper-container>
  );
}
