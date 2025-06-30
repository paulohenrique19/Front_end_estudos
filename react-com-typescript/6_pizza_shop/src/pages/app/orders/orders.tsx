import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useEffect } from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import OrderTableRow from "./order-table-row";
import OrderTableFilters from "./order-table-filters";
import Pagination from "@/components/pagination";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "@/api/get-orders";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

const Orders = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  //verifica se já existe página definida no pageIndex, usa 0 caso contrário
  const orderId = searchParams.get('orderId')
  const customerName = searchParams.get('customerName')
  const status = searchParams.get('status')
  
  const pageIndex = z.coerce.number()
    .transform(page => page - 1)
    .parse(searchParams.get('page') ?? '1')

  const { data: result } = useQuery({
    queryKey: ['orders', pageIndex, orderId, customerName, status],
    queryFn: () => getOrders({ pageIndex, orderId, customerName, status: status === 'all' ? null : status }),
  })
  

  useEffect(() => {
     document.title = "Pedidos";
  }, []);

  function handlePaginate(pageIndex: number){
    setSearchParams(state => {
        //setando a página pela: url/page={pageIndex + 1}
        state.set('page', (pageIndex + 1).toString())
        return state
    })
  }

  return (
    <Container>
            <FormContainer>
                <Description>Pedidos</Description>
                <OrderTableFilters />
                <TableContainer>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[64px]"></TableHead>
                                <TableHead className="w-[140px]">Identificador</TableHead>
                                <TableHead className="w-[180px]">Realizado há</TableHead>
                                <TableHead className="w-[140px]">Status</TableHead>
                                <TableHead>Cliente</TableHead>
                                <TableHead className="w-[140px]">Total do pedido</TableHead>
                                <TableHead className="w-[164px]"></TableHead>
                                <TableHead className="w-[132px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {result && result.orders.map((order) => {
                                return <OrderTableRow key={order.orderId} order={order}/>
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                
                {result && (
                    <Pagination onPageChange={handlePaginate} pageIndex={result.meta.pageIndex} totalCount={result.meta.totalCount} perPage={result.meta.perPage} />
                )}

            </FormContainer>
    </Container>
  )
}

export default Orders

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1.65rem;
`
const Description = tw.h1`
    text-3xl font-bold tracking-tighter
`
const FormContainer = tw.div`
    space-y-2.5
`
const TableContainer = tw.div`
    border rounded-md
`
