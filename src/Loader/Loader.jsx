import React from 'react';
import styled from 'styled-components';

const Loader = ({ colors = { primary: "#2F2585", secondary: "#F028FD", tertiary: "#2BDEAC", shadow: "#8B5AD5" } }) => {
    return (
        <StyledWrapper colors={colors}>
            <div className="pyramid-loader bg-gray-900">
                <div className="wrapper">
                    <span className="side side1" />
                    <span className="side side2" />
                    <span className="side side3" />
                    <span className="side side4" />
                    <span className="shadow" />
                </div>
                <div>
                    <p className="loading-text text-teal-500">Loading...</p>
                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .pyramid-loader {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    transform: rotateX(-20deg);
  }

  .wrapper {
    position: relative;
    width: 15vw; /* Responsive width */
    height: 15vw; /* Responsive height */
    transform-style: preserve-3d;
    animation: spin 4s linear infinite;
  }

  @keyframes spin {
    100% {
      transform: rotateY(360deg);
    }
  }

  .pyramid-loader .wrapper .side {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform-origin: center top;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }

  .side1 {
    transform: rotateZ(-30deg) rotateY(90deg);
    background: conic-gradient(
      ${({ colors }) => colors.primary}, 
      ${({ colors }) => colors.secondary}, 
      ${({ colors }) => colors.tertiary}
    );
  }

  .side2 {
    transform: rotateZ(30deg) rotateY(90deg);
    background: conic-gradient(
      ${({ colors }) => colors.tertiary}, 
      ${({ colors }) => colors.secondary}, 
      ${({ colors }) => colors.primary}
    );
  }

  .side3 {
    transform: rotateX(30deg);
    background: conic-gradient(
      ${({ colors }) => colors.secondary}, 
      ${({ colors }) => colors.primary}, 
      ${({ colors }) => colors.tertiary}
    );
  }

  .side4 {
    transform: rotateX(-30deg);
    background: conic-gradient(
      ${({ colors }) => colors.primary}, 
      ${({ colors }) => colors.tertiary}, 
      ${({ colors }) => colors.secondary}
    );
  }

  .shadow {
    width: 90%;
    height: 90%;
    background: ${({ colors }) => colors.shadow};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform: rotateX(90deg) translateZ(-40px);
    filter: blur(12px);
  }

  .loading-text {
    margin-top: 16px;
    font-size: 1.2rem;
    text-align: center;
  }
`;

export default Loader;
