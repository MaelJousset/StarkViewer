import React, { useState } from 'react'
import {
    Flex,
    Text,
    Divider,
    Avatar,
    Heading
} from '@chakra-ui/react'

import { IoIosHome } from 'react-icons/io'
import { FaWallet } from 'react-icons/fa'

import NavItem from './NavItem'
import NavImageItem from './NavImageItem'
import Title from './Title'

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            pos="sticky"
            h="100vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize === "small" ? "15px" : "30px"}
            w={navSize === "small" ? "75px" : "280px"}
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                p="7%"
                flexDir="column"
                w="100%"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                as="nav"
            >
                <Title
                    logo="/assets/APY_logo.png"
                    title="APY DASHBOARD"
                    onClick={() => {
                        if (navSize === "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                    navSize={navSize}
                />
                <Flex
                    paddingTop={navSize === "small" ? "17%" : "5%"}
                    paddingLeft="5%"
                    flexDir="column"
                    w="100%"
                    alignItems={navSize === "small" ? "center" : "flex-start"}
                    as="nav"
                >
                    <Divider w="80%" />
                    <NavItem navSize={navSize} icon={IoIosHome} title="Dashboard" active={true} />
                    <NavImageItem navSize={navSize} image={"/assets/myswap.png"} title="MySwap" active={false} />
                    <NavImageItem navSize={navSize} image={"/assets/jediswap.jpg"} title="JediSwap" active={false} />
                    <NavImageItem navSize={navSize} image={"/assets/ekubo.png"} title="Ekubo" active={false} />
                    <NavItem navSize={navSize} icon={FaWallet} title="My Wallet" active={false} />
                </Flex>
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize === "small" ? "none" : "flex"} />
                <Flex mt={4} align="center">
                    <Avatar size="sm" src="avatar-1.jpg" />
                    <Flex flexDir="column" ml={4} display={navSize === "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">Sylwia Weller</Heading>
                        <Text color="gray">Admin</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}