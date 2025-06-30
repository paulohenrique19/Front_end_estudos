import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Transaction } from "../interfaces/Transaction";

const submit = async (data: Transaction) => {
    await axios.post("http://localhost:3000/transactions", data)
}

export function useTransactionMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: submit,
        onSuccess: () => {
            queryClient.invalidateQueries() // reseta a página e atualiza os dados
        }
    })

    return mutate;
}