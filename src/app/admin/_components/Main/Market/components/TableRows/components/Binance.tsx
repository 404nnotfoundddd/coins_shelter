import Row from './Row'
import Img from '@/png/binance.png'
import chart from '@/png/upchart.png'

const Binance = () => {
  return (
    <Row
      marketImg={Img}
      marketText="Binance (BTC)"
      price={30379.99}
      change24H="+0.58%"
      lowest24H={29980.0}
      highest24H={31240.0}
      volume24H={433.9}
      value24H={433.9}
      chartImg={chart}
    />
  )
}
export default Binance
