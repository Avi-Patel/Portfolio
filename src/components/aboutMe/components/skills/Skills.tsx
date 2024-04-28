import { Box } from "@sprinklrjs/spaceweb/box";
import { SkillsCard } from "./components/SkillsCard";

import { useIsMobileDevice } from "@sprinklrjs/spaceweb/hooks/useIsMobileDevice";

import { SKILLS } from "./constants";

export const Skills = () => {
  const isMobileDevice = useIsMobileDevice();

  return (
    <Box
      className={`flex justify-center items-center gap-12 ${
        isMobileDevice ? "flex-col" : ""
      }`}
    >
      {SKILLS.map((skillsInfo) => (
        <SkillsCard key={skillsInfo.title} {...skillsInfo} />
      ))}
    </Box>
  );
};
