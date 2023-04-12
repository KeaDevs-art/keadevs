import HeadingTertiary from "../../../../Typography/heading-tertiary/heading-tertiary.component";
import ProjectImg from "../../../../assets/project_1.png";
import {
  ProjectsContainer,
  // Project,
  ProjectAbout,
  ProjectImage,
} from "./projects.styles";
import "./projects.styles.css";

const Projects = () => {
  const projects = [
    {
      classLevel: "one",
      imageSource: ProjectImg,
      heading: "Web Three Site",
    },
    {
      classLevel: "two",
      imageSource: ProjectImg,
      heading: "Web Three Site",
    },
    {
      classLevel: "three",
      imageSource: ProjectImg,
      heading: "Web Three Site",
    },
    {
      classLevel: "four",
      imageSource: ProjectImg,
      heading: "Web Three Site",
    },
    {
      classLevel: "five",
      imageSource: ProjectImg,
      heading: "Web Three Site",
    },
    {
      classLevel: "six",
      imageSource: ProjectImg,
      heading: "Web Three Site",
    },
    {
      classLevel: "seven",
      imageSource: ProjectImg,
      heading: "Web Three Site",
    },
    {
      classLevel: "eight",
      imageSource: ProjectImg,
      heading: "Web Three Site",
    },
    {
      classLevel: "nine",
      imageSource: ProjectImg,
      heading: "Web Three Site",
    },
  ];

  return (
    <ProjectsContainer>
      {projects.map(({ classLevel, imageSource, heading }, _idx) => (
        <figure key={`${classLevel}${_idx}`} className={classLevel}>
          <ProjectImage src={imageSource} />
          <ProjectAbout>
            <HeadingTertiary>{heading}</HeadingTertiary>
          </ProjectAbout>
        </figure>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
