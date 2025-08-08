import React, { FC } from "react";

type TitleProps = {
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
};

const Title: FC<TitleProps> = ({
  title = "Title goes here",
  description = "",
  align = "text-left",
}) => {
  return (
    <div className={align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left"}>
      <h1 className="text-4xl lg:text-6xl font-semibold">{title}</h1>
      {description && (
        <p className="text-gray-400 text-xl mt-4">{description}</p>
      )}
    </div>
  );
};

export default Title;
