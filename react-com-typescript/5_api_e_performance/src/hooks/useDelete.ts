import { useMutation, useQueryClient } from "@tanstack/react-query";

const deleteTransaction = async (id: any) => {
    console.log("Tentando deletar transação com id:", id); 
    try {
        const response = await fetch(`http://localhost:3000/transactions/${id}`, {
            method: "DELETE",
        });
        if (response.status === 204) {
            console.log("Transação deletada com sucesso!");
        } else {
            console.error("Erro ao deletar a transação. Status:", response.status);
        }
    } catch (error) {
        console.error("Erro ao tentar deletar a transação:", error);
    }
};

export function useDelete(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: deleteTransaction,
        onSuccess: () => {
            queryClient.invalidateQueries() 
        }
    })

    return mutate;
}