import { Box } from "@sprinklrjs/spaceweb/box";
import { Typography } from "@sprinklrjs/spaceweb/typography";

import { useIsMobileDevice } from "@sprinklrjs/spaceweb/hooks/useIsMobileDevice";

import { yellowColor } from "@/constants/colors";

export const SectionTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle?: string;
}) => {
  const isMobileDevice = useIsMobileDevice();

  return (
    <Box className="flex items-center gap-2">
      <Typography
        variant={isMobileDevice ? "h3" : "h2"}
        style={{ color: yellowColor }}
      >
        {title}
      </Typography>
      <Typography
        variant={isMobileDevice ? "h3" : "h2"}
        className="spr-text-05"
      >
        {subTitle}
      </Typography>
    </Box>
  );
};
