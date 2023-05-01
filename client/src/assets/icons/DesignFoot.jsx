import { Text } from "@chakra-ui/react";
import React from "react";
import Playstore from "./Playstore";

const DesignFoot = () => (
  <svg
    width="1189"
    height="260"
    viewBox="0 0 1189 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="20" width="1169" height="220" rx="20" fill="#1E3661" />
    <text x="50" y="100" fill="#ffffff" fontSize="40">
      <tspan>Book our services by</tspan>
      <tspan x="50" dy="60">
        Downloading Apps.
      </tspan>
    </text>
    <g transform="translate(700, 80)">
            <rect x="0" y="0" width="120" height="50" rx="25" fill="#fff" />
            
      <text
        x="53"
        y="25"
        fill="black"
        fontSize="20"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        Google Play
      </text>
    </g>
    <g transform="translate(550, 80) ">
      <rect x="0" y="0" width="120" height="50" rx="25" fill="#fff" />
      <text
        x="55"
        y="25"
        fill="#1E3661"
        fontSize="20"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        App Store
      </text>
    </g>
    <mask
      id="mask0_168_460"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="20"
      width="1169"
      height="220"
    >
      <rect y="20" width="1169" height="220" rx="20" fill="white" />
    </mask>
    <g mask="url(#mask0_168_460)">
      <ellipse cx="1055.75" cy="47" rx="228.32" ry="250" fill="#6759FF" />
    </g>
  </svg>
);

export default DesignFoot;
