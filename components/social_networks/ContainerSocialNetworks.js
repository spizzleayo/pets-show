import { Flex, Link, Box } from '@chakra-ui/layout';
import React, { Fragment } from 'react';

export default function ContainerSocialNetworks({ data, mtSize, gap, revert }) {

    let colorDefaultHover = "#ed6436"
    let colorDefault = "white"
    let shadowDefault = `0 0 0 48px ${colorDefaultHover} inset`
    let shadowLight = `0 0 0 2px ${colorDefaultHover} inset`

    if (revert) {
        colorDefaultHover = "white"
        shadowLight = `0 0 0 2px ${colorDefaultHover} inset`
    }

    return (
        <Fragment>
            <Flex mt={mtSize} justifyContent="center" gridGap={gap}  >
                {
                    data.map(e =>
                        <Link
                            key={e.id}
                            justifyContent="center"
                            alignItems="center"
                            transition="all .3s ease-out"
                            w="40px"
                            h="40px"
                            shadow={shadowDefault}
                            borderRadius="full"
                            color={colorDefault}
                            href={e.url}
                            display="flex"
                            isExternal
                            title={e.socialNetwork}
                            _hover={{
                                color: colorDefaultHover,
                                boxShadow: shadowLight,
                            }}
                            _focus={{
                                color: colorDefaultHover,
                                boxShadow: shadowLight,
                            }}
                        >
                            <Flex
                                pl={e.pl}
                                pt={e.pt}
                                w="20px"
                                h="20px"
                            >
                                {e.iconSvg}
                            </Flex>
                        </Link>
                    )
                }
            </Flex>
        </Fragment>
    );
}