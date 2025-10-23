interface UserProfile {
  id: number;
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    avatar?: string;
  };
  preferences: {
    theme: "light" | "dark" | "auto";
    notifications: boolean;
    language: string;
  };
  stats: {
    loginCount: number;
    lastLogin: Date;
    accountCreated: Date;
  };
}

type UserAction =
  | { type: "UPDATE_PROFILE"; payload: Partial<UserProfile["personalInfo"]> }
  | { type: "UPDATE_PREFERENCES"; payload: Partial<UserProfile["preferences"]> }
  | { type: "INCREMENT_LOGIN_COUNT" }
  | { type: "RESET" };

const initialUser: UserProfile = {
  id: 1,
  personalInfo: {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
  },
  preferences: {
    theme: "auto",
    notifications: true,
    language: "en",
  },
  stats: {
    loginCount: 0,
    lastLogin: new Date(),
    accountCreated: new Date(),
  },
};

function userReducer(state: UserProfile, action: UserAction) {
  switch (action.type) {
    case "UPDATE_PROFILE":
      return {
        ...state,
        personalInfo: {
          ...state.personalInfo,
          ...action.payload,
        },
      };
    case "UPDATE_PREFERENCES": {
      return {
        ...state,
        preferences: { ...state.preferences, ...action.payload },
      };
    }
    case "INCREMENT_LOGIN_COUNT": {
      return {
        ...state,
        stats: {
          ...state.stats,
          loginCount: state.stats.loginCount + 1,
          lastLogin: new Date(),
        },
      };
    }
    case "RESET": {
      return initialUser;
    }
    default:
      return state;
  }
}
export { userReducer, initialUser, type UserProfile, type UserAction };
