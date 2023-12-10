import { Layout } from "../../components/layout";
import { Box } from "@sprinklrjs/spaceweb/box";
import { Typography } from "@sprinklrjs/spaceweb/typography";
import { Button } from "@sprinklrjs/spaceweb/button";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { TbBrandAdobe } from "react-icons/tb";

import { getYears } from "../../utils/getYears";

const yellowColor = "#EAB308";

const Title = ({ title, subTitle }: { title: string; subTitle?: string }) => (
  <Box className="flex items-center gap-2">
    <Typography variant="h2" style={{ color: yellowColor }}>
      {title}
    </Typography>
    <Typography variant="h2" className="spr-text-05">
      {subTitle}
    </Typography>
  </Box>
);

const TitleButton = ({ name }: { name: string }) => (
  <Button
    variant="primary"
    size="xxxs"
    className="font-500 spr-border-05 spr-text-05 border-1 border-solid bg-transparent cursor-auto"
    style={{
      borderLeftColor: "#818192",
      borderRightColor: "#818192",
      borderTopColor: "#818192",
      borderBottomColor: "#818192",
      ":hover": {
        borderLeftColor: yellowColor,
        borderRightColor: yellowColor,
        borderTopColor: yellowColor,
        borderBottomColor: yellowColor,
        backgroundColor: "transparent",
      },
    }}
  >
    {name}
  </Button>
);

const ExperienceCard = ({
  role,
  company,
  years,
  isCurrent,
  majorProjects,
}: {
  role: string;
  company: string;
  years: string;
  majorProjects: string[];
  isCurrent?: boolean;
}) => (
  <Box
    className="px-6 py-4 rounded-12 w-full"
    style={{
      backgroundColor: "#020617",
      ":hover": {
        boxShadow: "0px 0px 4px rgba(201, 201, 201, 0.5)",
      },
    }}
  >
    <Box className="flex flex-col gap-4">
      <Box className="flex items-center justify-between">
        <Box className="flex items-center">
          <Typography variant="h3" className="spr-text-05">
            {role}
          </Typography>
          <TbBrandAdobe
            style={{
              fill: yellowColor,
              height: 20,
              width: 20,
              marginLeft: "12px",
              marginRight: "12px",
            }}
          />
          <Typography variant="h3" style={{ color: yellowColor }}>
            {company}
          </Typography>
        </Box>
        <Typography
          variant="bs1"
          className="spr-text-05"
          style={{ color: "#AEAEB2" }}
        >
          {`${years} years ${isCurrent ? " - Present" : ""}`}
        </Typography>
      </Box>
      <Box className="flex items-start">
        <Typography variant="h6" weight="medium" className="spr-text-05 mr-4">
          Projects
        </Typography>
        <Box className="flex items-center flex-wrap justify-start gap-x-4 gap-y-2">
          {majorProjects.map((project) => (
            <TitleButton key={project} name={project} />
          ))}
        </Box>
      </Box>
    </Box>
  </Box>
);

const ExperienceConnector = () => (
  <Box className="flex flex-col items-center w-full">
    <Box className="h-4 w-px" style={{ backgroundColor: yellowColor }} />
    <FaRegArrowAltCircleUp
      style={{ fill: yellowColor, height: 14, width: 14 }}
    />
    <Box className="h-4 w-px" style={{ backgroundColor: yellowColor }} />
  </Box>
);

export default function Home() {
  return (
    <Layout title="My Experience">
      <Box className="flex flex-col items-start w-2/3 py-12">
        <Box className="flex flex-col items-center w-full gap-12">
          <Box className="flex flex-col items-start gap-8 w-2/3">
            <Title title="My Experiences" />
            <Box className="flex flex-col items-start">
              <ExperienceCard
                role="Product Engineer"
                company="Sprinklr"
                years={`${getYears("01 Jan 2021")}`}
                majorProjects={[
                  "Research App",
                  "Assets Manager",
                  "Spaceweb Charts",
                  "Reporting",
                  "Filters",
                  "Media Insights",
                  "Surveys",
                ]}
                isCurrent
              />
              <ExperienceConnector />
              <ExperienceCard
                role="Product Engineering Intern"
                company="Sprinklr"
                years="0.5"
                majorProjects={["ToDo App"]}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
