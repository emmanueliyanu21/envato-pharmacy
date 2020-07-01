import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

    {/* <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 pt-2">
              <ul className="ul-contact-list">
                <li>
                  <i className="fa fa-phone pr-1"></i>
                  0706-XXXX-X14
                        </li>
                <li>
                  <i className="fa fa-envelope pr-1"></i>
                  info@envatocare.com
                        </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-6 pt-2 text-right">
              <ul className="ul-contact-list pad-social-media">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section> */}
  

    <section className="bk-blue">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="./images/envato-logo.png" alt="" />
                </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About Us</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Services
                            </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Product</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <img src="./images/card.png" className="img-fluid" alt="" />
                              
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-search"></i>
                    </a>
                  </li>
                </ul>

              </div>
            </div>
        </nav>
    </section>
        
    
 
    <section>
          <div className="container">
            <div className="row first-header mb-5">
              <div className="col-md-6 inner-text">
                <h1 className="">
                  Get Better Care For Your Health
                    </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolore explicabo odio
                        excepturi. Adipisci fuga eaque ducimus, necessitatibus, possimus deserunt </p>
                <button className="btn btn-welcome">Learn more
                        <i className="fa fa-angle-right pl-2"></i>
                </button>
              </div>
              <div className="col-md-6 header-img text-center">
                <img src="./images/health-header.png" className="img-fluid" alt="" />
                </div>
              </div>
              <div className="row form-space">
                <div className="col-md-3">
                  <input type="text" className="form-control" placeholder="Enter Name" />
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <select className="form-control" id="exampleFormControlSelect1">
                      <option>Select Doctor</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <select className="form-control" id="exampleFormControlSelect1">
                      <option>Select Department</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <button className="btn btn-search">Submit Now
                        <i className="fa fa-angle-right pl-2"></i>
                  </button>
                </div>
              </div>
            </div>
    </section>
    </div>
  );
}

export default App;
