import { getDayOrdersAmount } from "@/api/get-day-orders-amount"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useQuery } from "@tanstack/react-query"
import { Utensils } from "lucide-react"
import tw from "tailwind-styled-components"

const DayOrdersAmountCard = () => {

  const { data: dayOrdersAmount} = useQuery({
    queryFn: getDayOrdersAmount,
    queryKey: ['metrics', 'day-orders-amount']
  })


  return (
    <Card>
        <CardHeader className="flex items-center space-y-0 justify-between pb-2">
            <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
            <Utensils className="h-4 w-4 text-muted-foreground"/>
        </CardHeader>
        <CardContent className="space-y-1">
            {dayOrdersAmount && (
                <>
                  <Value>
                    {dayOrdersAmount.amount.toLocaleString('pt-BR')}
                  </Value>
                  <Difference>
                    {dayOrdersAmount.diffFromYesterday >= 0 ? (
                      <>
                        <ColorTriggerEmerald>
                          +${dayOrdersAmount.diffFromYesterday}
                        </ColorTriggerEmerald> em relação a ontem
                      </>
                    ) : (
                      <>
                        <ColorTriggerRose>
                          -${dayOrdersAmount.diffFromYesterday}
                        </ColorTriggerRose> em relação a ontem
                      </>
                    )}
                  </Difference>
                </>
            )}
        </CardContent>
    </Card>
  )
}

export default DayOrdersAmountCard

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
