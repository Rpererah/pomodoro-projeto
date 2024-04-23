import { HandPalm, Play } from 'phosphor-react'
import {
  HomeContainer,
  StartCountDownButton,
  StopCountDownButton,
} from './styles'

import { NewCycleForm } from './components/NewCycleForm'
import { CountDown } from './components/CountDown'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { CycleContext } from '../../contexts/CyclesContext'

export function Home() {
  const { createNewCycle, activeCycle, interruptCurrentCycle } =
    useContext(CycleContext)
  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod
      .number()
      .min(1, 'O intervalo precisa ser de no min 1 min')
      .max(60, 'O intervalo precisa ser de no max 60'),
  })

  type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>
  // interface NewCycleFormData {
  //   task: string
  //   minutesAmount: number
  // }

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
  const { watch, handleSubmit, reset } = newCycleForm

  const task = watch('task')
  const isSubmitDisabled = !task

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <CountDown />
        {activeCycle ? (
          <StopCountDownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountDownButton>
        ) : (
          <StartCountDownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Comecar
          </StartCountDownButton>
        )}
      </form>
    </HomeContainer>
  )
}
