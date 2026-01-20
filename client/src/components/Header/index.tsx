import { cn } from "@/src/lib/utils";
import React, { ReactNode } from "react";

type Props = {
  name: string;
  buttonComponent?: ReactNode;
  isSmallText?: boolean;
};

const Header = ({ name, buttonComponent, isSmallText = false }: Props) => {
  return (
    <div className="mb-5 flex w-full items-center justify-between">
      <h1
        className={cn("text-2xl font-semibold dark:text-white", {
          "text-lg": isSmallText,
        })}
      >
        {name}
      </h1>
      {buttonComponent}
    </div>
  );
};

export default Header;
