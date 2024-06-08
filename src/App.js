import { useState } from "react";
import "./App.css";

const modals = [
  {
    text: "Eve has 9 apples and she was given 7 more. How many apples does she have now? ",
    image: "/images/apples.png",
    answer: "Eve has 16 apples now (9 + 7 = 16)",
  },
  {
    text: "Lucas had 14 candies. He ate 5. How many candies does he have left? ",
    image: "/images/candy.png",
    answer: "Lucas has 9 candies left (14 - 5 = 9)",
  },
  {
    text: "There are 11 cats in a room. 6 cats leave. How many cats are left in the room?",
    image: "/images/cats.png",
    answer: "There are 5 cats left in the room (11 - 6 = 5)",
  },
  {
    text: "Tom had 8 pencils, and he finds 6 pencils on the ground. How many pencils does Tom have now? ",
    image: "/images/pencil.png",
    answer: "Tom now has 14 pencils (8 + 6 = 14)",
  },
  {
    text: "Maria had 20 cupcakes. She gave 11 cupcakes to her friends. How many cupcakes does Maria have left? ",
    image: "/images/cupcake.png",
    answer: "Maria has 9 cupcakes left (20 - 11 = 9)",
  },
  {
    text: "An aquarium has 7 goldfish and adds 5 more. How many goldfish are in the aquarium now?",
    image: "/images/goldFish.png",
    answer: "There are 12 goldfish in the aquarium now (7+5 = 12)",
  },
  {
    text: "Dad bought 10 oranges, and mom bought 6. How many oranges are there in total? ",
    image: "/images/oranges.png",
    answer: "There are 16 oranges in total (10 + 6 = 16)",
  },
  {
    text: "A box contained 18 apples. 7 apples fell out. How many apples are left in the box?",
    image: "/images/boxes.png",
    answer: "There are 11 apples left in the box (18-7 = 11)",
  },
  {
    text: "Lisa had 12 balloons, and 7 flew away. How many balloons does Lisa have now?",
    image: "/images/ballons.png",
    answer: "Lisa has 5 balloons now (12-7 = 5)",
  },
  {
    text: "Michael had $15, and his father gave him $5 more. How much money does Michael have now?",
    image: "/images/money.png",
    answer: "Michael has $20 now (15+5 = 20)",
  },
];

const MyComponent = () => {
  const [isMute, setIsMute] = useState(false);
  const [modal, setModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState("stay");
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const changeModal = (direction) => {
    setAnimation(direction === "next" ? "slide-out-left" : "slide-out-right");
    setIsAnswerVisible(false);

    setTimeout(() => {
      setAnimation("hidden");
    }, 250);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        if (direction === "next") {
          return (prevIndex + 1) % (modals.length + 1); // Adjust to loop through all modals and the new div
        } else {
          return (prevIndex - 1 + modals.length + 1) % (modals.length + 1); // Adjust to loop through all modals and the new div
        }
      });
      setAnimation(direction === "next" ? "slide-in-right" : "slide-in-left");
    }, 300);

    setTimeout(() => {
      setAnimation("stay");
    }, 320);
  };

  return (
    <div className="flex overflow-hidden relative flex-col justify-center h-dvh">
      <img
        loading="lazy"
        srcSet="/images/HomeImage.png"
        className={`object-cover absolute inset-0 size-full ${
          modal ? "" : "zoomImage"
        } `}
      />
      <div className="flex relative flex-col justify-center items-center px-5 pb-5 w-full bg-black bg-opacity-60 max-md:max-w-full h-dvh">
        <div className="absolute top-[16px] left-[16px] flex gap-3 my-auto">
          <div className="flex justify-center items-center px-1 bg-white h-[42px] rounded-[1000px] w-[42px]">
            <img
              loading="lazy"
              srcSet="/images/CloudImg.png"
              className="w-8 aspect-[1.79]"
            />
          </div>
          <div className="flex flex-col my-auto text-white leading-[100%]">
            <div className="text-sm font-bold">Cloudifyapp Pvt. Ltd.</div>
            <div className="mt-2 text-xs font-medium">By John Doe</div>
          </div>
        </div>
        {/* sound image  */}
        <div className="absolute top-[6px] right-[16px] flex justify-center items-center p-2.5 rounded-lg bg-white bg-opacity-0 h-[54px] w-[54px]">
          <img
            loading="lazy"
            src={isMute ? "images/sound.svg" : "images/unmute.png"}
            className="aspect-[1.09] fill-white w-[26px] cursor-pointer z-[9999]"
            onClick={() => setIsMute(!isMute)}
          />
        </div>
        {/* main content */}
        {!modal ? (
          <>
            <div className="text-6xl font-bold text-center text-white leading-[80px] w-[750px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[59px]">
              Addition and Subtraction Facts within 20
            </div>
            <div className="text-2xl font-medium leading-9 text-center text-white w-[750px] max-md:max-w-full">
              Test your knowledge with the following questions, tap a card to
              flip it and uncover the answer, good luck!
            </div>
            {/* play image  */}
            <div
              className="rotateBtnDiv cursor-pointer flex gap-3 justify-center py-2.5 pr-5 pl-3 mt-10 text-lg font-bold leading-4 text-black bg-yellow-400 shadow-lg rounded-[72px] max-md:px-5 max-md:mt-10"
              onClick={() => setModal(true)}
            >
              <img
                loading="lazy"
                src="/images/play.svg"
                className="rotate-button"
              />
              <div className="my-auto">Let’s play</div>
            </div>
          </>
        ) : null}

        <div className="flex gap-1 self-start text-sm font-medium leading-3 text-white max-md:mt-10 absolute bottom-[16px] left-[16px]">
          <div>Powered by</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/538ec7fc1d1a906073f80a84fd5dd96502b94eb97eac4e4f689424c8c58aeeb2?"
            className="shrink-0 my-auto max-w-full aspect-[11.11] w-[104px]"
          />
        </div>
      </div>
      {/* modal */}
      {modal ? (
        <div className="modal-overlay">
          {/* Display the current index number */}
          <div className="slide-index text-[#fff] text-lg font-bold index">
            {currentIndex + 1} / {modals.length}
          </div>
          <button
            className={
              currentIndex === 0 ? "circle-button-disable" : "circle-btn"
            }
            onClick={() => (currentIndex === 0 ? {} : changeModal("prev"))}
          >
            {"<"}
          </button>

          {currentIndex < modals.length ? (
            <div className={`modal ${animation}`}>
              <div className={`modal-text-box card ${isAnswerVisible ? "flipped" : ""}`}>
                <div className="front">
                  <p className="modal-text">{modals[currentIndex].text}</p>
                </div>
                <div className="back">
                  <img
                    src={modals[currentIndex].image}
                    alt="answer"
                    className="modal-answer-image"
                  />
                  <p className="mt-1 text-center font-bold">
                    {modals[currentIndex].answer}
                  </p>
                </div>
                {/* Answer section  */}
                {!isAnswerVisible && (
                  <div
                    className="w-full h-[34px] flex justify-center items-center absolute bottom-0 cursor-pointer"
                    onClick={() => setIsAnswerVisible(true)}
                  >
                    <div className="max-w-[17.21px] max-h-[20px] mr-[10px]">
                      <img
                        src="/images/handlogo.svg"
                        alt="hand-logo"
                        className="w-full h-full"
                      />
                    </div>
                    <p className="h-[14px] w-[165px] text-[14px]">
                      Tap to reveal the answer
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="modal-new new-div">
              <div className="max-h-[260px] max-w-[260px]">
                <img
                  src="/images/done.svg"
                  alt="done-img"
                  className="h-full w-full"
                />
              </div>
              <p className="text-white text-[20px] font-bold">
                Hope you learned something new!
              </p>
              <div
                className="rotateBtnDiv cursor-pointer flex gap-3 justify-center py-2.5 pr-5 pl-3 mt-10 text-lg font-bold leading-4 text-black bg-yellow-400 shadow-lg rounded-[72px] max-md:px-5 max-md:mt-10"
                onClick={() => {
                  setModal(false);
                  setCurrentIndex(0);
                  setIsAnswerVisible(false);
                }}
              >
                <img
                  loading="lazy"
                  src="/images/reload.svg"
                  className="rotate-button"
                />

                <div className="my-auto"> Play Again</div>
              </div>
            </div>
          )}
          <button
            className={
              currentIndex === modals.length
                ? "circle-button-disable"
                : "circle-btn"
            }
            onClick={() =>
              currentIndex === modals.length ? "" : changeModal("next")
            }
          >
            {">"}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default MyComponent;
