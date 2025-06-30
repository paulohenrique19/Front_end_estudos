import { getMonthOrdersAmount } from "@/api/get-month-orders-amount"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useQuery } from "@tanstack/react-query"
import { Utensils } from "lucide-react"
import tw from "tailwind-styled-components"

const MonthOrdersAmountCard = () => {

  const { data: monthOrdersAmount} = useQuery({
    queryFn: getMonthOrdersAmount,
    queryKey: ['metrics', 'month-orders-amount']
  })

  return (
    <Card>
        <CardHeader className="flex items-center space-y-0 justify-between pb-2">
            <CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
            <Utensils className="h-4 w-4 text-muted-foreground"/>
        </CardHeader>
        <CardContent className="space-y-1">
          {monthOrdersAmount && (
                  <>
                    <Value>
                      {monthOrdersAmount.amount.toLocaleString('pt-BR')}
                    </Value>
                    <Difference>
                      {monthOrdersAmount.diffFromLastMonth >= 0 ? (
                        <>
                          <ColorTriggerEmerald>
                            +${monthOrdersAmount.diffFromLastMonth}
                          </ColorTriggerEmerald> em relação ao mes passado
                        </>
                      ) : (
                        <>
                          <ColorTriggerRed>
                            ${monthOrdersAmount.diffFromLastMonth}
                          </ColorTriggerRed> em relação ao mes passado
                        </>
                      )}
                    </Difference>
                  </>
              )}
        </CardContent>
    </Card>
  )
}

export default MonthOrdersAmountCard

const Value = tw.span`
  text-2xl font-bold tracking-tight
`
const Difference = tw.p`
  text-xs text-muted-foreground
`
const ColorTriggerEmerald = tw.span`
  text-emerald-500 dark:text-emerald-400
`


const ColorTriggerRed = tw.span`
  text-red-500 dark:text-red-400
`
