import React, { FC, useRef } from "react";
import ContentLayout from "../../common/ui/layout/content-layout";
import Background from "./Background";
import Content from "./Content";
import Wrapper from "./Wrapper";

const Homepage: FC = () => {
  const leftWrapperRef = useRef(null);
  const rightWrapperRef = useRef(null);

  return (
    <ContentLayout>
      <Background />
      <Content />
      <Wrapper left={leftWrapperRef} right={rightWrapperRef} />
    </ContentLayout>
  );
};

export default Homepage;
