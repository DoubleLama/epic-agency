import React from 'react';
import { FormattedMessage } from 'react-intl';

const Home = () => (
    <>
        <h1>
            <FormattedMessage id="Home.title" />
        </h1>
        <p>
            <FormattedMessage id="Home.content" />
        </p>
    </>
);
export default Home;
