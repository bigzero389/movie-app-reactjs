import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    /*router를 통해서 들어오지 않고 url 을 바로 치고 들어오면 state 가 없고 이 경우 강제로 / 로 보낸다.*/
    if(location.state === undefined) {
      history.push("/"); /**redirect 됨 */
    }
  }

  render() {
    const {location} = this.props;
    if(location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }  
}

export default Detail;
