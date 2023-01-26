import React, { Component } from "react";
import axios from "axios";
class Login extends Component {
 constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      msg: "",
      btnstatus:true,
      msgColor:"",
      redirect: false
    };
    }
  onChangehandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let data = {};
    data[name] = value;
    this.setState(data);
  };

  onSignInHandler = () => {
    this.setState({ btnstatus: false });
    let  baseURL= process.env.REACT_APP_API_URL;
    axios
      .post(baseURL+"/login", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((response) => {
         console.log(response.data.success);
        this.setState({ btnstatus: true });
      
        if (response.data.status === 200) {
          this.props.changeAuth(true);
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("userData", JSON.stringify(response.data.user));
            localStorage.setItem("token", JSON.stringify(response.data.access_token));
          this.setState({
            msg: response.data.message,
            msgColor:"green",
             redirect: true,
          }); 
          window.location.href="/dashboard";
         // this.props.navigation("/dashboard") ;

        }
        if (
          response.data.status === "failed" &&
          response.data.success === undefined
        ) {
          this.setState({
            msg: response.data.message,
             msgColor:"red",
          });
          setTimeout(() => {
            this.setState({ msg: ""});
          }, 2000);
        } else if (
          response.data.status === "failed" &&
          response.data.success === false
        ) {
          this.setState({
            msg: response.data.message,
            msgColor:"red",
          });
          setTimeout(() => {
            this.setState({ msg: "" });
          }, 2000);
        }
      })
      .catch((error) => {
        
        console.log(error);
      });
  };
   componentDidMount(){
  document.body.classList.add("authentication-bg");
  }
  render() {
  return (
    <div >
     <div className="account-pages my-5 pt-sm-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <a href="index.html" className="mb-5 d-block auth-logo">
                                <img src="assets/images/20210824155405.png" alt=""  className="logo logo-dark"/>
                                <img src="assets/images/20210824155405.png" alt=""  className="logo logo-light"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card">
                           
                            <div className="card-body p-4"> 
                                <div className="text-center mt-2">
                                    <h5 className="text-primary">Welcome Back !</h5>
                                    <p className="text-muted">Sign in to continue to DMS.</p>
                                </div>
                                <div className="p-2 mt-4">
                                <p style={{color:this.state.msgColor,fontWeight:"bold"}}>{this.state.msg}</p>

                                    <form action="">
        
                                        <div className="mb-3">
                                            <label style={{marginRight: "700px"}} className="form-label" htmlFor="username">Username</label>
                                     <input type="text" className="form-control" name="username" id="username"
                                      placeholder="Enter username"  value={this.state.username}  onChange={this.onChangehandler} autoComplete="off"/>
                                        </div>
                
                                        <div className="mb-3">
                                        <label style={{marginRight: "700px"}}  className="form-label" htmlFor="userpassword">Password</label>
                                   <input type="password" className="form-control" id="password" name="password" 
                                    placeholder="Enter password" value={this.state.password} onChange={this.onChangehandler}  autoComplete="off"/>
                                        </div>
                
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="auth-remember-check" />
                                            <label className="form-check-label" htmlFor="auth-remember-check">Remember me</label>
                                        </div>
                                        
                                  <div className="mt-3 text-end">
                                    <button className="btn btn-primary w-sm waves-effect waves-light" type="button" disabled={!this.state.btnstatus}   onClick={this.onSignInHandler} >Log In</button>
                                    </div>
                                </form>
                                </div>
            
                            </div>
                        </div>

                        <div className="mt-5 text-center">
                            <p>©  Mawai Infotech Ltd</p>
                        </div>

                    </div>
                </div>
                
            </div>
           
        </div>
</div>
  );
}
}

export default Login;