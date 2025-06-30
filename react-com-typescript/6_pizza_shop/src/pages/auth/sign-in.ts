import tw from "tailwind-styled-components";
import { Button } from "@/components/ui/button";

export const Container = tw.div`
    p-8
`;

export const ContainerChild = tw.div`
    w-[350px] flex flex-col justify-center gap-6
`;

export const FormHeader = tw.div`
    flex flex-col gap-2 text-center
`;

export const FormContent = tw.form`
    space-y-4
`;
export const InputContainer = tw.div`
    space-y-2
`;

export const Title = tw.h1`
    text-2xl font-semibold tracking-tight
`;

export const Description = tw.p`
    text-sm text-muted-foreground
`;

export const ButtonInput = tw(Button)`
    w-full 
`

export const ButtonToggle = tw(Button)`
    absolute right-8 top-8
`

export const TermsService = tw.p`
    px-6 text-center text-sm leading-relaxed text-muted-foreground
`
export const UnderLine = tw.a`
    underline underline-off-set-4
`