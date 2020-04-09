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
            record or collaborate in groups — the sky's the limit.
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
        <h2>View your dashboard containing Topics and Thoughts</h2>

        <img src={dashboard} className="img" alt="dashboard-view" />

        <p>
          Here you can see all topic and thoughts you have created, as well as
          any topics and thoughts that have been shared with you. This is also
          where you can create a new topic or thought.
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
          Edit your content, share with your connections and see all the
          comments for a specific thought.
        </p>
      </ContentSection>
      <ContentSection style={{ backgroundColor: colors.coral }}>
        <h2>Add Connections to your Folkul network</h2>

        <img src={connections} className="img" alt="add-thought-view" />

        <p>
          Here you can add new connections and see existing ones. Adding
          connections allows you to share your content for collaboration or
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
