import React from "react";
import styles from '../components/sections/Carousels.module.css'

function EmblaCarouselPrevButton({ enabled, onClick }) {
  return (
    <button className={`${styles.prevBtn} ${styles.embla__button__prev}`}
    onClick={onClick}
    disabled={!enabled}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="600.83"
        height="198.01"
        data-name="Layer 1"
      >
        <path d="M0 115.18L600.83 115.18"></path>
        <path d="M229.63 97L526.88 97"></path>
        <path d="M243.87 95H396.18V99H243.87z"></path>
        <path d="M247 97c15.26-9.11 22.53-27.13 23.13-39.64a210.78 210.78 0 01-81 39.64c32.89 7.86 58.88 23.39 81 39.64C268.33 123.25 262.86 107 247 97z"></path>
        <circle
          cx="243.87"
          cy="99"
          r="97"
          fill="none"
          stroke="#000"
          strokeMiterlimit="10"
          strokeWidth="4"
        ></circle>
        </svg>
      </button>
  );
}

export default EmblaCarouselPrevButton;
