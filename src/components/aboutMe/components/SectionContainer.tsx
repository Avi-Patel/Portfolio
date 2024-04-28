import { ReactNode } from "react";

import { Box } from "@sprinklrjs/spaceweb/box";
import { SectionTitle } from "@/components/aboutMe/components/SectionTitle";

export const SectionContainer = ({
  title,
  subTitle,
  children,
}: {
  title: string;
  subTitle?: string;
  children: ReactNode;
}) => {
  return (
    <Box className="w-full flex flex-col items-start gap-8">
      <SectionTitle title={title} subTitle={subTitle} />
      {children}
    </Box>
  );
};
