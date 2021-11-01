import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import CloudRightImage2 from '@components/clouds/CloudRightImage2'
import BoneIcon from '@icons/BoneIcon';
import bgImage from '../../../resources/images/image-background-h.jpg'
import Services from './Services';
import CatIcon from '@icons/CatIcon';
import SpaIcon from '@icons/SpaIcon';
import DogIcon from '@icons/DogIcon';
import { nanoid } from 'nanoid';

function Section1() {

	let timer = 2
	let timer1 = 4
	let timer2 = 0


	const data = [
		{
			id: nanoid(),
			title: "Cat Boarding",
			description: `Your pets will also be exposed to plenty
of human interaction, time outside.`,
			icon: <CatIcon />,
			op: 0,
			time: timer,
			animationName: 'change',

		},
		{
			id: nanoid(),
			title: "Pet Spaa",
			description: `We have a variety of quality shampoos
as well as medicated shampoo.`,
			icon: <SpaIcon />,
			op: 0,
			time: timer1,
			animationName: 'move2',

		},
		{
			id: nanoid(),
			title: "Dog Boarding",
			description: `Short term and long term pet board.
Luxury dog kennels, exercise.`,
			icon: <DogIcon />,
			op: 1,
			time: timer1,
			animationName: 'change',
		},
	]

	return (
		<Flex
			id="home"
			w="full"
			className="scroll-mt"
			justifyContent={['center', 'center', 'center', 'space-between', 'space-between',]}
			alignItems={['center', 'center', 'center', 'flex-start', 'flex-start',]}
			pl={['0px', '0px', '0px', '78px', '78px']}
			textAlign={['center', 'center', 'center', 'left', 'left']}
			flexDirection={['column', 'column', 'column', 'row', 'row']}
			pt="80px"
		>

			<Box w="full" >
				<Heading fontSize={['50px', '50px', '76px', '76px', '76px']} fontWeight="700" mt="60px" >
					<Text as="strong" fontSize="inherit" fontWeight="inherit" color="#ED6436" >Enjoy Your </Text> <br />
					Holiday
				</Heading>
				<Flex
					mt="50px"
					mb={['0px', '0px', '0px', '80px', '80px']}
					mx={['auto', 'auto', 'auto', '0px', '0px',]}
					h={['200px', '200px', '200px', '100px', '100px']}
					w={['200px', '200px', '200px', '500px', '500px',]}
					alignItems="center"
					position="relative"
					className="vf"
					_hover={{
						color: "#ED6C41",
					}}
				>
					{
						data.map(e => <Services key={e.id} data={e} />)
					}
				</Flex>
				<Flex
					w="260px"
					mt={['0px', '0px', '0px', '30px', '30px']}
					cursor="pointer"
					transition="transform .3s ease"
					position="relative"
					mx={['auto', 'auto', 'auto', '0px', '0px']}
					justifyContent="center"
					_hover={{
						transform: "rotate(10deg)"

					}} >
					<Flex
						w={['240px', '240px', '240px', '100%', '100%',]}
						h={['240px', '240px', '240px', '100%', '100%',]}

					>
						<BoneIcon
							url={bgImage.src}
							x={'-110'}
							y={'0'}
							sizeW={'200%'}
							sizeH={'100%'}
							id={'0e0c67fa-1602-4a9d-86ba-32fc73c12670'}
						/>
					</Flex>
					<Text as="strong"
						color="white"
						fontSize="20px"
						top={['43%', '43%', '43%', '39%', '39%']}
						left="28%"
						transform="rotate(-5.8deg)"
						position="absolute"
						textTransform="uppercase"
						userSelect="none"
					>
						boox now
					</Text>
				</Flex>
			</Box>

			<Box w={['100%', '100%', '100%', '160%', '160%']} maxW="1000px" >
				<CloudRightImage2
					id={'wolfImg'}
					url={'https://images.unsplash.com/photo-1541876176131-3f5e84a7331a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'}
					x={'-380'}
					y={'-200'}
					sizeW={'180%'}
					sizeH={'180%'}
				/>
			</Box>

		</Flex>
	);
}

export default Section1;