import { useMemo } from "react";

import Link from "next/link";

import { Box } from "@sprinklrjs/spaceweb/box";
import { Typography } from "@sprinklrjs/spaceweb/typography";
import { Layout } from "@/components/layout";
import { SectionTitle } from "@/components/aboutMe/components/SectionTitle";
import { ItemButton } from "@/components/ItemButton";
import { AboutMe } from "@/components/aboutMe";

import { useIsMobileDevice } from "@sprinklrjs/spaceweb/hooks/useIsMobileDevice";

import { RiGraduationCapFill } from "react-icons/ri";

import { yellowColor } from "@/constants/colors";

const QuickLink = ({
  name,
  link,
  className,
}: {
  name: string;
  link: string;
  className?: string;
}) => (
  <Link
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecorationLine: "none" }}
  >
    <ItemButton name={name} className={className} />
  </Link>
);

export default function Home() {
  const isMobileDevice = useIsMobileDevice();

  return (
    <Layout title="About Me">
      <Box
        className={`flex flex-col items-start ${
          isMobileDevice ? "w-full p-8" : "w-14/24 py-32"
        }`}
      >
        <AboutMe />
      </Box>
    </Layout>
  );
}
