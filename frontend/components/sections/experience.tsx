import { useState } from 'react'
import {
  Heading,
  Text,
  Box,
  List,
  Flex,
  Badge,
  SimpleGrid
} from '@chakra-ui/react'
import { motion } from 'motion/react'
import { FaChevronDown, FaAward, FaGraduationCap } from 'react-icons/fa'
import SectionTitle from '../section-title'

interface ExperienceEntryProps {
  company: string
  location: string
  role: string
  period: string
  duration: string
  tech: string[]
  children: React.ReactNode
}

const ExperienceEntry = ({ company, location, role, period, duration, tech, children }: ExperienceEntryProps) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Flex gap={4}>
      <Flex direction="column" align="center" minW="16px">
        <Box
          w="12px"
          h="12px"
          borderRadius="50%"
          bg="grassTeal"
          flexShrink={0}
          mt={1}
        />
        <Box w="2px" flex={1} bg="grassTeal" opacity={0.3} />
      </Flex>

      <Box
        flex={1}
        mb={6}
        p={4}
        borderWidth="1px"
        borderRadius="lg"
        transition="all 0.2s"
        cursor="pointer"
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
        onClick={() => setExpanded(!expanded)}
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setExpanded(!expanded)
          }
        }}
        _hover={{ borderColor: 'grassTeal' }}
      >
        <Box>
          <Heading as="h3" fontSize="md">
            {company}, {location} &mdash; <i>{role}</i>
          </Heading>
          <Flex align="center" gap={2} mt={1}>
            <Text fontSize="sm" color="gray.500">
              {period}
            </Text>
            <Badge colorPalette="gray" fontSize="xs">
              {duration}
            </Badge>
          </Flex>
        </Box>

        <Flex flexWrap="wrap" gap={1} mt={3}>
          {tech.map(t => (
            <Badge key={t} colorPalette="teal" fontSize="xs" px={2} py={0.5}>
              {t}
            </Badge>
          ))}
        </Flex>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <List.Root gap={1} ps={4} fontSize="sm" mt={3}>
              {children}
            </List.Root>
          </motion.div>
        )}
      </Box>
    </Flex>
  )
}

interface EducationEntryProps {
  degree: string
  institution: string
  period: string
  children?: React.ReactNode
}

const EducationEntry = ({ degree, institution, period, children }: EducationEntryProps) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Flex
      align="flex-start"
      gap={3}
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      transition="all 0.2s"
      cursor={children ? 'pointer' : 'default'}
      role={children ? 'button' : undefined}
      tabIndex={children ? 0 : undefined}
      aria-expanded={children ? expanded : undefined}
      onClick={children ? () => setExpanded(!expanded) : undefined}
      onKeyDown={children ? (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setExpanded(!expanded)
        }
      } : undefined}
      _hover={{ borderColor: 'grassTeal' }}
    >
      <Box fontSize="24px" color="grassTeal" mt={0.5}>
        <FaGraduationCap />
      </Box>
      <Box flex={1}>
        <Text fontSize="sm" fontWeight="semibold">
          {degree}
        </Text>
        <Text fontSize="xs" color="gray.500">
          {institution} &middot; {period}
        </Text>
        {children && expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <Box mt={3}>
              {children}
            </Box>
          </motion.div>
        )}
      </Box>
    </Flex>
  )
}

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const ExperienceSection = () => {
  return (
    <Box id="experience" as="section" position="relative" scrollMarginTop="80px">
      <Box pt={6} mb={2}>
        <Heading as="h2" fontSize="3xl" mb={2}>
          Experience
        </Heading>
        <Text fontSize="sm" color="gray.500">
          7+ years of professional experience
        </Text>
      </Box>

      <Box mt={6}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0 }}
        >
          <ExperienceEntry
            company="UrbanChain"
            location="Manchester"
            role="Senior Software Engineer"
            period="November 2023 - Present"
            duration="2 yrs 3 mo"
            tech={['NestJS', 'MongoDB', 'AWS', 'Next.js', 'Playwright', 'Jest', 'Python']}
          >
            <List.Item>
              Built and maintained a suite of Node.js microservices on AWS ECS and Lambda
              using NestJS and MongoDB to process half-hourly energy data, line loss factors,
              and generator–consumer matching.
            </List.Item>
            <List.Item>
              Improved matching engine performance, reducing processing time for large
              settlement batches by ~40% through query optimisation and parallelisation.
            </List.Item>
            <List.Item>
              Led the design and rollout of a new matching feature end-to-end,
              from data modelling through API design to deployment and monitoring.
            </List.Item>
            <List.Item>
              Built and maintained end-to-end test coverage using Playwright, validating critical
              user journeys across Next.js apps and backend services; integrated tests into CI to
              prevent regressions.
            </List.Item>
            <List.Item>
              Support frontend teams with Next.js applications and maintain a
              legacy Angular app used for billing and generating CSV/PDF energy
              invoices. Gradually migrating this legacy system into a modern
              Next.js stack.
            </List.Item>
            <List.Item>
              Worked closely with product and commercial teams to translate complex
              regulatory and energy market requirements into robust system behaviour.
            </List.Item>
          </ExperienceEntry>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <ExperienceEntry
            company="Mission Labs"
            location="Manchester"
            role="Senior Software Engineer"
            period="April 2023 - November 2023"
            duration="8 mo"
            tech={['Node.js', 'React', 'AWS EKS', 'DynamoDB', 'DocumentDB', 'AWS S3', 'OpenSearch', 'Cypress']}
          >
            <List.Item>
              Built Node.js microservices deployed in AWS EKS and integrated with
              DynamoDB, DocumentDB, S3, and OpenSearch.
            </List.Item>
            <List.Item>
              Designed solutions for new features, fixed bugs, paired with junior
              engineers, conducted code reviews, and demoed new features.
            </List.Item>
            <List.Item>
              Helped define and implement the automated testing strategy using Cypress
              and GitLab CI pipelines, with Jest and CucumberJS for unit and integration
              testing.
            </List.Item>
          </ExperienceEntry>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <ExperienceEntry
            company="Raytheon UK"
            location="Manchester"
            role="Software Engineer"
            period="April 2020 - April 2023"
            duration="3 yrs"
            tech={['React', 'Material-UI', 'Gatsby', 'Node.js', 'AWS', 'Terraform', 'Cypress', 'Jest', 'Docker', 'Python']}
          >
            <List.Item>
              Developed secure frontend applications using React, Material-UI, and Gatsby,
              implementing BDD practices with Cucumber and Cypress to ensure predictable,
              testable behaviour.
            </List.Item>

            <List.Item>
              Designed and maintained Node.js services with Express, applying unit and
              integration testing using Jest to support reliable, production-grade systems.
            </List.Item>

            <List.Item>
              Engineered cloud-native solutions across AWS (ECS Fargate, ECR, Cognito,
              Lambda, DocumentDB, DynamoDB, EKS) using Terraform for infrastructure as code,
              and automated deployments via Concourse and GitLab CI/CD pipelines.
            </List.Item>

            <List.Item>
              Mentored junior engineers and promoted knowledge sharing through regular
              pair programming and collaborative code reviews.
            </List.Item>
          </ExperienceEntry>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <ExperienceEntry
            company="Qualitest Group"
            location="Preston"
            role="Software Engineer in Test"
            period="January 2018 - March 2020"
            duration="2 yrs 3 mo"
            tech={['TypeScript', 'Node.js', 'AWS Lambda', 'DynamoDB', 'Docker', 'Jenkins', 'CucumberJS']}
          >
            <List.Item>
              Worked across manual testing, automation, and software engineering
              for various clients.
            </List.Item>
            <List.Item>
              Built API automation frameworks using TypeScript, Node.js, and
              CucumberJS.
            </List.Item>
            <List.Item>
              Developed Node.js applications using TypeScript, AWS Lambda,
              DynamoDB, and API Gateway.
            </List.Item>
            <List.Item>
              Implemented CI/CD using Jenkins and GitLab pipelines. Used Docker
              for containerised APIs and Kong as an API Gateway.
            </List.Item>
          </ExperienceEntry>
        </motion.div>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mt={8}>
        <Box>
          <SectionTitle>Qualifications</SectionTitle>
          <Flex direction="column" gap={3}>
            <Flex
              align="center"
              gap={3}
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              transition="all 0.2s"
              _hover={{ borderColor: 'grassTeal' }}
            >
              <Box fontSize="24px" color="grassTeal">
                <FaAward />
              </Box>
              <Text fontSize="sm">ISTQB-BCS Certified Tester Foundation Level</Text>
            </Flex>
            <Flex
              align="center"
              gap={3}
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              transition="all 0.2s"
              _hover={{ borderColor: 'grassTeal' }}
            >
              <Box fontSize="24px" color="grassTeal">
                <FaAward />
              </Box>
              <Text fontSize="sm">AWS Solutions Architect Associate Certified</Text>
            </Flex>
          </Flex>
        </Box>

        <Box>
          <SectionTitle>Education</SectionTitle>
          <Flex direction="column" gap={3}>
            <EducationEntry
              degree="MSc Mathematics and Computer Science"
              institution="University of Leeds"
              period="2016 - 2017"
            >
              <Text fontSize="xs" fontWeight="medium" mb={1}>Dissertation</Text>
              <Text fontSize="xs" color="gray.500" mb={2}>
                Synchronisation of Two (or more) Chaotic Oscillators
              </Text>
              <Text fontSize="xs" fontWeight="medium" mb={1}>Modules</Text>
              <Text fontSize="xs" color="gray.500" mb={2}>
                Advanced Dynamical Systems, Advanced Mathematical Biology, Scientific Computation, Algorithms, Fluid Dynamics, Advanced Linear and Non-Linear Waves
              </Text>
              <Text fontSize="xs" fontWeight="medium" mb={1}>Activities</Text>
              <Text fontSize="xs" color="gray.500">
                Kickboxing and Krav Maga Society
              </Text>
            </EducationEntry>
            <EducationEntry
              degree="BSc (Hons) Mathematics"
              institution="Manchester Metropolitan University"
              period="2012 - 2015"
            >
              <Text fontSize="xs" fontWeight="medium" mb={1}>Dissertation</Text>
              <Text fontSize="xs" color="gray.500" mb={2}>
                Mathematics in Forensic Science
              </Text>
              <Text fontSize="xs" fontWeight="medium" mb={1}>Year 1 Modules</Text>
              <Text fontSize="xs" color="gray.500" mb={2}>
                Decision Mathematics, Linear Algebra and Programming Skills, Probability Theory and Statistics, Mathematics Fundamentals
              </Text>
              <Text fontSize="xs" fontWeight="medium" mb={1}>Year 2 Modules</Text>
              <Text fontSize="xs" color="gray.500" mb={2}>
                Mathematical Methods, Numerical Methods and Modelling, Statistics and Financial Mathematics, Mathematics of Computer Graphics and Virtual Environment
              </Text>
              <Text fontSize="xs" fontWeight="medium" mb={1}>Year 3 Modules</Text>
              <Text fontSize="xs" color="gray.500" mb={2}>
                Computational Methods in Ordinary Differential Equations, Dynamical Systems and Chaos Theory, Numerical Methods for Partial Differential Equations
              </Text>
              <Text fontSize="xs" fontWeight="medium" mb={1}>Activities</Text>
              <Text fontSize="xs" color="gray.500">
                Basketball
              </Text>
            </EducationEntry>
          </Flex>
        </Box>
      </SimpleGrid>

      <Box
        position="absolute"
        bottom="-40px"
        left="50%"
        transform="translateX(-50%)"
      >
        <Box
          as="button"
          aria-label="Scroll to contacts"
          onClick={() => scrollTo('contacts')}
          bg="transparent"
          border="none"
          cursor="pointer"
          p={0}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ opacity: 0.4 }}
          >
            <FaChevronDown size={20} />
          </motion.div>
        </Box>
      </Box>
    </Box>
  )
}

export default ExperienceSection
