import React from 'react'
import { motion } from "framer-motion";

import styles from './GradientBackground.module.css'

const GradientBackground = ({ children, rotateNum }) => {
    return (
        <motion.svg className={styles.test__background}>
          <motion.radialGradient
            id="myGradient"
            animate={{
              gradientTransform: `rotate(${rotateNum})`
            }}
            cx="0.5"
            cy="0.5"
            r="0.5"
            fx="0.5"
            fy="0.5"
          >
            <stop offset="5%" stopColor="#fffc00" />
            <stop offset="95%" stopColor="#ffffff" />
          </motion.radialGradient>
          <motion.rect
            x="0"
            y="0"
            strokeWidth="5"
            strokeLinejoin="round"
            
            width="100%"
            height="100%"
            fill="url(#myGradient)"
          />
          {children}
        </motion.svg>
      );
};

export default GradientBackground;
