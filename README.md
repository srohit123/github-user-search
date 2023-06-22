# Github Search User Test App (React + Typescript)

## Please follow below steps to run the app:
- `npm i` (For installing all the required dependencies)
- `npm run start` (To start the development server)

## Main Libraries Used:
- MaterialUI  (for building UI)
- React-query (for maintaining cache)
- React-router-dom (For routing)

## Github APIs Used:
- [GET] https://api.github.com/search/users?q=user_input_data+type:user [For searching the user details]
- [GET] https://api.github.com/search/users?q=user_input_data+type:org [For searching 
the organization details]
- [GET] https://api.github.com/users/:username [For fetching the user's profile data, as above APIs doesn't provide followers, following, repo, fullName and location data]

## App specifications:
- We can search user or organization data through username or organization name in github.
- We have applied pagination for displaying fetched github data.
- We are not fetching user's profile data at the time of rendering the data. Here, we have one button `View Profile Data`. When user click on this button, only then we are displaying the user profile data.
- We are maintaining cache using `react-query` library while fetching the search and user profile data. This is used for solving Github API Rate Limiting and also to improve unnecessary API calling. 

## Control Github API Rate limit:
- We can call Github API with or without authentication. Through authentication, we can send 30 requests/minute while without authentication, we can only send 10 request/minutes.
So, If you have `personal access token`. You can add this in .env file. [You can take reference from `.env_sample` file.]

## Custom Context:
- We have implemented useSnackbar context for displaying error and success message.
