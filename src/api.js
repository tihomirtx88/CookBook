import * as request from './request.js';

const recipesUrl = `http://localhost:3030/data/recipes`;

const loginUrl = `http://localhost:3030/users/login`;

const registerUrl = `http://localhost:3030/users/register`;

export const getRecipes = () => request.get(recipesUrl);

export const createRecipe = (recipeData) => request.post(recipesUrl, recipeData);

export const login = (email, password) => request.post(loginUrl, { email, password });

export const register = (email,password,repassword) => request.post(registerUrl, {email,password,repassword});
