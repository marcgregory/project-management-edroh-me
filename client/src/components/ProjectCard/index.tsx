import { Project } from "@/src/state/api";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="dark:bg-dark-secondary mb-4 rounded bg-white p-4 shadow dark:text-white">
      <h3>
        <strong>Name: </strong>
        {project.name}
      </h3>
      <p>
        {" "}
        <strong>Description: </strong>
        {project.description}
      </p>
      <p>
        <strong>Start Date: </strong> {project.startDate}
      </p>
      <p>
        <strong>End Date: </strong> {project.endDate}
      </p>
    </div>
  );
};

export default ProjectCard;
