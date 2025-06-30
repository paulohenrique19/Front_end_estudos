import { getMonthCanceledOrdersAmount } from "@/api/get-month-canceled-orders-amount"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useQuery } from "@tanstack/react-query"
import { DollarSign } from "lucide-react"
import tw from "tailwind-styled-components"

const MonthCanceledOrdersAmountCard = () => {

  const { data: monthCanceledOrdersAmount} = useQuery({
    queryFn: getMonthCanceledOrdersAmount,
    queryKey: ['metrics', 'month-canceled-orders-amount']
  })

  return (
    <Card>
        <CardHeader className="flex items-center space-y-0 justify-between pb-2">
            <CardTitle className="text-base font-semibold">Cancelamentos (mês)</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground"/>
        </CardHeader>
        <CardContent className="space-y-1">
        {monthCanceledOrdersAmount && (
                  <>
                    <Value>
                      {monthCanceledOrdersAmount.amount.toLocaleString('pt-BR')}
                    </Value>
                    <Difference>
                      {monthCanceledOrdersAmount.diffFromLastMonth < 0 ? (
                        <>
                          <ColorTriggerEmerald>
                            ${monthCanceledOrdersAmount.diffFromLastMonth}
                          </ColorTriggerEmerald> em relação ao mes passado
                        </>
                      ) : (
                        <>
                          <ColorTriggerRose>
                            +${monthCanceledOrdersAmount.diffFromLastMonth}
                          </ColorTriggerRose> em relação ao mes passado
                        </>
                      )}
                    </Difference>
                  </>
        )}
        </CardContent>
    </Card>
  )
}

export default MonthCanceledOrdersAmountCard

const Value = tw.span`
  text-2xl font-bold tracking-tight
`
const Difference = tw.p`
  text-xs text-muted-foreground
`

const ColorTriggerEmerald = tw.span`
  text-emerald-500 dark:text-emerald-400
`

const ColorTriggerRose = tw.span`
  text-rose-500 dark:text-rose-400
`
