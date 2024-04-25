import Image from "next/image";
import Link from "next/link";

import { Layout } from "../components/layout";
import { Box } from "@sprinklrjs/spaceweb/box";
import { Typography } from "@sprinklrjs/spaceweb/typography";
import { Button } from "@sprinklrjs/spaceweb/button";

import { useIsMobileDevice } from "@sprinklrjs/spaceweb/hooks/useIsMobileDevice";

import { getYears } from "../utils/getYears";

import { yellowColor } from "@/constants/colors";

const TITLE = "I'm Avi Patel";
const SUB_TITLE = "Product Engineer @";

const expInYears = getYears("01 Jan 2021");
const intro = `I work as a Frontend Developer. With over ${expInYears} Years of experience, my
          portfolio includes expertise in Frontend technology stack like:`;

const TechButton = ({ name }: { name: string }) => (
  <Button
    variant="secondary"
    size="xxxs"
    className="px-4 cursor-auto rounded-8 border-0"
    style={{ backgroundColor: "#EAB308" }}
  >
    {name}
  </Button>
);

export default function Home() {
  const isMobileDevice = useIsMobileDevice();

  return (
    <Layout title="Avi Patel">
      <Box
        className={`flex ${
          isMobileDevice ? "w-full px-8 flex-col" : "w-2/3"
        } items-center h-full justify-evenly py-12 gap-12`}
      >
        <Box
          className={`flex flex-col gap-2 ${
            isMobileDevice ? "items-center" : "flex-1"
          }`}
        >
          <Typography variant="h4" weight="medium" style={{ color: "#EAB308" }}>
            Hello, Welcome
          </Typography>
          <Typography
            variant={isMobileDevice ? "h2" : "h1"}
            weight="bold"
            className="spr-text-05 mt-4"
          >
            {TITLE}
          </Typography>
          <Box className="flex items-center">
            <Typography
              variant={isMobileDevice ? "h3" : "h2"}
              weight="semibold"
              className="spr-text-05"
            >
              {SUB_TITLE}
            </Typography>
            <Link
              href="https://www.sprinklr.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecorationLine: "none" }}
            >
              <Typography
                variant={isMobileDevice ? "h3" : "h2"}
                weight="semibold"
                className="spr-text-05"
                style={{ color: yellowColor }}
              >
                Sprinklr
              </Typography>
            </Link>
          </Box>
          <Typography
            variant="bs1"
            weight="medium"
            className="w-3/4 mt-4 spr-text-05"
          >
            {intro}
          </Typography>

          <Box
            className={`flex flex-wrap gap-4 mt-4 ${
              isMobileDevice ? "justify-center" : "justify-start"
            }`}
          >
            <TechButton name="ReactJs" />
            <TechButton name="NextJs" />
            <TechButton name="Typescript" />
            <TechButton name="GraphQL" />
          </Box>
        </Box>

        <Box className="overflow-hidden flex-1 rounded-8">
          <Image
            src="/Avi-Photo.jpeg"
            width={isMobileDevice ? 250 : 400}
            height={isMobileDevice ? 320 : 550}
            alt="Picture of the author"
            style={{ borderRadius: "8px" }}
          />
        </Box>
      </Box>
    </Layout>
  );
}
