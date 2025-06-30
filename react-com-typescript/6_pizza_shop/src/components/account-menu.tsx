import tw from "tailwind-styled-components"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Building, ChevronDown, LogOut } from "lucide-react"
import { useMutation, useQuery } from "@tanstack/react-query"
import { getProfile } from "@/api/get-profile"
import { getManagedRestaurant } from "@/api/get-managed-restaurant"
import { Skeleton } from "./ui/skeleton"
import { Dialog, DialogTrigger } from "./ui/dialog"
import { StoreProfileDialog } from "./store-profile-dialog"
import { signOut } from "@/api/sign-out"
import { useNavigate } from "react-router-dom"

const AccountMenu = () => {

    const navigate = useNavigate()

    const { data: profile, isLoading: isLoadingProfile } = useQuery({
        queryKey: ['profile'],
        queryFn: getProfile,
        staleTime: Infinity,
    })

    const { data: managedRestaurant, isLoading: isLoadingManagedRestaurant } = useQuery({
        queryKey: ['managed-restaurant'],
        queryFn: getManagedRestaurant,
        staleTime: Infinity,
    })

    const { mutateAsync: signOutFn, isPending: isSignOut} = useMutation({
        mutationFn: signOut,
        onSuccess: () => {
            //replace: true --> evita com que o usuário
            // acabe voltando para a no
            navigate('/sign-in', {replace : true})
        }
    })

  return (
    <Dialog>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
            <ButtonTrigger variant="outline">
                    {isLoadingManagedRestaurant ? (
                        <Skeleton className="h-4 w-40"/>
                    ): 
                        managedRestaurant?.name
                    }
                <ChevronDownIcon />
            </ButtonTrigger> 
            </DropdownMenuTrigger>   
            <DropdownMenuContentList align="end">
                <DropdownMenuLabelItens>
                    {isLoadingProfile ? (
                        <div className="space-y-1.5">
                            <Skeleton className="h-4 w-40" />
                            <Skeleton className="h-3 w-24" />
                        </div>
                        ):(
                        <>
                            <Name>{profile?.name}</Name>
                            <Email>{profile?.email}</Email>
                        </>
                        )
                    }
                </DropdownMenuLabelItens>
                <DropdownMenuSeparator />
                {/**DialogTrigger asChild: Faz com que o 
                 * componente assuma as propriedades
                 * do componente de baixo sem perder 
                 * a estilização
                 */}
                <DialogTrigger asChild>    
                    <DropdownMenuItem>
                        <BuildingIcon />
                        <span>Perfil da loja</span>
                    </DropdownMenuItem>
                </DialogTrigger>
                <DropdownMenuItemStyled asChild disabled={isSignOut}>
                    <button className="w-full" onClick={() => signOutFn()}>
                        <LogOutIcon />
                        <span>Sair</span>
                    </button>  
                </DropdownMenuItemStyled>
            </DropdownMenuContentList>
        </DropdownMenu>

        <StoreProfileDialog />
    </Dialog>
  )
}

export default AccountMenu

export const ButtonTrigger = tw(Button)`
    flex items-center gap-2 select-none
`

export const ChevronDownIcon = tw(ChevronDown)`
    h-4 w-4
`
export const DropdownMenuContentList = tw(DropdownMenuContent)`
    w-56
`
export const DropdownMenuLabelItens = tw(DropdownMenuLabel)`
    flex flex-col
`
export const Name = tw.span`

`
export const Email = tw.span`
    text-xs font-normal text-muted-foreground
`
export const BuildingIcon = tw(Building)`
    w-4 h-4 mr-2
`
export const LogOutIcon = tw(LogOut)`
    w-4 h-4 mr-2
`
export const DropdownMenuItemStyled = tw(DropdownMenuItem)`
    text-rose-500 dark:text-rose-400
`