import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../components/grid-item'
import { IoLogoLinkedin, IoMailOutline, IoLogoGithub } from 'react-icons/io5'
// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container
    maxW="100ch">
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a data scientist based in Québec!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1} align="center">
          <Heading as="h2" variant="page-title">
            Adrien Hernandez
          </Heading>
          <p>Data Scientist ( MLOps / AI Apps / NLP )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
        </Box>
      </Box>
      <Section>
      {/* <Box
        
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="120px"
            h="120px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
            display={{ md: 'flex' }}>
            <ProfileImage
              src="/images/adrien.jpg"
              alt="Profile image"
              borderRadius="full"
              width="120%"
              height="120%"
            />
      </Box> */}
      <Box borderColor="whiteAlpha.800"
           align="center" mt={12}>
          <ProfileImage
              src="/images/adrien.jpg"
              alt="Profile image"
              borderRadius="full"
              width="120%"
              height="120%"
            />
      </Box>
      </Section>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Who am I?
        </Heading>
        <Paragraph>
          I&apos;m a data scientist specialized in designing, developping and deploying scalable real-world machine learning systems.
          I&apos;m working at {' '}
          <NextLink href="https://www.desjardins.com/ca/about-us/desjardins/who-we-are/quick-facts/index.jsp" passHref>
            <Link target="_blank" rel="noreferrer">Desjardins</Link>
          </NextLink> 
          , the largest credit union in North America where I&apos;m involved in the creation and deployment of innovative AI apps that are used on a daily basis by several business teams.  
          Having a deep passion for new technologies and how they impact our society, I love to nerd out on creative data-related problems. I&apos;m also involved in the AI community by mentoring and giving workshops to students and startups.
          <br></br>
          <br></br>
          <b>Stacks:</b> Google Cloud Platform (Vertex AI + Compute Engine + Cloud Run + BigQuery...) + Docker + Kubernetes + CI/CD + Python + Pytorch + BERT + XGBoost + Dash + CSS + Angular

        </Paragraph>
        <Box align="center" mt={6}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2021 - Present</BioYear>
          <br></br>
          Working as a data scientist at Desjardins
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          <br></br>
          Graduated from HEC Montréal with a Master&apos;s degree in Data Science
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          <br></br>
          Worked as a data analytics consultant at Valtech 
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          <br></br>
          Worked as a data analytics intern at Talbots in NC, US
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          <br></br>
          Graduated from North Carolina State University and SKEMA with a double degree in Business Administration
        </BioSection>
        <BioSection>
          <BioYear>1994</BioYear>
          <br></br>
          Born in Nice, France
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
        🚀 I&apos;m currently 
        </Heading>
        <Paragraph>
          working on my software engineering skills as well as playing on Google Cloud Platform to get my machine learning engineer certification.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Reach me
        </Heading>
        <List>
          <ListItem>
            <Link href="https://www.linkedin.com/in/adrienhernandez/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                linkedin: adrienhernandez
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/AdrienHdz" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                github: AdrienHdz
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:hi@adrienhernandez.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoMailOutline />}
              >
                email: hi@adrienhernandez.com
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6} mt={6}>
          {/* <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;100k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem> */}
        </SimpleGrid>
        <Box align="center" my={0}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
        <Box flexGrow={1} align="center" my={6}>
          <p><i>&quot;Thy thought to Thee an Empire be&quot;</i></p>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
