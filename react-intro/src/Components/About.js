import imageOne from "../img,audio,video/angel.jpg";

function About() {
  return (
    <div className="about">
      <h2>About Components</h2>
      <p>This is a Paragraph</p>
      <img src={imageOne} alt="image-one" height="200px" />
      <hr />
    </div>
  );
}
export default About;
