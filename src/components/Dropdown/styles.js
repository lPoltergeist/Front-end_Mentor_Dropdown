import styled from "styled-components";

export const Feature = styled.div`
    box-shadow: 0 2px 20px rgba(0,0,0,0.2);
    background-color: #fff;
    width: 130px;
    height: 140px;
    border-radius: 10px;
    position: absolute;
    top: 75px;
    left: 180px;
    list-style: none;
    text-align: start;
    cursor: default;

    transition: ease-in 0.2s;

    @media screen and (max-width: 1100px) {
        left: 110px;
    }


.dropdownlist {
    margin: 17px 0;
    li {
    cursor: pointer;
    margin: 8px 15px;
    font-size: 1rem;
    text-decoration: none;
    color: #7b7b7b;

    &:hover{
        color: #000;
    }

}
}
`

export const Company = styled.div`
    box-shadow: 0 2px 20px rgba(0,0,0,0.2);
    background-color: #fff;
    width: 110px;
    height: 105px;
    border-radius: 10px;
    position: absolute;
    top: 75px;
    left: 325px;
    list-style: none;
    text-align: start;
    cursor: default;

    transition: ease-in 0.2s;

    @media screen and (max-width: 1100px) {
        left: 250px;
    }


.dropdownlist {
    margin: 15px 0;
    li {
        
    cursor: pointer;
    margin: 8px 20px;
    font-size: 1rem;
    text-decoration: none;
    color: #7b7b7b;
    &:hover{
        color: #000;
    }


}
}
`