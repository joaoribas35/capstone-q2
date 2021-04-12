import {Chart, ChartHeader, Values, ProfitLoss, Percentage, CoinIcon} from './styles'

const ValueChart = ({coin}) => {
    return(
        <Chart>
            <ChartHeader>Posição</ChartHeader>
            <CoinIcon src={coin.icon}/>
            <Values>
                <h1>R${coin.value}</h1>
                <h2>0,351 BTC</h2>
            </Values>
            <ProfitLoss>
                <h1>Lucro/Prejuizo</h1>
                <div>
                    <h2>R$12,00</h2>
                    <Percentage style={{backgroundColor:"green"}}>2,5%</Percentage>
                </div>
            </ProfitLoss>
        </Chart>
    )
}

export default ValueChart