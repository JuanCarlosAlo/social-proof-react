import RatingCard from '../ratingCard/RatingCard'
import style from './header.module.scss'
import { v4 } from 'uuid'
const cards = [
    {id: v4(),
    text: 'Rated 5 Stars in Reviews'},
    {id: v4(),
    text: 'Rated 5 Stars in Report Guru'},
    {id: v4(),
    text: 'Rated 5 Stars in BestTech'}
]
const Header=()=>{
    return(
        <header className={style.header}>
            <div className={style['header-top']}> 
                
                <h1 className={style['header-title']}>10,000+ of our users love our products.</h1>
                <p className={style['header-text']}>We only provide great products combined with excellent customer service.
                     See what our satisfied customers are saying about our services.</p>
            </div>
            <div className={style['header-cards']}>
            {(cards).map((e) => 
                <RatingCard text={e.text} key={e.id}/>)}
            
            </div>
        </header>
    )
}

export default Header