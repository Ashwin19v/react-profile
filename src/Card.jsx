const userData = [
  {
    name: "User1",
    city: "vellore",
    desig: "front-end development",
    skills: ["ui", "Ux", "HTML", "Js", "Java", "Python", "React", "Node"],
    online: false,
    profile: "vite.svg",
  },
  {
    name: "Varsha",
    city: "chennai",
    desig: "front-end development",
    skills: ["ui", "Ux", "HTML", "Js", "Java", "Python", "React", "Node"],
    online: true,
    profile: "vite.svg",
  },
  {
    name: "Ashwin",
    city: "vellore",
    desig: "front-end development",
    skills: ["ui", "Ux", "HTML", "Js", "Java", "Python", "React", "Node"],
    online: false,
    profile: "vite.svg",
  },
];
function User(props) {
  return (
    <div className="container">
      <span className={props.online ? "status online" : "status offline"}>
        {props.online ? "ONLINE" : "OFFLINE"}
      </span>
      <img src={props.profile} alt="" />
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.desig}</p>
      <div className="buttons">
        <button className="b1">Message</button>
        <button className="b2">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>

        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const Card = () => {
  return (
    <>
      {userData.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          desid={user.desig}
          skills={user.skills}
          online={user.online}
          profile={user.profile}
        />
      ))}
    </>
  );
  // < User name="Vachu" city="vellore"
  //  desid="front-end development"
  //  skills={["ui","Ux","HTML","Js","Java","Python","React","Node"]}
  //  online={false}
  //  profile="images/1.jpg"
  //  />
};
