import React, { FC, ReactNode } from "react";
import MainLayout from "../main-layout";

interface Props {
  children: ReactNode;
}

const ContentLayout: FC<Props> = (props: Props) => {
  return (
    <>
      <MainLayout />
      {props.children}
    </>
  );
};

export default ContentLayout;
