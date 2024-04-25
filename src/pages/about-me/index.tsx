import Link from "next/link";

import { Layout } from "@/components/layout";
import { Box } from "@sprinklrjs/spaceweb/box";
import { Typography } from "@sprinklrjs/spaceweb/typography";
import { Button } from "@sprinklrjs/spaceweb/button";
import { SectionTitle } from "@/components/SectionTitle";

import { useIsMobileDevice } from "@sprinklrjs/spaceweb/hooks/useIsMobileDevice";

import { RiGraduationCapFill } from "react-icons/ri";

import { yellowColor } from "../../constants/colors";

const TitleButton = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => (
  <Button
    variant="primary"
    size="xxxs"
    className={[
      "py-2 px-3 rounded-12 font-500 spr-text-05 border-1 border-solid bg-transparent cursor-auto",
      className,
    ]}
    style={{
      borderLeftColor: "#818192",
      borderRightColor: "#818192",
      borderTopColor: "#818192",
      borderBottomColor: "#818192",
      ":hover": {
        borderLeftColor: yellowColor,
        borderRightColor: yellowColor,
        borderTopColor: yellowColor,
        borderBottomColor: yellowColor,
        backgroundColor: "transparent",
      },
      ":active": {
        borderLeftColor: yellowColor,
        borderRightColor: yellowColor,
        borderTopColor: yellowColor,
        borderBottomColor: yellowColor,
        backgroundColor: "transparent",
      },
    }}
  >
    {name}
  </Button>
);

const DecoratedButton = ({ name }: { name: string }) => {
  const isMobileDevice = useIsMobileDevice();

  return (
    <Button
      variant="primary"
      size={isMobileDevice ? "xxxs" : "xs"}
      className={[
        "border-1 border-solid rounded-12 spr-text-05 bg-transparent cursor-auto",
        isMobileDevice ? "font-500 py-2 px-3" : "font-600 py-3 px-4",
      ]}
      style={{
        borderLeftColor: "#818192",
        borderRightColor: "#818192",
        borderTopColor: "#818192",
        borderBottomColor: "#818192",
        ":hover": {
          borderLeftColor: yellowColor,
          borderRightColor: yellowColor,
          borderTopColor: yellowColor,
          borderBottomColor: yellowColor,
          backgroundColor: "#020617",
        },
      }}
    >
      {name}
    </Button>
  );
};

const QuickLink = ({ name, link }: { name: string; link: string }) => (
  <Link
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecorationLine: "none" }}
  >
    <DecoratedButton name={name} />
  </Link>
);

export default function Home() {
  const isMobileDevice = useIsMobileDevice();

  return (
    <Layout title="About Me">
      <Box
        className={`flex flex-col items-start ${
          isMobileDevice ? "w-full p-8" : "w-14/24 py-32"
        }`}
      >
        <Box
          className={`flex flex-col items-center w-full ${
            isMobileDevice ? "gap-12" : "gap-32"
          }`}
        >
          <Box className="w-full flex flex-col items-start gap-8">
            <SectionTitle title="Quick" subTitle=" Intro" />

            <Box className="flex flex-col items-center">
              <Typography
                variant="h4"
                className={`spr-text-05 ${isMobileDevice ? "w-full" : "w-2/3"}`}
              >
                I&apos;m <span style={{ color: yellowColor }}>Avi Patel</span> a
                passionate <span style={{ color: yellowColor }}>Frontend</span>{" "}
                developer. I&apos;ve been navigating the dynamic landscape of
                frontend development for the past several years.
              </Typography>

              <Typography
                variant="h4"
                className={`spr-text-05 mt-6 ${
                  isMobileDevice ? "w-full" : "w-2/3"
                }`}
              >
                Over this period, I&apos;ve been immersed in the ever-evolving
                world of frontend technologies, honing my skills in{" "}
                <span style={{ color: yellowColor }}>Javascript</span>,{" "}
                <span style={{ color: yellowColor }}>ReactJs</span>,{" "}
                <span style={{ color: yellowColor }}>NextJs</span>,{" "}
                <span style={{ color: yellowColor }}>Typescript</span> and{" "}
                <span style={{ color: yellowColor }}>GraphQL</span> to transform
                design concepts into interactive and visually stunning websites
                where I&apos;ve not only mastered the fundamentals but also kept
                pace with the latest trends and technologies...
              </Typography>

              <Typography
                variant="h4"
                className={`spr-text-05 mt-6 ${
                  isMobileDevice ? "w-full" : "w-2/3"
                }`}
              >
                Apart from professional side,I learn finance and investment
                fundamentals. I like to track companies Financial Performances
                and filters out fundamentally strong stocks for investment. I
                actively invest in equities. You can find my equity portfolio{" "}
                <Link href="https://docs.google.com/spreadsheets/d/1WY3d50JvLvVEtyOLNDvjrA7D7dzWpJ3yDj4ogW4Hp4U/edit#gid=0">
                  here.
                </Link>
              </Typography>
            </Box>
          </Box>

          <Box className="w-full flex flex-col items-start gap-8">
            <SectionTitle title="Skills" />
            <Box
              className={`flex justify-center items-center gap-12 ${
                isMobileDevice ? "flex-col" : ""
              }`}
            >
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
                  Languages
                </Typography>
                <Box className="flex flex-wrap justify-center gap-2">
                  <TitleButton name="Javascript" />
                  <TitleButton name="C++" />
                  <TitleButton name="Dart" />
                  <TitleButton name="HTML" />
                </Box>
              </Box>
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
                  Technologies
                </Typography>
                <Box className="flex flex-wrap justify-center gap-2">
                  <TitleButton name="CSS" />
                  <TitleButton name="ReactJs" />
                  <TitleButton name="NextJs" />
                  <TitleButton name="Typescript" />
                  <TitleButton name="Apollo GraphQL" />
                  <TitleButton name="Jest" />
                  <TitleButton name="D3.js" />
                  <TitleButton name="MJML" />
                  <TitleButton name="Apache Velocity" />
                  <TitleButton name="React-i18Next" />
                </Box>
              </Box>
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
                  Tools i use frequently
                </Typography>
                <Box className="flex flex-wrap justify-center gap-2">
                  <TitleButton name="Git" />
                  <TitleButton name="Github" />
                  <TitleButton name="Gitlab" />
                  <TitleButton name="VS Code" />
                  <TitleButton name="Jira" />
                  <TitleButton name="Figma" />
                  <TitleButton name="Storybook" />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className="w-full flex flex-col items-start gap-8">
            <SectionTitle title="Quick" subTitle=" Links" />

            <Box className="w-full flex flex-wrap items-center justify-center gap-4">
              <QuickLink link="https://github.com/Avi-Patel" name="Github" />
              <QuickLink
                link="https://www.linkedin.com/in/avi-patel-3122b115a"
                name="LinkedIn"
              />
              <QuickLink
                link="https://codeforces.com/profile/Joker_11"
                name="Codeforces"
              />
              <QuickLink
                link="https://www.codechef.com/users/apatel_123"
                name="Codechef"
              />
              <QuickLink
                link="https://www.hackerrank.com/G_A_L_A_X_Y"
                name="Hackerrank"
              />
            </Box>
          </Box>

          <Box className="w-full flex flex-col items-start gap-8">
            <SectionTitle title="Education" />

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
          </Box>

          <Box className="w-full flex flex-col items-start gap-8">
            <SectionTitle title="My" subTitle="Hobbies & Interests" />

            <Box className="w-full flex flex-wrap items-center justify-center gap-4">
              <DecoratedButton name="Competitive Programming" />
              <DecoratedButton name="Cricket" />
              <DecoratedButton name="Music" />
              <DecoratedButton name="Traveling" />
              <DecoratedButton name="Investing" />
              <DecoratedButton name="Exploring Financial Market" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
