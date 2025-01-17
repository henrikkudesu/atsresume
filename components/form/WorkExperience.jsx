import FormButton from "./FormButton";
import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import { useLanguage } from '../../context/LanguageContext';

const WorkExperience = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const { language } = useLanguage();

  const titles = {
    en: {
      title: 'Work Experience',
      company: 'Company',
      position: 'Job Title',
      description: 'Description',
      keyAchievements: 'Key Achievements',
      startYear: 'Start Year',
      endYear: 'End Year'
    },
    pt: {
      title: 'Experiência Profissional',
      company: 'Empresa',
      position: 'Título do Trabalho',
      description: 'Descrição',
      keyAchievements: 'Principais Conquistas',
      startYear: 'Ano de Início',
      endYear: 'Ano de Conclusão'
    }
  };

  const handleWorkExperience = (e, index) => {
    const newWorkExperience = [...resumeData.workExperience];
    newWorkExperience[index][e.target.name] = e.target.value;
    setResumeData({ ...resumeData, workExperience: newWorkExperience });
  };

  const addWorkExperience = () => {
    setResumeData({
      ...resumeData,
      workExperience: [
        ...resumeData.workExperience,
        {
          company: "",
          position: "",
          description: "",
          keyAchievements: "",
          startYear: "",
          endYear: "",
        },
      ],
    });
  };

  const removeWorkExperience = (index) => {
    const newWorkExperience = [...resumeData.workExperience];
    newWorkExperience.splice(index, 1);
    setResumeData({ ...resumeData, workExperience: newWorkExperience });
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{titles[language].title}</h2>
      {resumeData.workExperience.map((workExperience, index) => (
        <div key={index} className="f-col">
          <input
            type="text"
            placeholder={titles[language].company}
            name="company"
            className="w-full other-input"
            value={workExperience.company}
            onChange={(e) => handleWorkExperience(e, index)}
          />
          <input
            type="text"
            placeholder={titles[language].position}
            name="position"
            className="w-full other-input"
            value={workExperience.position}
            onChange={(e) => handleWorkExperience(e, index)}
          />
          <textarea
            type="text"
            placeholder={titles[language].description}
            name="description"
            className="w-full other-input h-32"
            value={workExperience.description}
            maxLength="250"
            onChange={(e) => handleWorkExperience(e, index)}
          />
          <textarea
            type="text"
            placeholder={titles[language].keyAchievements}
            name="keyAchievements"
            className="w-full other-input h-40"
            value={workExperience.keyAchievements}
            onChange={(e) => handleWorkExperience(e, index)}
          />
          <div className="flex-wrap-gap-2">
            <input
              type="date"
              placeholder={titles[language].startYear}
              name="startYear"
              className="other-input"
              value={workExperience.startYear}
              onChange={(e) => handleWorkExperience(e, index)}
            />
            <input
              type="date"
              placeholder={titles[language].endYear}
              name="endYear"
              className="other-input"
              value={workExperience.endYear}
              onChange={(e) => handleWorkExperience(e, index)}
            />
          </div>
        </div>
      ))}
      <FormButton
        size={resumeData.workExperience.length}
        add={addWorkExperience}
        remove={() => removeWorkExperience(resumeData.workExperience.length - 1)}
      />
    </div>
  );
};

export default WorkExperience;