import React from "react";
import { Wrapper, Text } from "./Contact.styles";

function MailtTo({ email, subject, body, ...props }) {
  return (
    <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
      {props.children}
    </a>
  );
}
const Contact = () => {
  return (
    <Wrapper>

      <Text>
      <br /> <br />
      <br />
        <MailtTo
          email="hi@nassykova"
          subject="Hey Nassy"
          body="Hey Nassy, this is me!"
        >
          Mail me
        </MailtTo>
        <br />

        <a
          href="https://www.linkedin.com/in/nassykova/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </Text>
    </Wrapper>
  );
};

export default Contact;
