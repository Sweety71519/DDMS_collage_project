import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from "react-router-dom";
import page_404 from '../images/404-error.png';
class UnAuth extends React.Component {
render() {

    return (
     

        <div className="my-5 pt-sm-5 ">
          <div className="container">

            <div className="row">
              <div className="col-md-12">
                <div className="text-center">
                  <div>
                    <div className="row justify-content-center">
                      <div className="col-sm-4">
                        <div className="error-img">
                          <img src={page_404} alt="" className="img-fluid mx-auto d-block" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-uppercase mt-4"> Access Forbidden</h4><br/><h5>Error Code 403</h5>
                  <p className="text-muted">This area is forbidden. Turn back now!l</p>
                  <div className="mt-5">
                    <Link className="btn btn-primary waves-effect waves-light" to="/dashboard">Back to Dashboard</Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
     

    )
  }
}
export default UnAuth;