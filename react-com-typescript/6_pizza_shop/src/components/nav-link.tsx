import { ComponentProps } from "react";
import { Link, LinkProps, useLocation } from "react-router-dom";
import tw from "tailwind-styled-components";

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {

    //hook useLocation() --> retorna informações da rota atual
    const { pathname } = useLocation()

    return (
        <LinkStyled data-current={pathname === props.to} {...props} />
    )
}

const LinkStyled = tw(Link)`
    flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground
` 