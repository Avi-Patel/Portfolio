import { Button } from "@sprinklrjs/spaceweb/button";

import { useIsMobileDevice } from "@sprinklrjs/spaceweb/hooks/useIsMobileDevice";

import { yellowColor } from "@/constants/colors";

import { ClassName } from "@sprinklrjs/spaceweb";

const HOVER_STYLE = {
  borderLeftColor: yellowColor,
  borderRightColor: yellowColor,
  borderTopColor: yellowColor,
  borderBottomColor: yellowColor,
  backgroundColor: "transparent",
};

const DEFAULT_STYLE = {
  borderLeftColor: "#818192",
  borderRightColor: "#818192",
  borderTopColor: "#818192",
  borderBottomColor: "#818192",
  backgroundColor: "transparent",
};

export const ItemButton = ({
  name,
  selected,
  hasDescription,
  className,
  onClick,
}: {
  name: string;
  selected?: boolean;
  hasDescription?: boolean;
  className?: string;
  onClick?: () => void;
}) => {
  const isMobileDevice = useIsMobileDevice();

  return (
    <Button
      onClick={onClick}
      variant="primary"
      size={isMobileDevice ? "xxxs" : "xs"}
      className={`py-2 px-3 font-500 rounded-12 spr-text-05 border-1 border-solid ${
        isMobileDevice ? "rounded-8" : "rounded-12"
      } ${className ?? ""}`}
      style={{
        cursor: onClick ? "pointer" : "default",
        ...(selected ? HOVER_STYLE : DEFAULT_STYLE),
        ":hover": hasDescription ? HOVER_STYLE : DEFAULT_STYLE,
        ":active": hasDescription ? HOVER_STYLE : DEFAULT_STYLE,
      }}
    >
      {name}
    </Button>
  );
};
