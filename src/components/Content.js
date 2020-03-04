import styled from 'styled-components';

const Content = styled.div`
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: center;

  .fade-appear,
  .fade-enter {
    opacity: 0;
    z-index: 1;
  }
  .fade-appear-active,
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms linear 150ms;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0;
    transition: opacity 150ms linear;
  }

  div.transition-group {
    position: relative;
  }

  section.route-section {
    position: absolute;
    width: 100%;
    top: 80px;
    left: 0;
    margin-bottom: 50px;
    @media only screen and (min-width: 43em) {
      margin-bottom: 0;
    }
  }
`;

export default Content;