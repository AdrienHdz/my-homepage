import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  Flex,
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
import { GridItem } from '../components/grid-item'
import { IoLogoLinkedin, IoMailOutline, IoLogoGithub } from 'react-icons/io5'
import thumbMagicCroppingTool from '../public/images/works/magic-cropping-tool_eyecatch.png'
import thumbAppliedAi from '../public/images/contents/applied-ai-for-startups.png'
import thumbLexiAIAssistant from '../public/images/works/lexi-ai-assistant-eyecatch.png'
import thumbCourseMlIvado from '../public/images/contents/course-ml-ivado.png'

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
        Hi, I&apos;m a Machine Learning Enginner based in North Carolina!
        <br></br>
        I'm seeking remote opportunities in the USA as a ML/MLOps Engineer.

      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1} align="center">
          <Heading as="h2" variant="page-title">
            Adrien Hernandez
          </Heading>
          <p>ML Engineer ( MLOps / AI Apps / GCP )</p>
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
              itemProp="image"
            />
      </Box>
      </Section>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Who am I?
        </Heading>
        <Paragraph>
          I&apos;m an Experienced Machine Learning Engineer with over 4 years of expertise in developing high-value AI solutions, presently enhancing business operations for over 7.5 million Canadians
          at, {' '}
          <NextLink href="https://www.desjardins.com/ca/about-us/desjardins/who-we-are/quick-facts/index.jsp" passHref>
            <Link target="_blank" rel="noreferrer">Desjardins</Link>
          </NextLink> 
          , North America's largest financial cooperative.  
          <br></br>
          My contributions include co-creating AI systems that have generated savings and operational improvements exceeding $1 million annually.
          <br></br>
          <br></br>
          <b>Stacks:</b> 
          <br></br>
            - <b>Google Cloud Platform</b> (Vertex AI, Compute Engine, Cloud Run, BigQuery, Kubernetes Engine...)
          <br></br>
            - <b>Machine Learning</b> (Pytorch, LLMs, XGBoost)
          <br></br>
            - <b>Backend Development</b> (Python, REST APIs, Docker, Redis)
          <br></br>
            - <b>Frontend Development</b> (Angular, TypeScript, Tailwind CSS, Dash)
          <br></br>
            - <b>MLOps</b> (CI/CD, Makefile, Terraform)
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
          <BioYear>2022 - Present</BioYear>
          <br></br>
          Working as a ML Engineer at Desjardins
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          <br></br>
          Working as a Data Scientist at Desjardins
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
          Seeking remote opportunities in the USA as a ML/MLOps Engineer.
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

        <SimpleGrid columns={[2]} gap={6} mt={6} mb={6}>
        <GridItem
            title="A fully customizable AI-powered avatar customer assistant - 2023"
            thumbnail={thumbLexiAIAssistant}
            href="https://github.com/AdrienHdz/AI_assistant_chatbot"
          >
          </GridItem>
        <GridItem
            title="A computer vision app that uses AI to crop images automatically - 2023"
            thumbnail={thumbMagicCroppingTool}
            href="https://magic-cropping-tool.com/"
          >
          </GridItem>
          <GridItem
            title="Applied AI for startups - Cooperathon - 2022"
            thumbnail={thumbAppliedAi}
            href="https://www.slideshare.net/AdrienAdriHdz/applied-ai-for-startups"
          >
          </GridItem>
          <GridItem
            title="Machine learning intermediate in R (french) - IVADO Data.Trek - 2022"
            thumbnail={thumbCourseMlIvado}
            href="https://www.youtube.com/watch?v=4I7OGm_MfDA"
          >
          </GridItem>
        </SimpleGrid>
        <Flex justify="center" align="center" mt={6} mb={6} gap={6}>
        <Box my={0}>
              <NextLink href="/works" passHref scroll={false}>
                  <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                      Popular works
                  </Button>
              </NextLink>
          </Box>
          <Box my={0}>
              <NextLink href="/posts" passHref scroll={false}>
                  <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                      Popular posts
                  </Button>
              </NextLink>
          </Box>
      </Flex>
        <Box flexGrow={1} align="center" my={6}>
          <p><i>&quot;Thy thought to Thee an Empire be&quot;</i></p>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
