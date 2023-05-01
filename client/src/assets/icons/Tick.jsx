import React from 'react'

const Tick = (props) => (
  <svg
    width="34"
    height="25"
    viewBox="0 0 34 25"
    fill={"current"}
    stroke="current"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.5 3.00001L25.1667 3C25.9951 3 26.6667 2.32843 26.6667 1.5C26.6667 0.671573 25.9951 0 25.1667 0L1.5 5.86112e-06C0.671572 6.05981e-06 0 0.671579 0 1.50001C0 2.32843 0.671573 3.00001 1.5 3.00001Z"
      fill={props.fill || "white"}
    />
    <path
      d="M1.5 8.33333C0.671572 8.33333 0 9.00491 0 9.83333C0 10.6618 0.671572 11.3333 1.5 11.3333L25.1667 11.3333C25.9951 11.3333 26.6667 10.6618 26.6667 9.83333C26.6667 9.00491 25.9951 8.33333 25.1667 8.33333L1.5 8.33333Z"
      fill={props.fill || "white"}
    />
    <path
      d="M0 18.1667C0 17.3382 0.671572 16.6667 1.5 16.6667H10.1667C10.9951 16.6667 11.6667 17.3382 11.6667 18.1667C11.6667 18.9951 10.9951 19.6667 10.1667 19.6667H1.5C0.671572 19.6667 0 18.9951 0 18.1667Z"
      fill={props.fill || "white"}
    />
    <path
      d="M32.8723 14.3175C33.5078 13.6517 33.4833 12.5967 32.8175 11.9611C32.1516 11.3256 31.0966 11.3501 30.4611 12.0159L22.1212 20.7529L17.8723 16.3016C17.2367 15.6358 16.1817 15.6113 15.5159 16.2468C14.85 16.8824 14.8255 17.9374 15.4611 18.6032L20.9156 24.3175C21.2301 24.647 21.6657 24.8334 22.1212 24.8334C22.5767 24.8334 23.0123 24.647 23.3268 24.3175L32.8723 14.3175Z"
      fill={props.fill || "white"}
    />
  </svg>
);

export default Tick
