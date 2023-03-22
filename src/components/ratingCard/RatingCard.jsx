import { v4 } from 'uuid'
import style from './ratingCard.module.scss'
const stars = 5

const RatingCard=({text})=>{
    return(
        <div className={style['rating-card']}>
                <div className={style['rating-card-stars-container']}>
                {[...Array(stars)].map(() => 
                <img key={v4()} src="/images/icon-star.svg" alt="" />)}
                </div>
               
                <p>{text}</p>
            </div>
    )
}

export default RatingCard