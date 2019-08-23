import React from 'react'
import { Link } from 'gatsby';

export const NavLink = ({link, name}) => {

  return (
    <Link to={link}>
        {name}
    </Link>
  )

}

export default NavLink