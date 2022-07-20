import { keyframes } from "@emotion/react";

export const fadeUp = keyframes`
  0% { 
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }
	100% { 
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }
`;

export const borderColor = ({ color }: { color: string }) => keyframes`
  0% {
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
  }
  33% {
    border-top-color: ${color};
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;

  }
  66% {
    border-top-color: ${color};
    border-right-color: ${color};
    border-bottom-color: transparent;
    border-left-color: ${color};
  }
  100% {
    border-top-color: ${color};
    border-right-color: ${color};
    border-bottom-color: ${color};
    border-left-color: ${color};
  }`;

// Custom Icon animation Key-frames
const animationKeyFrames = keyframes`
  0% { transform: translate(3px, 0); }
  50% { transform: translate(-3px, 0); }
  100% { transform: translate(0, 0) }
`;

export const shakeAnimation = `${animationKeyFrames} 150ms 2 linear`;
