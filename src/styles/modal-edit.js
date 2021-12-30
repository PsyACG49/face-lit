import { css } from "lit-element";

export const styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .modal-container {
    position: fixed;
    z-index: 1;
    overflow: auto;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.452);
  }

  .modal-cont-close {
    opacity: 0;
    visibility: hidden;
  }

  .modal {
    width: 40%;
    height: 50%;
    color: #000;
    background: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    position: relative;
  }

  .close {
    position: absolute;
    top: 5px;
    right: 5px;
    display: inline-block;
    width: 25px;
    height: 25px;
    background: #c44a4a;
    color: #fff;
    line-height: 25px;
    cursor: pointer;
    border-radius: 50px;
  }

  .text-modal {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 30px;
    color: #1f2933;
  }

  .T-area {
    border-radius: 10px;
  }

  .save-change {
    width: 100px;
    height: 50px;
    color: #fff;
    background: #1f2933;
    border-radius: 6px;
    text-align: center;
    font-size: 40px;
    padding: 4px;
    margin-top: 20px;
  }

  .save-change:hover {
    background-color: #313942;
    cursor: pointer;
  }
`;
