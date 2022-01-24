import { Collection } from 'discord.js';
import type { Recipe } from 'src/@types';
import BaseRecipes from './baseRecipes';

export default class Cakes extends BaseRecipes {
    recipes: Recipe[] = [
        {
            name: 'Baked Donuts',
            ingredients: [
                { name: 'Baker Yeast', amount: '~1/6' },
                { name: 'Butter', amount: '1' },
                { name: 'Egg', amount: '2' },
                { name: 'Pastry Flour', amount: '400g' },
                { name: 'Granulated Sugar', amount: '150g' },
                { name: 'Salt', amount: '2g' },
                { name: 'Whole Milk', amount: '250ml' },
                { name: 'Vanilla Extract', amount: '5ml' }
            ],
            text: `
                **BAKED DONUT DOUGH**
                Melt Butter 200g for 60s.
                Add to an empty Kneading Machine Bowl:
                Pastry Flour 400g;
                Granulated Sugar 150g,
                Egg 200g,
                Vanilla Extract 5ml,
                Salt 5g,
                Melted Mixture.
                Mix using Whisk attachment.
                Add to a Pot:
                Whole Milk 250ml,
                Baker's Yeast 15g.
                Boil for 60s.
                Add to the same Kneading Machine Bowl:
                Mixture.
                Mix using Whisk attachment.
                Transfer Baked Donut Dough into Donut cake pan.
                Bake - set time and temperature according to the cake pan.
            `
        },
            {
            name: 'Blueberry Pie',
            ingredients: [
                { name: 'Butter', amount: '1/2' },
                { name: 'Blueberry', amount: '100g' },
                { name: 'Salt', amount: '5g' },
                { name: 'Pastry Flour', amount: '300g' },
                { name: 'Starch', amount: '20g' },
                { name: 'Cinnamon, ground', amount: '2g' },
                { name: 'Granulated Sugar', amount: '100g' },
                { name: 'Water', amount: '100ml' },
                { name: 'Lemon Juice', amount: '15ml' }
            ],
            text: `
                **PIE CRUST**
                Add to an empty Kneading Machine Bowl:
                Pastry Flour 300g,
                Butter 100g.
                Mix using Hook attachment.
                Add to the same Kneading Machine Bowl:
                Water 100ml,
                Salt 5g.
                Mix using Paddle attachment.

                **BLUEBERRY FILLING**
                Add to an empty Kneading Machine Bowl:
                Blueberry 100g,
                Granulated Sugar 100g.
                Mix using Whisk attachment.
                Add to the same Kneading Machine Bowl:
                Lemon Juice 15ml,
                Starch 20g,
                Cinnamon, ground 2g.
                Mix using Whisk attachment.
                Transfer Pie Crust into Round cake pan.
                Add Blueberry Filling to the same cake pan.
                Bake - set time and temperature according to the cake pan.
            `
        },
        {
            name: 'Bread',
            ingredients: [
                { name: 'Baker Yeast', amount: '~1/3' },
                { name: 'Salt', amount: '20g' },
                { name: 'Pastry Flour', amount: '500g' },
                { name: 'Olive Oil', amount: '100ml' },
                { name: 'Water', amount: '200ml' }
            ],
            text: `
                **BREAD DOUGH**
                Add to an empty Kneading Machine Bowl:
                Pastry Flour 500g,
                Salt 10g,
                Baker's Yeast 30g.
                Mix using Paddle attachment.
                Add to the same Kneading Machine Bowl:
                Water 200ml,
                Olive Oil 100ml.
                Mix using Paddle attachment.
                Transfer Bread Dough into Round cake pan.
                Bake - set time and temperature according to the cake pan.
            `
        },
        {
            name: 'Brownies',
            ingredients: [
                { name: 'Butter', amount: '1' },
                { name: 'Dark Chocolate', amount: '1' },
                { name: 'Egg Yolk', amount: '2' },
                { name: 'Chopped Nuts', amount: '50g' },
                { name: 'Pastry Flour', amount: '200g' },
                { name: 'Granulated Sugar', amount: '200g' },
                { name: 'Beaten Egg White', amount: '120ml' }
            ],
            text: `
                **BROWNIE DOUGH**
                Add to a Pot:
                Butter 200g,
                Dark Chocolate 200g.
                Melt.
                Separate 200g of Egg using Yolk Splitter.
                Add to an empty Kneading Machine Bowl:
                Granulated Sugar 200g,
                Egg Yolk.
                Mix using Whisk attachment.
                Add to the same Kneading Machine Bowl:
                Pastry Flour 200g,
                Melted Mixture.
                Mix using Hook attachment.
                Store for later use.
                Add to an empty Kneading Machine Bowl:
                Egg White.
                Mix using Paddle attachment.
                Add to the same Kneading Machine Bowl:
                Chopped Nuts 50g,
                Dough.
                Mix using Paddle attachment.
                Transfer Brownie Dough into Square cake pan.
                Bake - set time and temperature according to the cake pan.
            `
        },
        {
            name: 'Cherry Pie',
            ingredients: [
                { name: 'Butter', amount: '1/2' },
                { name: 'Cherry', amount: '20' },
                { name: 'Salt', amount: '5g' },
                { name: 'Pastry Flour', amount: '300g' },
                { name: 'Enriched Flour', amount: '100g' },
                { name: 'Granulated Sugar', amount: '150g' },
                { name: 'Cinnamon, ground', amount: '5g' },
                { name: 'Water', amount: '100ml' }
            ],
            text: `
                **PIE CRUST**
                Add to an empty Kneading Machine Bowl:
                Pastry Flour 300g,
                Butter 100g.
                Mix using Hook attachment.
                Add to the same Kneading Machine Bowl:
                Water 100ml,
                Salt 5g.
                Mix using Paddle attachment.

                **CHERRY PIE FILLING**
                Add to a Pan:
                Water 100ml,
                Cherry 100g,
                Granulated Sugar 150g,
                Cinnamon, ground 5g.
                Boil for 30s.
                Transfer into the Kneading Machine Bowl.
                Add to the same Kneading Machine Bowl:
                Enriched Flour 100g.
                Mix using Paddle attachment.
                Transfer Pie Crust into Round cake pan.
                Add Cherry Pie Filling to the same cake pan.
                Bake - set time and temperature according to the cake pan.
            `
        },
        {
            name: 'Chocolate Fudge Cake',
            ingredients: [
                { name: 'Egg', amount: '1' },
                { name: 'Dark Chocolate', amount: '1' },
                { name: 'Cake Flour', amount: '200g' },
                { name: 'Salt', amount: '2g' },
                { name: 'Baking Powder', amount: '5g' },
                { name: 'Granulated Sugar', amount: '250g' },
                { name: 'Cocoa', amount: '50g' },
                { name: 'Sunflower Oil', amount: '50ml' },
                { name: 'Whole Milk', amount: '200ml' },
                { name: 'Vanilla Extract', amount: '5ml' }
            ],
            text: `
                **CHOCOLATE FUDGE DOUGH**
                Melt Dark Chocolate 200g for 60s.
                Add to an empty Kneading Machine Bowl:
                Cake Flour 200g,
                Granulated Sugar 250g,
                Cocoa 50g,
                Salt 2g,
                Baking Powder 5g.
                Mix using Hook attachment.
                Add to the same Kneading Machine Bowl:
                Whole Milk 200ml,
                Sunflower Oil 50ml,
                Vanilla Extract 5ml,
                Egg 100g,
                Melted Mixture.
                Mix using Paddle attachment.
                Transfer Chocolate Fudge Dough into Round cake pan.
                Bake - set time and temperature according to the cake pan.
            `
        },
        {
            name: 'Churros',
            ingredients: [
                { name: 'Egg', amount: '1' },
                { name: 'Butter', amount: '1/4' },
                { name: 'Unbleached Flour', amount: '400g' },
                { name: 'Caster Sugar', amount: '13g' },
                { name: 'Vanilla Extract', amount: '5ml' },
                { name: 'Water', amount: '250ml' }
            ],
            text: `
                **CHURROS DOUGH**
                Add to a Pot:
                Water 250ml,
                Butter 50g,
                Caster Sugar 13g.
                Boil for 45s.
                Add to an empty Kneading Machine Bowl:
                Unbleached Flour 400g,
                Mixture.
                Mix using Paddle attachment.
                Add to the same Kneading Machine Bowl:
                Vanilla Extract 5ml,
                Egg 100g.
                Mix using Paddle attachment.
                Transfer Churros Dough into the Dough Dispenser.
                Squeeze into Deep Fryer.
                Deep fry - set time and temperature according to the Dough Dispenser.
            `
        },
        {
            name: 'Fried Donuts',
            ingredients: [
                { name: 'Butter', amount: '1' },
                { name: 'Egg', amount: '4' },
                { name: 'Baker Yeast', amount: '~1/3' },
                { name: 'Salt', amount: '5g' },
                { name: 'Lemon Zest, dried', amount: '15g' },
                { name: 'Enriched Flour', amount: '400g' },
                { name: 'Powdered Sugar', amount: '150g' },
                { name: 'Water', amount: '150ml' }
            ],
            text: `
                **FRIED DONUT DOUGH**
                Add to an empty Kneading Machine Bowl:
                Water 150ml,
                Enriched Flour 400g,
                Powdered Sugar 150g,
                Baker's Yeast 30g.
                Mix using Paddle attachment.
                Add to the same Kneading Machine Bowl:
                Lemon zest, dried 15g,
                Salt 5g,
                Egg 400g.
                Mix using Paddle attachment.
                Add to the same Kneading Machine Bowl:
                Butter 200g.
                Mix using Paddle attachment.
                Transfer Fried Donut Dough into the Dough Dispenser.
                Squeeze into Deep Fryer.
                Deep fry - set time and temperature according to the Dough Dispenser.
            `
        },
        {
            name: 'Simple Cupcake',
            ingredients: [
                { name: 'Butter', amount: '1' },
                { name: 'Egg', amount: '4' },
                { name: 'Vanilla Sugar', amount: '250g' },
                { name: 'Salt', amount: '5g' },
                { name: 'Unbleached Flour', amount: '250g' },
                { name: 'Soy Milk', amount: '60ml' }
            ],
            text: `
                **CUPCAKE DOUGH**
                Melt Butter 200g for 60s.
                Add to an empty Kneading Machine Bowl:
                Vanilla Sugar 250g,
                Unbleached Flour 250g,
                Salt 5g.
                Mix using Hook attachment.
                Add to the same Kneading Machine Bowl:
                Soy Milk 60ml,
                Egg 400g,
                Melted Mixture.
                Mix using Hoot attachment.
                Transfer Cupcake Dough into Heart-shaped cupcake pan.
                Bake - set time and temperature according to the cake pan.
            `
        },
        {
            name: 'Tiramisu',
            ingredients: [
                { name: 'Butter', amount: '1' },
                { name: 'Block Cream Cheese', amount: '2' },
                { name: 'Mascarpone', amount: '1' },
                { name: 'Egg', amount: '2' },
                { name: 'Coffee', amount: '150g' },
                { name: 'Biscuit Crumbs', amount: '300g' },
                { name: 'Pastry Flour', amount: '100g' },
                { name: 'Powdered Sugar', amount: '200g' },
                { name: 'Cocoa', amount: '50g' },
                { name: 'Water', amount: '100ml' }
            ],
            text: `
                **TIRAMISU CRUST**
                Melt Butter 200g for 80s.
                Add to an empty Kneading Machine Bowl:
                Water 100ml,
                Coffee 150g,
                Biscuit Crumbs 300g,
                Melted Mixture.
                Mix using Hook attachment.

                **TIRAMISU FILLING**
                Add to an empty Kneading Machine Bowl:
                Block Cream Cheese 500g,
                Mascarpone 150g,
                Powdered Sugar 200g,
                Cocoa 50g.
                Mix using Hook attachment.
                Add to the same Kneading Machine Bowl:
                Pastry Flour 100g,
                Egg 200g.
                Mix using Hook attachment.
                Transfer Tiramisu Crust into Loaf pan.
                Add Tiramisu Filling to the same cake pan.
                Bake - set time and temperature according to the cake pan.
            `
        },
        {
            name: 'Carrot Cake',
            ingredients: [
                { name: 'Raisins', amount: '50g' },
                { name: 'Carrot', amount: '4' },
                { name: 'Egg', amount: '4' },
                { name: 'Baking Powder', amount: '10g' },
                { name: 'Salt', amount: '2g' },
                { name: 'Cinnamon, ground', amount: '7g' },
                { name: 'Pastry Flour', amount: '250g' },
                { name: 'Granulated Sugar', amount: '200g' },
                { name: 'Brown Sugar', amount: '200g' },
                { name: 'Sunflower Oil', amount: '300ml' },
                { name: 'Vanilla Extract', amount: '5ml' }
            ],
            text: `
                **CARROT CAKE DOUGH**
                Cut Carrot 280g into Quarters ~18g.
                Add to an empty Kneading Machine Bowl:
                Sunflower Oil 300ml,
                Cinnamon, ground 7g,
                Salt 2g,
                Baking Powder 10g.
                Mix using Paddle attachment.
                Transfer into a Pot.
                Add to an empty Kneading Machine Bowl:
                Pastry Flour 250g,
                Granulated Sugar 200g,
                Brown Sugar 200g,
                Vanilla Extract 5ml.
                Mix using Hook attachment.
                Add to the same Kneading Machine Bowl:
                Mixture.
                Mix using Hook Attachment.
                Add to the same Kneading Machine Bowl:
                Raisins 50g,
                Egg 400g,
                Carrot.
                Mix using Hook attachment.
                Transfer Carrot Cake Dough into Ring cake pan.
                Bake - set time and temperature according to the cake pan.
            `
        },
        {
            name: 'Chocolate Chip Cookies',
            ingredients: [
                { name: 'Chocolate Curls', amount: '50g' },
                { name: 'Egg', amount: '1' },
                { name: 'Butter', amount: '1/2' },
                { name: 'Enriched Flour', amount: '200g' },
                { name: 'Baking Powder', amount: '5g' },
                { name: 'Salt', amount: '2g' },
                { name: 'Brown Sugar', amount: '100g' },
                { name: 'Granulated Sugar', amount: '100g' },
                { name: 'Vanilla Extract', amount: '10ml' }
            ],
            text: `
                **CHOCOLATE CHIP COOKIE DOUGH**
                Add to an empty Kneading Machine Bowl:
                Butter 100g,
                Brown Sugar 100g,
                Granualted Sugar 100g.
                Mix using Hook attachment.
                Add to the same Kneading Machine Bowl:
                Vanilla Extract 10ml,
                Egg 100g.
                Mix using Whisk attachment.
                Add to the same Kneading Machine Bowl:
                Enriched Flour 200g,
                Baking Powder 5g,
                Salt 2g.
                Mix using Whisk attachment.
                Add to the same Kneading Machine Bowl:
                Chocolate Curls 50g.
                Mix using Whisk attachment.
                Transfer Chocolate Chip Cookie Dough into Round cookie cake pan.
                Bake - set time and temperature according to the cake pan.
            `
        },
        {
            name: 'Chocolate Cookies',
            ingredients: [
                { name: 'Chocolate Curls', amount: '' },
                { name: 'Egg', amount: '' },
                { name: 'Butter', amount: '' },
                { name: 'Cake Flour', amount: '' },
                { name: 'Baking Powder', amount: '' },
                { name: 'Cocoa', amount: '' },
                { name: 'Brown Sugar', amount: '' },
                { name: 'Vanilla Extract', amount: '' }
            ],
            text: `
                **CHOCOLATE COOKIE DOUGH**
                Add to an empty Kneading Machine Bowl:
                Butter 200g,
                Brown Sugar 300g.
                Mix using Hook attachement.
                Add to the same Kneading Machine Bowl:
                Vanilla Extract 10ml,
                Egg 200g.
                Mix using Paddle attachment.
                Store for later use.
                Add to an empty Kneading Machine Bowl:
                Cake Flour 300g,
                Cocoa 100g,
                Baking Powder 5g.
                Mix using Hook attachment.
                Add to the same Kneading Machine Bowl:
                Chocolate Curls 50g,
                Dough.
                Mix using Hook attachment.
                Transfer Chocolate Cookie Dough into Round cookie cake pan.
                Bake - set time and temperature according to the cake pan.
            `
        },
        {
            name: 'Cinnamon Raisin Muffins',
            ingredients: [
                { name: 'Raisins', amount: '' },
                { name: 'Butter', amount: '' },
                { name: 'Egg', amount: '' },
                { name: 'Pastry Flour', amount: '' },
                { name: 'Baking Powder', amount: '' },
                { name: 'Salt', amount: '' },
                { name: 'Cinnamon, ground', amount: '' },
                { name: 'Brown Sugar', amount: '' },
                { name: 'Vanilla Sugar', amount: '' },
                { name: 'Vanilla Extract', amount: '' },
                { name: 'Almond Milk', amount: '' }
            ],
            text: `
                Bake - set time and temperature according to the cake pan.
            `
        },
        {
            name: 'Eclairs',
            ingredients: [
                { name: 'Egg', amount: '' },
                { name: 'Butter', amount: '' },
                { name: 'Pastry Flour', amount: '' },
                { name: 'Caster Sugar', amount: '' },
                { name: 'Salt', amount: '' },
                { name: 'Coconut Milk', amount: '' }
            ],
            text: `
                Bake - set time and temperature according to the cake pan.
            `
        },
        {
            name: 'European Apple Pie',
            ingredients: [
                { name: 'Butter', amount: '' },
                { name: 'Egg', amount: '' },
                { name: 'Egg Yolk', amount: '' },
                { name: 'Apple', amount: '' },
                { name: 'Lemon Zest, dried', amount: '' },
                { name: 'Baking Powder', amount: '' },
                { name: 'Pastry Flour', amount: '' },
                { name: 'Granulated Sugar', amount: '' },
                { name: 'Cinnamon, ground', amount: '' },
                { name: 'Sour Cream', amount: '' }
            ],
            text: `
                Bake - set time and temperature according to the cake pan.
            `
        },
        {
            name: 'European Cheesecake',
            ingredients: [
                { name: 'Butter', amount: '' },
                { name: 'Egg', amount: '' },
                { name: 'Block Cream Cheese', amount: '' },
                { name: 'Egg Yolk', amount: '' },
                { name: 'Baking Powder', amount: '' },
                { name: 'Salt', amount: '' },
                { name: 'Caster Sugar', amount: '' },
                { name: 'Cake Flour', amount: '' },
                { name: 'Granulated Sugar', amount: '' },
                { name: 'Vanilla Extract', amount: '' },
                { name: 'Beaten Egg White', amount: '' },
                { name: 'Greek Yogurt', amount: '' }
            ],
            text: `
                Bake - set time and temperature according to the cake pan.
            `
        },
        {
            name: 'Madeira Cake',
            ingredients: [
                { name: 'Egg', amount: '' },
                { name: 'Butter', amount: '' },
                { name: 'Unbleached Flour', amount: '' },
                { name: 'Chopped Nuts', amount: '' },
                { name: 'Lemon Zest, dried', amount: '' },
                { name: 'Powdered Sugar', amount: '' },
                { name: 'Vanilla Extract', amount: '' }
            ],
            text: `
                Bake - set time and temperature according to the cake pan.
            `
        },
        {
            name: 'Mapple Syrup Cake',
            ingredients: [
                { name: 'Butter', amount: '' },
                { name: 'Egg', amount: '' },
                { name: 'Cake Flour', amount: '' },
                { name: 'Baking Powder', amount: '' },
                { name: 'Ginger', amount: '' },
                { name: 'Brown Sugar', amount: '' },
                { name: 'Chopped Nuts', amount: '' },
                { name: 'Whole Milk', amount: '' },
                { name: 'Mapple Syrup', amount: '' }
            ],
            text: `
                Bake - set time and temperature according to the cake pan.
            `
        },
        {
            name: 'New York Cheesecake',
            ingredients: [
                { name: 'Butter', amount: '' },
                { name: 'Block Cream Cheese', amount: '' },
                { name: 'Egg', amount: '' },
                { name: 'Biscuit Crumbs', amount: '' },
                { name: 'Caster Sugar', amount: '' },
                { name: 'Lemon Zest, dried', amount: '' },
                { name: 'Granulated Sugar', amount: '' },
                { name: 'Cake Flour', amount: '' },
                { name: 'Salt', amount: '' },
                { name: 'Sour Cream', amount: '' },
                { name: 'Vanilla Extract', amount: '' },
                { name: 'Lemon Juice', amount: '' }
            ],
            text: `
                Bake - set time and temperature according to the cake pan.
            `
        },
        {
            name: 'Poppy Seed Cake',
            ingredients: [
                { name: 'Egg', amount: '' },
                { name: 'Butter', amount: '' },
                { name: 'Poppy Seeds', amount: '' },
                { name: 'Granulated Sugar', amount: '' },
                { name: 'Enriched Flour', amount: '' },
                { name: 'Baking Powder', amount: '' },
                { name: 'Salt', amount: '' },
                { name: 'Vanilla Extract', amount: '' },
                { name: 'Water', amount: '' }
            ],
            text: `
                Bake - set time and temperature according to the cake pan.
            `
        },
        {
            name: 'Pumpkin Pie',
            ingredients: [
                { name: 'Butter', amount: '' },
                { name: 'Egg', amount: '' },
                { name: 'Pumpkin', amount: '' },
                { name: 'Salt', amount: '' },
                { name: 'Pastry Flour', amount: '' },
                { name: 'Starch', amount: '' },
                { name: 'Cinnamon, ground', amount: '' },
                { name: 'Ginger', amount: '' },
                { name: 'Nutmeg, powder', amount: '' },
                { name: 'Brown Sugar', amount: '' },
                { name: 'Water', amount: '' },
                { name: 'Heavy Cream', amount: '' },
                { name: 'Whole Milk', amount: '' }
            ],
            text: `
                Bake - set time and temperature according to the cake pan.
            `
        },
        {
            name: 'Sachertorte',
            ingredients: [
                { name: 'Dark Chocolate', amount: '' },
                { name: 'Butter', amount: '' },
                { name: 'Egg Yolk', amount: '' },
                { name: 'Cake Flour', amount: '' },
                { name: 'Granulated Sugar', amount: '' },
                { name: 'Vanilla Extract', amount: '' },
                { name: 'Beaten Egg White', amount: '' }
            ],
            text: `
                Bake - set time and temperature according to the cake pan.
            `
        },
        {
            name: 'Sprinkle Cookies',
            ingredients: [
                { name: 'Egg', amount: '' },
                { name: 'Butter', amount: '' },
                { name: 'Block Cream Cheese', amount: '' },
                { name: 'Sprinkle Candies', amount: '' },
                { name: 'Unbleached Flour', amount: '' },
                { name: 'Baking Powder', amount: '' },
                { name: 'Salt', amount: '' },
                { name: 'Vanilla Sugar', amount: '' },
                { name: 'Vanilla Extract', amount: '' },
                { name: 'Almond Milk', amount: '' }
            ],
            text: `
                Bake - set time and temperature according to the cake pan.
            `
        },
        {
            name: 'Chocolate Yeast Cake',
            ingredients: [
                { name: 'Dark Chocolate', amount: '' },
                { name: 'Butter', amount: '' },
                { name: 'Egg', amount: '' },
                { name: 'Baker Yeast', amount: '' },
                { name: 'Baking Powder', amount: '' },
                { name: 'Salt', amount: '' },
                { name: 'Cake Flour', amount: '' },
                { name: 'Brown Sugar', amount: '' },
                { name: 'Vanilla Sugar', amount: '' },
                { name: 'Soy Milk', amount: '' }
            ],
            text: `
                Bake - set time and temperature according to the cake pan.
            `
        },
        {
            name: 'Medovik',
            ingredients: [
                { name: 'Egg', amount: '' },
                { name: 'Butter', amount: '' },
                { name: 'Cake Flour', amount: '' },
                { name: 'Granulated Sugar', amount: '' },
                { name: 'Powdered Sugar', amount: '' },
                { name: 'Honey', amount: '' },
                { name: 'Sour Cream', amount: '' },
                { name: 'Heavy Cream', amount: '' },
                { name: 'Vanilla Extract', amount: '' }
            ],
            text: `
                Bake - set time and temperature according to the cake pan.
            `
        },
        {
            name: 'Mooncake',
            ingredients: [
                { name: 'Lotus Seed', amount: '' },
                { name: 'Egg Yolk', amount: '' },
                { name: 'Starch', amount: '' },
                { name: 'Salt', amount: '' },
                { name: 'Powdered Sugar', amount: '' },
                { name: 'Pastry Flour', amount: '' },
                { name: 'Water', amount: '' },
                { name: 'Peanut Oil', amount: '' },
                { name: 'Golden Syrup', amount: '' }
            ],
            text: `
                Bake - set time and temperature according to the cake pan.
            `
        },
        {
            name: 'Oatmeal Cookies',
            ingredients: [
                { name: 'Egg', amount: '' },
                { name: 'Butter', amount: '' },
                { name: 'Cooking Oats', amount: '' },
                { name: 'Unbleached Flour', amount: '' },
                { name: 'Baking Powder', amount: '' },
                { name: 'Cinnamon, ground', amount: '' },
                { name: 'Salt', amount: '' },
                { name: 'Brown Sugar', amount: '' },
                { name: 'Powdered Sugar', amount: '' },
                { name: 'Corn Syrup', amount: '' },
                { name: 'Vanilla Extract', amount: '' }
            ],
            text: `
                Bake - set time and temperature according to the cake pan.
            `
        },
        {
            name: 'Red Velvet Cake',
            ingredients: [
                { name: 'Butter', amount: '' },
                { name: 'Egg Yolk', amount: '' },
                { name: 'Block Cream Cheese', amount: '' },
                { name: 'Cake Flour', amount: '' },
                { name: 'Baking Powder', amount: '' },
                { name: 'Salt', amount: '' },
                { name: 'Cocoa', amount: '' },
                { name: 'Granulated Sugar', amount: '' },
                { name: 'Almond Milk', amount: '' },
                { name: 'Sunflower Oil', amount: '' },
                { name: 'Food Dye - Red', amount: '' },
                { name: 'Vanilla Extract', amount: '' },
                { name: 'White Vinegar', amount: '' }
            ],
            text: `
                Bake - set time and temperature according to the cake pan.
            `
        },
        {
            name: 'Strawberry Cake',
            ingredients: [
                { name: 'Strawberry', amount: '' },
                { name: 'Egg Yolk', amount: '' },
                { name: 'Butter', amount: '' },
                { name: 'Cake Flour', amount: '' },
                { name: 'Baking Powder', amount: '' },
                { name: 'Salt', amount: '' },
                { name: 'Vanilla Sugar', amount: '' },
                { name: 'Starch', amount: '' },
                { name: 'Granulated Sugar', amount: '' },
                { name: 'Vanilla Extract', amount: '' },
                { name: 'Water', amount: '' },
                { name: 'Lemon Juice', amount: '' }
            ],
            text: `
                Bake - set time and temperature according to the cake pan.
            `
        },
    ]
}