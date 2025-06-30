import { Play, HandPalm } from "phosphor-react";
import { HomeContainer, StartCountdownButton, StopCountdownButton } from "./styles";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from 'zod'
import { createContext, useContext, useEffect, useState } from "react";
import { differenceInSeconds } from 'date-fns';
import { NewCycleForm } from "./NewCycleForm";
import { Countdown } from "./Countdown";
import { CyclesContextType } from "../../contexts/CyclesContext";

export const CyclesContext = createContext({} as CyclesContextType)

//validação de formulário com o zod
const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  owner: zod.string().optional(),
  minutesAmount: zod
    .number()
    .min(5, 'Mínimo 5 minutos')
    .max(60, 'Máximo 60 minutos')
})

//typeof para referenciar uma variável JS dentro de outra TS
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>



export const Home = () => {
  
  const { activeCycle, createNewCycle, interruptCurrentCycle } = useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,  
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  
  
 
  

  

  const task = watch('task')
  const isSubmitDisabled = !task

  /**
   * Prop Drilling -> Quando a gente tem MUITAS propriedades APENAS para comunicação entre componentes
   * Context API -> Permite compartilharmos informações entre VÁRIOS componentes ao mesmo tempo 
   */

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(createNewCycle)} action="">
       <CyclesContext.Provider 
          value={{ 
            activeCycle, 
            activeCycleId, 
            markCurrentCycleAsFinished, 
            amountSecondsPassed,
            setSecondsPassed,
          }}
       >
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown/>
       </CyclesContext.Provider>
        { activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
          ) : (
            <StartCountdownButton disabled={isSubmitDisabled} type="submit">
              <Play size={24} />
              Começar
            </StartCountdownButton>
          )
        }
      </form>
    </HomeContainer>
  );
};
