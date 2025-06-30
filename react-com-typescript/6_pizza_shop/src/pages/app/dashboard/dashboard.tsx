import { useEffect } from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import MonthRevenueCard from "./month-revenue-card";
import MonthOrdersAmountCard from "./month-orders-amount-card";
import DayOrdersAmountCard from "./day-orders-amount-card";
import MonthCanceledOrdersAmountCard from "./month-canceled-orders-amount-card";
import RevenueChart from "./revenue-chart";
import PopularProductsChart from "./popular-products-chart";

export function Dashboard() {

  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <Container>
      <Title>
        Dashboard
      </Title>
      <CardContainer>
        <MonthRevenueCard></MonthRevenueCard> 
        <MonthOrdersAmountCard></MonthOrdersAmountCard>
        <DayOrdersAmountCard></DayOrdersAmountCard>
        <MonthCanceledOrdersAmountCard></MonthCanceledOrdersAmountCard>
      </CardContainer>

      <ChartContainer>
        <RevenueChart />
        <PopularProductsChart />
      </ChartContainer>
      
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.65rem;
`
const Title = tw.h1`
  text-3xl font-bold tracking-tight mb-3
`
const CardContainer = tw.div`
  grid grid-cols-4 gap-4
`
const ChartContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem; 
  margin-top: 1rem;
`;
