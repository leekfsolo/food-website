import React, { FC, useRef } from "react";
import ContentLayout from "../../common/ui/layout/content-layout";
import Content from "./Content";
import Wrapper from "./Wrapper";

const Homepage: FC = () => {
  const leftWrapperRef = useRef(null);
  const rightWrapperRef = useRef(null);

  return (
    <ContentLayout>
      <Content />
      <Wrapper left={leftWrapperRef} right={rightWrapperRef} />
    </ContentLayout>
  );
};

export default Homepage;
