import React, {Component} from 'react'
import style from '../../style.css'
import logo from '../../images/waxom.png'

class Header extends Component {
    render() {
        return (
            <header className={style.header}>
                <div>
                    <a className={style.logo} href={'/'}><img src={logo} alt="Waxom" /></a>
                </div>
                <Menu />
            </header>
        )
    }
}

class Menu extends Component {
    render () {
        let menus = [
            'Home',
            'About Us',
            'Portfolio',
            'Features',
            'Blog',
            'Contact'
        ];
        return <nav>
            <ul className={style.menu}>
                {menus.map((value, index) => {
                    return <li key={index}><Link label={value} /></li>
                })}
            </ul>
        </nav>

    }
}

class Link extends Component {
    render() {
        const url = "/" + this.props.label.toLowerCase().trim().replace(" ", "-");
        return <a href={url}>{this.props.label}</a>
    }
}

export default Header