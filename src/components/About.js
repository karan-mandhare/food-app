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

    console.log("json", json);
  }

  componentWillUnmount(){
    console.log("Component willUnmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // const { count, count2 } = this.state;
    return (
      <>
        {/* <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Number
        </button> */}
        {/* <h1>Count2 : {count2}</h1> */}
        <img src={avatar_url} alt="" />
        <h1>Name : {name}</h1>
        <h1>Location : {location}</h1>
      </>
    );
  }
}

export default About;
