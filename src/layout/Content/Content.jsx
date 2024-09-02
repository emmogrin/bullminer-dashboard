import "./Content.css";
import ContentTop from '../../component/ContentTop/ContentTop';
import ContentMain from '../../component/ContentMain/ContentMain';

const Content = () => {
  return (
    <div className='main-content'>
      <ContentTop />
      <ContentMain />
    </div>
  )
}

export default Content