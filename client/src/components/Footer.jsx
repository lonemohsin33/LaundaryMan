import { Box, Button, Flex, Heading, Input, InputGroup, InputRightElement, Text, Wrap, useBreakpointValue, Image} from '@chakra-ui/react';
import React from 'react'
import DesignFoot from '../assets/icons/DesignFoot';
import Subscribe from '../assets/icons/Subscribe';
import Facebook from '../assets/icons/Facebook';
import LinkedIn from '../assets/icons/LinkedIn';
import Twitter from '../assets/icons/Twitter';
import design from '../assets/DesignFoot.svg'
import Apple from '../assets/icons/Apple';
import Playstore from '../assets/icons/Playstore';

const Footer = () => {
     const isMobile = useBreakpointValue({ base: true, md: false });
    return (
      <>
        {isMobile ? (
          <Wrap width={"100%"} height={"160vh"}>
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              position={"absolute"}
            >
              <Wrap
                width={"80%"}
                display={"flex"}
                justifyContent={"center"}
                mt={"50px"}
              >
                <Image
                  src={design}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                />
                <Heading
                  zIndex={"1"}
                  position={"absolute"}
                  fontSize={"20px"}
                  p={"4"}
                  color={"white"}
                >
                  Book our Services <br /> Dowloading App
                  <br />
                </Heading>
                <br />
                <br />
                <Box pos={"absolute"} bottom={"3"} right={"32"}>
                  <Button
                    color={"black"}
                    width={"fit-content"}
                    height={"fit-content"}
                  >
                    <Apple />
                    &nbsp; Apple
                  </Button>
                  &nbsp; &nbsp;
                  <Button
                    color={"black"}
                    width={"fit-content"}
                    height={"fit-content"}
                  >
                    <Playstore /> &nbsp; Play Store
                  </Button>
                </Box>
              </Wrap>
            </Box>
            <Box width={"100%"} height={"95vh"}>
              <Box
                mt={"120px"}
                height={"100vhpx"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"flex-start"}
                style={{ backgroundColor: "rgba(225, 225, 225, 0.2)" }}
              >
                <Flex flexDirection={"column"} mt={"70px"} ml={"40px"}>
                  <Flex flexDir={"column"}>
                    <Heading
                      children={"Logo Space"}
                      fontSize={"20px"}
                      mb={"6"}
                    />
                    <Text
                      width={"320px"}
                      mb={"6"}
                      fontSize={"16px"}
                      children={
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                      }
                    />
                    <Text
                      fontSize={"18px"}
                      color={"#010101"}
                      opacity={"0.8"}
                      fontWeight={"semibold"}
                      mb={"6"}
                    >
                      {" "}
                      Subscribe to get latest news
                    </Text>
                    <InputGroup width={"300px"} height={"55px"}>
                      <Input placeholder="Email Address" width={"150px"} />
                      <InputRightElement width={"121px"}>
                        <Button bg={"#6759FF"} color={"white"} width={"100px"}>
                          Subscribe &nbsp; <Subscribe />
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <Flex>
                      <Box
                        _hover={{
                          cursor: "pointer",
                          color: "blue.400",
                          fontWeight: "semibold",

                          transform: "scale(1.2)",
                        }}
                      >
                        <Facebook />
                      </Box>
                      &nbsp;
                      <Box
                        _hover={{
                          cursor: "pointer",
                          color: "blue.400",
                          fontWeight: "semibold",

                          transform: "scale(1.2)",
                        }}
                      >
                        <LinkedIn />
                      </Box>
                      &nbsp;
                      <Box
                        _hover={{
                          cursor: "pointer",
                        
                         

                          transform: "scale(1.2)",
                        }}
                      >
                        <Twitter />
                      </Box>
                    </Flex>
                  </Flex>
                  <Flex mt={"6"} gap={16}>
                    <Flex flexDirection={"column"} gap={3}>
                      <Heading children={"Company"} fontSize={"20px"} />
                      <Text fontSize={"16px"}  _hover={{
                          cursor: "pointer",
                          color: "blue.400",
                          fontWeight: "semibold",

                          transform: "scale(1.2)",
                        }}>About Us</Text>
                      <Text fontSize={"16px"}  _hover={{
                          cursor: "pointer",
                          color: "blue.400",
                          fontWeight: "semibold",

                          transform: "scale(1.2)",
                        }}>Meet the Team</Text>
                      <Text fontSize={"16px"}  _hover={{
                          cursor: "pointer",
                          color: "blue.400",
                          fontWeight: "semibold",

                          transform: "scale(1.2)",
                        }}>News and Media</Text>
                      <Text fontSize={"16px"}  _hover={{
                          cursor: "pointer",
                          color: "blue.400",
                          fontWeight: "semibold",

                          transform: "scale(1.2)",
                        }}>Our Projects</Text>
                      <Text fontSize={"16px"}  _hover={{
                          cursor: "pointer",
                          color: "blue.400",
                          fontWeight: "semibold",

                          transform: "scale(1.2)",
                        }}>Contact Us</Text>
                    </Flex>
                    <Flex flexDirection={"column"} gap={3}>
                      <Heading children={"Services"} fontSize={"20px"} />
                      <Text fontSize={"16px"}>About Us</Text>
                      <Text fontSize={"16px"}>Meet the Team</Text>
                      <Text fontSize={"16px"}>News and Media</Text>
                      <Text fontSize={"16px"}>Our Projects</Text>
                    </Flex>
                  </Flex>
                  <Flex flexDirection={"column"} gap={3} mt={"6"}>
                    <Heading children={"Support"} fontSize={"20px"} />
                    <Text fontSize={"16px"}  _hover={{
                          cursor: "pointer",
                          color: "blue",
                          fontWeight: "semibold",

                          transform: "scale(1.2)",
                        }}>About Us</Text>
                    <Text fontSize={"16px"}  _hover={{
                          cursor: "pointer",
                          color: "blue",
                          fontWeight: "semibold",

                          transform: "scale(1.2)",
                        }}>Meet the Team</Text>
                    <Text fontSize={"16px"}  _hover={{
                          cursor: "pointer",
                          color: "blue",
                          fontWeight: "semibold",

                          transform: "scale(1.2)",
                        }}>News and Media</Text>
                    <Text fontSize={"16px"}  _hover={{
                          cursor: "pointer",
                          color: "blue",
                          fontWeight: "semibold",

                          transform: "scale(1.2)",
                        }}>Our Projects</Text>
                  </Flex>
                </Flex>
                <Box
                  width={"100%"}
                  height={"10vh"}
                  position={"relative"}
                  mt={"50px"}
                  display={"flex"}
                  fontSize={"16px"}
                  ml={"6"}
                  fontWeight={"semibold"}
                  justifyContent={"flex-start"}
                >
                  © 2022 Laundry Shop, All Rights Reserved.
                </Box>
              </Box>
            </Box>
          </Wrap>
        ) : (
          <Wrap width={"100%"}>
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              pt={"120px"}
              position={"absolute"}
            >
              <Wrap width={"80%"} display={"flex"} justifyContent={"center"}>
                <Image src={design} objectFit="cover" />
                <Heading
                  zIndex={"1"}
                  position={"absolute"}
                  fontSize={"50px"}
                  p={"12"}
                  color={"white"}
                >
                  Book our Services <br /> Dowloading App
                  <br />
                </Heading>

                <Box
                  pos={"absolute"}
                  width={"900px"}
                  height={"250px"}
                  display={"flex"}
                  justifyContent={"flex-end"}
                  alignItems={"center"}
                >
                  <Button
                    color={"black"}
                    width={"150px"}
                    height={"50px"}
                    fontSize={"18px"}
                  >
                    <Apple /> &nbsp; Apple
                  </Button>
                  &nbsp; &nbsp;
                  <Button
                    color={"black"}
                    width={"150px"}
                    height={"50px"}
                    fontSize={"18px"}
                  >
                    <Playstore /> &nbsp; Play Store
                  </Button>
                </Box>
              </Wrap>
            </Box>
            <Box width={"100%"} minHeight={"650px"}>
              <Box
                mt={"250px"}
                minHeight={"576px"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"flex-start"}
                style={{ backgroundColor: "rgba(225, 225, 225, 0.2)" }}
              >
                <Flex mt={"150px"} ml={"130px"} gap={24}>
                  <Flex flexDir={"column"}>
                    <Heading
                      children={"Logo Space"}
                      fontSize={"30px"}
                      mb={"6"}
                    />
                    <Text
                      width={"350px"}
                      mb={"6"}
                      children={
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                      }
                    />
                    <Text
                      fontSize={"18px"}
                      color={"#010101"}
                      opacity={"0.8"}
                      fontWeight={"semibold"}
                      mb={"6"}
                    >
                      {" "}
                      Subscribe to get latest news
                    </Text>
                    <InputGroup width={"383px"} height={"55px"}>
                      <Input placeholder="Email Address" width={"250px"} />
                      <InputRightElement width={"121px"}>
                        <Button bg={"#6759FF"} color={"white"} width={"121px"}>
                          Subscribe &nbsp; <Subscribe />
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <Flex>
                      <Box
                        _hover={{
                          cursor: "pointer",

                          transform: "scale(1.4)",
                        }}
                      >
                        <Facebook />
                      </Box>
                      &nbsp;
                      <Box
                        _hover={{
                          cursor: "pointer",

                          transform: "scale(1.4)",
                        }}
                      >
                        <LinkedIn />
                      </Box>
                      &nbsp;
                      <Box
                        _hover={{
                          cursor: "pointer",

                          transform: "scale(1.4)",
                        }}
                      >
                        <Twitter />
                      </Box>
                    </Flex>
                  </Flex>
                  <Flex flexDirection={"column"} gap={3}>
                    <Heading children={"Company"} fontSize={"20px"} />
                    <Text
                      _hover={{
                        cursor: "pointer",
                        color: "blue.400",
                        fontWeight: "semibold",

                        transform: "scale(1.2)",
                      }}
                    >
                      About Us
                    </Text>
                    <Text
                      _hover={{
                        cursor: "pointer",
                        color: "blue.400",
                        fontWeight: "semibold",

                        transform: "scale(1.2)",
                      }}
                    >
                      Meet the Team
                    </Text>
                    <Text
                      _hover={{
                        cursor: "pointer",
                        color: "blue.400",
                        fontWeight: "semibold",

                        transform: "scale(1.2)",
                      }}
                    >
                      News and Media
                    </Text>
                    <Text
                      _hover={{
                        cursor: "pointer",
                        color: "blue.400",
                        fontWeight: "semibold",

                        transform: "scale(1.2)",
                      }}
                    >
                      Our Projects
                    </Text>
                    <Text
                      _hover={{
                        cursor: "pointer",
                        color: "blue.400",
                        fontWeight: "semibold",

                        transform: "scale(1.2)",
                      }}
                    >
                      Contact Us
                    </Text>
                  </Flex>
                  <Flex flexDirection={"column"} gap={3}>
                    <Heading children={"Services"} fontSize={"20px"} />
                    <Text
                      Text
                      _hover={{
                        cursor: "pointer",
                        color: "blue.400",
                        fontWeight: "semibold",

                        transform: "scale(1.2)",
                      }}
                    >
                      About Us
                    </Text>
                    <Text
                      Text
                      _hover={{
                        cursor: "pointer",
                        color: "blue.400",
                        fontWeight: "semibold",

                        transform: "scale(1.2)",
                      }}
                    >
                      Meet the Team
                    </Text>
                    <Text
                      Text
                      _hover={{
                        cursor: "pointer",
                        color: "blue.400",
                        fontWeight: "semibold",

                        transform: "scale(1.2)",
                      }}
                    >
                      News and Media
                    </Text>
                    <Text
                      Text
                      _hover={{
                        cursor: "pointer",
                        color: "blue.400",
                        fontWeight: "semibold",

                        transform: "scale(1.2)",
                      }}
                    >
                      Our Projects
                    </Text>
                  </Flex>
                  <Flex flexDirection={"column"} gap={3}>
                    <Heading children={"Support"} fontSize={"20px"} />
                    <Text
                      Text
                      _hover={{
                        cursor: "pointer",
                        color: "blue.400",
                        fontWeight: "semibold",

                        transform: "scale(1.2)",
                      }}
                    >
                      About Us
                    </Text>
                    <Text
                      Text
                      _hover={{
                        cursor: "pointer",
                        color: "blue.400",
                        fontWeight: "semibold",

                        transform: "scale(1.2)",
                      }}
                    >
                      Meet the Team
                    </Text>
                    <Text
                      Text
                      _hover={{
                        cursor: "pointer",
                        color: "blue.400",
                        fontWeight: "semibold",

                        transform: "scale(1.2)",
                      }}
                    >
                      News and Media
                    </Text>
                    <Text
                      Text
                      _hover={{
                        cursor: "pointer",
                        color: "blue.400",
                        fontWeight: "semibold",

                        transform: "scale(1.2)",
                      }}
                    >
                      Our Projects
                    </Text>
                  </Flex>
                </Flex>
                <Box
                  width={"50%"}
                  height={"10vh"}
                  position={"relative"}
                  marginLeft={"250px"}
                  mt={"40px"}
                  display={"flex"}
                  fontSize={"16px"}
                  fontWeight={"semibold"}
                  justifyContent={"flex-end"}
                >
                  © 2022 Laundry Shop, All Rights Reserved.
                </Box>
              </Box>
            </Box>
          </Wrap>
        )}
      </>
    );
}

export default Footer
