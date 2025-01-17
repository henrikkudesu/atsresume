import FormButton from "./FormButton";
import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import { useLanguage } from '../../context/LanguageContext';

const Education = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const { language } = useLanguage();

  const titles = {
    en: {
      title: 'Education',
      school: 'School',
      degree: 'Degree',
      startYear: 'Start Year',
      endYear: 'End Year'
    },
    pt: {
      title: 'Educação',
      school: 'Escola',
      degree: 'Grau',
      startYear: 'Ano de Início',
      endYear: 'Ano de Conclusão'
    }
  };

  const handleEducation = (e, index) => {
    const newEducation = [...resumeData.education];
    newEducation[index][e.target.name] = e.target.value;
    setResumeData({ ...resumeData, education: newEducation });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        { school: "", degree: "", startYear: "", endYear: "" },
      ],
    });
  };

  const removeEducation = (index) => {
    const newEducation = [...resumeData.education];
    newEducation.splice(index, 1);
    setResumeData({ ...resumeData, education: newEducation });
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{titles[language].title}</h2>
      {resumeData.education.map((education, index) => (
        <div key={index} className="f-col">
          <input
            type="text"
            placeholder={titles[language].school}
            name="school"
            className="w-full other-input"
            value={education.school}
            onChange={(e) => handleEducation(e, index)}
          />
          <input
            type="text"
            placeholder={titles[language].degree}
            name="degree"
            className="w-full other-input"
            value={education.degree}
            onChange={(e) => handleEducation(e, index)}
          />
          <div className="flex-wrap-gap-2">
            <input
              type="date"
              placeholder={titles[language].startYear}
              name="startYear"
              className="other-input"
              value={education.startYear}
              onChange={(e) => handleEducation(e, index)}
            />
            <input
              type="date"
              placeholder={titles[language].endYear}
              name="endYear"
              className="other-input"
              value={education.endYear}
              onChange={(e) => handleEducation(e, index)}
            />
          </div>
        </div>
      ))}
      <FormButton size={resumeData.education.length} add={addEducation} remove={removeEducation} />
    </div>
  );
};

export default Education;