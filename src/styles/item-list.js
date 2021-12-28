import { css } from "lit-element";

const styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .item-container {
    height: 50px;
    display: flex;
    padding: 0 0 0 35px;
    align-items: center;
  }

  span {
    color: withe;
    font-size: 30px;
    margin-right: 10px;
  }

  .avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

export { styles };
