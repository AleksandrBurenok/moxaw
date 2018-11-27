import React, {Component} from 'react'
import style from '../style.scss'
import Header from '../components/header/header'
import Advantage from '../components/Advantage/Advantage'

class Layout extends Component {
    render() {
        return (
                <React.Fragment>
                <div className={style.holder}>
                    <div className={style.wrapper}>
                        <Header/>
                    </div>
                </div>
                <div className={style.wrapper}>
                <Advantage/>
                </div>
                </React.Fragment>

        )
    }
}

export default Layout