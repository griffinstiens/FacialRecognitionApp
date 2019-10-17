import React, {Component} from 'react';
import Nav from './components/nav/nav.component';
import Logo from './components/logo/logo.component.jsx';
import ImageLinkForm from './components/imageLink/image-link.component.jsx';
import Rank from './components/rank/rank.component.jsx';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/face-recognition/face-recognition.component.jsx';
import Footer from './components/footer/footer.component.jsx';
import './App.css';

const particleOptions = {
  particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  }

const app = new Clarifai.App ({
  apiKey: '0f20ff1777e1469c8074b651bafdf863'
});


class App extends Component {
  
  constructor() {
    super();

    this.state = {
      input: '',
      imageUrl: '',
      box: {},
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({ box: box });
  }


  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {

    this.setState({ imageUrl: this.state.input })

    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
        .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
        .catch(err => console.log(err));
  }

  render() {
    const { imageUrl, box } = this.state;
    return (
      <div>
        <div className='container'>
          <Nav />
          <Particles className='particles' params={particleOptions} />
            <Logo />
            <Rank />
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
          <FaceRecognition box={box} imageUrl={imageUrl}/>
          
        </div>

        <Footer />
      </div>
    );
  }
  
}

export default App;
