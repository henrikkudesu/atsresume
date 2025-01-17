import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import { useLanguage } from "../../context/LanguageContext";

const PersonalInformation = () => {
  const { resumeData, setResumeData, handleProfilePicture, handleChange } =
    useContext(ResumeContext);
  const { language } = useLanguage();

  const titles = {
    en: {
      title: "Personal Information",
      name: "Full Name",
      position: "Job Title",
      contact: "Contact Information",
      email: "Email",
      address: "Address",
      profilePicture: "Profile Picture"
    },
    pt: {
      title: "Informações Pessoais",
      name: "Nome Completo",
      position: "Título do Trabalho",
      contact: "Informações de Contato",
      email: "Email",
      address: "Endereço",
      profilePicture: "Foto de Perfil"
    }
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{titles[language].title}</h2>
      <div className="grid-4">
        <input
          type="text"
          placeholder={titles[language].name}
          name="name"
          className="pi"
          value={resumeData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder={titles[language].position}
          name="position"
          className="pi"
          value={resumeData.position}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder={titles[language].contact}
          name="contactInformation"
          className="pi"
          value={resumeData.contactInformation}
          onChange={handleChange}
          minLength="10"
          maxLength="15"
        />
        <input
          type="email"
          placeholder={titles[language].email}
          name="email"
          className="pi"
          value={resumeData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder={titles[language].address}
          name="address"
          className="pi"
          value={resumeData.address}
          onChange={handleChange}
        />
        <input
          type="file"
          name="profileImage"
          accept="image/*"
          className="profileInput"
          onChange={handleProfilePicture}
          placeholder={titles[language].profilePicture}
        />
      </div>
    </div>
  );
};

export default PersonalInformation;