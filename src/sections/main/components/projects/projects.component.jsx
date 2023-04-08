import ProjectImg from "../../../../assets/project_1.png";

import {
  ProjectsContainer,
  ProjectOne,
  ProjectTwo,
  ProjectThree,
  ProjectFour,
  ProjectFive,
  ProjectSix,
  ProjectSeven,
  ProjectEight,
  ProjectNine,
  ProjectAbout,
  ProjectImage,
  HeadingTertiary,
} from "./projects.styles";

const Projects = () => {

    return (
        <ProjectsContainer>
            <ProjectOne>
                <ProjectImage src={ProjectImg} />
                <ProjectAbout>
                    <HeadingTertiary>Web Three Site</HeadingTertiary>
                </ProjectAbout>
            </ProjectOne>
            <ProjectTwo>
                <ProjectImage src={ProjectImg} />
                <ProjectAbout>
                    <HeadingTertiary>Web Three Site</HeadingTertiary>
                </ProjectAbout>
            </ProjectTwo>
            <ProjectThree>
                <ProjectImage src={ProjectImg} />
                <ProjectAbout>
                    <HeadingTertiary>Web Three Site</HeadingTertiary>
                </ProjectAbout>
            </ProjectThree>
            <ProjectFour>
                <ProjectImage src={ProjectImg} />
                <ProjectAbout>
                    <HeadingTertiary>Web Three Site</HeadingTertiary>
                </ProjectAbout>
            </ProjectFour>
            <ProjectFive>
                <ProjectImage src={ProjectImg} />
                <ProjectAbout>
                    <HeadingTertiary>Web Three Site</HeadingTertiary>
                </ProjectAbout>
            </ProjectFive>
            <ProjectSix>
                <ProjectImage src={ProjectImg} />
                <ProjectAbout>
                    <HeadingTertiary>Web Three Site</HeadingTertiary>
                </ProjectAbout>
            </ProjectSix>
            <ProjectSeven>
                <ProjectImage src={ProjectImg} />
                <ProjectAbout>
                    <HeadingTertiary>Web Three Site</HeadingTertiary>
                </ProjectAbout>
            </ProjectSeven>
            <ProjectEight>
                <ProjectImage src={ProjectImg} />
                <ProjectAbout>
                    <HeadingTertiary>Web Three Site</HeadingTertiary>
                </ProjectAbout>
            </ProjectEight>
            <ProjectNine>
                <ProjectImage src={ProjectImg} />
                <ProjectAbout>
                    <HeadingTertiary>Web Three Site</HeadingTertiary>
                </ProjectAbout>
            </ProjectNine>
        </ProjectsContainer>
    );
};

export default Projects;
