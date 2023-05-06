import HeadingTertiary from "../../../../Typography/heading-tertiary/heading-tertiary.component";
import Web3 from "../../../../assets/project_1.png";
import Instrumento from "../../../../assets/instrumento.png";
import Natours from "../../../../assets/natours.png";
import Button from "../../../../components/button/button.component";

import {
  ProjectsHeading,
  ProjectsContainer,
  Project,
  ProjectAbout,
  ProjectImage,
} from "./projects.styles";
import "./projects.styles.css";
import DetailHeading from "../../../../Typography/detail-heading/detail-heading.component";

const Projects = () => {
  const projects = [
    {
      classLevel: "one",
      imageSource: Web3,
      heading: "Web Three Site",
    },
    {
      classLevel: "two",
      imageSource: Web3,
      heading: "Web Three Site",
    },
    {
      classLevel: "three",
      imageSource: Natours,
      heading: "Web Three Site",
    },
    {
      classLevel: "four",
      imageSource: Instrumento,
      heading: "Web Three Site",
    },
    {
      classLevel: "five",
      imageSource: Web3,
      heading: "Web Three Site",
    },
    {
      classLevel: "six",
      imageSource: Natours,
      heading: "Web Three Site",
    },
    {
      classLevel: "seven",
      imageSource: Web3,
      heading: "Web Three Site",
    },
    {
      classLevel: "eight",
      imageSource: Web3,
      heading: "Web Three Site",
    },
    {
      classLevel: "nine",
      imageSource: Web3,
      heading: "Web Three Site",
    },
  ];

  return (
    <>
      <ProjectsHeading>
        <DetailHeading>
          Explore a few of my most impactful projects
        </DetailHeading>
      </ProjectsHeading>
      <ProjectsContainer>
        {projects.map(({ classLevel, imageSource, heading }, _idx) => (
          <Project key={`${classLevel}${_idx}`} className={classLevel}>
            <ProjectImage src={imageSource} />
            <ProjectAbout>
              <HeadingTertiary>{heading}</HeadingTertiary>
              <Button>View Project</Button>
            </ProjectAbout>
          </Project>
        ))}
      </ProjectsContainer>
    </>
  );
};

export default Projects;
