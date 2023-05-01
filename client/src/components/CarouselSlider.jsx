import { Box, Heading, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tick from "../assets/icons/Tick";
import Star from "../assets/icons/Star";
import Penta from "../assets/icons/Penta";
import FourSquare from "../assets/icons/FourSquare";


const features = [
  {
    featureName: "Feature Name",
    featureContent: `Lorem ipsum dolor sit amet,
consectetur adipiscing elit`,
    featureIcon: "star",
    featureColor: "#2D69F0",
  },
  {
    featureName: "Feature Name",
    featureContent: `"Lorem ipsum dolor sit amet,
consectetur adipiscing elit"`,
    featureIcon: "tick",
    featureColor: "#DD246E",
  },
  {
    featureName: "Feature Name",
    featureContent: `"Lorem ipsum dolor sit amet,
consectetur adipiscing elit"`,
    featureIcon: "penta",
    featureColor: "#6759FF",
  },
  {
    featureName: "Feature Name",
    featureContent: `"Lorem ipsum dolor sit amet,
consectetur adipiscing elit"`,
    featureIcon: "foursquare",
    featureColor: "#0CAE74",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const CarouselSlider = () => {
  return (
    <Slider {...settings}>
      {features.map((item, index) => (
        <Box
          key={index}
          borderWidth="1px"
          borderRadius="lg"
          padding="6"
          ml={'30px'}
          bg={item.featureColor}
          maxW={"390px"}
          height={"254px"}
          display={"flex"}
          flexDir={"column"}
          gap={8}
        >
          {item.featureIcon === "tick" ? (
            <Tick />
          ) : item.featureIcon === "star" ? (
            <Star />
          ) : item.featureIcon === "penta" ? (
            <Penta />
          ) : item.featureIcon === "foursquare" ? (
            <FourSquare />
          ) : (
            {}
          )}

          <Heading color={"white"} pt={"3"}>
            {item.featureName}
          </Heading>
          <Text width={'350px'} color={"white"} fontSize={"18px"} mt={'3'}>
            {" "}
            {item.featureContent}
          </Text>
          <Text color={"white"} fontSize={"18px"} mt={"3"}>
            Know More &rarr;
          </Text>
        </Box>
      ))}
    </Slider>
  );
};

export default CarouselSlider;
