import React from "react";
import styles from '../components/sections/Carousels.module.css'

function EmblaCarouselNextButton({ enabled, onClick }) {
    return (
    <button className={`${styles.prevBtn} ${styles.embla__button__next}`}
    onClick={onClick}
    disabled={!enabled}>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="600.83"
        height="198.01"
        data-name="Layer 1"
        >
        <path d="M600.83 115.18L0 115.18"></path>
        <path d="M371.2 97L73.96 97"></path>
        <path d="M204.65 95H356.96000000000004V99H204.65z"></path>
        <path d="M353.84 97c-15.26-9.11-22.53-27.13-23.13-39.64a210.78 210.78 0 0081 39.64c-32.89 7.86-58.88 23.39-81 39.64 1.8-13.39 7.27-29.64 23.13-39.64z"></path>
        <circle
            cx="356.96"
            cy="99"
            r="97"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="4"
            className="cls-1"
        ></circle>
        </svg>
    </button>
  );
}

export default EmblaCarouselNextButton;