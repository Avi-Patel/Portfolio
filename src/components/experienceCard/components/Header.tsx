import { Box } from "@sprinklrjs/spaceweb/box";
import { Typography } from "@sprinklrjs/spaceweb/typography";
import { TbBrandAdobe } from "react-icons/tb";

import { useIsMobileDevice } from "@sprinklrjs/spaceweb/hooks/useIsMobileDevice";

import { yellowColor } from "../../../constants/colors";

export const Header = ({
  role,
  company,
  from,
  to,
  duration,
}: {
  role: string;
  company: string;
  from: string;
  to: string;
  duration: string;
}) => {
  const isMobileDevice = useIsMobileDevice();

  return isMobileDevice ? (
    <Box className="w-full flex flex-col items-start justify-between gap-4">
      <Box className="w-full flex items-start">
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
        <Box className="flex flex-col items-end">
          <Typography
            variant="bs1"
            className="spr-text-05"
            style={{ color: "#AEAEB2" }}
          >
            {`${from} - ${to}`}
          </Typography>
          <Typography
            variant="bs2"
            className="spr-text-05 italic"
            style={{ color: "#AEAEB2" }}
          >
            {duration}
          </Typography>
        </Box>
      </Box>

      <Typography variant="h5" className="spr-text-05">
        {role}
      </Typography>
    </Box>
  ) : (
    <Box className="flex items-start justify-between gap-4">
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

      <Box className="flex flex-col items-end">
        <Typography
          variant="bs1"
          className="spr-text-05"
          style={{ color: "#AEAEB2" }}
        >
          {`${from} - ${to}`}
        </Typography>
        <Typography
          variant="bs2"
          className="spr-text-05 italic"
          style={{ color: "#AEAEB2" }}
        >
          {duration}
        </Typography>
      </Box>
    </Box>
  );
};
