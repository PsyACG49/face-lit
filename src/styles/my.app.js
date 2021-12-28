import { css } from "lit-element";

const styles = css`
  h1 {
    text-align: center;
  }

  .wrapper-app {
    width: 100%;
    display: grid;
    grid-template-columns: 20% 1fr;
    grid-auto-rows: auto 1fr;
  }

  .what-t {
    grid-column: 1 / 3;
    grid-row: 1;
  }

  .nav-a {
    grid-column: 1 / 2;
    grid-row: 2;
  }

  .list-p {
    grid-column: 2 / 3;
    grid-row: 2;
  }
`;
export { styles };
