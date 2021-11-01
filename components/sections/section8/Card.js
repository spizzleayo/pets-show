import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/slider';
import React from 'react';

function Card() {
    return (
        <Flex borderRadius="50px" w="full" bgColor="#F2F2F4" direction="column" px="58px" py="66px" >
            <Text textTransform="uppercase" color="#ED6436" fontWeight="700">
                planning a vacation?
            </Text>
            <Heading fontWeight="700" fontSize="40px" my="30px" whiteSpace="pre-wrap" >
                Get a quote for
                pet boarding
            </Heading>
            <Flex direction="column" gridGap="20px" >
                <Box>
                    <Text as="span" fontSize="14px" textTransform="uppercase" >
                        your pet
                    </Text>
                    <Select borderRadius="50px" h="52px" placeholder="Select..." _focus={{

                        borderColor: '#ED6436',
                        boxShadow: `0 0 0 1px #ED6436`,
                    }}
                    >
                        <option value="cat">Cat</option>
                        <option value="dog">Dog</option>
                    </Select>
                </Box>
                <Box>
                    <Text as="span" fontSize="14px" textTransform="uppercase" >
                        service
                    </Text>
                    <Select borderRadius="50px" h="52px" placeholder="Select..." _focus={{

                        borderColor: '#ED6436',
                        boxShadow: `0 0 0 1px #ED6436`,
                    }}
                    >
                        <option value="bath">Bath</option>
                        <option value="grooming">Grooming</option>
                    </Select>
                </Box>
            </Flex>
            <Text as="span" textTransform="uppercase" my="16px" fontSize="14px" >number of days</Text>
            <Slider max={10} aria-label="slider-ex-4" defaultValue={1} onChange={(e) => console.log(e)} >
                <SliderTrack bg="#ED6436" h="10px" borderRadius="10px">
                    <SliderFilledTrack bg="#ED6436" />
                </SliderTrack>
                <SliderThumb boxSize={9} color="white" bgColor="#82C55B" >
                    1
                </SliderThumb>
            </Slider>
            <Text as="span" mt="30px" fontWeight="700" textTransform="uppercase" color="#ED6436" >total</Text>
            <Heading mt="10px"  fontWeight="700" fontSize="48px">$ 100.00</Heading>
        </Flex >
    );
}

export default Card;