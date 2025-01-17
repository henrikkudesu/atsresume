import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import { useLanguage } from '../../context/LanguageContext';

const Summary = () => {
  const { resumeData, setResumeData, handleChange } = useContext(ResumeContext);
  const { language } = useLanguage();

  const titles = {
    en: {
      title: 'Summary',
      placeholder: 'Summary'
    },
    pt: {
      title: 'Resumo',
      placeholder: 'Resumo'
    }
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{titles[language].title}</h2>
      <div className="grid-4">
        <textarea
          placeholder={titles[language].placeholder}
          name="summary"
          className="w-full other-input h-40"
          value={resumeData.summary}
          onChange={handleChange}
          maxLength="500"
        />
      </div>
    </div>
  );
};

export default Summary;