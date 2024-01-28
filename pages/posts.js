// import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'

import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbAppliedAi from '../public/images/contents/applied-ai-for-startups.png'
import thumbCourseMlIvado from '../public/images/contents/course-ml-ivado.png'


const Posts = () => (
  <Layout title="Posts">
    <Container
    maxW="100ch">
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Applied AI for startups - Cooperathon - 2022"
            thumbnail={thumbAppliedAi}
            href="https://www.slideshare.net/AdrienAdriHdz/applied-ai-for-startups"
          />
          <GridItem
            title="Machine learning intermediate in R (french) - IVADO Data.Trek - 2022"
            thumbnail={thumbCourseMlIvado}
            href="https://www.youtube.com/watch?v=4I7OGm_MfDA"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
