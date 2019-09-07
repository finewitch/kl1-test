import React from 'react'
import { Link } from 'gatsby';

export const NavLink = ({link, name}) => {

  return (
    <Link to={link} className={'menu-' + name.toLowerCase()}>
        {name}
    </Link>
  )

}

export default NavLink