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
  <Layout title="Magic Cropping Tool">
    <Container>
      <Title>
        Magic Cropping Tool <Badge>2023-</Badge>
      </Title>
      <P>
      A computer vision app that uses AI to crop your pictures according to their most interesting part.
      Upload your picture, select your desired dimensions, and let the model magically crop it for you!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://magic-cropping-tool.com/">
          https://magic-cropping-tool.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, FastAPI, Angular, typescript, tailwindcss, Google Cloud Platform, Cloud Run, Docker, Deep Learning</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/magic-cropping-tool_01.png" alt="Magic Cropping Tool" />
      <WorkImage src="/images/works/magic-cropping-tool_02.png" alt="Magic Cropping Tool" />
      <WorkImage src="/images/works/magic-cropping-tool_03.png" alt="Magic Cropping Tool" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
