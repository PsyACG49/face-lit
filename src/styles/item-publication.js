import { css } from "lit-element";

const styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container-publication {
    display: block;
    width: 99%;
    height: auto;
    margin: 0 auto 5px auto;
    border-radius: 10px;
  }

  .header-publication {
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-auto-rows: 25px 25px;
    padding: 10px;
    background-color: #24303c;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    align-self: center;
  }

  .NameUser {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    align-self: center;
  }

  .time {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    align-self: center;
    font-size: 12px;
  }

  .body-publication {
    width: 100%;
    height: auto;
    padding: 10px;
    background-color: #ffffff;
    color: #000000;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export { styles };
