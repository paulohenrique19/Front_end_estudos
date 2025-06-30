import { 
    SectionContainer,
    Title,
    Limitator,
    SubTitle,
    MajorSeparator,
    MinorSeparator,
    CoffeeImage,
    FirstSeparator
} from "./styles";


export const Section = () => {
    return (
        <SectionContainer>
            <Limitator>
                <FirstSeparator>
                    <Title>Encontre o café perfeito para qualquer hora do dia</Title>
                    <SubTitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</SubTitle>
                    <MajorSeparator>
                        <MinorSeparator>
                            <img src="src/assets/images/Section/CartIconSection.svg" alt="" />
                            <p>Compra simples e segura</p>
                        </MinorSeparator>
                        <MinorSeparator>
                            <img src="src/assets/images/Section/BoxIconSection.svg" alt="" />
                            <p>Embalagem mantém o café intacto</p>
                        </MinorSeparator>
                        <MinorSeparator>
                            <img src="src/assets/images/Section/ClockIconSection.svg" alt="" />
                            <p>Entrega rápida e rastreada</p>
                        </MinorSeparator>
                        <MinorSeparator>
                            <img src="src/assets/images/Section/CoffeeIconSection.svg" alt="" />
                            <p>O café chega fresquinho até você</p>
                        </MinorSeparator>
                    </MajorSeparator>
                </FirstSeparator>
                <CoffeeImage>
                    <img src="src/assets/images/Section/CoffeeImage.svg" alt="" />
                </CoffeeImage>
            </Limitator>
        </SectionContainer>
    )
};