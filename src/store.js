import { createStore } from "vuex";

const store = createStore({
  state: {
    user: null,
    isAuthenticated: false
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_AUTHENTICATED(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    }
  },
  actions: {
    login({ commit }, user) {
      // Simulate API call
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (
            user.email === "test@example.com" &&
            user.password === "password"
          ) {
            const authenticatedUser = {
              name: "Test User",
              email: "test@example.com"
            };
            commit("SET_USER", authenticatedUser);
            commit("SET_AUTHENTICATED", true);
            resolve(authenticatedUser);
          } else {
            reject(new Error("Invalid email or password"));
          }
        }, 1000);
      });
    },
    logout({ commit }) {
      commit("SET_USER", null);
      commit("SET_AUTHENTICATED", false);
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
    currentUser(state) {
      return state.user;
    }
  }
});

// import your user data or mock data
import { users } from "./users";

// define the state and mutations for your user store
const state = {
  currentUser: null,
  errorMessage: null
};

const mutations = {
  setCurrentUser(state, user) {
    state.currentUser = user;
    state.errorMessage = null;
  },
  setErrorMessage(state, message) {
    state.errorMessage = message;
  }
};

// define an action to handle user login
const actions = {
  loginUser({ commit }, credentials) {
    // find the user with the given email
    const user = users.find((user) => user.email === credentials.email);

    // check if the user exists and the password is correct
    if (user && user.password === credentials.password) {
      // set the current user in the state
      commit("setCurrentUser", user);
    } else {
      // set an error message in the state
      commit("setErrorMessage", "Invalid email or password");
    }
  }
};

// export the user store
createStore({
  state,
  mutations,
  actions
});

export default store;
