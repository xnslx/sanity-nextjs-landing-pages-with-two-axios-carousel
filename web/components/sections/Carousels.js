import React, { useState, useEffect, useCallback } from 'react';
import { PrevButton, NextButton } from "../EmblaCarouselButton";
import useEmblaCarousel from "embla-carousel-react";
import EmblaCarousel from 'embla-carousel';

import { useNestedEmblaCarousel } from '../useNestedEmblaCarousel'
import NestedCarousel from '../NestedCarousel';


// const Carousels = (props) => {
//     console.log('carousels', props)
//     const { carousels, _key, _type } = props
   
//     const [viewportRef, embla] = useEmblaCarousel();
//     const [visible, setVisible] = useState(false)
//     const setLockParentScroll = useNestedEmblaCarousel(embla);
//     const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
//     const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
//     const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
//     const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
//     const onSelect = useCallback(() => {
//         if (!embla) return;
//         setPrevBtnEnabled(embla.canScrollPrev());
//         setNextBtnEnabled(embla.canScrollNext());
//     }, [embla]);

//     useEffect(() => {
//         if (!embla) return;
//         embla.on("select", onSelect);
//         onSelect();
//     }, [embla, onSelect]);


//     return (
//         <>
//         <div className="embla">
//             <div className="embla__viewport" ref={visible ? viewportRef : null}>
//             <div className="embla__container">
//                 {carousels.map((s, index) => {
//                 console.log('s',s)
//                 return Object.values(s).map((j, index) => {
//                     return (
//                     <div className="embla__slide" key={index}>
//                         <div>
//                         {Object.keys(s).map((i, index) => {
//                             return <span>{i}</span>;
//                         })}
//                         </div>
//                         <div>
//                         <NestedCarousel
//                             slides={j}
//                             setLockParentScroll={setLockParentScroll}
//                         />
//                         </div>
//                     </div>
//                     );
//                 });
//                 })}
//             </div>
//             </div>
//             <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
//             <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
//         </div>
//         </>
//     );
// }

// export default Carousels


const Carousels = () => {
    return (
        <div>hello</div>
    )
}

export default Carousels
