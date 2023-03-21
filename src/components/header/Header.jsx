import style from './header.module.scss'

const Header=()=>{
    return(
        <header className={style.header}>
            <div>
                <h1 className={style['header-title']}>10,000+ of our users love our products.</h1>
                <p>We only provide great products combined with excellent customer service.
                     See what our satisfied customers are saying about our services.</p>
            </div>
            <div>
            <div>
                <div>stars</div>
                <p>text</p>
            </div>
            <div>
                <div>stars</div>
                <p>text</p>
            </div>
            <div>
                <div>stars</div>
                <p>text</p>
            </div>
        </div>
        </header>
    )
}

export default Header