"use client";
import { useEffect } from "react";
import { register } from "swiper/element/bundle";
import Image from "next/image";

export default function Carousel() {
  useEffect(() => {
    register();
  }, []);

  return (
    <div className="mb-4">
      <div className="mx-80 mb-4 flex justify-between">
        <div className="flex flex-col">
          <div className="text-3xl font-semibold">Nos Véhicules Aménagés </div>
          <div className="mt-2 text-xl text-neutral-500">
            Le modèle conçu selon vos envies
          </div>
        </div>
        <div>
          <button className="btn btn-info m-2 rounded-full">
            Voir tout nos véhicules
          </button>
        </div>
      </div>

      <div className="mx-80 ">
        <swiper-container
          className="mySwiper  "
          space-between="45"
          slides-per-view="3.2"
          navigation="true"
        >
          <swiper-slide>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <Image
                  src="/images/pic_test8.jpg"
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
                  src="/images/pic_test7.jpg"
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
                  src="/images/pic_test8.jpg"
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
                  src="/images/pic_test8.jpg"
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
                  src="/images/pic_test8.jpg"
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
                  src="/images/pic_test8.jpg"
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
                  src="/images/pic_test8.jpg"
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
                  src="/images/pic_test8.jpg"
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
        </swiper-container>
      </div>
    </div>
  );
}
