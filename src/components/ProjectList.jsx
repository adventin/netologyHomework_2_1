export default function ProjectList(props) {
  const projects = props.projects;
  const listProjects = projects.map((project, index) =>
    <div key={index} className="projects__project">
      <img width="100%" src={project.img} data-category={project.category} />
    </div>
  );

  return (
    <div className="projects">{listProjects}</div>
  );
}