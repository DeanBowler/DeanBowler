import { x } from '@xstyled/styled-components';
import { Section } from '@/components/Section';
import { Tag } from '@/components/Tag';
import Spaced from '@/styled/Spaced';

interface JobExperienceProps {
  employer: string;
  title: string;
  dates: string;
  children?: React.ReactNode;
}

export function JobExperience({ employer, title, dates, children }: JobExperienceProps) {
  return (
    <x.div mb={6} row mx={-2}>
      <x.h3
        col={{ xs: 1, md: 1 / 3 }}
        mt={0}
        px={2}
        fontWeight="normal"
        fontSize={{ xs: 'xl', md: '2xl' }}
      >
        {employer}
        <x.div fontSize={{ xs: 'lg', md: 'xl' }} color="primary">
          {title}
        </x.div>
        <x.div fontSize={{ xs: 'sm', md: 'base' }} opacity="0.75">
          {dates}
        </x.div>
      </x.h3>
      <x.div col={{ xs: 1, md: 2 / 3 }} px={2}>
        {children}
      </x.div>
    </x.div>
  );
}

export function Experience() {
  return (
    <Section>
      <x.div
        row
        justifyContent={{ sm: 'center' }}
        my={3}
        px={3}
        mx="auto"
        maxWidth={10}
        flexDirection="column"
        fontSize="lg"
      >
        <x.h2
          id="experience"
          fontWeight="light"
          fontSize={{ xs: '4xl', lg: '6xl' }}
          color="primary"
          pt={5}
          mb={5}
        >
          Experience
        </x.h2>
        <x.p
          mt={0}
          mb={5}
          borderWidth="0 0 0 5"
          borderStyle="solid"
          borderColor="primary"
          pl={3}
          py={2}
          fontSize={{ xs: 'lg', md: 'xl' }}
        >
          Starting in the murky depths of C/C++ in a codebase roughly ported from Fortran,
          I spent the last decade finding my focus and passion in helping businesses
          create compelling user experiences and interactions.
        </x.p>
        <JobExperience
          employer="Oakbrook Finance"
          title="Senior Frontend Developer"
          dates="2019 - 2021"
        >
          Frontend focused, full stack development of personal loans brochureware, loan
          application frontend/infrastructure as well as internal support and operations
          tooling; built with react, asp.net RESTful APIs and NServiceBus cross-service
          orchestration.
          <x.div my={1}>
            <Spaced mr={2} mt={2}>
              <Tag>React</Tag>
              <Tag>TypeScript</Tag>
              <Tag>Kubernetes</Tag>
              <Tag>C#</Tag>
              <Tag>NServiceBus</Tag>
            </Spaced>
          </x.div>
          <ul>
            <li>
              Championed and directed the creation of an inhouse, thoroughly tested, react
              component library. As well as reducing our code duplication this has enabled
              numerous projects to quickly get off the ground and into production.
            </li>
            <li>
              Lead a frontend “chapter”, a cross-team collective of developers, with the
              purpose of developing and maintaining best practices, patterns and
              technology choices.
            </li>
            <li>
              Introduced usage of TypeScript to the business, running training sessions to
              upskill developers and sell the benefits of static type-checking.
            </li>
            <li>
              Lead UX/UI of internal developer tooling as well as subsequent domain driven
              design and implementation.
            </li>
          </ul>
        </JobExperience>
        <JobExperience
          employer="Ideagen"
          title="Senior Web Developer"
          dates="2016 – 2019"
        >
          Full stack development of a clinical information aggregation portal; consisting
          of SOAP services for interfacing via Patient Administration Systems, RESTful
          APIs to query aggregated data for user interfaces and an Angular front-end
          application featuring a customisable dashboard with customisable widget
          framework.
          <x.div my={1}>
            <Spaced mr={2} mt={2}>
              <Tag>Angular</Tag>
              <Tag>TypeScript</Tag>
              <Tag>C#</Tag>
              <Tag>D3.js</Tag>
              <Tag>Entity Framework</Tag>
            </Spaced>
          </x.div>
          <ul>
            <li>
              Improved development workflow by modernising the client-side build pipeline,
              removing the necessity to store compiled output and frustration of resolving
              conflicts whilst working collaboratively.
            </li>
            <li>
              Mentored student group projects in affiliation with the local university as
              well as continued mentorship on subsequent internships.
            </li>
            <li>
              Took upon the role of scrum master, encouraging positive change around our
              processes as well acting as an agile coach to less experienced members.
            </li>
            <li>
              Utilised the D3.js framework to create bespoke clinical graphs, facilitating
              the digitisation of patient observation recordings.
            </li>
          </ul>
        </JobExperience>
        <JobExperience
          employer="Weatherford International"
          title="Software Engineer"
          dates="2010 - August 2016"
        >
          Maintained and developed robust, secure Web Services for transmission, storage,
          management and online visualisation of vast amounts of geological survey data;
          comprised of an ASP.Net MVC website, RESTful web services, Windows services and
          WPF Windows applications.
          <x.div my={1}>
            <Spaced mr={2} mt={2}>
              <Tag>ASP.NET</Tag>
              <Tag>C#</Tag>
              <Tag>WPF</Tag>
              <Tag>Knockout.js</Tag>
              <Tag>Entity Framework</Tag>
            </Spaced>
          </x.div>
          <ul>
            <li>
              Created a working proof-of-concept for a modern, mobile-friendly, responsive
              re-design of the web portal; lead implementation and UI/UX design to
              actualise this concept in production.
            </li>
            <li>
              Undertook performance analysis of database schema to maintain high
              throughput of services.
            </li>
            <li>
              Performed security analysis, fixing a variety of vulnerabilities within
              inherited legacy code, including Cross Site Request Forgery, Cross Site
              Scripting and SQL Injection.
            </li>
          </ul>
        </JobExperience>
      </x.div>
    </Section>
  );
}
