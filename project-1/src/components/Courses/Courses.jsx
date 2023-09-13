import { Button, Container, HStack, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'


const Course=({views,title,imageSrc,id,addToPlaylistHandler,creator,description,lectureCount})=>{
  return(
<VStack className='course' alignItems={['center','flex-start']}>
  <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
  <Heading 
  textAlign={['center','left']}
  maxW="200px"
  size={'sm'}
  fontFamily={'sans-serif'}
  noOfLines={3}
  children={title}
/>
<Text noOfLines={2} children={description}/>
<HStack>

<Text 
fontWeight={'bold'} 
textTransform="uppercase" 
children={'Creator'}/>

<Text 
fontFamily={'body'} 
textTransform="uppercase" 
children={creator}/>
</HStack>
<Heading
textAlign={'center'}
size="xs"
children={`Lectures - ${lectureCount}`}
textTransform="uppercase"
/>
<Heading
size="xs"
children={`Views - ${views}`}
textTransform="uppercase"
/>
<Stack 
direction={['column','row']} 
alignItems="center">
  <Link to= {`/course/${id}`}>
<Button colorScheme={'yellow'}>Watch now</Button>
  </Link>
    <Button 
    variant={'ghost'} 
    colorScheme={'yellow'} 
    onClick={()=>addToPlaylistHandler(id)}>
      Add to playlist
</Button>
</Stack>

</VStack>
  )
}

const Courses = () => {
  const [keyword, setKeyword] = useState("")
  const [Category, setCategory] = useState("")
  const addToPlaylistHandler=()=>{
    console.log('Added to playlist')
  }
  const categories = [
    'Web development',
    'Artificial Intelligence',
    'Data structure & Algorithm ',
    'App development',
    'Data sciene',
    'Game development',
  ];
  return (
  <Container minH={'95vh'} maxW="Container.lg" paddingY={'8'}>
    <Heading children= "All courses" m={'8'} />
    <Input 
    value={keyword} 
    onChange={e=> setKeyword(e.target.value)}
     placeholder='Search a course' 
    type={'text'}
    focusBorderColor="yellow.500" />
    <HStack overflowX={'auto'} paddingY="8">
      {
        categories.map((item, index)=>(
          <Button key={index} onClick={()=>setCategory(item)} minW={'60'}>
        <Text children={item} />
      </Button>
        ))
      }
    </HStack>

    <Stack
    direction={['column','row']}
    flexWrap='wrap'
    justifyContent={['flex-start','space-evenly']}
    alignItems={['center','flex-start']}
    >
      <Course
      title={"sampel"}
      description={"sampel"}
      views={22}
      imageSrc={"https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_960_720.jpg"}
      id={"sampel"}
      creator={"sampel boy"}
      lectureCount={2}
      addToPlaylistHandler={addToPlaylistHandler}
      />

    </Stack>
    

  </Container>
)}

export default Courses