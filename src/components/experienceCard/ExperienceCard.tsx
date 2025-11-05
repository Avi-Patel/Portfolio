import { useState } from "react";
import useMeasure from "react-use/lib/useMeasure";

import { Box } from "@sprinklrjs/spaceweb/box";
import { Typography } from "@sprinklrjs/spaceweb/typography";
import { ItemButton } from "../ItemButton";
import { Header } from "./components/Header";

import { useIsMobileDevice } from "@sprinklrjs/spaceweb/hooks/useIsMobileDevice";
import { useStyle } from "@sprinklrjs/spaceweb/style";

import { Experience, Project } from "./types";

const ListItem = ({ sentence }: { sentence: string }) => {
  const isMobileDevice = useIsMobileDevice();
  const { theme } = useStyle();

  return (
    <Box className="flex items-start justify-start gap-2">
      <Box className="flex-none flex items-center" style={{ height: "1.8rem" }}>
        <Box
          className="w-1 h-1 rounded-full"
          style={{ backgroundColor: theme.spr.text05 }}
        />
      </Box>
      <Typography
        variant={isMobileDevice ? "body-12" : "body-14"}
        className="spr-text-05"
      >
        {sentence}
      </Typography>
    </Box>
  );
};

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const { role, company, duration, from, to, majorProjects, others, skills } =
    experience;

  const [selectedProject, setSelectedProject] = useState<Project | undefined>(
    majorProjects[0]
  );

  const isMobileDevice = useIsMobileDevice();

  const [ref, { height }] = useMeasure<HTMLElement>();

  return (
    <Box
      className="w-full overflow-hidden rounded-12"
      style={{
        height: height ? `${height}px` : "auto",
        transition: "height 300ms ease",
        backgroundColor: "#020617",
        ":hover": {
          boxShadow: "0px 0px 4px rgba(201, 201, 201, 0.5)",
        },
      }}
    >
      <Box ref={ref} className="w-full">
        <Box className="px-6 py-4 flex flex-col gap-6">
          <Header
            role={role}
            company={company}
            from={from}
            to={to}
            duration={duration}
          />
          <Box className="flex flex-col gap-6">
            <Box className="flex flex-col gap-4">
              <Box className="flex items-start gap-4">
                <Typography
                  variant={isMobileDevice ? "h6" : "h5"}
                  weight="medium"
                  className="spr-text-05 mt-1"
                >
                  Projects
                </Typography>
                <Box className="flex items-center flex-wrap justify-start gap-2">
                  {majorProjects.map((project) => (
                    <ItemButton
                      key={project.id}
                      name={project.project}
                      selected={selectedProject?.id === project.id}
                      onClick={
                        !!project.description?.length
                          ? () =>
                              setSelectedProject((prev) =>
                                prev?.id === project.id ? undefined : project
                              )
                          : undefined
                      }
                    />
                  ))}
                </Box>
              </Box>

              {selectedProject?.description?.map((sentence, index) => (
                <ListItem key={index} sentence={sentence} />
              ))}
            </Box>

            {others?.length ? (
              <Box className="flex flex-col gap-4">
                <Typography
                  variant={isMobileDevice ? "h6" : "h5"}
                  weight="medium"
                  className="spr-text-05 mt-1"
                >
                  Other
                </Typography>

                {others?.map((sentence, index) => (
                  <ListItem key={index} sentence={sentence} />
                ))}
              </Box>
            ) : null}

            {skills?.length ? (
              <Box className="flex items-start gap-4">
                <Typography
                  variant={isMobileDevice ? "h6" : "h5"}
                  weight="medium"
                  className="spr-text-05 mt-1"
                >
                  Skills
                </Typography>
                <Box className="flex items-center flex-wrap justify-start gap-2">
                  {skills.map((skill) => (
                    <ItemButton key={skill} name={skill} />
                  ))}
                </Box>
              </Box>
            ) : null}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
