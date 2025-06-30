import tw from "tailwind-styled-components";


export const Container = tw.div`
    min-h-screen grid grid-cols-2
`


export const ContainerChild = tw.div`
    h-full border-r border-foreground/5 bg-muted p-10
    text-muted-foreground flex flex-col justify-between
`
export const Logo = tw.div`
    flex items-center gap-3 text-lg text-foreground
`
export const Copyright = tw.footer`
    text-sm
`

export const NameLogo = tw.span`
    font-semibold
`

export const LoginContainer = tw.div`
    flex flex-col items-center justify-center relative
`