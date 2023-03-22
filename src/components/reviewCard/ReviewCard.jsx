import style from './reviewCard.module.scss'

const ReviewCard =({img,name,text})=>{
 
    return<div className={style['review-card']}>
                    <div className={style['review-card-personal']}>
                        <img className={style['review-card-img']} src={img} alt=""/>
                        <div>
                            <p className={style['review-card-personal-name']}>{name}</p>
                            <p className={style['review-card-personal-verified']}>verified</p>
                        </div>
                    </div>
                    <p>{text}</p>
                </div>
    
}

export default ReviewCard