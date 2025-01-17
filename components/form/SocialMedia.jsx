import FormButton from "./FormButton";
import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import { useLanguage } from '../../context/LanguageContext';

const SocialMedia = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const { language } = useLanguage();

  const titles = {
    en: {
      title: 'Social Media',
      socialMedia: 'Social Media',
      link: 'Link'
    },
    pt: {
      title: 'Redes Sociais',
      socialMedia: 'Rede Social',
      link: 'Link'
    }
  };

  // social media
  const handleSocialMedia = (e, index) => {
    const newSocialMedia = [...resumeData.socialMedia];
    newSocialMedia[index][e.target.name] = e.target.value.replace(
      "https://",
      ""
    );
    setResumeData({ ...resumeData, socialMedia: newSocialMedia });
  };

  const addSocialMedia = () => {
    setResumeData({
      ...resumeData,
      socialMedia: [...resumeData.socialMedia, { socialMedia: "", link: "" }],
    });
  };

  const removeSocialMedia = (index) => {
    const newSocialMedia = [...resumeData.socialMedia];
    newSocialMedia.splice(index, 1);
    setResumeData({ ...resumeData, socialMedia: newSocialMedia });
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{titles[language].title}</h2>
      {resumeData.socialMedia.map((social, index) => (
        <div key={index} className="f-col">
          <input
            type="text"
            placeholder={titles[language].socialMedia}
            name="socialMedia"
            className="w-full other-input"
            value={social.socialMedia}
            onChange={(e) => handleSocialMedia(e, index)}
          />
          <input
            type="text"
            placeholder={titles[language].link}
            name="link"
            className="w-full other-input"
            value={social.link}
            onChange={(e) => handleSocialMedia(e, index)}
          />
        </div>
      ))}
      <FormButton
        size={resumeData.socialMedia.length}
        add={addSocialMedia}
        remove={() => removeSocialMedia(resumeData.socialMedia.length - 1)}
      />
    </div>
  );
};

export default SocialMedia;