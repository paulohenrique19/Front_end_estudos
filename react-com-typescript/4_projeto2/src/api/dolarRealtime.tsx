import React, { useState, useEffect } from 'react';

const url = "https://economia.awesomeapi.com.br/last/USD-BRL";

export const DolarRealtime = ({ onDolarChange }: { onDolarChange: (value: number) => void }) => {
  const [dolarValue, setDolarValue] = useState<number | null>(null);

  useEffect(() => {
    const fetchDolarValue = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const value = parseFloat(data.USDBRL.bid);
        setDolarValue(value);
        onDolarChange(value); 
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchDolarValue();

    const interval = setInterval(() => {
      fetchDolarValue();
    }, 10000);

    return () => clearInterval(interval);
  }, [onDolarChange]);

  return <></>;
};
