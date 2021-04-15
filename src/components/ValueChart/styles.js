import styled from 'styled-components'

export const Chart = styled.div`
    margin: 20px;
    background-color:#2C405A;
    color: white;
    width: 20vw;
    border: 1px solid white;
    border-radius: 10px;

    font-size:2.3vw;
`

export const ChartHeader = styled.div`
    width: 100%;
    border-bottom: 1px solid white;
    padding: 1vw;
    text-align: left;
`

export const Values = styled.div`
    text-align: left;
    padding-left: 1vw;  
    h1{
        font-size: 2.4vw;
    }
    h2{
        font-size: 1vw;
        font-weight: normal;
        color:#8796B2;
    }
`

export const ProfitLoss = styled.div`
    width: 100%;
    padding: 1vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h1{
        font-size:1vw
    }
    h2{
        font-size: 1.2vw;
        font-weight: normal;
    }
    div{
        display: flex;
        flex-direction: column;
    }
`

export const Percentage = styled.div`
    border-radius: 10px;
    font-size: 10px;
    text-align: center;
`

export const CoinIcon = styled.img`
    margin: 10px;
    width: 20px;
    margin-right: 200px;
`