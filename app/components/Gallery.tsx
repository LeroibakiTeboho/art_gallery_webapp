import Image from "next/image";
import React from "react";


const Gallery = () => {
  return (
    <div>
      <h1 className="text-center text-[#C7CAFF] py-20 text-9xl ">- Gallery</h1>
      <div className="min-h-screen flex justify-center items-start  mb-12 bg-cover bg-center bg-fixed  custom-img overflow-hidden relative">
        <div className="grid-wrapper w-[1360px]">
          <div className="tall">
            <Image
              className="w-full h-auto align-middle inline-block"
              src="https://cdn.pixabay.com/photo/2023/06/14/04/45/mountain-8062284_1280.png"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="big">
            <Image
              className="img w-full h-auto align-middle inline-block"
              src="https://cdn.pixabay.com/photo/2022/03/05/10/08/beauty-7048849_960_720.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="img w-full h-auto align-middle inline-block"
              src="https://cdn.pixabay.com/photo/2014/03/24/17/06/bird-295026_1280.png"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="tall">
            <Image
              className="img w-full h-auto align-middle inline-block"
              src="https://cdn.pixabay.com/photo/2021/05/14/22/11/faces-6254573_1280.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              className="img w-full h-auto align-middle inline-block"
              src="https://cdn.pixabay.com/photo/2022/04/22/17/22/woman-7150236_1280.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="big">
            <Image
              className="img w-full h-auto align-middle inline-block"
              src="https://cdn.pixabay.com/photo/2022/08/19/13/40/leaves-7396970_1280.jpg"
              alt=""
               width={500}
              height={500}
            />
          </div>
          <div className="tall">
            <img
              className="img w-full h-auto align-middle inline-block"
              src="https://cdn.pixabay.com/photo/2022/06/28/12/28/boho-art-7289600_1280.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="big">
            <Image
              className="img w-full h-auto align-middle inline-block"
              src="https://cdn.pixabay.com/photo/2018/01/11/23/16/woman-3077180_1280.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
