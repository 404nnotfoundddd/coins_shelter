import Row from './Row'
import Img from '@/png/ethereium.png'
import chart from '@/png/downchart.png'

const Ethereium = () => {
  return (
    <Row
      marketImg={Img}
      marketText="Etherium (ETH)"
      price={30379.99}
      change24H="-1.08%"
      lowest24H={29980.0}
      highest24H={31240.0}
      volume24H={433.9}
      value24H={433.9}
      chartImg={chart}
    />
  )
}
export default Ethereium
