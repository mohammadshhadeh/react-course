import React, { useContext } from 'react';
import RecipeIngredientEdit from './RecipeIngredientEdit';
import { recipeContext } from '../App';

export default function RecipeEdit({ recipe = {} }) {
	const {
		name = '',
		servings = '',
		cookTime = '',
		instructions = '',
		ingredients = [],
	} = recipe;

	const { handleRecipeSelect, handleRecipeChange } =
		useContext(recipeContext);

	function handleChange(changes) {
		handleRecipeChange(recipe.id, { ...recipe, ...changes });
	}

	function handleIngredientAdd() {
		const newIngredient = {
			id: Date.now().toString(),
			name: '',
			amount: '',
		};

		handleChange({ ingredients: [...recipe.ingredients, newIngredient] });
	}

	function handleIngredientDelete(id) {
		handleChange({
			ingredients: recipe.ingredients.filter((i) => i.id !== id),
		});
	}

	function handleIngredientChange(id, ingredient) {
		const newIngredients = [...recipe.ingredients];
		const index = newIngredients.findIndex((i) => i.id === id);
		newIngredients[index] = ingredient;
		handleChange({ ingredients: newIngredients });
	}

	return (
		<div className="recipe-edit">
			<div className="recipe-edit__remove-button-container">
				<button
					className="btn recipe-edit__remove-button"
					onClick={() => handleRecipeSelect('')}
				>
					&times;
				</button>
			</div>
			<div className="recipe-edit__details-grid">
				<label htmlFor="name" className="recipe-edit__label">
					Name
				</label>
				<input
					type="text"
					name="name"
					id="name"
					className="recipe-edit__input"
					defaultValue={name}
					onInput={(e) => handleChange({ name: e.target.value })}
				/>
				<label htmlFor="cookTime" className="recipe-edit__label">
					Cook Time
				</label>
				<input
					type="text"
					name="cookTime"
					id="cookTime"
					className="recipe-edit__input"
					defaultValue={cookTime}
					onInput={(e) => handleChange({ cookTime: e.target.value })}
				/>
				<label htmlFor="servings" className="recipe-edit__label">
					Servings
				</label>
				<input
					type="number"
					min="1"
					name="servings"
					id="servings"
					className="recipe-edit__input"
					defaultValue={servings}
					onInput={(e) => handleChange({ servings: e.target.value })}
				/>
				<label htmlFor="instructions" className="recipe-edit__label">
					Instructions
				</label>
				<textarea
					name="instructions"
					className="recipe-edit__input"
					id="instructions"
					onInput={(e) =>
						handleChange({ instructions: e.target.value })
					}
					defaultValue={instructions}
				/>
			</div>
			<br />
			<label className="recipe-edit__label">Ingredients</label>
			<div className="recipe-edit__ingredient-grid">
				<div>Name</div>
				<div>Amount</div>
				<div></div>
				{ingredients.map((ingredient) => (
					<RecipeIngredientEdit
						key={ingredient.id}
						handleIngredientChange={handleIngredientChange}
						handleIngredientDelete={handleIngredientDelete}
						ingredient={ingredient}
					/>
				))}
			</div>
			<div className="recipe-edit__add-ingredient-btn-container">
				<button
					className="btn btn--primary"
					onClick={() => handleIngredientAdd()}
				>
					Add Ingredient
				</button>
			</div>
		</div>
	);
}
