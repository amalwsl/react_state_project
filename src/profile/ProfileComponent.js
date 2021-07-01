
import React  from 'react'
import PropTypes from "prop-types";
import Img from '../Img.jpg'


const ProfileComponent = (props,HandleName) => {
    console.log(props)
    return ( 
        <div style={{border:"0.5px solid grey",borderRadius:"15px",width:"50%"}} >
            <h1 style={{color:"#037ef3"}} > {props.fullName} </h1>
            <h6> {props.profession} </h6>
            {props.children}
            <p>{props.bio} </p>   
            <img src={Img} width="20%" alt="profile-pic" />         
        </div>
     );
}  

ProfileComponent.defaultProps={
    fullName:"amal wesleti",
    bio:"this is bio",
    profession: "this is profession",
}
ProfileComponent.propTypes={
    // props:PropTypes.object.isRequired,
    fullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string,
}
 
export default ProfileComponent;