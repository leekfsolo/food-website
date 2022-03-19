import React, { FC } from "react";
import ContentLayout from "../../common/ui/layout/content-layout";
import Background from "./Background";
import Content from "./Content";

const Homepage: FC = () => {
  return (
    <ContentLayout>
      <Content />
      <Background />
    </ContentLayout>
  );
};

export default Homepage;
