import React from "react";
import { TextPageContainer } from "../../elements/molecules/";

export default () => (
  <TextPageContainer>
    <h1>The Science</h1>
    <p>
      Ankkuri is a customisable wellness application providing its users a
      morning routine, delivered through Alexa.<br></br>
      Anyone can use Ankkuri, you just need an Amazon account and access to
      Alexa (through the app or an Alexa enabled device).
    </p>
    <br></br>
    <h5>How does it work?</h5>
    <p>
      After answering a questionnaire based on personal behaviours a custom
      morning routine will be generated. This routine would then be presented to
      the user through an Alexa voice skill, guiding them through each step.
    </p>
    <h5>Why does it work?</h5>
    <p>
      Ankkuri is based on two ideas:
      <ul>
        <li>
          Anchoring - the process of associating a desirable internal response
          with a trigger.
        </li>
        <li>Routine - a sequence of actions regularly followed.</li>
      </ul>
      The Ankkuri quiz asks users a series of questions on activities they
      enjoy, difficult parts of their morning and how their current routine is
      set up. A morning routine is then generated. By finding out about our
      users' likes, Anchoring can be used to collapse negative states of mind.
      In our application Ankurri we want to leverage the idea of anchoring to
      help our users, especially those suffering from mental health issues such
      as anxiety and depression, to start their days in the best possible
      mindset. Account linking to the Ankkuri Alexa Skill allows for the routine
      to be delivered. The generated routine, focusing on the users likes and
      easing their struggles sets them up for a better day.
      <br></br>
      But why a routine? ‘Studies have shown that when you change your morning
      routine to one that is geared towards reducing your levels of stress, it
      can help to decrease your chances for feeling anxious both in the morning,
      as well as later in the day.’ Health Europa. This sounds great but not
      always easy to put into practise. That’s why our Alexa skill, which starts
      when our users do, will prompt to complete the routine and establish the
      positive anchors, making mornings that bit more managebale.
    </p>
  </TextPageContainer>
);
