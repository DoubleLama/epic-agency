import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works/Works';
import messagesFr from './translation/fr';
import messagesEn from './translation/en';
import LanguageContext from './components/Language/LanguageContext'
import StudyCase from './pages/Works/StudyCase'

const messages = {
    fr: messagesFr,
    en: messagesEn,
};

const App = () => {
    const savedLanguage = localStorage.getItem("language")
    const [language, setLanguage] = useState(savedLanguage ? savedLanguage : 'fr');

    const contextValue = {
        language,
        setLanguage
    };

    return (
        <>
            <LanguageContext.Provider value={contextValue}>
                <Router>
                    <div>
                        <IntlProvider locale={language} messages={messages[language]}>
                            <Navbar />
                            <div className="container mt-5">
                                <Route path="/about">
                                    <About />
                                </Route>
                                <Route path="/Works">
                                    <Works />
                                </Route>
                                <Route path={`/Works/:WorkSlug`}>
                                    <StudyCase />
                                </Route>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                            </div>
                        </IntlProvider>
                    </div>
                </Router>
            </LanguageContext.Provider>
        </>
    );
};
export default App;