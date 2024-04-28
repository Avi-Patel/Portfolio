import { useMemo } from "react";

import { Box } from "@sprinklrjs/spaceweb/box";
import { SectionContainer } from "./components/SectionContainer";
import { Intro } from "./components/Intro";
import { Skills } from "./components/skills";
import { QuickLinks } from "./components/QuickLinks";
import { Education } from "./components/Education";
import { Interests } from "./components/Interests";

import { useIsMobileDevice } from "@sprinklrjs/spaceweb/hooks/useIsMobileDevice";

export const AboutMe = () => {
  const isMobileDevice = useIsMobileDevice();

  return (
    <Box
      className={`flex flex-col items-center w-full ${
        isMobileDevice ? "gap-12" : "gap-32"
      }`}
    >
      <SectionContainer title="Quick" subTitle="Intro">
        <Intro />
      </SectionContainer>

      <SectionContainer title="Skills">
        <Skills />
      </SectionContainer>

      <SectionContainer title="Quick" subTitle="Links">
        <QuickLinks />
      </SectionContainer>

      <SectionContainer title="Education">
        <Education />
      </SectionContainer>

      <SectionContainer title="My" subTitle="Hobbies & Interests">
        <Interests />
      </SectionContainer>
    </Box>
  );
};
