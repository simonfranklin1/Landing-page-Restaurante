import './AboutUs.css'
import {images} from '../../constants';

const AboutUs = () => {
  return (
    <div className="app__aboutus app__bg flex__center section__padding" id='about'>
      <div className='app__aboutus-overlay flex__center'>
        <img src={images.G} alt="g letter" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h2 className="headtext__cormorant">
            About Us
          </h2>
          <img src={images.spoon} alt="spoon" className='spoon__img' />
          <p className="p__opensans">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat sunt dicta magni quia architecto nemo saepe incidunt, repellendus quos consectetur? Soluta eveniet accusantium libero dignissimos reprehenderit possimus repellat ipsa tenetur!
          </p>
          <button type="button" className='custom__button'>Know More</button>
        </div>

        <div className="app__aboutus-content_knife">
          <img src={images.knife} alt="about_knife" />
        </div>

        <div className="app__aboutus-content_history">
          <h2 className="headtext__cormorant">
            Our History
          </h2>
          <img src={images.spoon} alt="spoon" className='spoon__img' />
          <p className="p__opensans">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat sunt dicta magni quia architecto nemo saepe incidunt, repellendus quos consectetur? Soluta eveniet accusantium libero dignissimos reprehenderit possimus repellat ipsa tenetur!
          </p>
          <button type="button" className='custom__button'>Know More</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs