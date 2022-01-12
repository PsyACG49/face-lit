import { css } from 'lit-element';

const styles = css`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}    

.nav-container{
    background-color: #24303c;
    color: white;
    font-family: 'calibri';
}

.nav-item{
    height: 50px;
    list-style: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

.nav-item:hover{
    background-color: #506375;
}

`;

export {styles};