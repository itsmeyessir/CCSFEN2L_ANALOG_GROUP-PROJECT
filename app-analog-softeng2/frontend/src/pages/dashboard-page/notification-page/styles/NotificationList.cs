.maindiv {
  height: fit-content;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.welcome-message {
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding-right: 1rem;
  padding-left: 1rem;
}

.user-greeting {
  font-weight: bold;
  font-size: 1.3rem;
  opacity: 90%;
  margin-bottom: -10px;
}

.current-date {
  font-weight: normal;
  font-size: 0.8rem;
  opacity: 80%;
}

.search-bar {
  display: flex;
  flex: 1;
  height: 2rem;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc; /* Light gray border */
  border-radius: 4px;
  padding: 5px 10px;
  background-color: #f8f8f8;
}

.searchbar-button {
  background-color: transparent;
  cursor: pointer;
  width: 3rem;
  text-align: center;
  align-content: center;
  align-items: center;
}

.search-bar input {
  flex-grow: 2;
  border: none;
  outline: none;
  font-size: 1rem;
}

.input-field {
  display: flex;
  height: 100%;
  font-size: 1rem;
  align-items: center;
  border: 1px solid #ccc; /* Light gray border */
  border-radius: 4px;
  padding: 5px 10px;
  background-color: #f8f8f8;
}

.notification-btn {
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  background-color: transparent;
  border-radius: 4px;
  border: transparent;
  cursor: pointer;
  padding-right: 2rem;
  padding-left: 2rem;
}

.profile-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  padding-right: 1rem;
}

.profile-picture {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 1rem;
}

.profile-texts {
  height: fit-content;
  text-align: start;
}
.username-display {
  font-weight: bold;
  font-size: 1rem;
  opacity: 90%;
  margin-bottom: -1rem;
}

.user-position {
  font-weight: normal;
  font-size: 0.8rem;
  opacity: 80%;
}