import { useMemo } from "react";

import Link from "next/link";

import { Box } from "@sprinklrjs/spaceweb/box";
import { ItemButton } from "@/components/ItemButton";

import { useIsMobileDevice } from "@sprinklrjs/spaceweb/hooks/useIsMobileDevice";

const LINKS = [
  { name: "Github", link: "https://github.com/Avi-Patel" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/avi-patel-3122b115a" },
  { name: "Codeforces", link: "https://codeforces.com/profile/Joker_11" },
  { name: "Codechef", link: "https://www.codechef.com/users/apatel_123" },
  { name: "Hackerrank", link: "https://www.hackerrank.com/G_A_L_A_X_Y" },
];

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
    <ItemButton name={name} className={className} onClick={() => null} />
  </Link>
);

export const QuickLinks = () => {
  const isMobileDevice = useIsMobileDevice();

  const largeButtonClassName = useMemo(
    () => (isMobileDevice ? "font-500 py-2 px-3" : "font-600 py-3 px-4"),
    [isMobileDevice]
  );

  return (
    <Box className="w-full flex flex-wrap items-center justify-center gap-4">
      {LINKS.map((link) => (
        <QuickLink key={link.name} {...link} className={largeButtonClassName} />
      ))}
    </Box>
  );
};
