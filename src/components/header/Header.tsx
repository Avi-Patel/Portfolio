import Link from "next/link";

import { Box } from "@sprinklrjs/spaceweb/box";
import { BaseButton } from "@sprinklrjs/spaceweb/base-button";
import { StatefulTooltip } from "@sprinklrjs/spaceweb/tooltip";

import EmailCircleIcon from "@sprinklrjs/spaceweb-icons/brand/EmailCircle";
import InstagramClrIcon from "@sprinklrjs/spaceweb-icons/brand/InstagramClr";
import TwitterCircleIcon from "@sprinklrjs/spaceweb-icons/brand/TwitterCircle";
import LinkedinCircleClrIcon from "@sprinklrjs/spaceweb-icons/brand/LinkedinCircleClr";
import YoutubeCircleClrIcon from "@sprinklrjs/spaceweb-icons/brand/YoutubeCircleClr";

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
  return (
    <Box className="flex items-center justify-between px-12 py-3">
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
        <Box style={{ transform: "rotate(-30deg)", marginRight: "2px" }}>A</Box>
        <Box
          style={{
            transform: "rotate(35deg)",
            marginTop: "3px",
          }}
        >
          P
        </Box>
      </Box>

      <Box className="flex items-center gap-12">
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

      <Box className="flex items-center gap-4">
        <QuickLinkButton
          link="mailto:patelavi8995@gmail.com"
          tooltip="e-mail"
          Icon={EmailCircleIcon}
          color="#EAB308"
        />
        <QuickLinkButton
          link="https://www.linkedin.com/in/avipatel11/"
          tooltip="LinkedIn"
          Icon={LinkedinCircleClrIcon}
        />
        <QuickLinkButton
          link="https://www.instagram.com/_avipatel_/"
          tooltip="Instagram"
          Icon={InstagramClrIcon}
        />
        <QuickLinkButton
          link="https://www.youtube.com/channel/UCF8IPjluRSaPJuJpr91kKZw"
          tooltip="Youtube"
          Icon={YoutubeCircleClrIcon}
        />
        <QuickLinkButton
          link="https://twitter.com/AviPatel7383"
          tooltip="Twitter"
          Icon={TwitterCircleIcon}
          color="white"
        />
      </Box>
    </Box>
  );
};
