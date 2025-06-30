import { getMonthRevenue } from '@/api/get-month-revenue'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'
import tw from 'tailwind-styled-components'

const MonthRevenueCard = () => {

  const { data: monthRevenue} = useQuery({
    queryFn: getMonthRevenue,
    queryKey: ['metrics', 'month-revenue']
  })

  return (
    <Card>
        <CardHeader className="flex items-center space-y-0 justify-between pb-2">
            <CardTitle className="text-base font-semibold">Receita total (mês)</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground"/>
        </CardHeader>
        <CardContent className="space-y-1">
        {monthRevenue && (
                  <>
                    <Value>
                      {(monthRevenue.receipt / 100).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      })}
                    </Value>
                    <Difference>
                      {monthRevenue.diffFromLastMonth < 0 ? (
                        <>
                          <ColorTriggerEmerald>
                            +${monthRevenue.diffFromLastMonth}%
                          </ColorTriggerEmerald> em relação ao mes passado
                        </>
                      ) : (
                        <>
                          <ColorTriggerRed>
                            +${monthRevenue.diffFromLastMonth}
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

export default MonthRevenueCard

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
