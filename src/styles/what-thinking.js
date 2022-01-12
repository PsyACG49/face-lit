import { css } from 'lit-element';

const styles = css`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.comp-container{
    width: 100%;
    padding: 10px 30px; 
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1f2933;
    color: white;
    font-family: 'calibri';
}

.comp-img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.comp-avatar{
    font-size: 30px;
    box-shadow: 7px 13px 37px #000;
}

.comp-form{
    width: 50%;
}

.comp-form-input{
    width: 100%;
    margin-left: 20px;
    padding: 5px 15px; 
    color: white; 
    border-radius: 10px;
    border: 1px solid #6f7a91;
    background-color: #24303c;

}
`;

export {styles};