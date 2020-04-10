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
          Topics are the containers for your Thoughts. Thoughts can live within
          a topic or on their own as a Free Thought. The Dashboard view shows
          all of your personal Topics and Thoughts, as well as any content that
          has been shared by one of your Connections.
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
          The title for your Thought, as well as the content can be edited and
          saved. When sharing your Thought with any of your Connections, you
          have the option to choose if they are allowed to collaborate or simply
          view. Anyone connected to the Thought has the ability to leave
          comments.
        </p>
      </ContentSection>
      <ContentSection style={{ backgroundColor: colors.coral }}>
        <h2>Add Connections to your Folkul network.</h2>

        <img src={connections} className="img" alt="add-thought-view" />

        <p>
          This is where you can add new Connections and see existing ones. Once
          a user adds someone else in the Folkul network, they are able to share
          between each other.{" "}
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
