import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //   count: 0,
      //   count2: 1,
      userInfo: {
        name: "Dummyname",
        location: "nagpur",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/karan-mandhare");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentWillUnmount() {
    // console.log("Component willUnmount");
  }

  render() {
    const { name, location, avatar_url, bio, created_at } = this.state.userInfo;
    // const { count, count2 } = this.state;
    return (
      <div className="m-20 flex justify-center">
        <img
          className="w-[450px] h-[500px] rounded-3xl"
          src={avatar_url}
          alt=""
        />
        <div className="text-5xl mx-10 pt-10">
          <h1 className="pb-8">{name}</h1>
          <h1 className="pb-8">{bio}</h1>
          <h1 className="pb-8">Start from : {created_at}</h1>
          <h1>Location : {location}</h1>
        </div>
      </div>
    );
  }
}

export default About;
