import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import { useLanguage } from "../../context/LanguageContext";

const Skills = ({ title, skills }) => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const { language } = useLanguage();

  // Mapeamento de tradução para manter o valor original em DefaultResumeData.jsx
  const translationMap = {
    en: {
      "Technical Skills": "Technical Skills",
      "Soft Skills": "Soft Skills",
      "Additional Skills": "Additional Skills"
    },
    pt: {
      "Technical Skills": "Habilidades Técnicas",
      "Soft Skills": "Habilidades Interpessoais",
      "Additional Skills": "Habilidades Adicionais"
    }
  };

  const handleTitleChange = (e) => {
    const newSkills = [...resumeData.skills];
    const targetSkill = newSkills.find((skillType) => skillType.title === title);
    if (targetSkill) {
      targetSkill.title = e.target.innerText;
    }
    setResumeData({ ...resumeData, skills: newSkills });
  };

  return (
    skills.length > 0 && (
      <>
        <h2
          className="section-title mb-1 border-b-2 border-gray-300 editable"
          contentEditable
          suppressContentEditableWarning
          onBlur={handleTitleChange}
        >
          {translationMap[language][title] || title}
        </h2>
        <p className="sub-content">{skills.join(", ")}</p>
      </>
    )
  );
};

export default Skills;