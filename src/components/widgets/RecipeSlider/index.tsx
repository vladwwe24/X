"use client"

import {RecipeType} from "types/Recipe"
import {SwiperProps, SwiperSlide} from "swiper/react"

import {Slider} from "components/features"

import Slide from "./ui/Slide"

const data: RecipeType[] = [
    {
        id: 1,
        name: "Сочные пельмени с фрунчозой",
        image: "https://cdn.food.ru/unsigned/fit/1080/810/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI1MDQwOS9qaUZEZ04uanBlZw.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus ex quis efficitur porttitor. Nulla vitae ante eu felis porta vehicula. Cras interdum pellentesque eros in egestas. Pellentesque tincidunt vulputate congue. Proin ornare venenatis elit eu rhoncus. Etiam nec molestie purus. Praesent rutrum in massa ut ultrices. Suspendisse fringilla magna et odio ornare, sit amet auctor mi consectetur."
    },
    {
        id: 2,
        name: "Сочные пельмени с фрунчозой",
        image: "https://cdn.food.ru/unsigned/fit/1080/810/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI1MDQwOS9qaUZEZ04uanBlZw.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus ex quis efficitur porttitor. Nulla vitae ante eu felis porta vehicula. Cras interdum pellentesque eros in egestas. Pellentesque tincidunt vulputate congue. Proin ornare venenatis elit eu rhoncus. Etiam nec molestie purus. Praesent rutrum in massa ut ultrices. Suspendisse fringilla magna et odio ornare, sit amet auctor mi consectetur."
    },
    {
        id: 3,
        name: "Сочные пельмени с фрунчозой",
        image: "https://cdn.food.ru/unsigned/fit/1080/810/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI1MDQwOS9qaUZEZ04uanBlZw.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus ex quis efficitur porttitor. Nulla vitae ante eu felis porta vehicula. Cras interdum pellentesque eros in egestas. Pellentesque tincidunt vulputate congue. Proin ornare venenatis elit eu rhoncus. Etiam nec molestie purus. Praesent rutrum in massa ut ultrices. Suspendisse fringilla magna et odio ornare, sit amet auctor mi consectetur."
    },
    {
        id: 4,
        name: "Сочные пельмени с фрунчозой",
        image: "https://cdn.food.ru/unsigned/fit/1080/810/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI1MDQwOS9qaUZEZ04uanBlZw.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus ex quis efficitur porttitor. Nulla vitae ante eu felis porta vehicula. Cras interdum pellentesque eros in egestas. Pellentesque tincidunt vulputate congue. Proin ornare venenatis elit eu rhoncus. Etiam nec molestie purus. Praesent rutrum in massa ut ultrices. Suspendisse fringilla magna et odio ornare, sit amet auctor mi consectetur."
    },
    {
        id: 5,
        name: "Сочные пельмени с фрунчозой",
        image: "https://cdn.food.ru/unsigned/fit/1080/810/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI1MDQwOS9qaUZEZ04uanBlZw.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus ex quis efficitur porttitor. Nulla vitae ante eu felis porta vehicula. Cras interdum pellentesque eros in egestas. Pellentesque tincidunt vulputate congue. Proin ornare venenatis elit eu rhoncus. Etiam nec molestie purus. Praesent rutrum in massa ut ultrices. Suspendisse fringilla magna et odio ornare, sit amet auctor mi consectetur."
    },
    {
        id: 6,
        name: "Сочные пельмени с фрунчозой",
        image: "https://cdn.food.ru/unsigned/fit/1080/810/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI1MDQwOS9qaUZEZ04uanBlZw.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus ex quis efficitur porttitor. Nulla vitae ante eu felis porta vehicula. Cras interdum pellentesque eros in egestas. Pellentesque tincidunt vulputate congue. Proin ornare venenatis elit eu rhoncus. Etiam nec molestie purus. Praesent rutrum in massa ut ultrices. Suspendisse fringilla magna et odio ornare, sit amet auctor mi consectetur."
    },
    {
        id: 7,
        name: "Сочные пельмени с фрунчозой",
        image: "https://cdn.food.ru/unsigned/fit/1080/810/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI1MDQwOS9qaUZEZ04uanBlZw.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus ex quis efficitur porttitor. Nulla vitae ante eu felis porta vehicula. Cras interdum pellentesque eros in egestas. Pellentesque tincidunt vulputate congue. Proin ornare venenatis elit eu rhoncus. Etiam nec molestie purus. Praesent rutrum in massa ut ultrices. Suspendisse fringilla magna et odio ornare, sit amet auctor mi consectetur."
    }
]

const RecipeSlider = () => {
    const settings: SwiperProps = {
        slidesPerView: 3.755,
        spaceBetween: 16,
        loop: true,
        preventClicks: false,
        preventClicksPropagation: false,
        preventInteractionOnTransition: true,
        breakpoints: {
            768: {allowTouchMove: true, slidesPerView: 2.45},
            1024: {spaceBetween: 24, slidesPerView: 2.95},
            1240: {spaceBetween: 24, slidesPerView: 3.75}
        }
    };

    return (
        <Slider api={settings}>
            {data.map(recipe => (
                <SwiperSlide key={recipe.id} virtualIndex={recipe.id}>
                    <Slide recipe={recipe}/>
                </SwiperSlide>
            ))}
        </Slider>
    )
}

export default RecipeSlider