import styled from 'styled-components'

export const Chart = styled.div`
    margin: auto;
    background-color:#2C405A;
    color: white;
    width: 250px;
    border: 1px solid white;
    border-radius: 10px;
`

export const ChartHeader = styled.div`
    width: 100%;
    border-bottom: 1px solid white;
    padding: 10px;
    text-align: left;
`

export const Values = styled.div`
    text-align: left;
    padding-left: 20px;  
    h1{
        font-size: 30px;
    }
    h2{
        font-size: 15px;
        font-weight: normal;
        color:#8796B2;
    }
`

export const ProfitLoss = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h1{
        font-size:15px
    }
    h2{
        font-size: 15px;
        font-family: normal;
    }
    div{
        display: flex;
        flex-direction: column;
    }
`

export const Percentage = styled.div`
    border-radius: 10px;
    font-size: 10px;
`

export const CoinIcon = styled.img`
    margin: 10px;
    width: 20px;
    margin-right: 200px;
`