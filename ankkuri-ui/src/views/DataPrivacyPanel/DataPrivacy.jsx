import React from "react";
import { DataPrivacyWrapper, PolicyContainer } from "./DataPrivacy.style";

export default () => (
  <DataPrivacyWrapper>
    <PolicyContainer>
      <h1>Ankkuri Privacy Statement</h1>
      <p>
        Thank you for signing up to Ankkuri and entrusting us with your morning
        routine! Holding on to your private information is a serious
        responsibility to us and we want to let you know how we handle it.
      </p>
      <h5>The Short Version</h5>
      <p>
        We only collect the information you choose to give us and we process it
        with your consent, or on other leagal basis; we only require the minimum
        amount of personal information that is necessary to fulfill the purpose
        of your interaction with us; we don't sell it to third parties; and we
        only use it as this Privacy Statement describes.If you're visiting us
        from the European Union (EU), European Economic Area (EEA), Switzerland,
        or the United Kingdom (UK), please see our global privacy practices: we
        comply with the EU-US and Swiss-US Privacy Shield Frameworks and we are
        compliant with the General Data Protection Regulation (GDPR). No matter
        where you are, where you live, or what your citizenship is, we provide a
        high standard of privacy protection to all our users around the world,
        regardless of their country of origin or location.{" "}
      </p>

      <p>
        Of course, the short version doesn't tell you everything, so please read
        on for more details!
      </p>
      <div className="detail-wrapper">
        <div>
          <h5>What we collect</h5>
          <p>
            When you sign up we collect the basic information that you give us
            such as your username, email or phone number and your birthdate.
            When filling out our Create Routine form you also provide us with
            details regarding your lifestyle and preferences. Over time, we
            additionally collect data about your usage patterns.
          </p>
        </div>
        <div>
          <h5>What we do with the information</h5>
          <p>
            All the information you are willing to provide us with we use to
            tailor a morning routine that is as accurate and customised to you
            as possible. In order to let the routine change when you change, we
            collect information as you use it to feed back into the algorithm
            and make your day better!
          </p>
        </div>
      </div>
    </PolicyContainer>
  </DataPrivacyWrapper>
);
