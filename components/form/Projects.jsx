import FormButton from "./FormButton";
import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import { useLanguage } from '../../context/LanguageContext';

const Projects = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const { language } = useLanguage();

  const titles = {
    en: {
      title: 'Projects',
      projectTitle: 'Project Title',
      link: 'Link',
      description: 'Description',
      keyAchievements: 'Key Achievements',
      startYear: 'Start Year',
      endYear: 'End Year'
    },
    pt: {
      title: 'Projetos',
      projectTitle: 'Título do Projeto',
      link: 'Link',
      description: 'Descrição',
      keyAchievements: 'Principais Conquistas',
      startYear: 'Ano de Início',
      endYear: 'Ano de Conclusão'
    }
  };

  const handleProjects = (e, index) => {
    const newProjects = [...resumeData.projects];
    newProjects[index][e.target.name] = e.target.value;
    setResumeData({ ...resumeData, projects: newProjects });
  };

  const addProjects = () => {
    setResumeData({
      ...resumeData,
      projects: [
        ...resumeData.projects,
        {
          title: "",
          link: "",
          description: "",
          keyAchievements: "",
          startYear: "",
          endYear: "",
        },
      ],
    });
  };

  const removeProjects = (index) => {
    const newProjects = [...resumeData.projects];
    newProjects.splice(index, 1);
    setResumeData({ ...resumeData, projects: newProjects });
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{titles[language].title}</h2>
      {resumeData.projects.map((project, index) => (
        <div key={index} className="f-col">
          <input
            type="text"
            placeholder={titles[language].projectTitle}
            name="title"
            className="w-full other-input"
            value={project.title}
            onChange={(e) => handleProjects(e, index)}
          />
          <input
            type="text"
            placeholder={titles[language].link}
            name="link"
            className="w-full other-input"
            value={project.link}
            onChange={(e) => handleProjects(e, index)}
          />
          <textarea
            placeholder={titles[language].description}
            name="description"
            className="w-full other-input"
            value={project.description}
            onChange={(e) => handleProjects(e, index)}
          />
          <textarea
            placeholder={titles[language].keyAchievements}
            name="keyAchievements"
            className="w-full other-input"
            value={project.keyAchievements}
            onChange={(e) => handleProjects(e, index)}
          />
          <div className="flex-wrap-gap-2">
            <input
              type="date"
              placeholder={titles[language].startYear}
              name="startYear"
              className="other-input"
              value={project.startYear}
              onChange={(e) => handleProjects(e, index)}
            />
            <input
              type="date"
              placeholder={titles[language].endYear}
              name="endYear"
              className="other-input"
              value={project.endYear}
              onChange={(e) => handleProjects(e, index)}
            />
          </div>
        </div>
      ))}
      <FormButton size={resumeData.projects.length} add={addProjects} remove={removeProjects} />
    </div>
  );
};

export default Projects;