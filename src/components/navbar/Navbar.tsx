import React from 'react'
import './Navbar.scss'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src='/logo.svg' alt='' />
                <span>lamadmin</span>
            </div>
            <div className='icons'>
                <img src="/search.svg" alt="" className='icon'/>
                <img src="/app.svg" alt="" className='icon'/>
                <img src="/expand.svg" alt="" className='icon'/>
                <div className='notification'>
                    <img src="/notifications.svg" alt="" />
                    <span>2</span>
                </div>
                <div className='user'>
                    <img src='https://blogpfthumb-phinf.pstatic.net/data5/2005/2/19/95/%B0%A1%BF%C2%BB%FD%C0%CF_%BC%B1%B9%B0_small.jpg?type=w161' alt="" />
                    <span>Jane</span>
                </div>
                <img src="/settings.svg" alt="" className='icon'/>
            </div>
        </div>
    )
}

export default Navbar