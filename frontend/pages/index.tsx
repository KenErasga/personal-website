import { Box, Container } from '@chakra-ui/react'
import { motion } from 'motion/react'
import HomeSection from '../components/sections/home'
import ExperienceSection from '../components/sections/experience'
import ContactsSection from '../components/sections/contacts'

const SectionWrapper = ({ children }) => (
  <Box
    minH="100vh"
    display="flex"
    alignItems="center"
    py={16}
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  </Box>
)

const Home = () => {
  return (
    <Container>
      <SectionWrapper>
        <HomeSection />
      </SectionWrapper>

      <SectionWrapper>
        <ExperienceSection />
      </SectionWrapper>

      <SectionWrapper>
        <ContactsSection />
      </SectionWrapper>
    </Container>
  )
}

export default Home
