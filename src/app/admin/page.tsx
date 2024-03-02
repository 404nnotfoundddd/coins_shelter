import TopInfo from './_components/Main/TopInfo'
import Price from './_components/Main/Price'
import BTCPriceChange from './_components/Main/BTCPriceChange'
import Market from './_components/Main/Market'

const Admin = async () => {
  return (
    <main
      style={{
        backgroundColor: '#0f1215',
        backgroundImage:
          'radial-gradient(at 48% 55%, hsla(229,23%,14%,1), transparent 50%), radial-gradient(at 80% 100%, hsla(227,21%,12%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(224,23%,16%,1) 0px, transparent 50%)',
      }}
      className="flex grow flex-col gap-3 p-4 pb-36"
    >
      <TopInfo />
      <div className="grid grid-cols-4 gap-3">
        <Price />
        <BTCPriceChange />
      </div>
      <Market />
    </main>
  )
}
export default Admin
