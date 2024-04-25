import { Box } from "@sprinklrjs/spaceweb/box";
import { Typography } from "@sprinklrjs/spaceweb/typography";
import { TbBrandAdobe } from "react-icons/tb";

import { useIsMobileDevice } from "@sprinklrjs/spaceweb/hooks/useIsMobileDevice";

import { yellowColor } from "../../../constants/colors";

export const Header = ({
  role,
  company,
  years,
  isCurrent,
}: {
  role: string;
  company: string;
  years: string;
  isCurrent?: boolean;
}) => {
  const isMobileDevice = useIsMobileDevice();

  return !isMobileDevice ? (
    <Box className="flex items-center justify-between gap-4">
      <Box className="flex items-start">
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
  ) : (
    <Box className="w-full flex flex-col items-start justify-between gap-4">
      <Box className="w-full flex items-center">
        <TbBrandAdobe
          style={{
            fill: yellowColor,
            height: 20,
            width: 20,
            marginRight: "12px",
          }}
        />
        <Typography
          variant="h5"
          style={{ color: yellowColor }}
          className="flex-1"
        >
          {company}
        </Typography>
        <Typography
          variant="bs1"
          className="spr-text-05"
          style={{ color: "#AEAEB2" }}
        >
          {`${years} years ${isCurrent ? " - Present" : ""}`}
        </Typography>
      </Box>

      <Typography variant="h5" className="spr-text-05">
        {role}
      </Typography>
    </Box>
  );
};
