import Row from './Row'
import Img from '@/webp/Bitcoin.webp'
import chart from '@/png/upchart.png'

const Bitcoin = () => {
  return (
    <Row
      marketImg={Img}
      marketText="Bitcoin (BTC)"
      price={30379.99}
      change24H="-1.68%"
      lowest24H={29980.0}
      highest24H={31240.0}
      volume24H={433.9}
      value24H={433.9}
      chartImg={chart}
    />
  )
}
export default Bitcoin
