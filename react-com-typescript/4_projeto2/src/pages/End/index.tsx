import { Container, Data, Separator, Image, LocalIconEnd, ClockIconEnd, CashIconEnd, Icon } from "./styles";

export const End = () => {
    const endereco = JSON.parse(localStorage.getItem("endereco") || "{}");
    
    const typePagament = (value: any) => {
        if (value === 1) {
            return "Dinheiro";
        }
        if (value === 2) {
            return "Cartão Débito/Crédito";
        }
        if (value === 3) {
            return "PIX";
        }
    };

    return (
      <Container>
        <h2>Endereço de Entrega</h2>
        <Separator>
            <Data>
                <LocalIconEnd>
                    <Icon src="src/assets/images/End/LocalIconEnd.svg" alt="Ícone Local" />
                    <div>
                        <p>Entrega em: <strong>{endereco.rua}</strong></p>
                        <p><strong>{endereco.cidade}</strong></p>
                    </div>
                </LocalIconEnd>
                <ClockIconEnd>
                    <Icon src="src/assets/images/End/ClockIconEnd.svg" alt="Ícone Relógio" />
                    <div>
                        <p>Previsão de entrega</p>
                        <p><strong>20 min - 30 min</strong></p>
                    </div>
                </ClockIconEnd>
                <CashIconEnd>
                    <Icon src="src/assets/images/End/CashIconEnd.svg" alt="Ícone Dinheiro" />
                    <div>
                        <p>Forma de pagamento: <strong>{typePagament(endereco.formaPagamento)}</strong></p>
                    </div>
                </CashIconEnd>
            </Data>
            <Image>
                <img src="src/assets/images/End/Motorcycle.svg" alt="Moto" />
            </Image>
        </Separator>
      </Container>
    );
};
