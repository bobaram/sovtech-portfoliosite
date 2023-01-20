import classes from "./About.module.css";
const About = () => {
  return (
    <div className={classes.cont}>
      <div className={classes.showcase}>
        <h1 className={classes.content}>Hi, I'm Omen</h1>
        <p className={classes.content}>
          ... an effective, team-driven professional <br />
          <br />
          offering 2.5 years of experience in the
          <br />
          <br />
          development of software and analysis of data
        </p>
      </div>
      <div className={classes.detail}>
        <div className={classes.detailLeft}>
          <h2>ABOUT</h2>
          <p>
            My name is Omen Tinashe Tapfumaneyi. I have over two years of
            software development experience.Over the course of my career, I have
            worked with programming languages such as C# .NET, Python, JAVA,
            Javascript, Ruby, and most of the frameworks and libraries
            associated with these technologies.
          </p>
        </div>
        <div className={classes.detailRight}>
          <h2>WHY I WANT TO JOIN SOVTECH</h2>
          <p>
            Now that I have acquired my Bachelor's degree, I would like to
            become a full time employee at an organization that has big goals
            and works on big projects so I can be challenged to reach very high
            levels as a software developr. Sovtech seems to be the perfect
            company for me and if given the opportunity to work there I will
            finally have space to learn for a full year while working on much
            larger projects than I worked on as a contractor over the past few
            years
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
