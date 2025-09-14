import React, { useState, useRef } from "react";
import main_img from "../assets/main_img.jpg";
import nav_logo from "../assets/nav_logo.jpg";
import { VscSearch } from "react-icons/vsc";
import { IoStar } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import benz1 from "../assets/benz1.jpg";
import benz2 from "../assets/benz2.jpg";
import benz3 from "../assets/benz3.jpeg";
import benz4 from "../assets/benz4.jpg";
import benz5 from "../assets/benz5.jpg";
import AMG from "../assets/AMG.png";
import MAYBACH from "../assets/MAYBACH.png";
import hover2_1 from "../assets/hover2_1.png";
import hover2_2 from "../assets/hover2_2.png";
import hover2_3 from "../assets/hover2_3.png";
import hover2_4 from "../assets/hover2_4.png";
import hover2_5 from "../assets/hover2_5.png";
import hover2_6 from "../assets/hover2_6.png";
import hover3_1 from "../assets/hover3_1.png";
import hover3_2 from "../assets/hover3_2.png";
import hover3_3 from "../assets/hover3_3.png";
import hover3_4 from "../assets/hover3_4.png";
import hover3_5 from "../assets/hover3_5.png";
import hover_1 from "../assets/hover_1.png";
import steering from "../assets/steering.jpg";
import driving from "../assets/driving.jpg";
import watch from "../assets/watch.jpg";
import videoo from "../assets/videoo.mp4";
import wing_doors from "../assets/wing_doors.jpg";

const Webpage = () => {
  const arr = [
    {
      img: benz3,
      title: "The new GLA",
      description: "Dynamic all the way.",
      buttonText: "Find available cars",
      extra: "Learn more",
    },
    {
      img: benz4,
      title: "The all new GLS 450d 4MATIC AMG Line",
      description: "Committed to greatness.",
      buttonText: "Learn more",
    },
    {
      img: benz5,
      title: "Browse & Buy your Mercedes-Benz",
      description: "Explore our Online Store.",
      buttonText: "Find available cars",
    },
  ];

  const serviceItems = [
    {
      img: steering,
      title: "Digital extras for your Mercedes-Benz",
      description:
        "Simply book additional digital extras and experience your Mercedes-Benz in a new way.",
      buttonText: "Buy online now",
    },
    {
      img: driving,
      title: "Maintenance and Service",
      description:
        "Enjoy Peace of Mind with Mercedes-Benz Service, Maintenance and Repair.",
      buttonText: "Learn more",
    },
    {
      img: watch,
      title: "Mercedes-Benz Collection Items",
      description:
        "Discover Mercedes-Benz Collection: Superior quality, iconic design, crafted with passion.",
      buttonText: "Explore at an outlet near you",
    },
  ];

  const car2Images = [hover3_1, hover3_2, hover3_3, hover3_4, hover3_5];

  const car3Images = [
    hover2_1,
    hover2_2,
    hover2_3,
    hover2_4,
    hover2_5,
    hover2_6,
  ];

  const [car2Index, setCar2Index] = useState(0); //car-2
  const [car3Index, setCar3Index] = useState(0); //car-3
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const animateImages = (setIndex, imagesLength) => {
    for (let i = 1; i < imagesLength; i++) {
      setTimeout(() => setIndex(i), i * 40);
    }
  };
  // car-2 animation on mouse enter and leave
  const handleEnterCar2 = () => animateImages(setCar2Index, car2Images.length);
  const handleLeaveCar2 = () => setCar2Index(0);

  // car-3 animation on mouse enter and leave
  const handleEnterCar3 = () => animateImages(setCar3Index, car3Images.length);
  const handleLeaveCar3 = () => setCar3Index(0);

  // Slider functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % serviceItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + serviceItems.length) % serviceItems.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused || video.ended) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <header className=" flex h-[12vh] w-[100vw] text-white bg-black">
        <nav className="flex items-center ml-[7vw] w-[85vw] bg-800 h-full">
          <ul className="flex gap-10 h-[8vh] w-[80vw] items-center">
            <li className="cursor-pointer">Models</li>
            <li className="cursor-pointer">Buy</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Brand</li>
          </ul>
          <div className="w-[10vw] mr-[17vw]">
            <img
              src={nav_logo}
              alt=""
              className="h-[10vh] border-none border-black w-[10vh]"
            />
          </div>

          <input
            type="text"
            placeholder="Provider/..."
            className="placeholder:text-[#efefef] h-[4vh] w-[8vw] hover:bg-[#3c3c3c] rounded-[5%] p-2"
            name=""
            id=""
          />

          <ul className="flex h-[9vh] w-[20vw] items-center">
            <li>
              <VscSearch className="h-[3vh] w-[3vw] mr-[1vh]" />
            </li>
            <li>
              <IoStar className="h-[3vh] w-[3vw] mr-[1vh]" />
            </li>
            <li>
              <MdLocationOn className="h-[3vh] w-[3vw] mr-[1vh]" />
            </li>
            <li className="bg-gray-700 h-[4vh] w-[2vw] pt-2 rounded-[100px]">
              <FaUserLarge className="h-[2vh] w-[2vw] mr-[1vw]" />
            </li>
          </ul>

          <h2>Login</h2>
        </nav>
      </header>

      <section className="h-[97.2vh] w-[100vw] ">
        <img src={main_img} alt="" />
        <div className="w-[31.14vw] h-[31.33vh] relative mt-[-71vh] ml-[7vw]">
          <h1 className='font-["MB_Corpo_A_Title_Cond_Regular"] tracking-tight font-thinest leading-[4rem] text-[4rem] text-[#FFFFFF] '>
            Dream Days by Mercedes-Benz
          </h1>
          <h2 className="font-size-[2rem] text-[1.125rem] leading-[1.75rem] mt-[4vh] text-[#FFFFFF]">
            This festive season drive home the Mercedes-Benz of your dreams.
          </h2>
          <button className="bg-[#0078D6] text-[#ffffff] font-bold mt-[12vh] rounded-[3%] h-[7vh] w-[9vw]">
            Learn more
          </button>
        </div>
      </section>
      <nav className="h-[58px] mt-[-3vh] w-[455px] flex sticky top-5 z-50">
        <ul className="flex ml-[35vw] text-center border-3 border-[#C9C9C9] items-center">
          <li className='h-[54.6px] w-[144px] font-["MB_Corpo_A_Title_Cond_Regular"] pt-[15px] text-sm text-white bg-black'>
            <h1>Mercedes-Benz</h1>
          </li>
          <li className="h-[55.6px] w-[145px] pl-[5vh] bg-white pt-[20px]">
            <img src={AMG} alt="" className="h-[8px] w-[86px]" />
          </li>
          <li className="h-[55.6px] w-[145px] pl-[5vh] border border-[#C9C9C9] bg-white pt-[20px] ">
            <img src={MAYBACH} alt="" className="h-[8px] w-[86px]" />
          </li>
        </ul>
      </nav>
      <nav className="h-[15vh] w-[100vw] flex  justify-center">
        <h2 className='w-[80vw] h-[15vh] text-[5vh] font-["MB_Corpo_A_Title_Cond_Regular"]'>
          Our Recommendations.
        </h2>
      </nav>

      <div className="ml-[1vw] flex ">
        <article className="ml-[7vw] h-[570.33px] bg-black w-[858.59px]">
          <div className="overflow-hidden">
            <img className="h-[429.29px] w-[858.59px] transition-transform duration-300 ease-in-out hover:scale-105" src={benz1} alt="" />
          </div>
          <div
            style={{
              position: "absolute",
              paddingBlockStart: "var(--wb-spacing-static-hugest)",
              paddingInlineStart: "var(--wb-spacing-static-small)",
              paddingInlineEnd: "var(--wb-spacing-static-small)",
              color: "var(--wb-color-text-fixed-white, #fff)",
              background:
                "linear-gradient(0deg, var(--wb-color-shape-fixed-black, #000) 72%, rgba(0, 0, 0, 0) 100%)",
              overflowWrap: "break-word",
              paddingLeft: "20px",
            }}
            className="ml-[px] h-[231.6px] mt-[-140px] w-[858.8px]"
          >
            <h3 className='font-["MB_Corpo_A_Title_Cond_Regular"] pt-[92px] text-[1.74rem] '>
              Mercedes-AMG GT 63
            </h3>
            <p> SO THRILLING. SO AMG.</p>
            <button className="bg-[#0078D6] mt-[30px] text-[#ffffff] font-bold rounded-[3%] h-[7vh] w-[9vw]">
              Learn more{" "}
            </button>
          </div>
        </article>

        <article className="ml-[2vw] w-[409.29px] bg-black h-[570.33px]">
          <div className="overflow-hidden">
            <img src={benz2} className="h-[409.29px] w-[409.29px] transition-transform duration-300 ease-in-out hover:scale-105" alt="" />
          </div>

          <div
            style={{
              position: "absolute",
              paddingBlockStart: "var(--wb-spacing-static-hugest)",
              paddingInlineStart: "var(--wb-spacing-static-small)",
              paddingInlineEnd: "var(--wb-spacing-static-small)",
              color: "var(--wb-color-text-fixed-white, #fff)",
              background:
                "linear-gradient(0deg, var(--wb-color-shape-fixed-black, #000) 72%, rgba(0, 0, 0, 0) 100%)",
              overflowWrap: "break-word",
              paddingLeft: "20px",
            }}
            className="h-[231.6px] w-[409.2px] mt-[-140px]"
          >
            <h3 className='font-["MB_Corpo_A_Title_Cond_Regular"] pt-[92px] text-[1.74rem]'>
              The new GLE LWB
            </h3>
            <p>Know your way </p>
            <button className="bg-[#0078D6] mt-[30px] text-[#ffffff] font-bold rounded-[3%] h-[7vh] w-[11vw]">
              Find available cars
            </button>
            <u className="ml-[50px] font-bold">Learn more</u>
          </div>
        </article>
      </div>

      <div className="flex gap-[2vw] ml-[8vw] mt-[5vh]">
        {arr.map((item) => {
          return (
            <article
              key={item.id}
              className="h-[564.09px] w-[409.29px] bg-black"
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  className="w-[564.09px] h-[409.29px] transition-transform duration-300 ease-in-out hover:scale-105"
                  alt=""
                />
              </div>

              <div
                className="w-[408px] h-[275.6px] mt-[-140px]"
                style={{
                  position: "absolute",
                  paddingBlockStart: "var(--wb-spacing-static-hugest)",
                  paddingInlineStart: "var(--wb-spacing-static-small)",
                  paddingInlineEnd: "var(--wb-spacing-static-small)",
                  color: "var(--wb-color-text-fixed-white, #fff)",
                  background:
                    "linear-gradient(0deg, var(--wb-color-shape-fixed-black, #000) 72%, rgba(0, 0, 0, 0) 100%)",
                  overflowWrap: "break-word",
                  paddingLeft: "20px",
                }}
              >
                <h3 className='h-[88px] text-[1.74rem] pt-[92px] w-[361.29px] font-["MB_Corpo_A_Title_Cond_Regular"]'>
                  {item.title}
                </h3>
                <p className="h-[24px] mt-[78px] w-[361.29px]">
                  {item.description}
                </p>
                <button className="h-[47.6px] w-[186.35px] mt-[18px] bg-[#0078D6] text-[#ffffff] font-bold rounded-[3%] h-[7vh] w-[9vw]">
                  {item.buttonText}
                </button>
                <u className="font-bold ml-[25px] ">{item.extra}</u>
              </div>
            </article>
          );
        })}
      </div>

      <div className="w-[859px] mt-[4%] ml-[8%] h-[264px]">
        <h1 className='text-[2.5rem] h-[120px] w-[859px] font-["MB_Corpo_A_Title_Cond_Regular"]'>
          The perfect blend of luxury, sportiness and performance: Discover our
          latest models
        </h1>
        <div className="w-[859px] h-[47.6px] flex gap-[2vw]">
          <button className="h-[47.6px] w-[193px] font-semibold border mt-[3%] hover:bg-[#e8e8e8]">
            Discover all models
          </button>
          <button className="h-[47.6px] w-[232px] font-semibold border mt-[3%] hover:bg-[#e8e8e8] w-[193px]">
            Discover electric models
          </button>
        </div>
      </div>

      <div className="h-[186px] w-[1308px] flex gap-[2vw] ml-[8%]">
        <div className="h-[127.29px] w-[409.29px] shadow-inner border-none bg-gray-100 pl-[1.5vw] pt-[5vh]">
          <img
            src={hover_1}
            alt=""
            className="w-[254px] h-[119px] object-contain ml-[9vw] mt-[-9.5vh]"
          />
          <p className="text-sm mt-[-8vh]">Discover the models</p>
          <h1 className='font-["MB_Corpo_A_Title_Cond_Regular"] text-3xl mt-[1vh]'>
            Limousine
          </h1>
        </div>
        <div className="h-[127.29px] w-[409.29px] bg-gray-100 border-none overflow-hidden pl-[1.5vw] pt-[5vh]">
          <p className="text-sm">Discover the models</p>
          <h1 className='font-["MB_Corpo_A_Title_Cond_Regular"] text-3xl mt-[1vh]'>
            SUV Range
          </h1>
        </div>
        <div className="h-[127.29px] w-[409.29px] bg-gray-100 border-none overflow-hidden pl-[1.5vw] pt-[5vh]">
          <p className="text-sm">Discover the models</p>
          <h1 className='font-["MB_Corpo_A_Title_Cond_Regular"] text-3xl mt-[1vh]'>
            Cabriolets / Roadsters
          </h1>
        </div>
      </div>

      <div className="flex mt-[-35vh] ml-[47vw] gap-50">
        {/* car 2 */}
        <div
          className="w-[254px] h-[119px] rounded-2xl"
          onMouseEnter={handleEnterCar2}
          onMouseLeave={handleLeaveCar2}
        >
          <img
            src={car2Images[car2Index]}
            alt="car 2"
            className="w-[254px] h-[119px] object-contain"
          />
        </div>

        {/* car 3 */}
        <div
          className="w-[254px] h-[119px] rounded-2xl  "
          onMouseEnter={handleEnterCar3}
          onMouseLeave={handleLeaveCar3}
        >
          <img
            src={car3Images[car3Index]}
            alt="car 3"
            className="w-[254px] h-[119px] "
          />
        </div>
      </div>

      <h1 className='h-[60px] font-["MB_Corpo_A_Title_Cond_Regular"] mt-[20vh] ml-[8vw] text-[3rem] w-[1290px]'>
        Service and accessories.
      </h1>

      {/* Horizontal Scroll Container */}
      <div className="relative mt-[3vh] mr-[8vw]">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-[2rem] top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300"
        >
          <FaChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-[-2rem] top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300"
        >
          <FaChevronRight size={20} />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-hidden w-[100vw]">
          <div
            ref={sliderRef}
            className="flex gap-10 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 660}px)`,
              width: "max-content",
            }}
          >
            {serviceItems.map((item, index) => (
              <div key={index} className="w-[641px] h-[545px] flex-shrink-5">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-[361px] w-[641px] object-cover transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
                  />
                </div>
                <h1 className="h-[28px] font-bold w-[641px] mt-[5vh]">
                  {item.title}
                </h1>
                <p className="h-[56px] w-[641px] mt-[2vh]">
                  {item.description}
                </p>
                <button className="h-[48px] px-6 border border-gray-500 hover:bg-gray-100 transition-colors duration-300">
                  {item.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {serviceItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-black"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-[2vw] ml-[8vw] mt-[4vh]">
        <div className="h-[476px] w-[634px] mt-[20vh]">
          <h2 className='h-[60px] text-[41px] font-["MB_Corpo_A_Title_Cond_Regular"] w-[532px] mt-[5vh]'>
            DEFINING CLASS since 1886.
          </h2>
          <p className="h-[96px] w-[522px]">
            A lot has changed since the invention of the automobile in 1886.
            With each decade, we have been able to further develop the
            technology that began with us - and still do today. This is how a
            car became more than a car.
          </p>
          <button className="mt-[8vh] h-[48px] w-[144px] bg-[#0078D6] rounded-[3px] border-none font-bold text-[#ffffff] border-1 border-gray-500">
            Learn more
          </button>
        </div>
        <video
          src={videoo}
          autoPlay
          loop
          muted
          playsInline
          className="h-[476px] w-[634px]"
        ></video>
      </div>

      <div className="flex gap-[2vw] ml-[8vw] mt-[-5vh]">
        <div className="overflow-hidden">
          <img src={wing_doors} className="h-[476px] w-[634px] transition-transform duration-300 ease-in-out hover:scale-105" alt="" />
        </div>

        <div className="h-[476px] w-[634px] ml-[90px] mt-[20vh]">
          <h2 className='h-[60px] text-[41px] font-["MB_Corpo_A_Title_Cond_Regular"] w-[532px] mt-[5vh]'>
            History and brand world.
          </h2>
          <p className="h-[96px] w-[522px]">
            The Mercedes star is more than just a logo. Mercedes-Benz stands for
            exciting experiences based on timeless design, cutting-edge
            technology and attention to detail.
          </p>
          <button className="mt-[8vh] h-[48px] w-[144px] bg-[#0078D6] font-bold rounded-[3px] border-none text-[#ffffff] border-1 border-gray-500">
            Learn more
          </button>
        </div>
      </div>

      <div className="ml-[8vw] mt-[-8vh] text-[#767676] leading-[30px] ">
        <h1 className="h-[26px] text-[19.2px] font-bold w-[93px]">
          Disclaimer
        </h1>
        <p className="h-[40px] text-[9px] mt-[15px] w-[867px]">
          Accessories, colors and fitments shown may not be a part of standard
          specifications. For detailed technical specification and price of the
          model available in India, please refer to the product brochure or
          contact the nearest Mercedes-Benz Franchise Partner.
        </p>
      </div>

      <div className="flex h-[186px] w-[1400px] text-black gap-10 mt-[35px] ml-[8vw] pt-[5vh] px-10">
        <div className="h-[257px] w-[297px] bg-[#f8f8f8] text-center hover:bg-[#E4E4E4] shadow-xl hover:cursor-pointer hover:border-b-4 hover:border-b-indigo-900">
          <div className="h-[192px]  ml-[30px] pt-[50px] mt-[32px] text-center w-[232px]">
            <svg
              className="h-[24px] w-[24px] ml-[100px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 74.7 66.2"
            >
              <path d="M68.6 43.9v8.6H30.2l-18.9-43L0 8.6V0h17.4l4.1 9.4h53.2l-3.9 27.4H33.7l2.7 7.1h32.2zm-1.8-27.3h-42l2 4.5h39.3l.7-4.5zm-38.3 8.5l1.9 4.5h34.4l.7-4.5h-37zM40 61.3c0 2.7-2.2 4.9-4.9 4.9s-4.9-2.2-4.9-4.9 2.2-4.8 4.9-4.8 4.9 2.1 4.9 4.8zm28.6 0c0 2.7-2.1 4.9-4.8 4.9-2.8 0-4.9-2.2-4.9-4.9s2.1-4.8 4.9-4.8c2.7 0 4.8 2.1 4.8 4.8z"></path>
            </svg>
            <h1 className="font-bold">Mercedes-Benz Store</h1>
            <p> Discover your new Mercedes.</p>
          </div>
        </div>

        <div className="h-[257px] w-[297px] text-center bg-[#f8f8f8] hover:bg-[#E4E4E4] shadow-xl hover:cursor-pointer hover:border-b-4 hover:border-b-indigo-900">
          <div className="h-[192px] ml-[30px] mt-[32px] pt-[50px] text-center w-[232px]">
            <svg
              className="h-[24px] ml-[100px] w-[24px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M20 16h-6l-1 8h-2l-1-8H4V0h16z"></path>
              <path
                class="wb-shape-1"
                fill="#fff"
                d="M17 8c0-2.69-2.31-5-5-5S7 5.31 7 8s2.31 5 5 5 5-2.31 5-5zM8.25 9.97c-.34-.568-.492-1.25-.492-1.97 0-1.099.379-2.083 1.174-2.917.796-.833 1.78-1.287 2.879-1.325l-.53 3.826L8.25 9.97zM16.243 8c0 .72-.152 1.363-.455 1.932l-2.992-2.349-.569-3.826c1.099.038 2.046.493 2.841 1.326.796.834 1.175 1.819 1.175 2.917zm-.682 2.349c-.758 1.174-2.083 1.894-3.561 1.894-1.478 0-2.765-.72-3.522-1.894L12 8.909l3.56 1.44z"
              ></path>
            </svg>
            <h1 className="font-bold">Dealer locator</h1>
            <p>Find a Mercedes-Benz dealer.</p>
          </div>
        </div>

        <div className="h-[257px] w-[297px] text-center bg-[#f8f8f8] hover:bg-[#E4E4E4] shadow-xl hover:cursor-pointer hover:border-b-4 hover:border-b-indigo-900">
          <div className="h-[192px] ml-[30px] mt-[32px] pt-[50px] text-center w-[232px]">
            <svg
              className="h-[24px] w-[24px] ml-[100px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 70.2 52.7"
            >
              <path d="M35.969 46.073c-.216-.216-.504-.288-.72-.504H19.621c-.452.254-.868.832-.868.832l-2 2.9h21.44l-1.936-2.867-.288-.361z"></path>
              <path d="M54.023 31.222l-1.97-.422-.287-2.775-.023-.03-.088-.133L49.453 27l-2.5 1.8s-1.7-1-3-2.4-2.4-2.8-2.4-2.8l1.7-2.7-.9-2-3.2-.3s-.4-2.2-.5-3c-.068-.609-.044-1.437-.021-1.915l-1.654-.097c-4.754-.144-8.068-.216-9.94-.216-1.944 0-5.114.072-9.58.216l-3.313.216c-.836 0-1.894.231-4.559 3.86A115.793 115.793 0 0 0 7.055 21.6c-.038 0-.091.005-.133.007-.043.067-.081.124-.124.193-2.255.188-3.433.411-3.983 1.279-.245.78-.333 1.876-.261 2.022 0 .1 1 .2 2 .3l-.139.217h.005a9.637 9.637 0 0 1-.366.568c-.267.422-.489.779-.656 1.051-.017.035-.044.076-.058.11-.016.016-.03.042-.046.06-.131.213-.205.337-.227.373-.03.07-.067.133-.087.215l-1.297 1.728c-.667.924-1.106 1.656-1.361 2.215a3.401 3.401 0 0 0-.169.462c-.4 1.2.1 11.6.2 14.8v4.4c0 .6.6 1.1 1.2 1.1h4.812c.576 0 1.008-.504 1.008-1.081v-3.385h.18V48.2h6.399l2.426-3.568c.36-.504.649-.793.865-.865a.995.995 0 0 1 .178-.059c.204-.154.422-.279.633-.309.7-.1 18.5-.1 19.1 0 .7.1 1.5 1.2 1.5 1.2l2.5 3.6h6.4v3.4c0 .6.5 1.1 1.2 1.1h4.432c.649 0 1.081-.504 1.081-1.081V48.16c0-.217.072-.793.072-2.305.288-3.818.432-7.42.432-10.805 0-1.009-.072-1.873-.145-2.52-.082-.319-.287-.764-.603-1.308zM12.27 37.573l-6.771-1.225c-1.009-.216-1.441-.36-1.441-3.313 0-1.378.311-2.248 1.448-2.505.016-.009.03-.022.047-.03.9-.4 1.8 0 1.8 0l4.1 2.5 1 4.5-.206-.039.023.112zM42.053 34.1h-.336c.005.029.015.059.015.087h-12.1c.254.273.431.561.521 1.013h11.7c-.1.4-.2.7-.4 1l-.249.018-.049.131-11.128.704c-.2.466-.489.758-.874 1.047l11.8-.8c-.3.4-.6.7-.9.9-.171.086-.538.177-1.036.272-.934.211-2.738.484-5.426.759-3.529.36-5.618.576-6.267.576-.648 0-2.737-.144-6.267-.504-3.529-.36-5.546-.72-6.051-1.008a4.898 4.898 0 0 1-.865-.865l.417.026c-.034-.055-.078-.096-.107-.155l11.296.779a5.618 5.618 0 0 1-.801-1.01l-11.381-.72-.36-1.081h11.598c.142-.427.356-.782.639-1.068h-12.19v-.012h-.189v-.144c.072-.36.216-.576.432-.72a.525.525 0 0 1 .174-.104c.196-.165.384-.221.384-.221l13.5-.8 13.6.8s.7.1.9.9v.2zm9 1.1c-.15.526-.865.826-1.211.943l-.546.205-6.771 1.225.936-4.466 2.452-1.462 2.041-1.244s.9-.4 1.8 0 1.3 1.6 1.3 1.6.299 2.499-.001 3.199z"></path>
              <path d="M70.153 16.1v-3.8l-4.4-.8-1-2.5 2.6-3.7-2.7-2.7-3.7 2.6-2.5-1-.7-4.2h-3.7l-.8 4.4-2.5 1-3.7-2.6-2.7 2.7 2.7 3.7-1 2.5-4.4.8v3.8l4.4.8 1 2.5-2.6 3.4 2.7 2.7 3.7-2.6 2.5 1 .8 4.4h3.8l.8-4.4 2.5-1 3.7 2.6 2.7-2.7-2.6-3.7.7-2.4 4.4-.8zm-14 3.7c-3 0-5.4-2.4-5.4-5.4s2.4-5.4 5.4-5.4 5.4 2.4 5.4 5.4-2.4 5.4-5.4 5.4z"></path>
            </svg>
            <h1 className="font-bold">Configurator</h1>
            <p>Configure your vehicle now.</p>
          </div>
        </div>

        <div className="h-[257px] w-[297px] text-center bg-[#f8f8f8] hover:bg-[#E4E4E4] shadow-xl hover:cursor-pointer hover:border-b-4 hover:border-b-indigo-900">
          <div className="h-[192px] ml-[30px] mt-[32px] pt-[50px] text-center w-[232px]">
            <svg
              className="h-[24px] w-[24px] ml-[100px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50.6 73"
            >
              <path d="M0 0h50.6v73H0V0zm42.5 20.6V8.2H8.1v12.5l34.4-.1zM15.9 39.5v-7.7H8.1v7.7h7.8zm13.3 0v-7.7h-7.6v7.7h7.6zm13.3 0v-7.7h-7.6v7.7h7.6zm-26.6 12v-7.6H8.1v7.6h7.8zm13.3 0v-7.6h-7.6v7.6h7.6zm13.3 0v-7.6h-7.6v7.6h7.6zM15.9 63.3v-7.4H8.1v7.4h7.8zm13.3 0v-7.4h-7.6v7.4h7.6zm13.3 0v-7.4h-7.6v7.4h7.6z"></path>
            </svg>
            <h1 className="font-bold">Finance & Insurance</h1>
            <p> Find the right financial product for you.</p>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      {/* Footer Section */}
      <footer className="bg-black text-white w-full pt-16 pb-8">
        <div className="max-w-[1520px] mx-auto px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-6 gap-8 mb-12">
            {/* Popular Models */}
            <div>
              <h3 className="font-bold text-lg mb-6">Popular Models</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Electric Cars
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    SUV
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Cabriolets & Roadsters
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Coupé
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Plug-in Hybrid
                  </a>
                </li>
              </ul>
            </div>

            {/* Buy a Vehicle */}
            <div>
              <h3 className="font-bold text-lg mb-6">Buy a Vehicle</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Find a new car
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Configure your car
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    All brochures
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Model overview
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Corporate Program
                  </a>
                </li>
              </ul>
            </div>

            {/* Shopping Guide */}
            <div>
              <h3 className="font-bold text-lg mb-6">Shopping Guide</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Book a test drive
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Nearest Showroom
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Finance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Mercedes-Benz Collection
                  </a>
                </li>
              </ul>
            </div>

            {/* Owners */}
            <div>
              <h3 className="font-bold text-lg mb-6">Owners</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Book a service appointment
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Owner's Manuals
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Service warranty terms and conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Grievance Redressal Mechanism
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors border-b border-white"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Technology */}
            <div>
              <h3 className="font-bold text-lg mb-6">Technology</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Electric mobility
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About Mercedes me
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Connect services
                  </a>
                </li>
              </ul>
            </div>

            {/* Discover Mercedes */}
            <div>
              <h3 className="font-bold text-lg mb-6">Discover Mercedes</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Secretarial Compliance Disclosure
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Press Release
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Fair Practice Code
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Corporate Governance Policy (MBFS)
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Ombudsman Scheme for NBFS
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-600 pt-8">
            <div className="flex flex-wrap justify-between items-center">
              {/* Copyright and Legal Links */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-4 md:mb-0">
                <span>
                  © 2025. Mercedes-Benz India Pvt. Ltd. All Rights Reserved
                  (provider)
                </span>
                <a href="#" className="hover:text-white transition-colors">
                  Cookies
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Data protection
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Legal notices
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Caution - Fraudulent Job Offerings
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Webpage;
