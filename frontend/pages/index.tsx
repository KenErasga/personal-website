import Head from 'next/head'
import Image from 'next/image'
import {
  Heading,
  Text,
  Container,
  Box,
  Flex,
  Badge,
  List
} from '@chakra-ui/react'

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

const ExperienceEntry = ({ company, location, role, period, children }) => (
  <Box mb={6}>
    <Heading as="h3" fontSize="md">
      {company}, {location} &mdash; <i>{role}</i>
    </Heading>
    <Text fontSize="sm" color="gray.500" mb={2}>
      {period}
    </Text>
    <List.Root gap={1} ps={4} fontSize="sm">
      {children}
    </List.Root>
  </Box>
)

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Kenneth Erasga - Software Engineer</title>
        <meta
          name="description"
          content="Kenneth Erasga - Full-Stack Software Engineer based in Manchester, UK"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box pt={6}>
        <Flex align="center" gap={5} mb={4}>
          <Image
            src="/Me2.jpg"
            alt="Kenneth Erasga"
            width={100}
            height={100}
            style={{ borderRadius: '50%', objectFit: 'cover' }}
            priority
          />
          <Box>
            <Heading as="h1" fontSize="3xl">
              Kenneth Erasga
            </Heading>
            <Text fontSize="md" color="gray.500">
              Software Engineer &middot; Manchester, UK
            </Text>
          </Box>
        </Flex>
        <Text mb={4}>
          I build because I love solving problems and making things better.
        </Text>
                <Text mb={4}>
          Software Engineer with a strong focus on backend development,
          particularly in Node.js and TypeScript. Experienced across multiple
          cross-functional teams using Scrum and Agile practices. Comfortable
          working across microservices, cloud infrastructure, and frontend
          frameworks, with a consistent focus on clean architecture, testing, and
          shipping reliable solutions.
        </Text>
      </Box>

      <Box pt={4}>
        <SectionTitle>Core Tech</SectionTitle>
        <Flex flexWrap="wrap" gap={2} mb={6}>
          {[
            'JavaScript',
            'TypeScript',
            'Python',
            'Node.js',
            'NestJS',
            'Next.js',
            'React.js',
            'AWS',
            'Docker',
            'CucumberJS'
          ].map(tech => (
            <Badge key={tech} colorPalette="teal" px={2} py={1} fontSize="sm">
              {tech}
            </Badge>
          ))}
        </Flex>
      </Box>

      <Box pt={4}>
        <SectionTitle>Qualifications</SectionTitle>
        <List.Root gap={1} ps={4} mb={6}>
          <List.Item>ISTQB-BCS Certified Tester Foundation Level</List.Item>
          <List.Item>AWS Solutions Architect Associate Certified</List.Item>
        </List.Root>
      </Box>

      <Box pt={4}>
        <SectionTitle>Education</SectionTitle>
        <Box mb={4}>
          <Heading as="h3" fontSize="md">
            University of Leeds &mdash; <i>MSc Mathematics and Computer Science</i>
          </Heading>
          <Text fontSize="sm" color="gray.500">
            September 2016 - December 2017
          </Text>
        </Box>
        <Box mb={4}>
          <Heading as="h3" fontSize="md">
            Manchester Metropolitan University &mdash;{' '}
            <i>BSc (Hons) Mathematics</i>
          </Heading>
          <Text fontSize="sm" color="gray.500">
            September 2012 - July 2015
          </Text>
        </Box>
      </Box>

      <Box pt={4}>
        <SectionTitle>Experience</SectionTitle>

        <ExperienceEntry
          company="UrbanChain"
          location="Manchester"
          role="Software Engineer"
          period="November 2023 - Present"
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

        <ExperienceEntry
          company="Mission Labs"
          location="Manchester"
          role="Software Engineer"
          period="April 2023 - November 2023"
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

        <ExperienceEntry
          company="Raytheon UK"
          location="Manchester"
          role="Software Engineer"
          period="April 2020 - April 2023"
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

        <ExperienceEntry
          company="Qualitest Group"
          location="Preston"
          role="Software Engineer in Test"
          period="January 2018 - March 2020"
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
      </Box>
    </Container>
  )
}

export default Home
