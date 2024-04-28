import { useMemo } from "react";

import { Box } from "@sprinklrjs/spaceweb/box";
import { ItemButton } from "@/components/ItemButton";

import { useIsMobileDevice } from "@sprinklrjs/spaceweb/hooks/useIsMobileDevice";

const INTERESTS = [
  "Competitive Programming",
  "Cricket",
  "Traveling",
  "Investing",
  "Exploring Financial Market",
];

export const Interests = () => {
  const isMobileDevice = useIsMobileDevice();

  const largeButtonClassName = useMemo(
    () => (isMobileDevice ? "font-500 py-2 px-3" : "font-600 py-3 px-4"),
    [isMobileDevice]
  );

  return (
    <Box className="w-full flex flex-wrap items-center justify-center gap-4">
      {INTERESTS.map((interest) => (
        <ItemButton
          key={interest}
          name={interest}
          className={largeButtonClassName}
        />
      ))}
    </Box>
  );
};
