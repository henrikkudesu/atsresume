import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const LanguageButton = () => {
  const { language, toggleLanguage } = useLanguage();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLanguageClick = (lang) => {
    toggleLanguage(lang);
    setShowDropdown(false);
  };

  // Mapeamento de texto do botão de acordo com o idioma selecionado
  const buttonText = {
    en: 'Idiom',
    pt: 'Idioma'
  };

  return (
    <div className="fixed bottom-5 right-24">
      <button
        aria-label="Change Language"
        className="exclude-print font-bold rounded-full bg-white text-fuchsia-600 shadow-lg border-2 border-white px-4 py-2"
        onClick={handleButtonClick}
      >
        {buttonText[language]}
      </button>
      {showDropdown && (
        <div className="absolute bottom-full mb-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              onClick={() => handleLanguageClick('en')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              English
            </button>
            <button
              onClick={() => handleLanguageClick('pt')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Português
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageButton;