import { configureStore } from '@reduxjs/toolkit'
import { contactSlice } from './contactSlice'
import storage from 'redux-persist/lib/storage'
import { persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['filter']
  }
   
const persistContactReducer = persistReducer(persistConfig,contactSlice.reducer);

export const store = configureStore({
  reducer: {
    contact: persistContactReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

export const persistor = persistStore(store);