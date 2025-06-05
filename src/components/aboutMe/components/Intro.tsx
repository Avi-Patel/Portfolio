import Link from "next/link";

import { Box } from "@sprinklrjs/spaceweb/box";
import { Typography } from "@sprinklrjs/spaceweb/typography";

import { useIsMobileDevice } from "@sprinklrjs/spaceweb/hooks/useIsMobileDevice";

import { yellowColor } from "@/constants/colors";

export const Intro = () => {
  const isMobileDevice = useIsMobileDevice();

  return (
    <Box className="flex flex-col items-center">
      <Typography
        variant="h4"
        className={`spr-text-05 ${isMobileDevice ? "w-full" : "w-2/3"}`}
      >
        I&apos;m <span style={{ color: yellowColor }}>Avi Patel</span> a
        passionate <span style={{ color: yellowColor }}>Frontend</span>{" "}
        developer. I&apos;ve been navigating the dynamic landscape of frontend
        development for the past several years.
      </Typography>

      <Typography
        variant="h4"
        className={`spr-text-05 mt-6 ${isMobileDevice ? "w-full" : "w-2/3"}`}
      >
        Over this period, I&apos;ve been immersed in the ever-evolving world of
        frontend technologies, honing my skills in{" "}
        <span style={{ color: yellowColor }}>Javascript</span>,{" "}
        <span style={{ color: yellowColor }}>ReactJs</span>,{" "}
        <span style={{ color: yellowColor }}>NextJs</span>,{" "}
        <span style={{ color: yellowColor }}>Typescript</span> and{" "}
        <span style={{ color: yellowColor }}>GraphQL</span> to transform design
        concepts into interactive and visually stunning websites where I&apos;ve
        not only mastered the fundamentals but also kept pace with the latest
        trends and technologies...
      </Typography>

      <Typography
        variant="h4"
        className={`spr-text-05 mt-6 ${isMobileDevice ? "w-full" : "w-2/3"}`}
      >
        Apart from professional side,I learn finance and investment
        fundamentals. I like to track companies Financial Performances and
        filters out fundamentally strong stocks for investment. I actively
        invest in equities.
      </Typography>
    </Box>
  );
};
