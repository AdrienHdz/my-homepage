import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Adrien Hernandez. All Rights Reserved. 
      <br></br>
      This website is built based on the <a href='https://www.craftz.dog/' target='_blank' rel="noreferrer">Takuya Matsuyama&apos;s website</a>. ❤️
    </Box>
  )
}

export default Footer
