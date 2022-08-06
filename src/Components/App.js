import './App.css';
import Nav from './Nav/Nav';
import Service from './Service/Service';
import Slider from './Slider/Slider';
import Info from './Info/Info';
import Footer from './Footer/Footer';

function App() {
  const infoData ={
    firstTitle: "First featurette heading. It’ll blow your mind.",
    firstDetail: "Some great placeholder content for the first featurette here. Imagine some exciting prose here.",
    secondTitle: "Oh yeah, it’s that good. See for yourself.",
    secondDetail: "Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.",
    thirdTitle: "And lastly, this one. Checkmate.",
    thirdDetail: "And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.",
  }
  return (
    <div className="App">
      <Nav/>
      <Slider/>
      <Service/>
      <Info title= {infoData.firstTitle} details= {infoData.firstDetail} textBox= "col-md-7" imageBox= "col-md-5"/>
      <Info title= {infoData.secondTitle} details= {infoData.secondDetail} textBox= "col-md-7 order-last" imageBox= "col-md-5 order-first"/>
      <Info title= {infoData.thirdTitle} details= {infoData.thirdDetail} textBox= "col-md-7" imageBox= "col-md-5"/>
      <Footer/>
    </div>
  );
}

export default App;
