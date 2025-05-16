"use client"

import s from "./Slider.module.scss"

import {FC, ReactNode, useRef} from "react"

import {Swiper, SwiperProps} from 'swiper/react'
import {Navigation} from "swiper/modules"

import 'swiper/scss'
import "swiper/scss/navigation"

import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

interface SliderProps {
    children: ReactNode
    className?: string
    api?: SwiperProps | undefined
}

const Slider: FC<SliderProps> = ({className = "", children, api}) => {
    const prevRef = useRef<HTMLButtonElement | null>(null)
    const nextRef = useRef<HTMLButtonElement | null>(null)

    const classNames = [s.slider, className].join(" ")

    return (
        <div className={s.sliderSection}>
            <Swiper
                className={classNames}
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={3}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,

                }}
                onBeforeInit={(swiper) => {
                    setTimeout(() => {
                        if (typeof swiper.params.navigation !== "boolean") {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;

                            swiper.navigation.destroy();
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }
                    });
                }}
                {...api}
            >
                {children}
            </Swiper>
            <div className={s.nav}>
                <button ref={prevRef} className={[s.btn, s.prevBtn].join(" ")} role="slider-btn">
                    <IoIosArrowBack/>
                </button>
                <button ref={nextRef} className={[s.btn, s.nextBtn].join(" ")} role="slider-btn">
                    <IoIosArrowForward/>
                </button>
            </div>
        </div>
    )
}

export default Slider