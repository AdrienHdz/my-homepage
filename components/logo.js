import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  cursor: pointer;

    &:hover img {
        transform: rotate(20deg);
    }

    img {
        transition: 200ms ease;
    }
`;

const Logo = () => {
  const LogoImg = `/images/rocket${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Image src={LogoImg} width={20} height={20} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}

          >
            &nbsp;&nbsp;Adrien Hernandez
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
