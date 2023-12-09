import { ReactNode } from "react";
import Head from "next/head";

import { Box } from "@sprinklrjs/spaceweb/box";
import { Header } from "../header";

import { useStickyElement } from "../../hooks/useStickyElement";

import { styled } from "@sprinklrjs/spaceweb/style";

const StyledBody = styled("main");

export const Layout = ({
  title,
  children,
}: {
  title?: string;
  children?: ReactNode;
}) => {
  const { isSticky, setStickySentinelRef } = useStickyElement();

  return (
    <Box className="z-0 spr-text-01 spr-ui-01">
      {title ? (
        <Head>
          <title>{title}</title>
        </Head>
      ) : null}
      <Box
        className="relative flex flex-col w-full h-screen overflow-y-auto"
        style={{ backgroundColor: "#111827" }}
      >
        <div ref={setStickySentinelRef} />
        <Box
          className={[
            "sticky top-0 z-10",
            {
              backgroundColor: "#020617",
              boxShadow: isSticky
                ? "0px 2px 10px rgba(201, 201, 201, 0.5)"
                : "none",
            },
          ]}
        >
          <Header />
        </Box>
        <StyledBody className="w-full flex justify-center flex-1">
          {children}
        </StyledBody>
      </Box>
    </Box>
  );
};
