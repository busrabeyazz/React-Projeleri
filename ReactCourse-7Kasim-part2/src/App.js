import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <a className="navbar-brand" href="#" />
            <img src="https://i.pinimg.com/564x/f5/10/de/f510de7f3fcb1ca57d0081ce1a92cc0b.jpg" alt="Logo" width="60" height="60" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br></br>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="list-group">
              <a href="#" className="list-group-item list-group-item-action">Option 1</a>
              <a href="#" className="list-group-item list-group-item-action">Option 2</a>
              <a href="#" className="list-group-item list-group-item-action">Option 3</a>
              <a href="#" className="list-group-item list-group-item-action">Option 4</a>
              <a href="#" className="list-group-item list-group-item-action">Option 5</a>
              <a href="#" className="list-group-item list-group-item-action">Option 6</a>
              <a href="#" className="list-group-item list-group-item-action">Option 7</a>
              <a href="#" className="list-group-item list-group-item-action">Option 8</a>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-4">
                <img src="https://i.pinimg.com/564x/5e/85/9a/5e859a25dbdd4a6341b54a748ba49eb7.jpg" alt="Product 1" className="img-fluid" />
                <h5>Product 1</h5>
              </div>
              <div className="col-md-4">
                <img src="https://i.pinimg.com/564x/c8/98/cb/c898cbca792ed9b3224d8a207f013a20.jpg" alt="Product 2" className="img-fluid" />
                <h5>Product 2</h5>
              </div>
              <div className="col-md-4">
                <img src="https://i.pinimg.com/564x/e6/96/d7/e696d70ef6c1ecb6ca77f6eed83fce9c.jpg" alt="Product 3" className="img-fluid" />
                <h5>Product 3</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <img src="https://i.pinimg.com/564x/b3/9b/37/b39b37707e3c62648b01a66813a6ecd4.jpg" alt="Product 4" className="img-fluid" />
                <h5>Product 4</h5>
              </div>
              <div className="col-md-4">
                <img src="https://i.pinimg.com/564x/cc/9f/55/cc9f556a925aa3d834073b3f2a8bc59d.jpg" alt="Product 5" className="img-fluid" />
                <h5>Product 5</h5>
              </div>
              <div className="col-md-4">
                <img src="https://i.pinimg.com/564x/ad/61/98/ad61982acd6d47efffcfd040291333e6.jpg" alt="Product 6" className="img-fluid" />
                <h5>Product 6</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
