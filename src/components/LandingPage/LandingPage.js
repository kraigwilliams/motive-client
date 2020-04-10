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
import dashboard from "./Assets/DASHBOARD.gif";
import comments from "./Assets/COMMENTS.gif";
import connections from "./Assets/CONNECTIONS.gif";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

export default function LandingPage() {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  document.title = "Home - Folkul";
  return (
    <PageWrapper>
      <ContentHeader>
        <div className="header">
          <LandingHeader>Focus your thoughts.</LandingHeader>
          <LandingText>
            Folkul is a space to cultivate ideas that matter. Keep a personal
            record or collaborate with your Connections — the sky's the limit.
          </LandingText>

          <AngleDown
            aria-label="Click to scroll down the page"
            className="bounce"
            style={{ margin: "100px auto", color: colors.white }}
            onClick={executeScroll}
          />
        </div>
      </ContentHeader>

      <ContentSection ref={myRef}>
        <h2>View your dashboard containing Topics and Thoughts.</h2>

        <img src={dashboard} className="img" alt="dashboard-view" />

        <p>
          The Dashboard view shows all of your personal Topics and Thoughts, as
          well as any content that has been shared by one of your Connections.
          This is also where you can create a new Topic or Thought.
        </p>
      </ContentSection>
      <ContentSection
        style={{ backgroundColor: colors.offwhite, color: colors.black }}
      >
        <h2>
          The Thought view is your medium for creating, collaboration and
          sharing.
        </h2>

        <img src={comments} className="img" alt="topic-view" />

        <p>
          Here you can edit your content, share with your Connections and see
          all the comments for a specific Thought.
        </p>
      </ContentSection>
      <ContentSection style={{ backgroundColor: colors.coral }}>
        <h2>Add Connections to your Folkul network.</h2>

        <img src={connections} className="img" alt="add-thought-view" />

        <p>
          Here you can add new Connections and see exisitng ones. Adding
          Connections allows you to share your content for collaboration or
          viewing.{" "}
        </p>
        {TokenService.hasAuthToken() ? (
          ""
        ) : (
          <LandingLink to="/signup">Sign Up Here</LandingLink>
        )}
      </ContentSection>
    </PageWrapper>
  );
}
