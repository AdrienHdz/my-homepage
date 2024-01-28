import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="Lexi AI Assistant">
      <Container>
        <Title>
          Lexi, AI Assistant <Badge>2023</Badge>
        </Title>
        <P>
        Created a fully customizable AI avatar customer assistant capable of answering 
        any questions related to any custom text database
        </P>
        <List ml={4} my={4}>
        <ListItem>
            <Meta>Stack</Meta>
            <span>Python, FastAPI, Angular, typescript, tailwindcss, Google Cloud Platform (Vertex AI), Open AI API, Replicate API, Elevenlabs API, Cloud Run, Docker, Redis</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/AdrienHdz/AI_assistant_chatbot">
            https://github.com/AdrienHdz/AI_assistant_chatbot <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/lexi-ai-assistant_01.gif" alt="Lexi AI Assistant" />
        <WorkImage src="/images/works/lexi-ai-assistant_02.png" alt="Lexi AI Assistant" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  