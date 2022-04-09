import React, { useState, useEffect, useCallback } from 'react';
import { PrevButton, NextButton } from "../EmblaCarouselButton";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

import { useNestedEmblaCarousel } from '../useNestedEmblaCarousel'
import NestedCarousel from '../NestedCarousel';
import styles from './Carousels.module.css'
import EmblaCarouselPrevButton from '../EmblaCarouselPrevButton'
import EmblaCarouselNextButton from '../EmblaCarouselNextButton';


export default function Carousels(props){
    const { carousels, _key, _type } = props
    

    const [viewportRef, embla] = useEmblaCarousel({
        axis: "x",
        skipSnaps: false
      },
      [WheelGesturesPlugin({ forceWheelAxis: "x" })]);
    const setLockParentScroll = useNestedEmblaCarousel(embla);
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const onSelect = useCallback(() => {
        if (!embla) return;
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla]);

    useEffect(() => {
        if (!embla) return;
        embla.on("select", onSelect);
        onSelect();
    }, [embla, onSelect]);


    return (
        <>
            <div className={styles.embla}>
                <div className={styles.embla__viewport} ref={viewportRef}>
                    <div className={styles.embla__container}>
                        {carousels.map((s, index) => {
                            return (
                                <div className={styles.embla__slide} key={index}>
                                    <div>
                                        <h1 className={styles.menu}>{s.menu}</h1>
                                    </div>
                                    <div>
                                    <NestedCarousel
                                        slides={s.carousels}
                                        setLockParentScroll={setLockParentScroll}
                                    />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} /> */}
                {/* <NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}
                <EmblaCarouselPrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                <EmblaCarouselNextButton onClick={scrollNext} enabled={nextBtnEnabled} />
            </div>
        </>
    );
}



