import ReviewCard from "../reviewCard/ReviewCard"
import { v4 } from 'uuid'
import style from './reviewContainer.module.scss'
const reviewObj =[
    {
        id: v4(),
        img: '/images/image-colton.jpg',
        name: 'Colton Smith',
        text: '"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"',
    },
    {
        id: v4(),
        img: '/images/image-irene.jpg',
        name: 'Irene Roberts',
        text: '“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”',
    },
    {
        id: v4(),
        img: '/images/image-anne.jpg',
        name: 'Anne Wllace',
        text: '“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”',
    },
]


const ReviewContainer =()=>{
    return(
        <>
        <div>
            <div className={style['review-container']}>
                {
                    reviewObj.map((element) =>
                        <ReviewCard
                        {...element}
                        key={element.id}
                        />
                    )
                }
                
            </div>
        </div>
        </>
    )
}

export default ReviewContainer