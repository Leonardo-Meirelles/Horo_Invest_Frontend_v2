import styled from 'styled-components'
import { RouteComponentProps } from '@reach/router'

interface LayoutPrivateProps extends RouteComponentProps {
    // children: React.ReactNode;
}

export function LayoutPrivate(props: LayoutPrivateProps) {
    return (
        <h1>Oi</h1>
    )
}