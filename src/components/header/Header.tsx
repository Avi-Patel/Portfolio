import Link from "next/link";
import { useState, useCallback } from "react";

import { Box } from "@sprinklrjs/spaceweb/box";
import { BaseButton } from "@sprinklrjs/spaceweb/base-button";
import { IconButton } from "@sprinklrjs/spaceweb/button";
import { StatefulTooltip } from "@sprinklrjs/spaceweb/tooltip";
import { SocialMediaLinks } from "../SocialMediaLinks";

import { useIsMobileDevice } from "@sprinklrjs/spaceweb/hooks/useIsMobileDevice";

import { IoReorderThree } from "react-icons/io5";

import { IconProps } from "@sprinklrjs/spaceweb/icon";
import { ReactNode } from "react";

const NAVIGATION_BUTTON_CLASSNAMES =
  "typography-h4 font-bold spr-text-05 duration-100";

const NAVIGATION_BUTTON_STYLE = {
  ":hover": {
    color: "#EAB308",
  },
};

const QuickLinkButton = ({
  link,
  tooltip,
  color,
  Icon,
}: {
  link: string;
  tooltip: string;
  color?: string;
  Icon: (props: IconProps) => ReactNode;
}) => (
  <StatefulTooltip content={tooltip}>
    <a href={link} rel="noopener noreferrer" target="_blank">
      <BaseButton className="flex items-center gap-1">
        <Icon size={22} style={color ? { fill: color } : undefined} />
      </BaseButton>
    </a>
  </StatefulTooltip>
);

export const Header = () => {
  const isMobileDevice = useIsMobileDevice();

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleHeader = useCallback(
    () => setIsExpanded((prev) => !prev),
    []
  );

  return (
    <Box
      className={`flex ${
        isMobileDevice ? "flex-col py-6" : "py-3"
      } items-center justify-between px-12 gap-4`}
    >
      <Box
        className={`flex items-center justify-between gap-12 ${
          isMobileDevice ? "w-full" : ""
        }`}
      >
        <Box
          className="flex items-center justify-center w-16 h-12 font-bold duration-300 typography-h2 rounded-12"
          style={{
            color: "#EAB308",
            boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.2)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            ":hover": {
              boxShadow: "none",
              backgroundColor: "transparent",
            },
          }}
        >
          <Box style={{ transform: "rotate(-30deg)", marginRight: "2px" }}>
            A
          </Box>
          <Box
            style={{
              transform: "rotate(35deg)",
              marginTop: "3px",
            }}
          >
            P
          </Box>
        </Box>

        {isMobileDevice ? (
          <IconButton
            onClick={handleToggleHeader}
            tooltipContent="Menu"
            className={isExpanded ? "spr-ui-01" : "spr-ui-03"}
          >
            <IoReorderThree style={{ height: 16, width: 16 }} />
          </IconButton>
        ) : null}
      </Box>

      {isExpanded || !isMobileDevice ? (
        <Box
          className={`flex ${isMobileDevice ? "flex-col" : ""} items-center ${
            isMobileDevice ? "gap-4" : "gap-12"
          }`}
        >
          <Link href="/" style={{ textDecorationLine: "none" }}>
            <Box
              className={NAVIGATION_BUTTON_CLASSNAMES}
              style={NAVIGATION_BUTTON_STYLE}
            >
              Home
            </Box>
          </Link>
          <Link href="/about-me" style={{ textDecorationLine: "none" }}>
            <Box
              className={NAVIGATION_BUTTON_CLASSNAMES}
              style={NAVIGATION_BUTTON_STYLE}
            >
              About Me
            </Box>
          </Link>
          <Link href="/my-experience" style={{ textDecorationLine: "none" }}>
            <Box
              className={NAVIGATION_BUTTON_CLASSNAMES}
              style={NAVIGATION_BUTTON_STYLE}
            >
              Experience
            </Box>
          </Link>
        </Box>
      ) : null}

      {!isMobileDevice ? <SocialMediaLinks /> : null}
    </Box>
  );
};
