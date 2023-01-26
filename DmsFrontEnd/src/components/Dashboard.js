import React, { Component } from "react";
class Dashboard extends Component {
render() {
  return (
      <div>
      <div id="layout-wrapper">
        <div className="main-content">
         <div className="page-content">
          <div className="container-fluid">
            <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-flex align-items-center justify-content-between">
                                    <h4 className="mb-0">Dashboard</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                           
                                            <li className="breadcrumb-item active">Dashboard</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 col-xl-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="float-end mt-2">
                                            <div id="total-revenue-chart"></div>
                                        </div>
                                        <div>
                                            <h4 className="mb-1 mt-1">$<span data-plugin="counterup">34,152</span></h4>
                                            <p className="text-muted mb-0">Total Revenue</p>
                                        </div>
                                        <p className="text-muted mt-3 mb-0"><span className="text-success me-1"><i className="mdi mdi-arrow-up-bold me-1"></i>2.65%</span> since last week
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-xl-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="float-end mt-2">
                                            <div id="orders-chart"> </div>
                                        </div>
                                        <div>
                                            <h4 className="mb-1 mt-1"><span data-plugin="counterup">5,643</span></h4>
                                            <p className="text-muted mb-0">Orders</p>
                                        </div>
                                        <p className="text-muted mt-3 mb-0"><span className="text-danger me-1"><i className="mdi mdi-arrow-down-bold me-1"></i>0.82%</span> since last week
                                        </p>
                                    </div>
                                </div>
                            </div> 

                            <div className="col-md-6 col-xl-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="float-end mt-2">
                                            <div id="customers-chart"> </div>
                                        </div>
                                        <div>
                                            <h4 className="mb-1 mt-1"><span data-plugin="counterup">45,254</span></h4>
                                            <p className="text-muted mb-0">Customers</p>
                                        </div>
                                        <p className="text-muted mt-3 mb-0"><span className="text-danger me-1"><i className="mdi mdi-arrow-down-bold me-1"></i>6.24%</span> since last week
                                        </p>
                                    </div>
                                </div>
                            </div> 

                            <div className="col-md-6 col-xl-3">

                                <div className="card">
                                    <div className="card-body">
                                        <div className="float-end mt-2">
                                            <div id="growth-chart"></div>
                                        </div>
                                        <div>
                                            <h4 className="mb-1 mt-1">+ <span data-plugin="counterup">12.58</span>%</h4>
                                            <p className="text-muted mb-0">Growth</p>
                                        </div>
                                        <p className="text-muted mt-3 mb-0"><span className="text-success me-1"><i className="mdi mdi-arrow-up-bold me-1"></i>10.51%</span> since last week
                                        </p>
                                    </div>
                                </div>
                            </div> 
                        </div> 

                        <div className="row">
                            <div className="col-xl-8">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="float-end">
                                            <div className="dropdown">
                                                <a className="dropdown-toggle text-reset" href="#" id="dropdownMenuButton5"
                                                    data-bs-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                    <span className="fw-semibold">Sort By:</span> <span className="text-muted">Yearly<i className="mdi mdi-chevron-down ms-1"></i></span>
                                                </a>

                                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton5">
                                                    <a className="dropdown-item" href="#">Monthly</a>
                                                    <a className="dropdown-item" href="#">Yearly</a>
                                                    <a className="dropdown-item" href="#">Weekly</a>
                                                </div>
                                            </div>
                                        </div>
                                        <h4 className="card-title mb-4">Sales Analytics</h4>

                                        <div className="mt-1">
                                            <ul className="list-inline main-chart mb-0">
                                                <li className="list-inline-item chart-border-left me-0 border-0">
                                                    <h3 className="text-primary">$<span data-plugin="counterup">2,371</span><span className="text-muted d-inline-block font-size-15 ms-3">Income</span></h3>
                                                </li>
                                                <li className="list-inline-item chart-border-left me-0">
                                                    <h3><span data-plugin="counterup">258</span><span className="text-muted d-inline-block font-size-15 ms-3">Sales</span>
                                                    </h3>
                                                </li>
                                                <li className="list-inline-item chart-border-left me-0">
                                                    <h3><span data-plugin="counterup">3.6</span>%<span className="text-muted d-inline-block font-size-15 ms-3">Conversation Ratio</span></h3>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="mt-3">
                                            <div id="sales-analytics-chart" className="apex-charts" dir="ltr"></div>
                                        </div>
                                    </div>
                                </div> 
                            </div> 

                            <div className="col-xl-4">
                                <div className="card bg-primary">
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            <div className="col-sm-8">
                                                <p className="text-white font-size-18">Enhance your <b>Campaign</b> for better outreach <i className="mdi mdi-arrow-right"></i></p>
                                                <div className="mt-4">
                                                    <a href="javascript: void(0);" className="btn btn-success waves-effect waves-light">Upgrade Account!</a>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="mt-4 mt-sm-0">
                                    <img src="assets/images/setup-analytics-amico.svg" className="img-fluid" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div> 

                                <div className="card">
                                    <div className="card-body">
                                        <div className="float-end">
                                            <div className="dropdown">
                                                <a className="dropdown-toggle text-reset" href="#" id="dropdownMenuButton1"
                                                    data-bs-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                    <span className="fw-semibold">Sort By:</span> <span className="text-muted">Yearly<i className="mdi mdi-chevron-down ms-1"></i></span>
                                                </a>

                                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                                                    <a className="dropdown-item" href="#">Monthly</a>
                                                    <a className="dropdown-item" href="#">Yearly</a>
                                                    <a className="dropdown-item" href="#">Weekly</a>
                                                </div>
                                            </div>
                                        </div>

                                        <h4 className="card-title mb-4">Top Selling Products</h4>


                                        <div className="row align-items-center g-0 mt-3">
                                            <div className="col-sm-3">
                                                <p className="text-truncate mt-1 mb-0"><i className="mdi mdi-circle-medium text-primary me-2"></i> Desktops </p>
                                            </div>

                                            <div className="col-sm-9">
                                                <div className="progress mt-1" style={{height: '6px'}}>
                                                    <div className="progress-bar progress-bar bg-primary" role="progressbar"
                                                        style={{width: '52%'}} aria-valuenow="52" aria-valuemin="0"
                                                        aria-valuemax="52">
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 

                                        <div className="row align-items-center g-0 mt-3">
                                            <div className="col-sm-3">
                                                <p className="text-truncate mt-1 mb-0"><i className="mdi mdi-circle-medium text-info me-2"></i> iPhones </p>
                                            </div>
                                            <div className="col-sm-9">
                                                <div className="progress mt-1" style={{height: '6px'}}>
                                                    <div className="progress-bar progress-bar bg-info" role="progressbar"
                                                        style={{width: '45%'}} aria-valuenow="45" aria-valuemin="0"
                                                        aria-valuemax="45">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row align-items-center g-0 mt-3">
                                            <div className="col-sm-3">
                                                <p className="text-truncate mt-1 mb-0"><i className="mdi mdi-circle-medium text-success me-2"></i> Android </p>
                                            </div>
                                            <div className="col-sm-9">
                                                <div className="progress mt-1" style={{height: '6px'}}>
                                                    <div className="progress-bar progress-bar bg-success" role="progressbar"
                                                        style={{width: '48%'}} aria-valuenow="48" aria-valuemin="0"
                                                        aria-valuemax="48">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row align-items-center g-0 mt-3">
                                            <div className="col-sm-3">
                                                <p className="text-truncate mt-1 mb-0"><i className="mdi mdi-circle-medium text-warning me-2"></i> Tablets </p>
                                            </div>
                                            <div className="col-sm-9">
                                                <div className="progress mt-1" style={{height: '6px'}}>
                                                    <div className="progress-bar progress-bar bg-warning" role="progressbar"
                                                        style={{width: '78%'}} aria-valuenow="78" aria-valuemin="0"
                                                        aria-valuemax="78">
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 

                                        <div className="row align-items-center g-0 mt-3">
                                            <div className="col-sm-3">
                                                <p className="text-truncate mt-1 mb-0"><i className="mdi mdi-circle-medium text-purple me-2"></i> Cables </p>
                                            </div>
                                            <div className="col-sm-9">
                                                <div className="progress mt-1" style={{height: '6px'}}>
                                                    <div className="progress-bar progress-bar bg-purple" role="progressbar"
                                                        style={{width: '63%'}} aria-valuenow="63" aria-valuemin="0"
                                                        aria-valuemax="63">
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 

                                    </div> 
                                </div>
                            </div>
                        </div> 

                        <div className="row">
                            <div className="col-xl-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="float-end">
                                            <div className="dropdown">
                                                <a className=" dropdown-toggle" href="#" id="dropdownMenuButton2"
                                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span className="text-muted">All Members<i className="mdi mdi-chevron-down ms-1"></i></span>
                                                </a>

                                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton2">
                                                    <a className="dropdown-item" href="#">Locations</a>
                                                    <a className="dropdown-item" href="#">Revenue</a>
                                                    <a className="dropdown-item" href="#">Join Date</a>
                                                </div>
                                            </div>
                                        </div>
                                        <h4 className="card-title mb-4">Top Users</h4>

                                        <div data-simplebar style={{maxHeight: '336px'}}>
                                            <div className="table-responsive">
                                                <table className="table table-borderless table-centered table-nowrap">
                                                    <tbody>
                                                        <tr>
        <td style={{width: '20px'}}><img src="assets/images/users/avatar-4.jpg" className="avatar-xs rounded-circle " alt="..." /></td>
                                                            <td>
                                                                <h6 className="font-size-15 mb-1 fw-normal">Glenn Holden</h6>
                                                                <p className="text-muted font-size-13 mb-0"><i className="mdi mdi-map-marker"></i> Nevada</p>
                                                            </td>
                                                            <td><span className="badge bg-soft-danger font-size-12">Cancel</span></td>
                                                            <td className="text-muted fw-semibold text-end"><i className="icon-xs icon me-2 text-success" data-feather="trending-up"></i>$250.00</td>
                                                        </tr>
                                                        <tr>
                             <td><img src="assets/images/users/avatar-5.jpg" className="avatar-xs rounded-circle " alt="..." /></td>
                                                            <td>
                                                                <h6 className="font-size-15 mb-1 fw-normal">Lolita Hamill</h6>
                                                                <p className="text-muted font-size-13 mb-0"><i className="mdi mdi-map-marker"></i> Texas</p>
                                                            </td>
                                                            <td><span className="badge bg-soft-success font-size-12">Success</span></td>
                                                            <td className="text-muted fw-semibold text-end"><i className="icon-xs icon me-2 text-danger" data-feather="trending-down"></i>$110.00</td>
                                                        </tr>
                                                        <tr>
                         <td><img src="assets/images/users/avatar-6.jpg" className="avatar-xs rounded-circle " alt="..." /></td>
                                                            <td>
                                                                <h6 className="font-size-15 mb-1 fw-normal">Robert Mercer</h6>
                                                                <p className="text-muted font-size-13 mb-0"><i className="mdi mdi-map-marker"></i> California</p>
                                                            </td>
                                                            <td><span className="badge bg-soft-info font-size-12">Active</span></td>
                                                            <td className="text-muted fw-semibold text-end"><i className="icon-xs icon me-2 text-success" data-feather="trending-up"></i>$420.00</td>
                                                        </tr>
                                                        <tr>
                     <td><img src="assets/images/users/avatar-7.jpg" className="avatar-xs rounded-circle " alt="..." /></td>
                                                            <td>
                                                                <h6 className="font-size-15 mb-1 fw-normal">Marie Kim</h6>
                                                                <p className="text-muted font-size-13 mb-0"><i className="mdi mdi-map-marker"></i> Montana</p>
                                                            </td>
                                                            <td><span className="badge bg-soft-warning font-size-12">Pending</span></td>
                                                            <td className="text-muted fw-semibold text-end"><i className="icon-xs icon me-2 text-danger" data-feather="trending-down"></i>$120.00</td>
                                                        </tr>
                                                        <tr>
                            <td><img src="assets/images/users/avatar-8.jpg" className="avatar-xs rounded-circle " alt="..." /></td>
                                                            <td>
                                                                <h6 className="font-size-15 mb-1 fw-normal">Sonya Henshaw</h6>
                                                                <p className="text-muted font-size-13 mb-0"><i className="mdi mdi-map-marker"></i> Colorado</p>
                                                            </td>
                                                            <td><span className="badge bg-soft-info font-size-12">Active</span></td>
                                                            <td className="text-muted fw-semibold text-end"><i className="icon-xs icon me-2 text-success" data-feather="trending-up"></i>$112.00</td>
                                                        </tr>
                                                        <tr>
                                 <td><img src="assets/images/users/avatar-2.jpg" className="avatar-xs rounded-circle " alt="..." /></td>
                                                            <td>
                                                                <h6 className="font-size-15 mb-1 fw-normal">Marie Kim</h6>
                                                                <p className="text-muted font-size-13 mb-0"><i className="mdi mdi-map-marker"></i> Australia</p>
                                                            </td>
                                                            <td><span className="badge bg-soft-success font-size-12">Success</span></td>
                                                            <td className="text-muted fw-semibold text-end"><i className="icon-xs icon me-2 text-danger" data-feather="trending-down"></i>$120.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td><img src="assets/images/users/avatar-1.jpg" className="avatar-xs rounded-circle " alt="..." /></td>
                                                            <td>
                                                                <h6 className="font-size-15 mb-1 fw-normal">Sonya Henshaw</h6>
                                                                <p className="text-muted font-size-13 mb-0"><i className="mdi mdi-map-marker"></i> India</p>
                                                            </td>
                                                            <td><span className="badge bg-soft-danger font-size-12">Cancel</span></td>
                                                            <td className="text-muted fw-semibold text-end"><i className="icon-xs icon me-2 text-success" data-feather="trending-up"></i>$112.00</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div> 
                                        </div> 
                                    </div>
                                </div> 
                            </div>

                            <div className="col-xl-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="float-end">
                                            <div className="dropdown">
                                                <a className="dropdown-toggle" href="#" id="dropdownMenuButton3"
                                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span className="text-muted">Recent<i className="mdi mdi-chevron-down ms-1"></i></span>
                                                </a>

                                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton3">
                                                    <a className="dropdown-item" href="#">Recent</a>
                                                    <a className="dropdown-item" href="#">By Users</a>
                                                </div>
                                            </div>
                                        </div>

                                        <h4 className="card-title mb-4">Recent Activity</h4>

                                        <ol className="activity-feed mb-0 ps-2" data-simplebar style={{maxHeight: '336px'}}>
                                            <li className="feed-item">
                                                <div className="feed-item-list">
                                                    <p className="text-muted mb-1 font-size-13">Today<small className="d-inline-block ms-1">12:20 pm</small></p>
                                                    <p className="mb-0">Andrei Coman magna sed porta finibus, risus
                                                        posted a new article: <span className="text-primary">Forget UX
                                                            Rowland</span></p>
                                                </div>
                                            </li>
                                            <li className="feed-item">
                                                <p className="text-muted mb-1 font-size-13">22 Jul, 2020 <small className="d-inline-block ms-1">12:36 pm</small></p>
                                                <p className="mb-0">Andrei Coman posted a new article: <span
                                                        className="text-primary">Designer Alex</span></p>
                                            </li>
                                            <li className="feed-item">
                                                <p className="text-muted mb-1 font-size-13">18 Jul, 2020 <small className="d-inline-block ms-1">07:56 am</small></p>
                                                <p className="mb-0">Zack Wetass, sed porta finibus, risus Chris Wallace
                                                    Commented <span className="text-primary"> Developer Moreno</span></p>
                                            </li>
                                            <li className="feed-item">
                                                <p className="text-muted mb-1 font-size-13">10 Jul, 2020 <small className="d-inline-block ms-1">08:42 pm</small></p>
                                                <p className="mb-0">Zack Wetass, Chris combined Commented <span
                                                        className="text-primary">UX Murphy</span></p>
                                            </li>

                                            <li className="feed-item">
                                                <p className="text-muted mb-1 font-size-13">23 Jun, 2020 <small className="d-inline-block ms-1">12:22 am</small></p>
                                                <p className="mb-0">Zack Wetass, sed porta finibus, risus Chris Wallace
                                                    Commented <span className="text-primary"> Developer Moreno</span></p>
                                            </li>
                                            <li className="feed-item pb-1">
                                                <p className="text-muted mb-1 font-size-13">20 Jun, 2020 <small className="d-inline-block ms-1">09:48 pm</small></p>
                                                <p className="mb-0">Zack Wetass, Chris combined Commented <span
                                                        className="text-primary">UX Murphy</span></p>
                                            </li>

                                        </ol>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4">
                                <div className="card">
                                    <div className="card-body">

                                        <div className="float-end">
                                            <div className="dropdown">
                                                <a className="dropdown-toggle" href="#" id="dropdownMenuButton4"
                                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span className="text-muted">Monthly<i className="mdi mdi-chevron-down ms-1"></i></span>
                                                </a>

                                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton4">
                                                    <a className="dropdown-item" href="#">Yearly</a>
                                                    <a className="dropdown-item" href="#">Monthly</a>
                                                    <a className="dropdown-item" href="#">Weekly</a>
                                                </div>
                                            </div>
                                        </div>

                                        <h4 className="card-title">Social Source</h4>

                                        <div className="text-center">
                                            <div className="avatar-sm mx-auto mb-4">
                                                <span className="avatar-title rounded-circle bg-soft-primary font-size-24">
                                                        <i className="mdi mdi-facebook text-primary"></i>
                                                    </span>
                                            </div>
                                            <p className="font-16 text-muted mb-2"></p>
                                            <h5><a href="#" className="text-dark">Facebook - <span className="text-muted font-16">125 sales</span> </a></h5>
                                            <p className="text-muted">Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.</p>
                                            <a href="#" className="text-reset font-16">Learn more <i className="mdi mdi-chevron-right"></i></a>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-4">
                                                <div className="social-source text-center mt-3">
                                                    <div className="avatar-xs mx-auto mb-3">
                                                        <span className="avatar-title rounded-circle bg-primary font-size-16">
                                                                <i className="mdi mdi-facebook text-white"></i>
                                                            </span>
                                                    </div>
                                                    <h5 className="font-size-15">Facebook</h5>
                                                    <p className="text-muted mb-0">125 sales</p>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="social-source text-center mt-3">
                                                    <div className="avatar-xs mx-auto mb-3">
                                                        <span className="avatar-title rounded-circle bg-info font-size-16">
                                                                <i className="mdi mdi-twitter text-white"></i>
                                                            </span>
                                                    </div>
                                                    <h5 className="font-size-15">Twitter</h5>
                                                    <p className="text-muted mb-0">112 sales</p>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="social-source text-center mt-3">
                                                    <div className="avatar-xs mx-auto mb-3">
                                                        <span className="avatar-title rounded-circle bg-pink font-size-16">
                                                                <i className="mdi mdi-instagram text-white"></i>
                                                            </span>
                                                    </div>
                                                    <h5 className="font-size-15">Instagram</h5>
                                                    <p className="text-muted mb-0">104 sales</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-3 text-center">
                                            <a href="#" className="text-primary font-size-14 fw-medium">View All Sources <i className="mdi mdi-chevron-right"></i></a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                      
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-4">Latest Transaction</h4>
                                        <div className="table-responsive">
                                            <table className="table table-centered table-nowrap mb-0">
                                                <thead className="table-light">
                                                    <tr>
                                                        <th style={{width: '20px'}}>
                                                            <div className="form-check font-size-16">
                                                                <input type="checkbox" readOnly className="form-check-input" id="customCheck1"  />
                                                                <label className="form-check-label" htmlFor="customCheck1">&nbsp;</label>
                                                            </div>
                                                        </th>
                                                        <th>Order ID</th>
                                                        <th>Billing Name</th>
                                                        <th>Date</th>
                                                        <th>Total</th>
                                                        <th>Payment Status</th>
                                                        <th>Payment Method</th>
                                                        <th>View Details</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check font-size-16">
                                                                <input type="checkbox" readOnly className="form-check-input" id="customCheck2"  />
                                                                <label className="form-check-label" htmlFor="customCheck2">&nbsp;</label>
                                                            </div>
                                                        </td>
                                                        <td><a href="javascript: void(0);" className="text-body fw-bold">#MB2540</a> </td>
                                                        <td>Neal Matthews</td>
                                                        <td>
                                                            07 Oct, 2019
                                                        </td>
                                                        <td>
                                                            $400
                                                        </td>
                                                        <td>
                                                            <span className="badge rounded-pill bg-soft-success font-size-12">Paid</span>
                                                        </td>
                                                        <td>
                                                            <i className="fab fa-cc-mastercard me-1"></i> Mastercard
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light">
                                                                View Details
                                                            </button>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="form-check font-size-16">
                                                                <input type="checkbox" readOnly className="form-check-input" id="customCheck3" />
                                                                <label className="form-check-label" htmlFor="customCheck3">&nbsp;</label>
                                                            </div>
                                                        </td>
                                                        <td><a href="javascript: void(0);" className="text-body fw-bold">#MB2541</a> </td>
                                                        <td>Jamal Burnett</td>
                                                        <td>
                                                            07 Oct, 2019
                                                        </td>
                                                        <td>
                                                            $380
                                                        </td>
                                                        <td>
                                                            <span className="badge rounded-pill bg-soft-danger font-size-12">Chargeback</span>
                                                        </td>
                                                        <td>
                                                            <i className="fab fa-cc-visa me-1"></i> Visa
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light">
                                                                View Details
                                                            </button>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="form-check font-size-16">
                                                                <input type="checkbox" readOnly className="form-check-input" id="customCheck4"  />
                                                                <label className="form-check-label" htmlFor="customCheck4">&nbsp;</label>
                                                            </div>
                                                        </td>
                                                        <td><a href="javascript: void(0);" className="text-body fw-bold">#MB2542</a> </td>
                                                        <td>Juan Mitchell</td>
                                                        <td>
                                                            06 Oct, 2019
                                                        </td>
                                                        <td>
                                                            $384
                                                        </td>
                                                        <td>
                                                            <span className="badge rounded-pill bg-soft-success font-size-12">Paid</span>
                                                        </td>
                                                        <td>
                                                            <i className="fab fa-cc-paypal me-1"></i> Paypal
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light">
                                                                View Details
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check font-size-16">
                                                                <input type="checkbox" readOnly className="form-check-input" id="customCheck5" />
                                                                <label className="form-check-label" htmlFor="customCheck5">&nbsp;</label>
                                                            </div>
                                                        </td>
                                                        <td><a href="javascript: void(0);" className="text-body fw-bold">#MB2543</a> </td>
                                                        <td>Barry Dick</td>
                                                        <td>
                                                            05 Oct, 2019
                                                        </td>
                                                        <td>
                                                            $412
                                                        </td>
                                                        <td>
                                                            <span className="badge rounded-pill bg-soft-success font-size-12">Paid</span>
                                                        </td>
                                                        <td>
                                                            <i className="fab fa-cc-mastercard me-1"></i> Mastercard
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light">
                                                                View Details
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check font-size-16">
                                                                <input type="checkbox" readOnly className="form-check-input" id="customCheck6" />
                                                                <label className="form-check-label" htmlFor="customCheck6">&nbsp;</label>
                                                            </div>
                                                        </td>
                                                        <td><a href="javascript: void(0);" className="text-body fw-bold">#MB2544</a> </td>
                                                        <td>Ronald Taylor</td>
                                                        <td>
                                                            04 Oct, 2019
                                                        </td>
                                                        <td>
                                                            $404
                                                        </td>
                                                        <td>
                                                            <span className="badge rounded-pill bg-soft-warning font-size-12">Refund</span>
                                                        </td>
                                                        <td>
                                                            <i className="fab fa-cc-visa me-1"></i> Visa
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light">
                                                                View Details
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check font-size-16">
                                                                <input type="checkbox" readOnly className="form-check-input" id="customCheck7" />
                                                                <label className="form-check-label" htmlFor="customCheck7">&nbsp;</label>
                                                            </div>
                                                        </td>
                                                        <td><a href="javascript: void(0);" className="text-body fw-bold">#MB2545</a> </td>
                                                        <td>Jacob Hunter</td>
                                                        <td>
                                                            04 Oct, 2019
                                                        </td>
                                                        <td>
                                                            $392
                                                        </td>
                                                        <td>
                                                            <span className="badge rounded-pill bg-soft-success font-size-12">Paid</span>
                                                        </td>
                                                        <td>
                                                            <i className="fab fa-cc-paypal me-1"></i> Paypal
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light">
                                                                View Details
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                  


                    </div> 
                </div>
            </div>
           

        </div>
      </div>
  );
}
}

export default Dashboard;