import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
  return (
    <Container py={'16'} minH={'90vh'}>
        <form>
            <Heading 
            textTransform={'uppercase'}
            my={'16'}
            children="Change Password"
            textAlign={['center','left']}/>
            <VStack spacing={'8'}>
            <Input 
            required
        value={oldPassword}
        onChange={e => setOldPassword(e.target.value)}
        placeholder='Old Password'
        type={'password'}
        focusBorderColor="yellow.500" />

<Input required
        value={newPassword}
        onChange={e => setNewPassword(e.target.value)}
        placeholder='New Password'
        type={'password'}
        focusBorderColor="yellow.500" />
            <Button 
            w={'full'}
            colorScheme='yellow'
            type='submit'>
                Change
                </Button>
            </VStack>
        </form>

    </Container>
  )
}

export default ChangePassword