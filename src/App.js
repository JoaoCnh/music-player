import React, { Component } from "react";
import styled from "styled-components";
import FaSpotify from "react-icons/lib/fa/spotify";

const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const AuthBox = styled.div`
  width: 300px;
  padding: 20px;
  text-align: center;
`;

const SpotifyIcon = styled(FaSpotify)`
  fill: #1db954;
`;

const AuthButton = styled.button`
  border: none;
  outline: none;
  padding: 0.75em 1.5em;
  font-weight: 400;
  border-radius: 4px;
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <AuthBox>
          <AuthButton type="button" onClick={() => {}}>
            Login with Spotify
          </AuthButton>
        </AuthBox>
      </Container>
    );
  }
}

export default App;
