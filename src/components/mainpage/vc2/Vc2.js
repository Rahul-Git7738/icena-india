"use client";

import { movies, randomMoviesSet1, randomMoviesSet2 } from "../../../movies";
import Button from "@/components/button/Button";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useMemo, useRef, useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import Marquee from "react-fast-marquee";

export const Vc2 = () => {
  const { width, height } = useWindowSize();
  const carouselWrapperRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start start", "end start"],
  });

  const maximumScale = useMemo(() => {
    const windowYRatio = height / width;
    const xScale = 1.66667;
    const yScale = xScale * (16 / 9) * windowYRatio;
    return Math.max(xScale, yScale);
  }, [width, height]);

  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.66],
    [maximumScale * 1.1, maximumScale, 1]
  );

  const postersOpacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1]);
  const posterTranslateXLeft = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [-20, 0]
  );
  const posterTranslateXRight = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [20, 0]
  );

  const [carouselVariant, setCarouselVariant] = useState("inactive");
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress >= 0.67) {
      setCarouselVariant("active");
    } else {
      setCarouselVariant("inactive");
    }
  });
  const [ok, setOk] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (ok) {
      const intervalId = setInterval(() => {
        handleClick(1); // Move the carousel to the next slide
      }, 3000);

      // Clean up the interval on component unmount
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [ok]);

  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const indexInArrayScope =
    ((activeIndex % movies.length) + movies.length) % movies.length;

  const visibleItems = [...movies, ...movies].slice(
    indexInArrayScope,
    indexInArrayScope + 3
  );

  const handleClick = (newDirection) => {
    setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
  };

  const variants = {
    enter: ({ direction }) => {
      return { scale: 0.5, x: direction < 1 ? 50 : -50, opacity: 1 };
    },
    center: ({ position, direction }) => {
      return {
        scale: position() === "center" ? 1 : 0.9,
        x: 0,
        zIndex: getZIndex({ position, direction }),
        opacity: 1,
      };
    },
    exit: ({ direction }) => {
      return { scale: 0.5, x: direction < 1 ? -50 : 50, opacity: 1 };
    },
  };

  function getZIndex({ position, direction }) {
    const indexes = {
      left: direction > 0 ? 2 : 1,
      center: 3,
      right: direction > 0 ? 1 : 2,
    };
    return indexes[position()];
  }

  return (
    <motion.div
      animate={carouselVariant}
      className="bg-background pb-5 pt-[100vh]"
    >
      <div
        ref={carouselWrapperRef}
        className="mt-[-100vh] h-[100vh] overflow-clip      "
      >
        <motion.div
          onHoverStart={() => setOk(false)}
          onHoverEnd={() => carouselVariant === "active" && setOk(true)}
          className="sticky top-0 flex h-screen items-center"
        >
          <div className="relative left-1/2 mb-5 flex -translate-x-1/2 gap-5">
            <AnimatePresence
              initial={false}
              mode="popLayout"
              custom={currentSlide}
            >
              {visibleItems.map((movie, index) => {
                let itemComponent;
                switch (index) {
                  case 0:
                    itemComponent = (
                      <motion.div
                        key={index}
                        style={{
                          opacity: postersOpacity,
                          x: posterTranslateXLeft,
                        }}
                        className="aspect-[9/16] w-[300px] shrink-0 overflow-clip rounded-2xl md:aspect-video md:w-[60vw]"
                      >
                        <img
                          className="h-full w-full object-cover"
                          src={movie.poster}
                          alt={movie.name}
                        />
                      </motion.div>
                    );
                    break;
                  case 1:
                    itemComponent = (
                      <motion.div
                        id="mak"
                        key={index}
                        // style={{ scale }}
                        className="relative aspect-[9/16] w-[300px] shrink-0 overflow-clip rounded-2xl md:aspect-video md:w-[60vw]"
                        onHoverStart={() => setOk(false)}
                        onHoverEnd={() =>
                          carouselVariant === "active" && setOk(true)
                        }
                        variants={{
                          active: { opacity: 1, y: 0 },
                          inactive: { opacity: 0, y: 20 },
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <img
                          className="h-full w-full object-cover"
                          src={movie.poster}
                          alt={movie.name}
                        />
                        <motion.div
                          variants={{
                            active: { opacity: 1 },
                            inactive: { opacity: 1 },
                          }}
                          animate={carouselVariant}
                          className="absolute bottom-0 left-0 flex w-full flex-col items-center gap-4 p-5 text-lg text-white md:flex-row md:justify-between md:gap-0"
                        >
                          <p className="mt-10 sm:text-2xl text-lg font-medium ">
                            Celebrate excellence with us as we honor outstanding
                            contributions across various domains.
                          </p>
                          <div className="sm:scale-100 scale-80">
                            <Button color="green" img="arrow" href="/awards">
                              Nominate
                            </Button>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                    break;
                  case 2:
                    itemComponent = (
                      <motion.div
                        key={index}
                        style={{
                          opacity: postersOpacity,
                          x: posterTranslateXRight,
                        }}
                        className="aspect-[9/16] w-[300px] shrink-0 overflow-clip rounded-2xl md:aspect-video md:w-[60vw]"
                      >
                        <img
                          className="h-full w-full object-cover"
                          src={movie.poster}
                          alt={movie.name}
                        />
                      </motion.div>
                    );
                    break;
                  default:
                    break;
                }

                return (
                  <motion.div
                    key={movie.id}
                    className="h-full w-full"
                    layout
                    custom={{
                      direction,
                      position: () => {
                        if (movie === visibleItems[0]) {
                          return "left";
                        } else if (movie === visibleItems[1]) {
                          return "center";
                        } else {
                          return "right";
                        }
                      },
                    }}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.8 }}
                  >
                    {itemComponent}
                  </motion.div>
                );
              })}
            </AnimatePresence>

            <motion.div
              style={{ opacity: postersOpacity, x: posterTranslateXLeft }}
              className="aspect-[9/16] w-[300px] z-[900] shrink-0 absolute left-0  flex justify-end overflow-clip rounded-2xl md:aspect-video md:w-[60vw]"
              onHoverStart={() => setOk(false)}
              onHoverEnd={() => carouselVariant === "active" && setOk(true)}
            >
              <button
                onClick={() => handleClick(-1)}
                className="prev-button text-white  w-[200px]"
              >
                ◀︎
              </button>
            </motion.div>

            <motion.div
              style={{ opacity: postersOpacity, x: posterTranslateXRight }}
              className="aspect-[9/16] w-[300px] shrink-0 z-[900]  absolute right-0  flex justify-start overflow-clip rounded-2xl md:aspect-video md:w-[60vw]"
              onHoverStart={() => setOk(false)}
              onHoverEnd={() => carouselVariant === "active" && setOk(true)}
            >
              <button
                onClick={() => handleClick(1)}
                className="next-button text-white   w-[200px]"
              >
                ▶︎
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={{
          active: { opacity: 1, y: 20 },
          inactive: { opacity: 1, y: 20 },
        }}
        transition={{ duration: 0.4 }}
        className="-mt-[calc((100vh-(300px*(16/9)))/2)] space-y-3 pt-4 md:-mt-[calc((100vh-(60vw*(9/16)))/2)]        
        "
      >
        <SmallVideoCarousel movies={randomMoviesSet1} speed="40" />
        <div className="[--carousel-offset:-32px] [--duration:74s]">
          <SmallVideoCarousel movies={randomMoviesSet2} speed="20" />
        </div>
      </motion.div>
    </motion.div>
  );
};

const SmallVideoCarousel = ({ movies, speed }) => {
  return (
    <div className="overflow-clip">
      <div className=" relative flex gap-3">
        <Marquee
          gradient={false}
          speed={speed}
          className="w-full"
          autoFill={true}
          pauseOnHover
        >
          {movies.map((movie, index) => (
            <div
              className="aspect-video w-[40vw] mx-2 shrink-0 md:w-[23vw]"
              key={`${movie.name}-${index}`}
            >
              <img
                className="h-full w-full rounded-xl object-cover"
                src={movie.poster}
                alt={movie.name}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};
