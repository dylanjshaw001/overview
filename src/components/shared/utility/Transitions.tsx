import React, {PropsWithChildren} from 'react';
import { CSSTransition } from 'react-transition-group';


type FadeInProps = {
    loaded?: boolean,
    title?: number | string
}

export function FadeIn(props: PropsWithChildren<FadeInProps>) {
    return (
        <CSSTransition
        in={props.loaded || true}
        timeout={1000}
        appear
        classNames='fade-slow'
        key={props.title}
        >{props.children}</CSSTransition>
    )
}
