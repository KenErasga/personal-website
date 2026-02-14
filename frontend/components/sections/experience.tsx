import { useState } from 'react'
import {
  Heading,
  Text,
  Box,
  List,
  Flex,
  Badge,
  SimpleGrid,
  Icon
} from '@chakra-ui/react'
import { motion } from 'motion/react'
import { FaChevronDown, FaChevronUp, FaAward, FaGraduationCap } from 'react-icons/fa'

const SectionTitle = ({ children }) => (
  <Heading
    as="h2"
    fontSize="xl"
    textDecoration="underline"
    textUnderlineOffset="6px"
    textDecorationColor="#525252"
    textDecorationThickness="4px"
    mb={4}
  >
    {children}
  </Heading>
)

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
        onClick={() => setExpanded(!expanded)}
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
            tech={['NestJS', 'MongoDB', 'AWS Fargate', 'Lambda', 'Next.js', 'Cypress', 'Jest']}
          >
            <List.Item>
              Work across a suite of Node.js microservices running on AWS Fargate
              and Lambda, using NestJS and MongoDB to handle energy data like
              half-hourly consumption, line loss factors, and matching between
              generators and consumers.
            </List.Item>
            <List.Item>
              Support frontend teams with Next.js applications and maintain a
              legacy Angular app used for billing and generating CSV/PDF energy
              invoices. Gradually migrating this legacy system into a modern
              Next.js stack.
            </List.Item>
            <List.Item>
              Heavily involved in testing (Cypress for BDD and Jest for TDD) and
              contribute to architectural decisions across the platform.
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
            tech={['Node.js', 'AWS EKS', 'DynamoDB', 'DocumentDB', 'S3', 'OpenSearch', 'Cypress']}
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
              Helped shape the automation testing strategy using Cypress and GitLab
              pipelines, and used Jest and CucumberJS for testing.
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
            tech={['React', 'Node.js', 'AWS', 'Terraform', 'Cypress', 'Jest', 'Docker']}
          >
            <List.Item>
              Built frontend apps with React, Material-UI, and Gatsby, and set up
              BDD testing with Cucumber and Cypress.
            </List.Item>
            <List.Item>
              Developed Node.js services with Express and Jest for unit testing.
            </List.Item>
            <List.Item>
              Worked extensively with AWS (ECS Fargate, ECR, Cognito, Lambda,
              DocumentDB, DynamoDB, EKS) and Terraform for provisioning. Automated
              deployments through Concourse CI and GitLab CI/CD.
            </List.Item>
            <List.Item>
              Mentored junior developers and regularly pair-programmed across the
              team.
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
            <Flex
              align="flex-start"
              gap={3}
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              transition="all 0.2s"
              _hover={{ borderColor: 'grassTeal' }}
            >
              <Box fontSize="24px" color="grassTeal" mt={0.5}>
                <FaGraduationCap />
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="semibold">
                  MSc Mathematics and Computer Science
                </Text>
                <Text fontSize="xs" color="gray.500">
                  University of Leeds &middot; 2016 - 2017
                </Text>
              </Box>
            </Flex>
            <Flex
              align="flex-start"
              gap={3}
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              transition="all 0.2s"
              _hover={{ borderColor: 'grassTeal' }}
            >
              <Box fontSize="24px" color="grassTeal" mt={0.5}>
                <FaGraduationCap />
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="semibold">
                  BSc (Hons) Mathematics
                </Text>
                <Text fontSize="xs" color="gray.500">
                  Manchester Metropolitan University &middot; 2012 - 2015
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </SimpleGrid>

      <Box
        position="absolute"
        bottom="-40px"
        left="50%"
        transform="translateX(-50%)"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ cursor: 'pointer', opacity: 0.4 }}
          onClick={() => scrollTo('contacts')}
        >
          <FaChevronDown size={20} />
        </motion.div>
      </Box>
    </Box>
  )
}

export default ExperienceSection
