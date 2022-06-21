import React, { useEffect, useState } from 'react';
import RecipeList from './components/RecipeList';
import RecipeEdit from './components/RecipeEdit';

export const recipeContext = React.createContext();

function getRecipes() {
	return fetch('http://localhost:5000/recipes').then((data) => data.json());
}

function deleteRecipes(id) {
	return fetch(`http://localhost:5000/recipes/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((data) => data.json());
}

function updateRecipes(id, item) {
	return fetch(`http://localhost:5000/recipes/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(item),
	}).then((data) => data.json());
}

function addRecipes(item) {
	return fetch('http://localhost:5000/recipes', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(item),
	}).then((data) => data.json());
}

function App() {
	const [selectedRecipeId, setSelectedRecipeId] = useState();
	const [recipes, setRecipes] = useState([]);

	const recipeContextValue = {
		handleRecipeAdd,
		handleRecipeDelete,
		handleRecipeSelect,
		handleRecipeChange
	};

	function getSelectedRecipe(id) {
		console.log((recipes.filter((recipe) => recipe.id === id) || [])[0]);
		return (recipes.filter((recipe) => recipe.id === id) || [])[0];
	};

	useEffect(() => {
		let mounted = true;
		getRecipes().then((items) => {
			if (mounted) {
				setRecipes(items);
			}
		});
		return () => (mounted = false);
	}, []);

	function handleRecipeSelect(id) {
		setSelectedRecipeId(id);
	}

	async function handleRecipeAdd() {
		const newRecipe = {
			id: Date.now().toString(),
			name: '',
			servings: '',
			cookTime: '',
			instructions: '',
			ingredients: [{
				id: Date.now().toString(),
				name: '',
				amount: '',
			}],
		};

		setSelectedRecipeId(newRecipe.id);
		setRecipes((prevState) => [...prevState, newRecipe]);
		await addRecipes(newRecipe);
	}

	async function handleRecipeDelete(id) {
		setRecipes((prevState) =>
			prevState.filter((recipe) => recipe.id !== id),
		);

		await deleteRecipes(id);
	}

	async function handleRecipeChange(id, recipe) {
		const newRecipes = [...recipes];
		const index = newRecipes.findIndex(recipe => recipe.id === id);
		newRecipes[index] = recipe;

		await updateRecipes(id, recipe)
		setRecipes(newRecipes);
	}

	return (
		<recipeContext.Provider value={recipeContextValue}>
			<RecipeList
				recipes={recipes}
				// handleRecipeAdd={handleRecipeAdd}
				// handleRecipeDelete={handleRecipeDelete}
			/>
			{!!selectedRecipeId && <RecipeEdit recipe={getSelectedRecipe(selectedRecipeId)} />}
		</recipeContext.Provider>
	);
}

export default App;
