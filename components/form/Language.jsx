import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import { useLanguage } from '../../context/LanguageContext';
import FormButton from "./FormButton";

const Language = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const { language } = useLanguage();
  const skillType = "languages";

  const titles = {
    en: {
      title: 'Languages',
      placeholder: 'Language'
    },
    pt: {
      title: 'Idiomas',
      placeholder: 'Idioma'
    }
  };

  const handleSkills = (e, index, skillType) => {
    const newSkills = [...resumeData[skillType]];
    newSkills[index] = e.target.value;
    setResumeData({ ...resumeData, [skillType]: newSkills });
  };

  const addSkill = () => {
    setResumeData({ ...resumeData, [skillType]: [...resumeData[skillType], ""] });
  };

  const removeSkill = (index) => {
    const newSkills = [...resumeData[skillType]];
    newSkills.splice(-1, 1);
    setResumeData({ ...resumeData, [skillType]: newSkills });
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{titles[language].title}</h2>
      {resumeData[skillType].map((skill, index) => (
        <div key={index} className="f-col">
          <input
            type="text"
            placeholder={titles[language].placeholder}
            name={titles[language].placeholder}
            className="w-full other-input"
            value={skill}
            onChange={(e) => handleSkills(e, index, skillType)}
          />
        </div>
      ))}
      <FormButton size={resumeData[skillType].length} add={addSkill} remove={removeSkill} />
    </div>
  );
};

export default Language;