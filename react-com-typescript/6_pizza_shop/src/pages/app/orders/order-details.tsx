import { getOrderDetails } from "@/api/get-order-details"
import { OrderStatus } from "@/components/order-status"
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useQuery } from "@tanstack/react-query"
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import tw from "tailwind-styled-components"

export interface OrderDetailsProps {
    orderId: string,
    open: boolean
}

const OrderDetails = ({orderId, open}: OrderDetailsProps) => {

    /* enabled: open colocado para fazer a requisição apenas
     do pedido aberto, e não de todos na tela */
    const { data: order } = useQuery({
        queryKey: ['order', orderId],
        queryFn: () => getOrderDetails({ orderId }),
        enabled: open,

    })

    if (!order)
    {
        return null
    }

  return (
    <DialogContent>
        <DialogHeader>
            <DialogTitle>Pedido: {order?.id}</DialogTitle>
            <DialogDescription>Detalhes do pedido</DialogDescription>
        </DialogHeader>

        <div>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell className="text-muted-foreground">Status</TableCell>
                        <TableCell className="flex justify-end">
                            <StatusContainer>
                                <StatusConditionColor />
                                <OrderStatus status={order.status}></OrderStatus>
                            </StatusContainer>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="text-muted-foreground">Cliente</TableCell>
                        <TableCell className="flex justify-end">
                            {order.customer.name}
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="text-muted-foreground">Telefone</TableCell>
                        <TableCell className="flex justify-end">
                        {order.customer.phone}
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="text-muted-foreground">E-mail</TableCell>
                        <TableCell className="flex justify-end">
                        {order.customer.email}
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="text-muted-foreground">Realizado há</TableCell>
                        <TableCell className="flex justify-end">
                            {formatDistanceToNow(order.createdAt, {
                                locale: ptBR,
                                addSuffix: true,
                            })}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <Table>
                <TableHeader>
                    <TableHead>Produto</TableHead>
                    <TableHead className="text-right">{}</TableHead>
                    <TableHead className="text-right">Preço</TableHead>
                    <TableHead className="text-right">Subtotal</TableHead>
                </TableHeader>
                <TableBody>
                    {order.orderItems.map(item => {
                        return (
                            <TableRow key={item.id}>
                                <TableCell>{item.product.name}</TableCell>
                                <TableCell className="text-right">
                                    {item.quantity}
                                </TableCell>
                                <TableCell className="text-right">
                                    {(item.priceInCents / 100).toLocaleString('pt-BR', {
                                        style: 'currency', 
                                        currency: 'BRL',
                                    })}
                                </TableCell>
                                <TableCell className="text-right">
                                    {(item.priceInCents * item.quantity / 100).toLocaleString('pt-BR', {
                                        style: 'currency', 
                                        currency: 'BRL',
                                    })}
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
                <TableFooter>
                    <TableRow>
                       <TableCell colSpan={3}>Total do pedido</TableCell> 
                       <TableCell className="text-right font-medium">
                            {(order.totalInCents / 100).toLocaleString('pt-BR', {
                                        style: 'currency', 
                                        currency: 'BRL',
                            })}
                        </TableCell> 
                    </TableRow>
                </TableFooter>
            </Table>

        </div>
    </DialogContent>
  )
}
export default OrderDetails

const StatusContainer = tw.div`
    flex items-center gap-2
`
const StatusConditionColor = tw.span`
    h-2 w-2 rounded-full bg-slate-400
` 
const StatusConditionText = tw.span`

`