import React from 'react';
import Button from 'react-bootstrap/Button';
import {FaArrowLeft } from 'react-icons/fa';
import { Link } from "react-router-dom";

class UnAuth extends React.Component {
    msgbx={
        height: "200px",
        width: "380px",
        position: 'absolute',
        top: "50%",
        left: "50%",
        marginTop: "-100px",
        marginLeft: "50px",
        color: "#FFF",
        fontFamily: "Roboto",
        fontWeight: 300,
      }
      svg= {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: '-250px',
        marginLeft: '-400px'
      }
      boxh1= {
        fontSize: "60px",
        lineHeight: "46px",
        marginBottom: "40px"
      }
      polygon={
        polygon1:
        {
          animation: 'float 1s infinite ease-in-out alternate',
        
        },
        polygon2:
        {
          animation: 'float 1s infinite ease-in-out alternate',
          animationDelay: '.2s' 
        },
        polygon3:
        {
          animation: 'float 1s infinite ease-in-out alternate',
          animationDelay: '.4s'
        },
        polygon4:
        {
          animation: 'float 1s infinite ease-in-out alternate',
          animationDelay: '.6s' 
        },
        polygon5:
        {
          animation: 'float 1s infinite ease-in-out alternate',
          animationDelay: '.8s' 
        }
      }
     
    render() {
        
        return (
            <div className="backcolor">
              <div id="layout-wrapper" style={{background:'#2F3242'}} >
     
              <svg style={this.svg} width="380px" height="500px" viewBox="0 0 837 1045" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    {...{ 'xmlns:xlink': "http://www.w3.org/1999/xlink" }} {...{ 'xmlns:sketch': "http://www.bohemiancoding.com/sketch/ns" }}>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" {...{ 'sketch:type': "MSPage" }}>
                        <path style={this.polygon.polygon1} d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z" id="Polygon-1" stroke="#007FB2" stroke-width="6" {...{ 'sketch:type': "MSShapeGroup" }}></path>
                        <path  style={this.polygon.polygon2} d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z" id="Polygon-2" stroke="#EF4A5B" stroke-width="6" {...{ 'sketch:type': "MSShapeGroup" }}></path>
                        <path  style={this.polygon.polygon3} d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z" id="Polygon-3" stroke="#795D9C" stroke-width="6" {...{ 'sketch:type': "MSShapeGroup" }}></path>
                        <path  style={this.polygon.polygon4} d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z" id="Polygon-4" stroke="#F2773F" stroke-width="6" {...{ 'sketch:type': "MSShapeGroup" }}></path>
                        <path  style={this.polygon.polygon5} d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z" id="Polygon-5" stroke="#36B455" stroke-width="6" {...{ 'sketch:type': "MSShapeGroup" }}></path>
                    </g>
                </svg>
                <div className="message-box" style={this.msgbx}> 
                    <h1 style={this.boxh1}>403</h1>
                    <p>Access Denied</p>
                    <div className="buttons-con">
                        <div className="action-link-wrap">
                        <Link to="/dashboard"> <Button variant="warning"> <FaArrowLeft /> Go Back  
                        </Button></Link>
                        </div>
                    </div>
                </div>
             </div>
             </div>
          
        )
    }
}
export default UnAuth;