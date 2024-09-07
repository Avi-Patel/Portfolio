import { Box } from "@sprinklrjs/spaceweb/box";
import { Layout } from "@/components/layout";
import { AboutMe } from "@/components/aboutMe";

import { useIsMobileDevice } from "@sprinklrjs/spaceweb/hooks/useIsMobileDevice";

export default function Home() {
  const isMobileDevice = useIsMobileDevice();

  return (
    <Layout title="About Me">
      <Box
        className={`flex flex-col items-start ${
          isMobileDevice ? "w-full p-8" : "w-14/24 py-32"
        }`}
      >
        <AboutMe />
      </Box>
    </Layout>
  );
}
