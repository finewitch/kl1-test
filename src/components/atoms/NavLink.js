import React from 'react'
import { Link } from 'gatsby';

export const NavLink = ({link, name, num}) => {

  return (
    <Link to={link}>
        {name}
        <span>{ num }</span>
    </Link>
  )

}

export default NavLink