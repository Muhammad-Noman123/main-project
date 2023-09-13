import { Avatar, Box, Button, Container, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import introVideo from "../../assests/videos/intro.mp4"
import { RiSecurePaymentFill } from 'react-icons/ri'
import termsAndCondition from "../../assests/docs/termsAndCondition"


const Founder =()=> (
    <Stack direction={['column','row']} spacing={['4','16']} padding={'8'}>
        <VStack>
            <Avatar
            src='https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/279842022_3200827186859477_5701505804247179048_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeHQvnVujMpE7aXKGmTrPuRk595iaHvQJf3n3mJoe9Al_YPq0mMH_X-tzoqpGcxn-3i_icSxWzqU5b0usQ2nBBtH&_nc_ohc=VbuWSXsawSIAX_NeMmh&_nc_oc=AQkQDblI7Fppod97fcWi2Jxpacs0xuZWlNOdwB4mgqP7vizHdM3xCfU9MbTRNqFI00I&_nc_ht=scontent.fkhi2-3.fna&oh=00_AfCaZ2GVB8YaUDjG2-558p8_Lzq2ivzvSnStfiHsw8DC2w&oe=64FF6455' 
            boxSize={['40','48']} />
            <Text children="Co-Founder" opacity={0.7} />
        </VStack>
        <VStack justifyContent={'center'} alignItems={['center','flex-start']}>
            <Heading children="Muhammad Noman" size={['md','xl']} />
            <Text textAlign={['center','left']}
            children={`Hi, I am a full-stack developer and a teacher. Our mission is to provide quality content at free of cost`} />
        </VStack>

    </Stack>
)
const VideoPlayer=()=>(
    <Box>
         <video
         autoPlay
         loop
         muted
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
    </Box>
)
const TandC=({termsAndCondition})=>(
    <Box>
        <Heading 
        children="Terms & conditions"
        size={'md'}
        textAlign={['center','left']}
        my="4" />
        <Box h={'sm'} p="4" overflowY={'scroll'}>
            <Text 
            fontFamily={'heading'} 
            letterSpacing={'widest'} 
            textAlign={['center','left']}> 
            {termsAndCondition}
            </Text>
            <Heading 
            my="4"
            size={'xl'}
            children="Refund only applicable for cancellation within 7 days" />

        </Box>
    </Box>
    
)
const About = () => {
  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
<Heading children="About Us" textAlign={['center','left']} />
<Founder />
<Stack m="8" direction={['column','row']} alignItems="center">
    <Text>
        We are a video streaming platform with some premium courses available for only premium users.
    </Text>
    <Link to="/subscribe">
        <Button variant={'ghost'} colorScheme='yellow'>
            Checkout our Plan

        </Button>
    </Link>

</Stack>
<VideoPlayer />
<TandC termsAndCondition={termsAndCondition} />
<HStack my={'4'} padding={'4'}>
    <RiSecurePaymentFill />
    <Heading
    size="xs"
    fontFamily="sans-serif"
    textTransform={'uppercase'} 
    children={'Payment is secured by Razorpay'} />
</HStack>
    </Container>
  )
}

export default About