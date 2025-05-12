import { FC, ReactNode, Ref } from "react"
import s from "./Container.module.scss"

interface ContainerProps {
    className?: string,
    innerRef?: Ref<HTMLDivElement>,
    children: ReactNode
}

const Container: FC<ContainerProps> = ({className = "", innerRef, children}) => {
    const classNames = [s.container, className].join(" ")
    return <div className={classNames} ref={innerRef}>{children}</div>
}

export default Container