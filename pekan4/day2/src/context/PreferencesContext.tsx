import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";

type ThemeOption = "light" | "dark" | "system";
type LanguageOption = "id" | "en";

export interface PreferencesState {
  theme: ThemeOption;
  emailUpdates: boolean;
  pushNotifications: boolean;
  language: LanguageOption;
}

type PreferencesAction =
  | { type: "update"; payload: Partial<PreferencesState> }
  | { type: "reset" };

interface PreferencesContextValue {
  state: PreferencesState;
  updatePreferences: (updates: Partial<PreferencesState>) => void;
  resetPreferences: () => void;
}

export const defaultPreferences: PreferencesState = {
  theme: "system",
  emailUpdates: true,
  pushNotifications: false,
  language: "id",
};

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

function preferencesReducer(
  state: PreferencesState,
  action: PreferencesAction
): PreferencesState {
  switch (action.type) {
    case "update":
      return { ...state, ...action.payload };
    case "reset":
      return defaultPreferences;
    default:
      return state;
  }
}

interface PreferencesProviderProps {
  children: ReactNode;
}

export function PreferencesProvider({ children }: PreferencesProviderProps) {
  const [state, dispatch] = useReducer(
    preferencesReducer,
    defaultPreferences
  );

  const updatePreferences = useCallback(
    (updates: Partial<PreferencesState>) => {
      dispatch({ type: "update", payload: updates });
    },
    []
  );

  const resetPreferences = useCallback(() => {
    dispatch({ type: "reset" });
  }, []);

  const value = useMemo<PreferencesContextValue>(
    () => ({
      state,
      updatePreferences,
      resetPreferences,
    }),
    [state, updatePreferences, resetPreferences]
  );

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error("usePreferences must be used within PreferencesProvider");
  }
  return context;
}
