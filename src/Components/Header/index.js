import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
  <div>
    <NavLink className='navbar-brand' to='/'>My Blog</NavLink>
  </div>
  <div >
                    <NavLink className="nav-link" to="/posts/create">Create Posts</NavLink> 
                </div>
</nav>
    </div>
  )
}

export default Header
