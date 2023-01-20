import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.cont}>
      <h2>Contact Info</h2>
      <div className={classes.details}>
        <div className={classes.phone}>
          <span>Phone : </span>
          <span>+27718971112</span>
        </div>
        <div className={classes.email}>
          <span>Email Address : </span>
          <span>omentnash@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
