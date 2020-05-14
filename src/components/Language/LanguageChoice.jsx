import React, { useContext } from 'react';
import LanguageContext from './LanguageContext'
import frenchFlag from '../../assets/img/frFlag.png'
import englishFlag from '../../assets/img/enFlag.png'

const LanguageChoice = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    const handleChange = () => {
        language === 'fr' ? setLanguage('en') : setLanguage('fr')
        localStorage.setItem("language", language)
    };

    return (
        <div >
            {language === 'en'
                ? <img src={frenchFlag} style={{ width: '35px' }} alt="French Flag" onClick={handleChange} />
                : <img src={englishFlag} style={{ width: '35px' }} alt="English Flag" onClick={handleChange} />
            }
        </div>
    )
}

export default LanguageChoice;