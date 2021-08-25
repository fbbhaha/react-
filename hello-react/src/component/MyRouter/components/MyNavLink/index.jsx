import React from 'react'
import { NavLink } from 'react-router-dom'
export default function MyNavLink(props) {
    {/* navlink 会自动给选中的标签加上active类 activeClassName可以修改默认的类名 */ }
    return (
        <NavLink {...props}></NavLink>
    )
}
