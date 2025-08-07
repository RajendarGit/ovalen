import { FC, ReactNode } from "react";

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

const Container: FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
