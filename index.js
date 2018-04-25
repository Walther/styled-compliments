import styled from "styled-components";
import React, { Component } from "react";

import getCompliment from "./compliments";

class Compliment extends Component {
  render() {
    const { className } = this.props;
    const compliment = getCompliment();
    return <div className={className}>{compliment}</div>;
  }
}

export default styled(Compliment)``;
