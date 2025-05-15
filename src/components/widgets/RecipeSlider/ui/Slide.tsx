"use client"

import s from "./Slide.module.scss"

import {FC} from "react"
import {RecipeType} from "types/Recipe"

interface SlideProps {
    recipe: RecipeType
}

const Slide:FC<SlideProps> = ({recipe}) => {
    return (
        <div className={s.wrapper}>
            <a className={s.slide}>
                <div className={s.contentWrapper}>
                    <div className={s.header}>
                        <img src={recipe.image} alt="image" className={s.image}/>
                        <p className={s.articleType}>рецепт</p>
                    </div>
                    <div className={s.bottom}>
                        <h3 className={s.title}>{recipe.name}</h3>
                        <div className={s.description}>{recipe.description}</div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Slide;