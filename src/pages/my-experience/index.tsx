import { Fragment } from "react";

import { Layout } from "@/components/layout";
import { Box } from "@sprinklrjs/spaceweb/box";
import { Typography } from "@sprinklrjs/spaceweb/typography";
import { ExperienceCard } from "@/components/experienceCard";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

import { useIsMobileDevice } from "@sprinklrjs/spaceweb/hooks/useIsMobileDevice";

import { yellowColor } from "@/constants/colors";
import { experiences } from "@/constants/experience";

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
  const isMobileDevice = useIsMobileDevice();

  return (
    <Layout title="My Experience">
      <Box
        className={`flex flex-col items-start ${
          isMobileDevice ? "w-full p-8" : "w-2/3 py-12"
        }`}
      >
        <Box className="flex flex-col items-center w-full gap-12">
          <Box
            className={`flex flex-col items-start gap-8 ${
              isMobileDevice ? "w-full" : "w-2/3"
            }`}
          >
            <Typography
              variant={isMobileDevice ? "h3" : "h2"}
              style={{ color: yellowColor }}
            >
              My Experiences
            </Typography>
            <Box className="flex flex-col items-start">
              {experiences.map((experience, index) => (
                <Fragment key={experience.role}>
                  {index === 0 ? null : <ExperienceConnector />}
                  <ExperienceCard experience={experience} />
                </Fragment>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
