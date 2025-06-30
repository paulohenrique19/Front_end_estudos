import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TransactionArray } from "../interfaces/Transaction";

const fetchTransactions = async (): Promise<TransactionArray> => {
  const response = await axios
    .get<TransactionArray>("http://localhost:3000/transactions")
    .then((response) => response.data)
    .catch(() => []); 
  return response;
};

const searchTransactions = async (searchQuery: string): Promise<TransactionArray> => {
  const response = await axios
    .get<TransactionArray>(`http://localhost:3000/transactions?description=${searchQuery}`)
    .then((response) => response.data)
    .catch(() => []); 
  return response;
};

export const useManageTransactions = (searchQuery: string) => {
  const {
    data,
    isLoading,
    isError,
    refetch,
  } = useQuery<TransactionArray>({
    queryKey: ["transactions", searchQuery || "all"], 
    queryFn: () => {
      if (!searchQuery) {
        return fetchTransactions(); 
      }
      return searchTransactions(searchQuery); 
    },
    enabled: true,
  });

  const transactions = data;
 

  return {
    transactions,
    isLoading,
    isError,
    refetch,
  };
  
};
