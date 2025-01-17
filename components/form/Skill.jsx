import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import FormButton from "./FormButton";
// [ADICIONADO] Importar contexto de idioma
import { useLanguage } from "../../context/LanguageContext";

const Skill = ({ title }) => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  // [ADICIONADO] Acessar idioma selecionado
  const { language } = useLanguage();

  // [ADICIONADO] Mapeamento para exibir títulos traduzidos sem alterar DefaultResumeData.jsx
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

  // skills
  const handleSkill = (e, index, title) => {
    const newSkills = [
      ...resumeData.skills.find((skillType) => skillType.title === title).skills,
    ];
    newSkills[index] = e.target.value;
    setResumeData((prevData) => ({
      ...prevData,
      skills: prevData.skills.map((skill) =>
        skill.title === title ? { ...skill, skills: newSkills } : skill
      ),
    }));
  };

  const addSkill = (title) => {
    setResumeData((prevData) => {
      const skillType = prevData.skills.find(
        (skillType) => skillType.title === title
      );
      const newSkills = [...skillType.skills, ""];
      const updatedSkills = prevData.skills.map((skill) =>
        skill.title === title ? { ...skill, skills: newSkills } : skill
      );
      return {
        ...prevData,
        skills: updatedSkills,
      };
    });
  };

  const removeSkill = (title) => {
    setResumeData((prevData) => {
      const skillType = prevData.skills.find(
        (skillType) => skillType.title === title
      );
      const newSkills = [...skillType.skills];
      newSkills.pop();
      const updatedSkills = prevData.skills.map((skill) =>
        skill.title === title ? { ...skill, skills: newSkills } : skill
      );
      return {
        ...prevData,
        skills: updatedSkills,
      };
    });
  };

  const skillType = resumeData.skills.find(
    (skillType) => skillType.title === title
  );

  return (
    <div className="flex-col-gap-2">
      {/* [ALTERADO] Exibir título traduzido caso exista, senão exibir valor original */}
      <h2 className="input-title">
        {translationMap[language][title] || title}
      </h2>
      {skillType.skills.map((skill, index) => (
        <div key={index} className="f-col">
          {/* [ALTERADO] Mesmo placeholder traduzido */}
          <input
            type="text"
            placeholder={translationMap[language][title] || title}
            name={title}
            className="w-full other-input"
            value={skill}
            onChange={(e) => handleSkill(e, index, title)}
          />
        </div>
      ))}
      <FormButton
        size={skillType.skills.length}
        add={() => addSkill(title)}
        remove={() => removeSkill(title)}
      />
    </div>
  );
};

export default Skill;