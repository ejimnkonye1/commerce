
import Navbar1 from '~/components/Head';
import MyHome from '~/components/Homepg'
import Products from '~/components/Products'
import Tools from '~/components/Tools'
import Footer from '~/components/Footer'
export default function Index() {
  return (
    <div className="">
      <Navbar1 cartItems={[]} loading={false} />
  <MyHome />
  <Products cartItems={[]} setCartItems={[]} />
  <Tools />
  <Footer />
    </div>
  );
}


