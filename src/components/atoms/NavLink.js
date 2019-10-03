import React from 'react'
import { Link } from 'gatsby';

export const NavLink = ({link, name, active}) => {

  if(active){
    return <Link to={link} className={'menu-link active menu-' + name.toLowerCase()}>
          {name}
      </Link>
  }else{
    return (
      
      <Link to={link} className={'menu-link menu-' + name.toLowerCase()}>
          {name}
      </Link>
    )
  }

}

export default NavLink