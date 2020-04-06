import React, { useRef } from "react";
import TokenService from "../../services/token-service";
import {
  PageWrapper,
  LandingHeader,
  ContentHeader,
  LandingText,
  LandingLink,
  ContentSection,
} from "./LandingPage.style";
import { colors } from "../constants";
import { AngleDown } from "../Button/Button";
import dashboard from "./Assets/dashboard.png";
import topic from "./Assets/topic.png";
import add from "./Assets/add.png";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

export default function LandingPage() {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <PageWrapper>
      <ContentHeader>
        <div className="header">
          <LandingHeader>Focus your thoughts.</LandingHeader>
          <LandingText>
            Folkul is a space to cultivate ideas that matter. Keep a personal
            record or collaborate in groups — the sky's the limit.
          </LandingText>

          <AngleDown
            className="bounce"
            style={{ margin: "100px auto", color: colors.white }}
            onClick={executeScroll}
          />
        </div>
      </ContentHeader>

      <ContentSection ref={myRef}>
        <h3>View your dashboard containing Topics and Thoughts</h3>
        <img src={dashboard} className="img" alt="dashboard-view" />
      </ContentSection>
      <ContentSection style={{ backgroundColor: colors.offwhite }}>
        <h3>Store all your Thoughts inside each Topic</h3>
        <img src={topic} className="img" alt="topic-view" />
      </ContentSection>
      <ContentSection style={{ backgroundColor: colors.coral }}>
        <h3>Add as many Thoughts as you can imagine!</h3>
        <img src={add} className="img" alt="add-thought-view" />
        {TokenService.hasAuthToken() ? (
          ""
        ) : (
          <LandingLink to="/signup">Sign Up Here</LandingLink>
        )}
      </ContentSection>
    </PageWrapper>
  );
}
