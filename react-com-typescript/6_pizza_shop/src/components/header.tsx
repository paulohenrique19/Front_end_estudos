import { Separator } from "@radix-ui/react-separator"
import { Home, Pizza, UtensilsCrossed } from "lucide-react"
import tw from "tailwind-styled-components"
import { NavLink } from "./nav-link"
import { ThemeToggle } from "./theme/theme-toggle"
import AccountMenu from "./account-menu"




export function Header() {
    return (
        <HeaderContainer>
            <HeaderContainerChild>
                <Pizza className="h-6 w-6"/>
                
                <SeparatorHeader orientation="vertical" />

                <Nav>
                    <NavLink to="/">
                        <HomeIcon />
                        Início
                    </NavLink> 
                    <NavLink to="/orders">
                        <UtensilsCrossedIcon />
                        Pedidos
                    </NavLink>                    
                </Nav>

                <ThemeDiv>
                    <ThemeToggle />
                    <AccountMenu />
                </ThemeDiv>
            </HeaderContainerChild>
        </HeaderContainer>
    )
}

const HeaderContainer = tw.div`
    border-b
`
const HeaderContainerChild = tw.div`
    flex h-16 items-center gap-6 px-6
`

const SeparatorHeader = tw(Separator)`
    h-6
`

const Nav = tw.nav`
    flex items-center space-x-4 lg:space-x-6
`

const HomeIcon = tw(Home)`
    h-4 w-4
`

const UtensilsCrossedIcon = tw(UtensilsCrossed)`
    h-4 w-4
`

export const ThemeDiv = tw.div`
    ml-auto flex items-center gap-2
`
