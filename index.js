import styled from "styled-components";
import React, { Component } from "react";

class Compliment extends Component {
  render() {
    const { className } = this.props;
    return <div className={className}>You look beautiful today ❤️</div>;
  }
}

export default styled(Compliment)``;
