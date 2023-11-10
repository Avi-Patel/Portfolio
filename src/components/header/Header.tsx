import { ReactElement } from "react";
import Link from "next/link";

import { Box } from "@sprinklrjs/spaceweb/box";
import { Image } from "@sprinklrjs/spaceweb/image";
import { BaseButton } from "@sprinklrjs/spaceweb/base-button";
import { Typography } from "@sprinklrjs/spaceweb/typography";
import { Info } from "@/components/info";

import { LOGO_LINK } from "@/constants";

export const Header = (): ReactElement => (
  <Box className="flex items-center justify-between px-6 py-3">
    <Box className="flex items-center gap-3">
      <Link href="/">
        <Image src={LOGO_LINK} alt="smit hydraulics" height={42} width={78} />
      </Link>
      <Typography variant="h3" weight="bold">
        Smit Hydraulics
      </Typography>
    </Box>
    <Info />
  </Box>
);
