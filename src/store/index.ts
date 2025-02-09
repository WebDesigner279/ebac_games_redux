import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'

// Configuração da store com os reducers
export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer
  }
})

// Definição do tipo RootState (representa o estado global)
export type RootState = ReturnType<typeof store.getState>
