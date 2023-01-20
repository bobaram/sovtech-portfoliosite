import classes from "./Projects.module.css";
const Projects = () => {
  return (
    <div className={classes.cont}>
      <h2>Projects</h2>
      <p>
        I have built quite a number of things mainly with javascript and I have
        put some of them on github for people to see how I write and optimize
        code. Feel free to look over my github repos to see some of the fun
        things I have built
      </p>
      <a role="button" href="https://github.com/bobaram">
        Go To Github
      </a>
    </div>
  );
};

export default Projects;
