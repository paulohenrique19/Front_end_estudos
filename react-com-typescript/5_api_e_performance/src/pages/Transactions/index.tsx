import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { useManageTransactions } from "../../hooks/useManageTransactions";
import { PriceHighLight, TransactionsContainer, TransactionsTable, Modal, ModalOverlay, Button } from "./styles";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { useState } from "react";
import { useDelete } from "../../hooks/useDelete";

export function Transactions() {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionToDelete, setTransactionToDelete] = useState<number | null>(null);

  const { mutate: deleteTransaction } = useDelete(); 

  const { transactions, isLoading, isError } = useManageTransactions(searchQuery); 

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (isError) {
    return <div>Ocorreu um erro ao carregar as transações.</div>;
  }

  // Função para abrir o modal de confirmação de exclusão
  const handleDeleteClick = (id: number) => {
    setTransactionToDelete(id);
    setIsModalOpen(true);
  };

  // Função para confirmar a exclusão
  const confirmDelete = () => {
    if (transactionToDelete !== null) {
      deleteTransaction(transactionToDelete);
      setIsModalOpen(false);
    }
  };

  // Função para fechar o modal sem excluir
  const cancelDelete = () => {
    setIsModalOpen(false);
    setTransactionToDelete(null);
  };

  return (
    <div>
      <Header />
      <Summary transactions={transactions ?? []} />

      <TransactionsContainer>
        <SearchForm setSearchQuery={setSearchQuery} />

        <TransactionsTable>
          <tbody>
            {transactions?.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                      {transaction.type === "outcome" && "- "}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                  <td>
                    <Button onClick={() => handleDeleteClick(transaction.id)}>
                      Excluir
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>

      {/* Modal de Confirmação */}
      {isModalOpen && (
        <ModalOverlay>
          <Modal>
            <h3>Tem certeza que deseja excluir esta transação?</h3>
            <div>
              <Button onClick={confirmDelete} color="red">Confirmar</Button>
              <Button onClick={cancelDelete} color="gray">Cancelar</Button>
            </div>
          </Modal>
        </ModalOverlay>
      )}
    </div>
  );
}
