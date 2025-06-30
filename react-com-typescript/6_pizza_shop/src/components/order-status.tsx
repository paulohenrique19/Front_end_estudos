import tw from "tailwind-styled-components"

export type OrderStatus = 
    | 'pending'
    | 'canceled'
    | 'processing'
    | 'delivering'
    | 'delivered'

interface OrderStatusProps {
    status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
    pending: 'Pendente',
    canceled: 'Cancelado',
    delivered: 'Entregue',
    delivering: 'Em entrega',
    processing: 'Em preparo'

}

export function OrderStatus({ status }: OrderStatusProps)
{
    return (
        <StatusContainer>
            {status === 'pending' && (
                <span className=" h-2 w-2 rounded-full bg-slate-400"></span>
            )}
            {status === 'canceled' && (
                <span className=" h-2 w-2 rounded-full bg-rose-500"></span>
            )}
            {status === 'delivered' && (
                <span className=" h-2 w-2 rounded-full bg-emerald-500"></span>
            )}

            {/*Mesma coisa que status === 'processing' || 'delivering' */}
            {['processing', 'delivering'].includes(status) && (
                <span className=" h-2 w-2 rounded-full bg-amber-500"></span>
            )}
            <StatusConditionText>{orderStatusMap[status]}</StatusConditionText>
        </StatusContainer>
    )
}

const StatusContainer = tw.div`
    flex items-center gap-2
`

const StatusConditionText = tw.span`
    font-medium text-muted-foreground
`