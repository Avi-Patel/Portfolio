import { Box } from "@sprinklrjs/spaceweb/box";
import { BaseButton } from "@sprinklrjs/spaceweb/base-button";
import { StatefulTooltip } from "@sprinklrjs/spaceweb/tooltip";

import { ImMail4 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

import { IconType } from "react-icons";

const QuickLinkButton = ({
  link,
  tooltip,
  color,
  Icon,
}: {
  link: string;
  tooltip: string;
  color?: string;
  Icon: IconType;
}) => (
  <StatefulTooltip content={tooltip}>
    <a href={link} rel="noopener noreferrer" target="_blank">
      <BaseButton className="flex items-center gap-1">
        <Icon size={22} style={color ? { fill: color } : undefined} />
      </BaseButton>
    </a>
  </StatefulTooltip>
);

export const SocialMediaLinks = () => (
  <Box className="flex items-center gap-4">
    <QuickLinkButton
      link="mailto:patelavi8995@gmail.com"
      tooltip="e-mail"
      Icon={ImMail4}
      color="#EAB308"
    />
    <QuickLinkButton
      link="https://www.linkedin.com/in/avipatel11/"
      tooltip="LinkedIn"
      Icon={FaLinkedin}
      color="#0082ca"
    />
    <QuickLinkButton
      link="https://www.youtube.com/channel/UCF8IPjluRSaPJuJpr91kKZw"
      tooltip="Youtube"
      Icon={IoLogoYoutube}
      color="#ed302f"
    />
    <QuickLinkButton
      link="https://twitter.com/AviPatel7383"
      tooltip="Twitter"
      Icon={FaXTwitter}
      color="white"
    />
  </Box>
);
