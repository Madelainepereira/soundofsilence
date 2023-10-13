import Footer from '../../components/Footer/Footer';
import './Homelayout.css' 
import PropTypes from 'prop-types';

const HomeLayout = (props) => {
  return (
    <>
    <div className='nav'></div>
    {props.children}
    <Footer />
    </>
  );
}

HomeLayout.propTypes = {
  children: PropTypes.node 
};

export default HomeLayout;