import { useState } from "react";

import { Box } from "@sprinklrjs/spaceweb/box";
import { Typography } from "@sprinklrjs/spaceweb/typography";
import { ProjectButton } from "./components/ProjectButton";
import { Header } from "./components/Header";

import { useIsMobileDevice } from "@sprinklrjs/spaceweb/hooks/useIsMobileDevice";

import { Experience, Project } from "./types";

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const [selectedProject, setSelectedProject] = useState<Project | undefined>();
  const { role, company, years, majorProjects, isCurrent } = experience;

  const isMobileDevice = useIsMobileDevice();

  return (
    <Box
      className="px-6 py-4 rounded-12 w-full flex flex-col gap-6"
      style={{
        backgroundColor: "#020617",
        ":hover": {
          boxShadow: "0px 0px 4px rgba(201, 201, 201, 0.5)",
        },
      }}
    >
      <Header
        role={role}
        company={company}
        years={years}
        isCurrent={isCurrent}
      />
      <Box className="flex items-start gap-4">
        <Typography
          variant={isMobileDevice ? "h6" : "h5"}
          weight="medium"
          className="spr-text-05"
        >
          Projects
        </Typography>
        <Box className="flex items-center flex-wrap justify-start gap-2">
          {majorProjects.map((project) => (
            <ProjectButton
              key={project.id}
              name={project.project}
              selected={selectedProject?.id === project.id}
              hasDescription={!!project.description?.length}
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

      <Box className="flex flex-col gap-4">
        {selectedProject?.description?.map((sentence, index) => (
          <Typography
            key={index}
            variant={isMobileDevice ? "body-12" : "body-14"}
            className="spr-text-05"
          >
            {sentence}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};
