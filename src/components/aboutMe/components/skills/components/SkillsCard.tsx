import { Box } from "@sprinklrjs/spaceweb/box";
import { Typography } from "@sprinklrjs/spaceweb/typography";
import { ItemButton } from "@/components/ItemButton";

import { useIsMobileDevice } from "@sprinklrjs/spaceweb/hooks/useIsMobileDevice";

export const SkillsCard = ({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) => {
  const isMobileDevice = useIsMobileDevice();

  return (
    <Box
      className={`p-6 gap-4 flex flex-col items-center rounded-12 ${
        isMobileDevice ? "w-full" : "w-1/3"
      }`}
      style={{
        backgroundColor: "#020617",
        ":hover": {
          boxShadow: "0px 0px 4px rgba(234,179,8, 0.5)",
        },
      }}
    >
      <Typography variant="h5" className="spr-text-05">
        {title}
      </Typography>
      <Box className="flex flex-wrap justify-center gap-2">
        {skills.map((skill) => (
          <ItemButton key={skill} name={skill} />
        ))}
      </Box>
    </Box>
  );
};
