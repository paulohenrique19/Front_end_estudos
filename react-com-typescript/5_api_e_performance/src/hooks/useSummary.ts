import { TransactionArray } from "../interfaces/Transaction";

export function useSummary({
  transactions,
}: {
  transactions: TransactionArray | undefined;
}) {
  const hasTransactions = transactions && transactions.length > 0;

  /*Uma técnica abaixo pra lidar com variáveis tipadas que retornam erros sobre valores possívelmente nulos é definir
  valores padrão quando não houver nenhum valor no objeto

   após definir isso: const hasTransactions = transactions && transactions.length > 0;

   ex: (!hasTransactions) <-- isso precisa ser falso

   então isso será retornado:

   return {
      income: 0,
      outcome: 0,
      total: 0,
    };

   Logo, não teremos mais erros de valores possívelmente nulos, pois eles já foram tratatos,

  */
  if (!hasTransactions) {
    return {
      income: 0,
      outcome: 0,
      total: 0,
    };
  }

  const summary = transactions?.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.outcome += transaction.price;
        acc.total -= transaction.price;
      }

      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return summary;
}
