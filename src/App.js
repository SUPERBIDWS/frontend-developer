import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      photos: []
    }
}

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos?_page=1&_limit=6')
      .then(response => response.json())
      .then(data => {this.setState({ photos: data })});    
}

  render() {
    return (

      <div className="App" style={{margin: '10px'}}>
            <h1>SBWS</h1>
              {this.state.photos.map((info, i) => {
                return(
                <div className='card' key={info.id} style={{display: 'inline-flex'}}> 
                  <img src={info.thumbnailUrl} alt="123" 
                  style={{padding: '10px'}} >
                  </img>
                  <img src={'https://picsum.photos/150'} alt="123" style={{padding: '10px'}}/>
                  {/* Faltou inserir evento onclick para o show/hide da imagem acima */ } 
                </div>
              );
          })
      }
      </div>
    );
  }
}

export default App;
