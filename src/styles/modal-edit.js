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
    border-radius: 10px
  }

  .close{
    
  }
`;
