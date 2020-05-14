import React from 'react';
import { FormattedMessage } from 'react-intl';

const About = () => (
    <>
        <h1>
            <FormattedMessage id="About.title" />
        </h1>
        <p>
            <FormattedMessage id="About.content" />
        </p>
    </>
);
export default About;
