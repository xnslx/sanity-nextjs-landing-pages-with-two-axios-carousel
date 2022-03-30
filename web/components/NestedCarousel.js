import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from "embla-carousel-react";

const NestedCarousel = ({ slides, setLockParentScroll }) => {
    const [viewportRef, embla] = useEmblaCarousel({
      axis: "y",
      skipSnaps: false
    });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const onSelect = useCallback(() => {
      if (!embla) return;
      setSelectedIndex(embla.selectedScrollSnap());
      setPrevBtnEnabled(embla.canScrollPrev());
      setNextBtnEnabled(embla.canScrollNext());
    }, [embla, setSelectedIndex]);
  
    const scrollTo = useCallback(
      (index) => {
        embla && embla.scrollTo(index);
      },
      [embla]
    );
  
    useEffect(() => {
      if (!embla) return;
      onSelect();
      setScrollSnaps(embla.scrollSnapList());
      embla.on("select", onSelect);
    }, [embla, onSelect, setScrollSnaps]);
  
    return (
      <>
        <div className="embla__nested">
          <div className="embla__viewport" ref={viewportRef}>
            <div className="embla__container__nested">
              {slides.map((s, index) => {
                // return <img className="" src={s} alt="A cool cat." key={index} />;
                return (
                  <div className="embla__slide__nested" key={index}>
                    <div className="embla__slide__inner__nested">
                      <img
                        className="embla__slide__img__nested"
                        src={s}
                        alt="A cool cat."
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => {
            return (
              <DotButton
                key={index}
                selected={index === selectedIndex}
                onClick={() => scrollTo(index)}
              />
            );
          })}
        </div>
      </>
    );
};


const DotButton = ({ selected, onClick }) => {
    return (
      <button
        className={`embla__dot ${selected ? "is-selected" : ""}`}
        type="button"
        onClick={onClick}
      />
    );
};

export default NestedCarousel;