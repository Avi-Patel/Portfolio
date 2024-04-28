import { Box } from "@sprinklrjs/spaceweb/box";
import { Typography } from "@sprinklrjs/spaceweb/typography";

import { useIsMobileDevice } from "@sprinklrjs/spaceweb/hooks/useIsMobileDevice";

import { RiGraduationCapFill } from "react-icons/ri";

import { yellowColor } from "@/constants/colors";

export const Education = () => {
  const isMobileDevice = useIsMobileDevice();

  return (
    <Box
      className="px-6 py-4 rounded-12 w-full"
      style={{
        backgroundColor: "#020617",
        ":hover": {
          boxShadow: "0px 0px 4px rgba(234,179,8, 0.5)",
        },
      }}
    >
      <Box className="flex flex-col gap-4">
        <Box className="flex flex-col items-start gap-2">
          <Box className="flex items-center">
            <Typography
              variant={isMobileDevice ? "h4" : "h3"}
              className="spr-text-05"
            >
              Information And Communication Technology
            </Typography>
            <RiGraduationCapFill
              style={{
                fill: yellowColor,
                height: 14,
                width: 14,
                marginLeft: "12px",
                marginRight: "12px",
              }}
            />
            <Typography
              variant={isMobileDevice ? "h4" : "h3"}
              style={{ color: yellowColor }}
            >
              DAIICT
            </Typography>
          </Box>
          <Typography
            variant={isMobileDevice ? "h6" : "h5"}
            weight="medium"
            className="spr-text-05"
          >
            Bachelor of Technology
          </Typography>
          <Typography
            variant={isMobileDevice ? "bs2" : "bs1"}
            className="spr-text-05"
            style={{ color: "#AEAEB2" }}
          >
            2017-2021
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
