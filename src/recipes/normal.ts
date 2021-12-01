import { Collection } from 'discord.js';
import type { Recipe } from 'src/@types';

export const recipes: Recipe[] = [
    {   
        name: 'Fried Shrimp',
        ingredients: [
            { name: 'Shrimp', amount: '6' },
            { name: 'Lemon', amount: '1' },
            { name: 'Parsley Leaves, fresh', amount: '3' },
            { name: 'Clarified Butter', amount: '30ml' },
            { name: 'Salt', amount: '10g' },
            { name: 'Black Pepper', amount: '10g' }
        ],
        text: `
            Fried Shrimp
            Add to a pan:
            Clarified Butter 30ml,
            Salt 10g,
            Black Pepper 10g,
            Shrimp 120g,
            Fry for 50s.
            Transfer everything into a Deep plate. Serve hot.
            
            Lemon Quarters
            Cut Lemon 80g into Quarters 20g.
            Transfer onto a Plate.
            
            Parsley Garnish
            Garnish with Parsley Leaves, fresh 6g.
        `
      },  
    {
        name: 'Baked Cod',
        ingredients: [
            { name: 'Lemon', amount: '1' },
            { name: 'Cod', amount: '1' },
            { name: 'Parsley Leaves, fresh', amount: '3' },
            { name: 'Lemon Juice', amount: '5ml' },
            { name: 'Clarified Butter', amount: '5ml' },
            { name: 'Olive Oil', amount: '5ml' },
            { name: 'Salt', amount: '3g' },
            { name: 'Black Pepper', amount: '3g' },
            { name: 'Sweet Bell Pepper, powder', amount: '5g' },
            { name: 'Cumin, powder', amount: '5g' }
        ],
        text: `
            Baked Cod
            Take Cod 160g.
            Season with: Salt 3g,
            Black Pepper 3g,
            Sweet Bell Pepper, powder 5g,
            Cumin, powder 5g.
            Fry for 35s each side.
            Drizzle in:
            Lemon Juice 5ml,
            Olive Oil 5ml,
            Clarified Butter 5ml.
            Transfer Cod to a Baking Tray.
            Bake for 45s.
            Transfer onto the Plate. Serve Hot.
            
            Lemon Quarters
            Cut Lemon 80g into Quarters 20g.
            Transfer onto a Plate.
            
            Parsley Garnish
            Garnish with Parsley Leaves, fresh 6g.
        `
      },
    {
        name: 'Baked Trout',
        ingredients: [
            { name: 'Trout', amount: '1' },
            { name: 'Lemon', amount: '1' },
            { name: 'Parsley Leaves, fresh', amount: '3' },
            { name: 'Black Pepper', amount: '5g' },
            { name: 'Dill, dried', amount: '5g' },
            { name: 'Thyme, dried', amount: '5g' },
            { name: 'Horseradish, dried', amount: '5g' }
        ],
        text: `
            Baked Trout
            Take Trout 200g.
            Season with:
            Black Pepper 5g,
            Thyme, dried 5g,
            Dill, dried 5g.
            Place on a Baking Tray.
            Bake for 90s.
            Season with Horseradish, dried 5g.
            Transfer onto a Plate. Serve Hot.
            
            Lemon Quarters
            Cut Lemon 80g into Quarters 20g.
            Transfer onto a Plate.
            
            Parsley Garnish
            Garnish with Parsley Leaves, fresh 6g.
        `
      },
    {
        name: 'Steak with French Fries',
        ingredients: [
            { name: 'Steak', amount: '1' },
            { name: 'Potato', amount: '2' },
            { name: 'Rosemary Twig', amount: '2' },
            { name: 'Salt', amount: '10g' },
            { name: 'Black Pepper', amount: '4g' }
        ],
        text: `
            Steak
            Take Steak 220g.
            Season with:
            Salt 4g,
            Black Pepper 4g.
            Fry for 45s each side.
            Transfer onto a Plate. Serve Hot.
            
            French Fries
            Take Potato 300g.
            Season with Salt 6g.
            Cut Potato 300g into Pieces 15g.
            Deep fry for 30s.
            Transfer onto a Plate. Serve Hot
            
            Rosemary Garnish
            Garnish with Rosemary Twig 10g.
        `
      },
    {
        name: 'Steak with French Fries',
        ingredients: [
            { name: 'Steak', amount: '1' },
            { name: 'Potato', amount: '2' },
            { name: 'Rosemary Twig', amount: '2' },
            { name: 'Salt', amount: '10g' },
            { name: 'Black Pepper', amount: '4g' }
        ],
        text: `
            
        ` 
      },
    {
        name: 'Gazpacho',
        ingredients: [
            { name: 'Tomato', amount: '3' },
            { name: 'Cucumber', amount: '2' },
            { name: 'Garlic', amount: '2' },
            { name: 'Red Bell Pepper', amount: '2' },
            { name: 'Bread', amount: '1/2' },
            { name: 'Chives', amount: '4' },
            { name: 'Olive Oil', amount: '30ml' },
            { name: 'Wine Vinegar', amount: '30ml' },
            { name: 'Salt', amount: '10g' },
            { name: 'Black Pepper', amount: '10g' }
        ],
        text: `
            Gazpacho
            Add to the Food Processor:
            Cucumber 320g,
            Tomato 360g,
            Red Bell Pepper 480g,
            Garlic 20g,
            Bread 150g.
            Blend.
            Add:
            Olive Oil 30ml,
            Wine Vinegar 30ml,
            Salt 10g,
            Black Pepper 10g.
            Pour the Liquid 300ml into a Deep Plate. Serve cool.
            
            Chives Garnish
            Garnish with Chives 8g.
        ` 
      },
    {
        name: 'Pork Chops with Baked Potatoes',
        ingredients: [
            { name: 'Potato', amount: '2g' },
            { name: 'Pork Chops', amount: '1' },
            { name: 'Sunflower Oil', amount: '30ml' },
            { name: 'Salt', amount: '10g' },
            { name: 'Black Pepper', amount: '4g' },
            { name: 'Thyme, dried', amount: '6g' }
        ],
        text: `
            Take Pork Chops 200g.
            Season with:
            Salt 4g,
            Black Pepper 4g,
            Thyme, dried 6g.
            Add to the Pan:
            Sunflower Oil 30ml,
            Pork Chops.
            Fry for 90s each side.
            Transfer onto a Plate. Serve Hot.
            
            Baked Potatoes
            Take Potato 300g.
            Season with Salt 6g.
            Cut Potato into Chunks 50g.
            Transfer onto a Baking Tray.
            Bake for 80s.
            Transfer onto a Plate. Serve Hot.
        ` 
      },
    {
        name: 'Pork Tenderloin with Caramelized Vegetables',
        ingredients: [
            { name: 'Carrot', amount: '1' },
            { name: 'Beetroot', amount: '1' },
            { name: 'Pork Tenderloin', amount: '1' },
            { name: 'Rosemary Twig', amount: '1' },
            { name: 'Salt', amount: '6g' },
            { name: 'Black Pepper', amount: '6g' },
            { name: 'Cumin, powder', amount: '4g' },
            { name: 'Allspice, powder', amount: '4g' }
        ],
        text: `
            Pork Tenderloin
            Take Pork Tenderloin 250g.
            Season with:
            Salt 6g,
            Black Pepper 6g,
            Allspice, powder 4g,
            Cumin, powder 4g.
            Place on a Baking Tray.
            Bake for 130s.
            Cut Pork Tenderloin into Slices 25g.
            Transfer onto a Plate. Serve Hot
            
            Caramelized Vegetables
            Cut:
            Beetroot 120g into Pieces 20g,
            Carrot 70g into Quarters ~18g.
            Fry for 80s.
            Transfer onto a Plate. Serve Hot.
           
           Rosemary Garnish
           Garnish with Rosemary Twig 5g.
        ` 
      },
    {
        name: 'Baked Trout with Roasted Brussels Sprouts',
        ingredients: [
            { name: 'Trout', amount: '1' },
            { name: 'Lemon', amount: '1' },
            { name: 'Brussels Sprouts', amount: '4' },
            { name: 'Parsley Leaves, fresh', amount: '3' },
            { name: 'Soy Sauce', amount: '5ml' },
            { name: 'Olive Oil', amount: '10ml' },
            { name: 'Rice Vinegar', amount: '5ml' },
            { name: 'Black Pepper', amount: '5g' },
            { name: 'Dill, dried', amount: '5g' },
            { name: 'Thyme, dried', amount: '5g' },
            { name: 'Horseradish, dried', amount: '5g' }
        ],
        text: `
            Baked Trout
            Take Trout 200g.
            Season with:
            Black Pepper 5g,
            Thyme, dried 5g,
            Dill, dried 5g.
            Place on Baking Tray.
            Bake for 90s.
            Season with Horseradish, dried 5g.
            Transfer onto a Plate. Serve Hot.
            
            Roasted Brussels Sprouts
            Add to a Bowl:
            Olive Oil 10ml,
            Soy Sauce 5ml,
            Wine Vinegar 5ml.
            Transfer onto a Plate:
            Brussels Sprouts 60g.
            Drizzle with Mixture.
            Cut Brussels Sprouts into Halves ~8g.
            Place on a Baking Tray.
            Bake for 100s.
            Transfer onto the Plate. Serve Hot.
            
            Lemon Quarters
            Cut Lemon 80g into Quarters 20g.
            Transfer onto a Plate.
            
            Parsley Garnish
            Garnish with Parsley Leaves, fresh 6g.
        ` 
      },
    {
        name: 'Fusilli Aglio, Olio e Peperoncino',
        ingredients: [
            { name: 'Fusilli', amount: '16' },
            { name: 'Garlic', amount: '4' },
            { name: 'Parsley Leaves, fresh', amount: '5' },
            { name: 'Water', amount: '1000ml' },
            { name: 'Olive Oil', amount: '40ml' },
            { name: 'Salt', amount: '5g' },
            { name: 'Chili Flakes', amount: '5g' }
        ],
        text: `
            Pasta
            Add to a Pot:
            Water 1000ml,
            Salt 5g,
            Fusilli 160g.
            Boil for 45s.
            Transfer into a Casserole.
            Reserve Water.
            Cut Garlic 40g into Halves 5g.
            Add to a Pan:
            Olive Oil 40ml.
            Garlic.
            Fry for 15s.
            Add to the Pan:
            Chili Flakes 5g,
            Water(reserve) 50ml,
            Fusilli.
            Fry for 15s.
            Transfer everything into the Casserole. Serve Hot.
            
            Parsley Garnish
            Garnish with Parsley Leaves, fresh 10g.
        ` 
      },
    {
        name: 'Fast Pumpkin Soup',
        ingredients: [
            { name: 'Onion', amount: '1' },
            { name: 'Pumpkin', amount: '1/5' },
            { name: 'Chicken Broth', amount: '500ml' },
            { name: 'Sour Cream', amount: '150ml' },
            { name: 'Salt', amount: '20g' }
        ],
        text: `
            Pumpkin Soup
            Add to a Pot:
            Chicken Broth 500ml,
            Salt 20g,
            Pumpkin 1000g,
            Onion 120g.
            Boil for 90s.
            Blend.
            Add Sour Cream 150ml.
            Pour the Liquid 300ml into a Deep Plate. Serve Hot.
        ` 
      },
    {
        name: 'Simple Ukrainian Borscht',
        ingredients: [
            { name: 'Onion', amount: '1' },
            { name: 'Carrot', amount: '1' },
            { name: 'Parsley Root', amount: '1' },
            { name: 'Beetroot', amount: '5' },
            { name: 'Chicken Broth', amount: '1000ml' },
            { name: 'Salt', amount: '20g' },
            { name: 'Black Pepper', amount: '20g' }
        ],
        text: `
            Ukrainian Borscht
            Add to a pot:
            Chicken Broth 1000ml,
            Salt 20g,
            Black Pepper 20g,
            Beetroot 600g,
            Onion 120g,
            Carrot 70g,
            Parsley Root 80g.
            Boil for 120s.
            Pour the Liquid 300ml into a Deep Plate. Serve Hot.
        ` 
      },
    {
        name: 'Tomato Bruschetta',
        ingredients: [
            { name: 'Tomato', amount: '1' },
            { name: 'Garlic', amount: '1' },
            { name: 'Bread', amount: '~1/4' },
            { name: 'Basil Leaf, fresh', amount: '2' },
            { name: 'Olive Oil', amount: '20ml' },
            { name: 'Balsamic Vinegar', amount: '10ml' },
            { name: 'Salt', amount: '5g' },
            { name: 'Black Pepper', amount: '5g' },
            { name: 'Garlic, dried', amount: '5g' },
        ],
        text: `
            Bruschetta
            Take Bread 70g.
            Drizzle with Olive Oil 5ml.
            Season with Garlic, dried 5g.
            Cut Bread into Halves 35g.
            Transfer onto a Baking tray.
            Bake for 30s.
            Transfer onto a Plate. Serve hot.
            
            Tomato Dressing
            Transfer onto the Plate:
            Tomato 120g,
            Garlic 10g.
            Drizzle in:
            Olive Oil 15ml,
            Balsamic Vinegar 10ml.
            Season with:
            Salt 5g,
            Black Pepper 5g.
            Cut:
            Tomato into Pieces 15g,
            Garlic into Halves 5g.
            Transfer everything onto a Plate.
            Add Basil Leaf, fresh 6g.
            Serve cool.
        ` 
      },
    {
        name: 'Shrimp Salad with Tomato Bruschetta',
        ingredients: [
            { name: 'Tomato', amount: '1' },
            { name: 'Onion', amount: '1' },
            { name: 'Garlic', amount: '1' },
            { name: 'Radish', amount: '2' },
            { name: 'Shrimp', amount: '3' },
            { name: 'Bread', amount: '~1/4' },
            { name: 'Basil Leaf, fresh', amount: '2' },
            { name: 'Dill, fresh', amount: '5' },
            { name: 'Sour Cream', amount: '25ml' },
            { name: 'Lemon Juice', amount: '5ml' },
            { name: 'Mustard', amount: '5ml' },
            { name: 'Olive Oil', amount: '20ml' },
            { name: 'Balsamic Vinegar', amount: '10ml' },
            { name: 'Salt', amount: '8g' },
            { name: 'Black Pepper', amount: '5g' },
            { name: 'Dill, dried', amount: '8g' },
            { name: 'Cayenne Pepper, powder', amount: '4g' },
            { name: 'Garlic, dried', amount: '5g' },
        ],
        text: `
            Shrimp Salad
            Add to a Baking Tray:
            Shrimp 80g.
            Bake for 70s.
            Add to a Bowl:
            Sour Cream 25ml,
            Lemon Juice 5ml,
            Mustard 5ml,
            Dill, dried 8g,
            Cayenne Pepper, powder 4g,
            Salt 3g.
            Transfer onto a Plate:
            Onion 120g,
            Radish 30g.
            Drizzle with Mixture 20ml.
            Cut:
            Onion into Pieces 15g,
            Radish into Halves ~8g.
            Transfer everything onto a Plate. Serve cool.
            
            Bruschetta
            Take Bread 70g.
            Drizzle with Olive Oil 5ml.
            Season with Garlic, dried 5g.
            Cut Bread into Halves 35g.
            Bake for 30s.
            Serve hot.
            
            Tomato Dressing
            Transfer onto a Plate:
            Tomato 120g,
            Garlic 10g.
            Drizzle in:
            Olive Oil 15ml,
            Balsamic Vinegar 10ml.
            Season with:
            Salt 5g,
            Black Pepper 5g.
            Cut:
            Tomato into Pieces 15g,
            Garlic into Halves 5g.
            Transfer onto the Plate.
            Add Basil Leaf, fresh 6g.
            Serve Cool.
            
            Dill Garnish
            Garnish with Dill, fresh 5g.
        ` 
      },
    {
        name: 'Fried Garlic Shrimp',
        ingredients: [
            { name: 'Garlic', amount: '2' },
            { name: 'Shrimp', amount: '6' },
            { name: 'Lemon', amount: '1' },
            { name: 'Bread', amount: '1/3' },
            { name: 'Parsley Leaves, fresh', amount: '3' },
            { name: 'Lemon Juice', amount: '6ml' },
            { name: 'Clarified Butter', amount: '30ml' },
            { name: 'Olive Oil', amount: '10ml' },
            { name: 'Salt', amount: '10g' },
            { name: 'Cayenne Pepper, powder', amount: '6g' },
            { name: 'Lemon Pepper', amount: '10g' }
        ],
        text: `
            Fried Garlic Shrimp
            Cut Garlic 20g into Halves 5g.
            Add to a Pan:
            Shrimp 120g.
            Fry for 30s.
            Add to the Pan:
            Clarified Butter 30ml,
            Parsley Leaves, fresh 6g,
            Salt 10g,
            Lemon Pepper 10g,
            Garlic.
            Fry for 20s.
            Drizzle with Lemon Juice 6ml.
            Season with Cayenne Pepper, powder 6g.
            Transfer onto a Plate:
            Garlic,
            Parsley Leaves, fresh,
            Shrimp.
            Serve hot.
            
            Croutons
            Take Bread 100g.
            Drizzle in Olive Oil 10ml.
            Cut Bread into Pieces 20g.
            Fry for 30s.
            Transfer onto a Plate. Serve Hot.
            
            Lemon Quarters
            Cut Lemon 80g into Quarters 20g.
            Transfer onto a Plate.
        ` 
      },
    {
        name: 'German Potato Salad',
        ingredients: [
            { name: 'Onion', amount: '1' },
            { name: 'Potato', amount: '2' },
            { name: 'Chives', amount: '4' },
            { name: 'Water', amount: '1000ml' },
            { name: 'Sunflower Oil', amount: '20ml' },
            { name: 'Chicken Broth', amount: '500ml' },
            { name: 'White Vinegar', amount: '20ml' },
            { name: 'Mustard', amount: '10ml' },
            { name: 'Salt', amount: '30g' },
            { name: 'Sugar', amount: '10g' },
            { name: 'White Pepper', amount: '10g' }
        ],
        text: `
            Potato Salad
            Add to a Pot:
            Water 1000ml,
            Salt 20g,
            Potato 300g.
            Boil for 120s.
            Cut:
            Onion 120g into Pieces 15g,
            Potato 300g into Pieces 15g.
            Add to a Pot:
            Chicken Broth 500ml,
            White Vinegar 20ml,
            Salt 10g,
            White Pepper 10g,
            Sugar 10g,
            Mustard 10ml,
            Onion.
            Boil for 60s.
            Transfer into a Casserole:
            Potato,
            Onion.
            Drizzle in Sunflower Oil 20ml.
            Serve warm.
            
            Chives Garnish
            Garnish with Chives 8g.
        ` 
    },
    {
        name: 'Smokey German Potato Salad',
        ingredients: [
            { name: 'Onion', amount: '1' },
            { name: 'Potato', amount: '2' },
            { name: 'Bacon', amount: '2' },
            { name: 'Chives', amount: '4' },
            { name: 'Sunflower Oil', amount: '20ml' },
            { name: 'Chicken Broth', amount: '500ml' },
            { name: 'White Vinegar', amount: '20ml' },
            { name: 'Mustard', amount: '10ml' },
            { name: 'Salt', amount: '10g' },
            { name: 'Sugar', amount: '10g' },
            { name: 'White Pepper', amount: '10g' }
        ],
        text: `
            Smokey Potato Salad
            Take Potato 300g.
            Grill for 40s.
            Cut Potato into Pieces 25g.
            Add to a Pan:
            Bacon 120g.
            Fry for 60s.
            Cut Onion 120g into Pieces 15g.
            Add to a Pot:
            Chicken Broth 500ml,
            White Vinegar 20ml,
            Salt 10g,
            White Pepper 10g,
            Sugar 10g,
            Mustard 10ml,
            Onion.
            Boil for 50s.
            Add to the Pot:
            Bacon 120g.
            Boil for 40s.
            Transfer into a Casserole:
            Potato,
            Bacon,
            Onion.
            Drizzle in Sunflower Oil 20ml.
            Serve warm.
            
            Chives Garnish
            Garnish with Chives 8g.
        ` 
    },
    {
        name: 'Baked Cod with Greek Salad',
        ingredients: [
            { name: 'Tomato', amount: '1' },
            { name: 'Cucumber', amount: '1/2' },
            { name: 'Onion', amount: '1' },
            { name: 'Cod', amount: '1' },
            { name: 'Goat Cheese', amount: '~1/12' },
            { name: 'Green Bell Pepper', amount: '1/2' },
            { name: 'Parsley Leaves, fresh', amount: '3' },
            { name: 'Lemon Juice', amount: '5ml' },
            { name: 'Clarified Butter', amount: '5ml' },
            { name: 'Olive Oil', amount: '15ml' },
            { name: 'Salt', amount: '13g' },
            { name: 'Black Pepper', amount: '4g' },
            { name: 'Oregano, dried', amount: '10g' },
            { name: 'Sweet Bell Pepper, powder', amount: '5g' },
            { name: 'Cumin, powder', amount: '5g' },
        ],
        text: `
            Baked Cod
            Add to a Bowl:
            Clarified Butter 5ml,
            Lemon Juice 5ml,
            Olive Oil 5ml.
            Take Cod 160g.
            Season with:
            Salt 3g,
            Black Pepper 3g,
            Sweet Bell Pepper, powder 5g,
            Cumin, powder 5g.
            Add to the Pan:
            Olive Oil 20ml,
            Cod.
            Fry for 35s.
            Drizzle in Mixture 15ml.
            Transfer onto the Baking Tray.
            Bake for 45s.
            Transfer onto a Plate. Serve hot.
            
            Greek Salad
            Cut:
            Green Bell Pepper 120g into Pieces 50g,
            Cucumber 80g into Quarters 20g,
            Onion 120g into Pieces 10g,
            Tomato 120g into Quarters 30g.
            Transfer onto a Plate.
            Add Goat Cheese 40g.
            Season with:
            Salt 10g,
            Oregano, dried 10g.
            Drizzle in Olive Oil 10ml.
            Serve cool.
            
            Parsley Garnish
            Garnish with Parsley Leaves, fresh 6g.
        ` 
    },
    {
        name: 'Grilled Tuna Steak',
        ingredients: [
            { name: 'Lemon', amount: '1' },
            { name: 'Tuna', amount: '1' },
            { name: 'Oregano Twig', amount: '2' },
            { name: 'Salt', amount: '5g' },
            { name: 'Black Pepper', amount: '5g' }
        ],
        text: `
            Grilled Tuna Steak
            Take Tuna 200g.
            Season with:
            Salt 5g,
            Black Pepper 5g.
            Grill for 80s each side.
            Transfer onto the Plate. Serve hot.
            
            Lemon Quarters
            Cut Lemon 80g into Quarters 20g.
            Transfer onto the Plate.
            
            Oregano Garnish
            Garnish with Oregano Twig 8g.
        ` 
    },
    {
        name: 'Grilled Tuna Steak with Orange Salad',
        ingredients: [
            { name: 'Onion', amount: '1/2' },
            { name: 'Orange', amount: '~1/2' },
            { name: 'Tuna', amount: '1' },
            { name: 'Oregano Twig', amount: '2' },
            { name: 'White Vinegar', amount: '10ml' },
            { name: 'Olive Oil', amount: '20ml' },
            { name: 'Salt', amount: '10g' },
            { name: 'Black Pepper', amount: '10g' },
            { name: 'Thyme, dried', amount: '5g' }
        ],
        text: `
            Grilled Tuna Steak
            Take Tuna 200g.
            Season with:
            Salt 5g,
            Black Pepper 5g,
            Thyme, dried 5g.
            Grill for 80s each side.
            Transfer onto the Plate. Serve Hot.
            
            Sicilian Orange Salad
            Cut:
            Orange 100g into Pieces 20g,
            Onion 60g into Quarters 15g.
            Season with:
            Salt 5g,
            Black Pepper 5g.
            Add to a Bowl:
            Olive Oil 20ml,
            White Vinegar 10ml.
            Drizzle in Mixture.
            Transfer onto the Plate. Serve cool.
            
            Oregano Garnish
            Garnish with Oregano Twig 8g.
        ` 
    },
    {
        name: 'Salmon with Asparagus',
        ingredients: [
            { name: 'Asparagus', amount: '5' },
            { name: 'Salmon Fillet', amount: '1' },
            { name: 'Water', amount: '1000ml' },
            { name: 'Lemon Juice', amount: '5mlg' },
            { name: 'Salt', amount: '5g' },
            { name: 'Black Pepper', amount: '5g' }
        ],
        text: `
            Salmon Fillet
            Take Salmon Fillet 210g
            Season with:
            Salt 5g,
            Black Pepper 5g.
            Fry for 60s each side.
            Transfer onto the Plate.
            Drizzle in Lemon Juice 5ml.
            Serve hot.
            
            Boiled Asparagus
            Add to a Pot:
            Water 1000ml,
            Salt 20g,
            Asparagus 80g
            Boil for 100s.
            Transfer onto a Plate. Serve hot.
        ` 
    },
    {
        name: 'Salmon in Butter Sauce with Asparagus',
        ingredients: [
            { name: 'Asparagus', amount: '5' },
            { name: 'Salmon Fillet', amount: '1' },
            { name: 'Parsley Leaves, fresh', amount: '4' },
            { name: 'Sour Cream', amount: '20ml' },
            { name: 'Lemon Juice', amount: '10ml' },
            { name: 'Clarified Butter', amount: '15ml' },
            { name: 'Salt', amount: '10g' },
            { name: 'Black Pepper', amount: '10g' }
        ],
        text: `
            Salmon Fillet
            Take Salmon Fillet 210g.
            Season with:
            Salt 5g,
            Black Pepper 5g.
            Fry for 60s each side.
            Add to a Pot:
            Lemon Juice 10ml,
            Sour Cream 20ml,
            Clarified Butter 15ml.
            Boil for 30s.
            Add to the Pot:
            Salt 5g,
            Black Pepper 5g,
            Parsley Leaves, fresh 8g.
            Boil for 30s.
            Transfer onto the Plate:
            Salmon Fillet.
            Drizzle in Mixture.
            Serve Hot.
            
            Grilled Asparagus
            Take Asparagus 80g.
            Grill for 100s
            Transfer onto a Plate. Serve hot.
        ` 
    },
    {
        name: 'Salmon Steak and Boiled Potatoes',
        ingredients: [
            { name: 'Potato', amount: '2' },
            { name: 'Salmon Fillet', amount: '1' },
            { name: 'Water', amount: '1000ml' },
            { name: 'Sunflower Oil', amount: '10ml' },
            { name: 'Salt', amount: '25g' },
            { name: 'Black Pepper', amount: '5g' }
        ],
        text: `
            Salmon Steak
            Take Salmon Fillet 210g.
            Season with:
            Salt 5g,
            Black Pepper 5g.
            Add to a Pan:
            Sunflower Oil 10ml,
            Salmon Fillet.
            Fry for 60s each side.
            Transfer onto the Plate. Serve hot.
            
            Boiled Potatoes
            Add to a Pot:
            Water 1000ml,
            Salt 20g,
            Potato 300g.
            Boil for 120s.
            Transfer onto a Plate. Serve hot.
        ` 
    },
    {
        name: 'Salmon Steak, Potatoes, Grilled Tomatoes',
        ingredients: [
            { name: 'Tomato', amount: '2' },
            { name: 'Onion', amount: '1' },
            { name: 'Garlic', amount: '2' },
            { name: 'Potato', amount: '2' },
            { name: 'Salmon Fillet', amount: '1' },
            { name: 'Dill, fresh', amount: '5' },
            { name: 'Water', amount: '1000ml' },
            { name: 'Clarified Butter', amount: '20ml' },
            { name: 'Avocado Oil', amount: '10ml' },
            { name: 'Salt', amount: '25g' },
            { name: 'Black Pepper', amount: '5g' },
            { name: 'Rosemary, dried', amount: '5g' },
            { name: 'Thyme, dried', amount: '5g' }
        ],
        text: `
            Salmon Steak
            Take Salmon Fillet 210g.
            Season with:
            Salt 5g,
            Black Pepper 5g,
            Thyme, dried 5g,
            Rosemary, dried 5g.
            Add to the Pan:
            Avocado Oil 10ml,
            Salmon Fillet.
            Fry for 60s each side.
            Transfer onto the Plate. Serve hot.
            
            Boiled Potatoes
            Cut:
            Potato 300g into Halves 75g,
            Onion 120g into Quarters 30g,
            Garlic 20g into Halves 5g.
            Add to a Pot:
            Water 1000ml,
            Salt 20g,
            Potato.
            Boil for 120s.
            Add to a Pan:
            Clarified Butter 20ml,
            Onion,
            Garlic.
            Fry for 30s.
            Transfer onto a Plate:
            Potato.
            Drizzle in Mixture.
            Serve hot.
            
            Grilled Tomatoes
            Take Tomato 240g.
            Grill for 70s.
            Transfer onto a Plate. Serve hot.
            
            Dill Garnish
            Garnish with Dill, fresh 5g
        ` 
    },
    {
        name: 'Fried Shrimp Boil',
        ingredients: [
            { name: 'Potato', amount: '2' },
            { name: 'Cob of Corn', amount: '1' },
            { name: 'Shrimp', amount: '6' },
            { name: 'Parsley Leaves, fresh', amount: '5' },
            { name: 'Water', amount: '300ml' },
            { name: 'Lemon Juice', amount: '100ml' },
            { name: 'Clarified Butter', amount: '15ml' },
            { name: 'Salt', amount: '10g' },
            { name: 'Black Pepper', amount: '10g' },
            { name: 'Sweet Bell Pepper, powder', amount: '8g' },
            { name: 'Ginger', amount: '10g' },
            { name: 'Allspice, powder', amount: '10g' },
            { name: 'Bay Leaf, dried', amount: '8g' },
            { name: 'Cayenne Pepper, powder', amount: '5g' },
            { name: 'Cinnamon, ground', amount: '10g' },
            { name: 'Garlic, dried', amount: '5g' },
            { name: 'Nutmeg, powder', amount: '8g' }
        ],
        text: `
            Cut:
            Potato 300g into Halves 75g,
            Cob of Corn 180g into Pieces 30g.
            Add to the Pot:
            Water 300ml,
            Lemon Juice 100ml,
            Salt 10g,
            Black Pepper 10g,
            Allspice, powder 10g,
            Cinnamon, ground 10g,
            Bay Leaf, dried 8g,
            Nutmeg, powder 8g,
            Sweet Bell Pepper, powder 8g,
            Garlic, dried 5g,
            Cayenne Pepper, powder 5g,
            Ginger 10g,
            Potato,
            Cob of Corn.
            Boil for 60s.
            Drain.
            Add to a Pan:
            Clarified Butter 15ml,
            Shrimp 120g,
            Potato,
            Cob of Corn.
            Fry for 50s.
            Transfer into a Deep Plate:
            Shrimp,
            Potato,
            Cob of Corn,
            Mixture.
            Serve hot.
        ` 
    },
    {
        name: 'Baked Shrimp Boil',
        ingredients: [
            { name: 'Potato', amount: '2' },
            { name: 'Cob of Corn', amount: '1' },
            { name: 'Shrimp', amount: '6' },
            { name: 'Lemon', amount: '1' },
            { name: 'Parsley Leaves, fresh', amount: '5' },
            { name: 'Sausage', amount: '1' },
            { name: 'Water', amount: '300ml' },
            { name: 'Salt', amount: '10g' },
            { name: 'Black Pepper', amount: '10g' },
            { name: 'Sweet Bell Pepper, powder', amount: '8g' },
            { name: 'Ginger', amount: '10g' },
            { name: 'Allspice, powder', amount: '10g' },
            { name: 'Bay Leaf, dried', amount: '8g' },
            { name: 'Cayenne Pepper, powder', amount: '5g' },
            { name: 'Cinnamon, ground', amount: '10g' },
            { name: 'Garlic, dried', amount: '5g' },
            { name: 'Nutmeg, powder', amount: '8g' },
        ],
        text: `
            Baked Shrimp Boil
            Cut:
            Potato 300g into Halves 75g,
            Cob of Corn 180g into Pieces 30g,
            Lemon 80g into Pieces 10g,
            Sausage 240g into Pieces 24g.
            Add to the Pot:
            Water 300ml,
            Salt 10g,
            Black Pepper 10g,
            Bay Leaf, dried 8g
            Garlic, dried 5g,
            Sweet Bell Pepper, powder 8g,
            Cayenne Pepper, powder 5g,
            Nutmeg, powder 8g,
            Cinnamon, ground 10g,
            Allspice, powder 10g,
            Ginger 10g,
            Potato,
            Cob of Corn.
            Boil for 60s.
            Drain.
            Add to a Baking Tray:
            Shrimp 120g,
            Cob of Corn,
            Potato,
            Lemon,
            Sausage.
            Bake for 80s.
            Transfer onto a Plate. Serve hot.
            
            Parlsey Garnish
            Garnish with Parsley Leaves, fresh 10g.
        ` 
    },
    {
        name: 'Chicken Leg with Caprese Salad',
        ingredients: [
            { name: 'Tomato', amount: '1' },
            { name: 'Chicken Leg', amount: '1' },
            { name: 'Mozzarella', amount: '2' },
            { name: 'Basil Leaf, fresh', amount: '3' },
            { name: 'Olive Oil', amount: '10ml' },
            { name: 'Salt', amount: '8g' },
            { name: 'Black Pepper', amount: '8g' },
            { name: 'Cumin, powder', amount: '3g' },
            { name: 'Cayenne Pepper, powder', amount: '3g' },
        ],
        text: `
            Baked Chicken Leg
            Take Chicken Leg 180g.
            Season with:
            Salt 3g,
            Black Pepper 3g,
            Cayenne Pepper, powder 3g,
            Cumin, powder 3g.
            Place on a Baking Tray.
            Bake for 120s.
            Transfer onto a Plate. Serve hot.
            
            Caprese Salad
            Cut:
            Tomato 120g into Pieces 20g,
            Mozzarella 160g into Pieces 16g.
            Season with:
            Salt 5g,
            Black Pepper 5g.
            Drizzle in Olive Oil 10ml.
            Transfer onto a Plate. Serve cool.
            
            Basil Garnish
            Garnish with Basil Leaf, fresh 9g.
        ` 
    },
    {
        name: 'Marinated Chicken Leg with Caprese Salad',
        ingredients: [
            { name: 'Tomato', amount: '1' },
            { name: 'Chicken Leg', amount: '1' },
            { name: 'Mozzarella', amount: '2' },
            { name: 'Basil Leaf, fresh', amount: '3' },
            { name: 'Honey', amount: '15ml' },
            { name: 'Olive Oil', amount: '35ml' },
            { name: 'Balsamic Vinegar', amount: '10ml' },
            { name: 'Salt', amount: '10g' },
            { name: 'Black Pepper', amount: '10g' },
            { name: 'Sweet Bell Pepper, powder', amount: '3g' },
            { name: 'Garlic, dried', amount: '3g' },
        ],
        text: `
            Marinated Chicken Leg
            Add to a Bowl:
            Olive oil 20ml,
            Sweet Bell Pepper, powder 3g,
            Garlic, dried 3g,
            Salt 3g,
            Black Pepper 3g.
            Take Chicken Leg 180g.
            Drizzle in mixture.
            Transfer onto the Baking Tray.
            Bake for 120s.
            Transfer onto a Plate. Serve hot.
            
            Caprese Salad
            Add to a Bowl:
            Honey 15ml,
            Balsamic Vinegar 10ml,
            Olive Oil 15ml,
            Salt 7g,
            Black Pepper 7g.
            Cut:
            Tomato 120g into Pieces 20g,
            Mozzarella 160g into Pieces 16g.
            Transfer onto a Plate.
            Drizzle in Mixture.
            Serve cool.
            
            Basil Garnish
            Garnish with Basil Leaf, fresh 9g.
        ` 
    },
    {
        name: 'Hamburger',
        ingredients: [
            { name: 'Tomato', amount: '1/6' },
            { name: 'Onion', amount: '1/6' },
            { name: 'Burger Meat', amount: '1' },
            { name: 'Top Burger Bun', amount: '1' },
            { name: 'Bottom Burger Bun', amount: '1' },
            { name: 'Cheddar', amount: '1/6' },
            { name: 'Ketchup', amount: '10ml' },
            { name: 'Salt', amount: '3g' },
            { name: 'Black Pepper', amount: '3g' }
        ],
        text: `
            Hamburger
            Add to a Baking Tray:
            Top Burger Bun 40g,
            Bottom Burger Bun 40g.
            Bake for 30s.
            Take Burger Meat 112g.
            Season with:
            Salt 3g,
            Black Pepper 3g.
            Fry for 50s each side.
            Drizzle in Ketchup 10ml.
            Transfer onto a Plate:
            Bottom Burger Bun,
            Burger Meat,
            Cheddar 25g,
            Tomato 20g,
            Onion 20g,
            Top Burger Bun.
            Serve hot.
        ` 
    },
    {
        name: 'Honey-Mustard Burger with French Fries',
        ingredients: [
            { name: 'Tomato', amount: '1/6' },
            { name: 'Onion', amount: '1/6' },
            { name: 'Potato', amount: '2' },
            { name: 'Burger Meat', amount: '1' },
            { name: 'Top Burger Bun', amount: '1' },
            { name: 'Bottom Burger Bun', amount: '1' },
            { name: 'Cheddar', amount: '1/6' },
            { name: 'Honey', amount: '10ml' },
            { name: 'White Vinegar', amount: '5ml' },
            { name: 'Ketchup', amount: '10ml' },
            { name: 'Mustard', amount: '10ml' },
            { name: 'Olive Oil', amount: '15ml' },
            { name: 'Salt', amount: '11g' },
            { name: 'Black Pepper', amount: '7g' }
        ],
        text: `
            Honey-Mustard Hamburger
            Add to the Bowl:
            Honey 10ml,
            Olive Oil 15ml,
            White Vinegar 5ml,
            Mustard 10ml,
            Black Pepper 4g,
            Salt 4g.
            Add to a Baking Tray:
            Bottom Burger Bun 40g,
            Top Burger Bun 40g.
            Bake for 30s.
            Take Burger Meat 112g.
            Season with:
            Salt 3g,
            Black Pepper 3g.
            Fry for 50s each side.
            Drizzle in Mixture 15ml.
            Transfer onto a Plate:
            Bottom Burger Bun,
            Burger Meat,
            Cheddar 25g,
            Tomato 20g,
            Onion 20g,
            Top Burger Bun.
            Serve hot.
            
            French Fries
            Cut Potato 300g into Pieces 15g.
            Deep fry for 30s.
            Season with Salt 4g.
            Drizzle in Ketchup 10ml.
            Transfer onto a Plate. Serve hot.
        ` 
    },
    {
        name: 'Duck Breast with Apples',
        ingredients: [
            { name: 'Duck Breat', amount: '1' },
            { name: 'Apple', amount: '1' },
            { name: 'Sage Leaf, fresh', amount: '2' },
            { name: 'Sunflower Oil', amount: '10ml' },
            { name: 'Lemon Juice', amount: '8ml' },
            { name: 'Clarified Butter', amount: '10ml' },
            { name: 'Salt', amount: '3g' },
            { name: 'Black Pepper', amount: '3g' },
            { name: 'Sugar', amount: '3g' },
        ],
        text: `
            Fried Duck Breast
            Take Duck Breast 280g.
            Season with:
            Salt 3g,
            Black Pepper 3g,
            Sugar 3g.
            Add to the Pan:
            Sunflower Oil 10ml,
            Sage Leaf, fresh 6g,
            Duck Breast.
            Fry for 100s each side.
            Transfer onto a Plate:
            Duck Breast.
            Cut Apple 150g into Quarters ~38g.
            Transfer into a Bowl.
            Drizzle in Lemon Juice 8ml.
            Add to the Pan:
            Clarified Butter 10ml,
            Apple.
            Fry for 45s.
            Transfer onto a Plate:
            Duck Breast,
            Apple.
            Serve hot.
        ` 
    },
    {
        name: 'Duck Breast with Roasted Mushrooms',
        ingredients: [
            { name: 'Duck Breast', amount: '1' },
            { name: 'Apple', amount: '1' },
            { name: 'Button Mushroom', amount: '1' },
            { name: 'Sage Leaf, fresh', amount: '2' },
            { name: 'Sunflower Oil', amount: '10ml' },
            { name: 'Lemon Juice', amount: '8ml' },
            { name: 'Clarified Butter', amount: '10ml' },
            { name: 'Olive Oil', amount: '40ml' },
            { name: 'Salt', amount: '8g' },
            { name: 'Black Pepper', amount: '8g' },
            { name: 'Sugar', amount: '3g' },
            { name: 'Garlic, dried', amount: '5g' }
        ],
        text: `
            Fried Duck Breast
            Take Duck Breast 280g.
            Season with:
            Salt 3g,
            Black Pepper 3g,
            Sugar 3g.
            Add to the Pan:
            Sunflower Oil 10ml,
            Sage Leaf, fresh 6g,
            Duck Breast.
            Fry for 100s each side.
            Transfer onto a Plate:
            Duck Breast 280g.
            Cut Apple 150g into Quarters ~38g.
            Transfer into a Bowl.
            Drizzle in Lemon Juice 8ml.
            Add to the Pan:
            Clarified Butter 10ml,
            Apple.
            Fry for 45s.
            Transfer onto a Plate:
            Apple,
            Duck Breast.
            Serve hot.
            
            Roasted Mushrooms
            Add to a Bowl:
            Olive Oil 40ml,
            Salt 5g,
            Black Pepper 5g,
            Garlic, dried 5g.
            Take Button Mushroom 50g.
            Drizzle in Mixture 16ml.
            Cut Button Mushroom into Pieces 10g.
            Transfer onto a Baking Tray.
            Bake for 100s.
            Transfer onto a Plate. Serve hot.
        ` 
    },
    {
        name: 'Grilled Beef Chuck with Baked Potatoes',
        ingredients: [
            { name: 'Potato', amount: '2' },
            { name: 'Beef Chuck', amount: '1/5' },
            { name: 'Rosemary Twig', amount: '2' },
            { name: 'Black Pepper', amount: '4g' },
            { name: 'Sweet Bell Pepper, powder', amount: '4g' },
            { name: 'Cilantro Leaves, dried', amount: '4g' },
            { name: 'Rosemary, dried', amount: '4g' },
            { name: 'Chili Flakes', amount: '4g' },
            { name: 'Marjoram, dried', amount: '4g' }
        ],
        text: `
            Grilled Beef Chuck
            Take Beef Chuck 200g.
            Season with:
            Sweet Bell Pepper, powder 4g,
            Marjoram, dried 4g,
            Cilantro Leaves, dried 4g,
            Rosemary, dried 4g,
            Black Pepper 4g,
            Chili Flakes 4g.
            Cut Beef Chuck into Halves 100g.
            Grill for 180s.
            Transfer onto a Plate. Serve hot.
            
            Baked Potatoes
            Add to a Baking Tray:
            Potato 300g.
            Bake for 80s.
            Transfer onto a Plate. Serve hot.
            
            Rosemary Garnish
            Garnish with Rosemary Twig 10g.
        ` 
    },
    {
        name: 'Beef Chuck with Potatoes and Garlic Sauce',
        ingredients: [
            { name: 'Garlic', amount: '2' },
            { name: 'Potato', amount: '2' },
            { name: 'Beef Chuck', amount: '1/5' },
            { name: 'Rosemary Twig', amount: '2' },
            { name: 'Sunflower Oil', amount: '10ml' },
            { name: 'Sour Cream', amount: '50ml' },
            { name: 'Mustard', amount: '10ml' },
            { name: 'Black Pepper', amount: '2g' },
            { name: 'Sweet Bell Pepper, powder', amount: '2g' },
            { name: 'Dill, dried', amount: '5g' },
            { name: 'Cilantro Leaves, dried', amount: '2g' },
            { name: 'Rosemary, dried', amount: '2g' },
            { name: 'Chili Flakes', amount: '2g' },
            { name: 'Marjoram, dried', amount: '2g' }
        ],
        text: `
            Grilled Beef Chuck
            Add to a Bowl:
            Sunflower Oil 10ml,
            Mustard 10ml,
            Marjoram, dried 2g,
            Cilantro Leaves, dried 2g,
            Sweet Bell Pepper, powder 2g,
            Rosemary, dried 2g,
            Black Pepper 2g,
            Chili Flakes 2g.
            Cut Beef Chuck 200g into Halves 100g.
            Drizzle in mixture.
            Grill for 180s.
            Transfer onto a Plate. Serve hot.
            
            Garlic Sauce
            Cut Garlic 20g into Halves 5g.
            Add to a Bowl:
            Sour Cream 50ml,
            Dill, dried 5g,
            Garlic 20g.
            
            Baked Potatoes
            Add to a Baking Tray:
            Potato 300g.
            Bake for 80s.
            Transfer onto a Plate.
            Drizzle in Garlic Sauce 25ml.
            Serve hot.
            
            Rosemary Garnish
            Garnish with Rosemary Twig 10g.
        ` 
    },
    {
        name: 'Pork Chops with Lemon Baked Potatoes',
        ingredients: [
            { name: 'Potato', amount: '2' },
            { name: 'Pork Chops', amount: '1' },
            { name: 'Oregano Twig', amount: '3' },
            { name: 'Thyme Twig', amount: '4' },
            { name: 'Sunflower Oil', amount: '10ml' },
            { name: 'Chicken Broth', amount: '50ml' },
            { name: 'Lemon Juice', amount: '50ml' },
            { name: 'Milk', amount: '15ml' },
            { name: 'Salt', amount: '22g' },
            { name: 'Black Pepper', amount: '16g' },
            { name: 'Thyme, dried', amount: '15g' }
        ],
        text: `
            Pork Chops
            Add to a Bowl:
            Milk 15ml,
            Salt 7g,
            Black Pepper 7g,
            Thyme, dried 15g.
            Take Pork Chops 200g.
            Drizzle in Mixture.
            Add to the Pan:
            Sunflower Oil 10ml,
            Pork Chops.
            Fry for 90s each side.
            Transfer onto a Plate. Serve hot.
            
            Lemon Baked Potatoes
            Take Potato 300g.
            Season with:
            Salt 15g,
            Black Pepper 9g.
            Add to a Baking Tray:
            Potato.
            Bake for 40s.
            Add to a Bowl:
            Chicken Broth 50ml,
            Lemon Juice 50ml.
            Take Potato.
            Drizzle in Mixture 100ml.
            Cut Potato into Halves 75g.
            Add to a Baking Tray:
            Oregano Twig 12g,
            Potato.
            Bake for 40s.
            Transfer onto a Plate:
            Potato.
            Serve hot.
            
            Thyme Garnish
            Garnish with Thyme Twig 20g.
        ` 
    },
    {
        name: 'Pork Tenderloin in Mustard Sauce',
        ingredients: [
            { name: 'Carrot', amount: '2' },
            { name: 'Beetroot', amount: '1' },
            { name: 'Pork Tenderloin', amount: '1' },
            { name: 'Rosemary Twig', amount: '2' },
            { name: 'Chives', amount: '6' },
            { name: 'Red Wine', amount: '50ml' },
            { name: 'Sour Cream', amount: '50ml' },
            { name: 'Soy Sauce', amount: '30ml' },
            { name: 'Mustard', amount: '20ml' },
            { name: 'Sugar', amount: '10g' },
            { name: 'Nutmeg, powder', amount: '8g' }
        ],
        text: `
            Pork Tenderloin
            Add to a Bowl:
            Red Wine 50ml,
            Soy Sauce 30ml,
            Sugar 10g.
            Take Pork Tenderloin 250g.
            Drizzle in Mixture 20ml.
            Place on a Baking Tray.
            Bake for 130s.
            Cut Pork Tenderloin into Pieces 25g.
            Transfer onto a Plate. Serve hot.
            
            Mustard Sauce
            Add to a Pot:
            Sour Cream 50ml,
            Mustard 20ml
            Nutmeg, powder 8g,
            Chives 12g.
            Boil for 60s.
            Transfer onto a Plate:
            Pork Tenderloin.
            Drizzle in Mixture 20ml.
            
            Caramelized Vegetables
            Cut:
            Beetroot 120g into Pieces 20g,
            Carrot 140g into Pieces 14g.
            Fry for 80s.
            Transfer onto a Plate. Serve hot.
            
            Rosemary Garnish
            Garnish with Rosemary Twig 10g.
        ` 
    },
    {
        name: 'Steak with Barbecue Sauce and Vegetables',
        ingredients: [
            { name: 'Zucchini', amount: '1/4' },
            { name: 'Steak', amount: '1' },
            { name: 'Carrot', amount: '1' },
            { name: 'Button Mushroom', amount: '1' },
            { name: 'Red Bell Pepper', amount: '1/3' },
            { name: 'Green Bell Pepper', amount: '1/3' },
            { name: 'Yellow Bell Pepper', amount: '1/3' },
            { name: 'Rosemary Twig', amount: '1' },
            { name: 'Water', amount: '5ml' },
            { name: 'Ketchuo', amount: '20ml' },
            { name: 'Mustard', amount: '5ml' },
            { name: 'Wine Vinegar', amount: '10ml' },
            { name: 'Salt', amount: '8g' },
            { name: 'Black Pepper', amount: '8g' },
            { name: 'Sugar', amount: '5g' },
            { name: 'Sweet Bell Pepper, powder', amount: '5g' },
            { name: 'Chili Flakes', amount: '5g' }
        ],
        text: `
            Steak
            Take Steak 220g.
            Season with:
            Salt 5g,
            Black Pepper 5g.
            Fry for 45s each side.
            Transfer onto a Plate. Serve hot.
            
            Barbecue Sauce
            Add to a Bowl:
            Ketchup 20ml,
            Wine Vinegar 10ml,
            Mustard 5ml,
            Water 5ml,
            Sugar 5g,
            Sweet Bell Pepper, powder 5g,
            Chili Flakes 5g,
            Salt 3g
            Black Pepper 3g.
            Take Steak.
            Drizzle in Mixture 40ml.
            
            Deep-fried Vegetables
            Cut:
            Red Bell Pepper 80g into Quarters 20g,
            Yellow Bell Pepper 80g into Quarters 20g,
            Green Bell Pepper 80g into Quarters 20g,
            Carrot 70g into Pieces 14g,
            Zucchini 150g into Quarters ~38g,
            Button Mushroom 50 into Halves 25g.
            Deep fry for 45s.
            Transfer onto a Plate. Serve hot.
            
            Rosemary Garnish
            Garnish with Rosemary Twig 5g.
        ` 
    },
    {
        name: 'Blended Fusilli Aglio, Olio e Peperoncino',
        ingredients: [
            { name: 'Fusilli', amount: '16' },
            { name: 'Garlic', amount: '4' },
            { name: 'Chili Pepper', amount: '2' },
            { name: 'Parsley Leaves, fresh', amount: '2' },
            { name: 'Water', amount: '1500ml' },
            { name: 'Olive Oil', amount: '20ml' },
            { name: 'Salt', amount: '5g' },
            { name: 'Cayenne Pepper, powder', amount: '5g' }
        ],
        text: `
            Pasta
            Add to a Pot:
            Water 1000ml,
            Salt 5g,
            Fusilli 160g.
            Boil for 30s.
            Transfer into a Casserole.
            Reserve Water.
            Add to a Pot:
            Water 500ml,
            Garlic 40g.
            Boil for 30s.
            Add to the Food Processor:
            Olive Oil 20ml,
            Garlic.
            Blend.
            Add to a Pan:
            Mixture 48ml,
            Water(reserve) 50ml,
            Cayenne Pepper, powder 5g,
            Parsley Leaves, fresh 4g,
            Fusilli.
            Boil for 30s.
            Transfer into a Casserole:
            Mixture 98ml,
            Fusilli,
            Parsley Leaves, fresh.
            Serve hot.
            
            Diced Chili Pepper
            Cut Chili Pepper 60g into Quarters ~8g.
            Transfer into a Casserole.
        ` 
    },
    {
        name: 'Fast Beef Stroganoff over Fusilli',
        ingredients: [
            { name: 'Onion', amount: '1' },
            { name: 'Fusilli', amount: '16' },
            { name: 'Button Mushroom', amount: '1/2' },
            { name: 'Beef Chuck', amount: '~1/6' },
            { name: 'Water', amount: '1000ml' },
            { name: 'Chicken Broth', amount: '150ml' },
            { name: 'Clarified Butter', amount: '20ml' },
            { name: 'Olive Oil', amount: '20ml' },
            { name: 'Salt', amount: '5g' },
            { name: 'Black Pepper', amount: '3g' },
            { name: 'White Pepper', amount: '5g' }
        ],
        text: `
            Fusilli
            Add to a Pot:
            Water 1000ml,
            Salt 5g,
            Fusilli 160g.
            Boil for 60s.
            Transfer into the Casserole.
            
            Fast Beef Stroganoff
            Cut:
            Beef Chuck 150g into Pieces 50g,
            Onion 120g into Pieces 15g,
            Button Mushroom 25g into Pieces ~8g.
            Add to a Pan:
            Olive oil 20ml,
            Beef Chuck.
            Fry for 100s.
            Transfer onto a Plate:
            Beef Chuck.
            Add to the Pan:
            Clarified Butter 20ml,
            White Pepper 5g,
            Button Mushroom.
            Fry for 30s.
            Add to the Pan:
            Chicken Broth 150ml,
            Black Pepper 3g,
            Beef Chuck,
            Onion.
            Boil for 60s.
            Transfer into the Casserole:
            Beef Chuck,
            Onion,
            Button Mushroom.
            Serve hot.
        ` 
    },
    {
        name: 'Fast Beef Stroganoff over Buttered Fusilli',
        ingredients: [
            { name: 'Onion', amount: '1' },
            { name: 'Fusilli', amount: '15' },
            { name: 'Button Mushroom', amount: '1/2' },
            { name: 'Beef Chuck', amount: '~1/6' },
            { name: 'Parsley Leaves, fresh', amount: '3' },
            { name: 'Water', amount: '1000ml' },
            { name: 'Chicken Broth', amount: '150ml' },
            { name: 'Clarified Butter', amount: '40ml' },
            { name: 'Olive Oil', amount: '20ml' },
            { name: 'Salt', amount: '5g' },
            { name: 'Black Pepper', amount: '3g' },
            { name: 'Sweet Bell Pepper, powder', amount: '3g' },
            { name: 'White Pepper', amount: '5g' }
        ],
        text: `
            Buttered Noodles
            Add to a Pot:
            Water 1000ml,
            Salt 5g,
            Fusilli 150g.
            Boil for 40s.
            Add to a Pan:
            Clarified Butter 20ml,
            Fusilli.
            Fry for 15s.
            Transfer into a Casserole.
            
            Beef Stroganoff
            Cut:
            Beef Chuck 150g into Pieces 50g,
            Onion 120g into Pieces 15g,
            Button Mushroom 25g into Pieces ~8g.
            Add to a Pan:
            Olive Oil 20ml,
            Beef Chuck.
            Fry for 100s.
            Transfer onto a Plate:
            Beef Chuck.
            Add to the Pan:
            Clarified Butter 20ml,
            Sweet Bell Pepper, powder 3g,
            White Pepper 5g,
            Button Mushroom.
            Fry for 30s.
            Add to the Pan:
            Chicken Broth 150ml,
            Black Pepper 3g,
            Onion,
            Beef Chuck.
            Boil for 60s.
            Transfer into a Deep Plate:
            Onion,
            Beef Chuck,
            Button Mushroom.
            Serve hot.
            
            Parsley Garnish
            Garnish with Parsley Leaves, fresh 6g.
        ` 
    },
    {
        name: 'Beef Stroganoff over Buttered Fusilli',
        ingredients: [
            { name: 'Tomato', amount: '1' },
            { name: 'Onion', amount: '1' },
            { name: 'Fusilli', amount: '15' },
            { name: 'Button Mushroom', amount: '1/2' },
            { name: 'Beef Chuck', amount: '~1/6' },
            { name: 'Parsley Leaves, fresh', amount: '3' },
            { name: 'Water', amount: '1000ml' },
            { name: 'Chicken Broth', amount: '150ml' },
            { name: 'Clarified Butter', amount: '30ml' },
            { name: 'Olive Oil', amount: '20ml' },
            { name: 'Salt', amount: '5g' },
            { name: 'Black Pepper', amount: '3g' },
            { name: 'Sweet Bell Pepper, powder', amount: '3g' },
            { name: 'White Pepper', amount: '5g' },
            { name: 'Bay Leaf, dried', amount: '6g' }
        ],
        text: `
            Buttered Noodles
            Add to a Pot:
            Water 1000ml,
            Salt 5g,
            Fusilli 150g.
            Boil for 40s.
            Add to a Pan:
            Clarified Butter 10ml,
            Fusilli.
            Fry for 15s.
            Transfer into a Casserole.
            
            Beef Stroganoff
            Cut:
            Beef Chuck 150g into Pieces 50g,
            Onion 120g into Pieces 15g,
            Button Mushroom 25g into Pieces ~8g,
            Tomato 120g into Pieces 15g.
            Add to a Pan:
            Olive oil 20ml,
            Beef Chuck.
            Fry for 100s.
            Transfer onto a Plate:
            Beef Chuck.
            Add to the Pan:
            Clarified Butter 20ml
            Sweet Bell Pepper, powder 3g,
            White Pepper 5g,
            Button Mushroom.
            Fry for 30s.
            Add to the Pan:
            Chicken Broth 150ml,
            Black Pepper 3g,
            Bay Leaf, dried 6g,
            Onion,
            Tomato,
            Beef Chuck.
            Boil for 60s.
            Transfer into the Casserole:
            Onion,
            Tomato,
            Beef Chuck,
            Button Mushroom.
            Serve hot.
            
            Parsley Garnish
            Garnish with Parsley Leaves, fresh 6g.
        ` 
    },
    {
        name: 'Fusilli with Neapolitan Sauce',
        ingredients: [
            { name: 'Tomato', amount: '1' },
            { name: 'Fusilli', amount: '16' },
            { name: 'Garlic', amount: '1' },
            { name: 'Basil Leaf, fresh', amount: '1' },
            { name: 'Parsley Leaves, fresh', amount: '2g' },
            { name: 'Water', amount: '1100ml' },
            { name: 'Olive Oil', amount: '20ml' },
            { name: 'Salt', amount: '10g' },
            { name: 'Sugar', amount: '3g' }
        ],
        text: `
            Fusilli
            Add to a Pot:
            Water 1000ml,
            Salt 5g,
            Fusilli 160g.
            Boil for 60s.
            Transfer into a Casserole.
            
            Neapolitan Sauce
            Cut:
            Tomato 120g into Pieces 15g,
            Garlic 10g into Halves 5g.
            Add to a Pan:
            Olive Oil 20ml,
            Parsley Leaves, fresh 4g,
            Tomato.
            Fry for 23s.
            Add to the Pan:
            Water 100ml,
            Sugar 3g,
            Salt 5g,
            Basil Leaf, fresh 3g,
            Garlic.
            Fry for 30s.
            Transfer into a Casserole:
            Mixture,
            Tomato,
            Garlic.
            Serve hot.
        ` 
    },
    {
        name: 'Fusilli with Blended Neapolitan Sauce',
        ingredients: [
            { name: 'Tomato', amount: '1' },
            { name: 'Onion', amount: '1' },
            { name: 'Fusilli', amount: '16' },
            { name: 'Garlic', amount: '1' },
            { name: 'Basil Leaf, fresh', amount: '1' },
            { name: 'Oregano Twig', amount: '2' },
            { name: 'Parsley Leaves, fresh', amount: '2' },
            { name: 'Water', amount: '1100ml' },
            { name: 'Red Wine', amount: '10ml' },
            { name: 'Olive Oil', amount: '20ml' },
            { name: 'Balsamic Vinegar', amount: '10ml' },
            { name: 'Salt', amount: '5g' },
            { name: 'Black Pepper', amount: '5g' },
            { name: 'Sugar', amount: '3g' },
            { name: 'Cayenne Peppe, powder', amount: '3g' }
        ],
        text: `
            Fusilli
            Add to a Pot:
            Water 1000ml,
            Salt 5g,
            Fusilli 160g.
            Boil for 60s.
            Transfer into a Casserole.
            
            Blended Neapolitan Sauce
            Cut:
            Garlic 10g into Halves 5g,
            Onion 120g into Pieces 15g.
            Add to a Pan:
            Olive Oil 20ml,
            Garlic,
            Onion.
            Fry for 30s.
            Transfer into the Food Processor.
            Add:
            Water 100ml,
            Tomato 120g.
            Blend.
            Transfer into a Pot.
            Add to a Pot:
            Red Wine 10ml,
            Balsamic Vinegar 10ml,
            Sugar 3g,
            Black Pepper 5g,
            Cayenne Pepper, powder 3g,
            Parsley Leaves, fresh 4g,
            Basil Leaf, fresh 3g.
            Boil for 90s.
            Transfer into a Casserole: Mixture.
            Serve hot.
            
            Oregano Garnish
            Garnish with Oregano Twig 8g.
        ` 
    },
    {
        name: 'Fast Pasta alla Genovese',
        ingredients: [
            { name: 'Onion', amount: '1' },
            { name: 'Carrot', amount: '1' },
            { name: 'Parsley Root', amount: '1' },
            { name: 'Penne', amount: '15' },
            { name: 'Beef Chuck', amount: '~1/6' },
            { name: 'Water', amount: '1000ml' },
            { name: 'Chicken Broth', amount: '' },
            { name: 'Olive Oil', amount: '20ml' },
            { name: 'Salt', amount: '5g' },
            { name: 'Black Pepper', amount: '' }
        ],
        text: `
            Pasta
            Add to a Pot:
            Water 1000ml,
            Salt 5g,
            Penne 150g.
            Boil for 60s.
            Transfer into a Casserole.
            
            Sauce
            Cut:
            Beef Chuck 160g into Quarters 40g,
            Carrot 70g into Pieces 14g,
            Parsley Root 80g into Pieces 16g,
            Onion 120g into Pieces 15g.
            Add to a Pan:
            Olive Oil 20ml,
            Beef Chuck.
        ` 
    },
    {
        name: 'Pasta alla Genovese',
        ingredients: [
            { name: 'Onion', amount: '' },
            { name: 'Carrot', amount: '' },
            { name: 'Parsley Root', amount: '' },
            { name: 'Penne', amount: '' },
            { name: 'Beef Chuck', amount: '' },
            { name: 'Sage Leaf, fresh', amount: '' },
            { name: 'Bay Leaf, fresh', amount: '' },
            { name: 'Water', amount: '' },
            { name: 'Chicken Broth', amount: '' },
            { name: 'white Wine', amount: '' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Cumin, powder', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Penne in Broccoli Sauce',
        ingredients: [
            { name: 'Onion', amount: '' },
            { name: 'Penne', amount: '' },
            { name: 'Broccoli', amount: '' },
            { name: 'Rosemary Twig', amount: '' },
            { name: 'Water', amount: '' },
            { name: 'Sour Cream', amount: '' },
            { name: 'Clarified Butter', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Penne in Broccoli and Mushroom Sauce',
        ingredients: [
            { name: 'Onion', amount: '' },
            { name: 'Penne', amount: '' },
            { name: 'Broccoli', amount: '' },
            { name: 'Button Mushroom', amount: '' },
            { name: 'Rosemary Twig', amount: '' },
            { name: 'Water', amount: '' },
            { name: 'Sour Cream', amount: '' },
            { name: 'Clarified Butter', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Penne in Salmon Sauce',
        ingredients: [
            { name: 'Onion', amount: '' },
            { name: 'Penne', amount: '' },
            { name: 'Salmon Fillet', amount: '' },
            { name: 'Chives', amount: '' },
            { name: 'Water', amount: '' },
            { name: 'Sour Cream', amount: '' },
            { name: 'Clarified Butter', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'White Pepper', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Penne in Fragrent Salmon Sauce',
        ingredients: [
            { name: 'Onion', amount: '' },
            { name: 'Penne', amount: '' },
            { name: 'Salmon Fillet', amount: '' },
            { name: 'Rosemary Twig', amount: '' },
            { name: 'Chives', amount: '' },
            { name: 'Water', amount: '' },
            { name: 'Sour Cream', amount: '' },
            { name: 'Lemon Juice', amount: '' },
            { name: 'Clarified Butter', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Cayenne Pepper, powder', amount: '' },
            { name: 'Nutmeg, powder', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Fast Caldo Verde',
        ingredients: [
            { name: 'Onion', amount: '' },
            { name: 'Garlic', amount: '' },
            { name: 'Potato', amount: '' },
            { name: 'Brussels Sprouts', amount: '' },
            { name: 'Sausage', amount: '' },
            { name: 'Chicken Broth', amount: '' },
            { name: 'Olive Oil', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Caldo Verde',
        ingredients: [
            { name: 'Onion', amount: '' },
            { name: 'Garlic', amount: '' },
            { name: 'Potato', amount: '' },
            { name: 'Broccoli', amount: '' },
            { name: 'Bacon', amount: '' },
            { name: 'Brussels Sprouts', amount: '' },
            { name: 'Sausage', amount: '' },
            { name: 'Chicken Broth', amount: '' },
            { name: 'Olive Oil', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Corn Chowder',
        ingredients: [
            { name: 'Onion', amount: '' },
            { name: 'Potato', amount: '' },
            { name: 'Cob of Corn', amount: '' },
            { name: 'Carrot', amount: '' },
            { name: 'Chicken Broth', amount: '' },
            { name: 'Sour Cream', amount: '' },
            { name: 'Clarified Butter', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Thyme, dried', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Corn, Scallop and Bacon Chowder',
        ingredients: [
            { name: 'Onion', amount: '' },
            { name: 'Potato', amount: '' },
            { name: 'Cob of Corn', amount: '' },
            { name: 'Carrot', amount: '' },
            { name: 'Bacon', amount: '' },
            { name: 'Scallop', amount: '' },
            { name: 'Chicken Broth', amount: '' },
            { name: 'Sour Cream', amount: '' },
            { name: 'Clarified Butter', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Thyme, dried', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Duck Broth',
        ingredients: [
            { name: 'Duck Breast', amount: '' },
            { name: 'Onion', amount: '' },
            { name: 'Carrot', amount: '' },
            { name: 'Water', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Duck Consommé',
        ingredients: [
            { name: 'Tomato', amount: '' },
            { name: 'Duck Breast', amount: '' },
            { name: 'Onion', amount: '' },
            { name: 'Carrot', amount: '' },
            { name: 'Parsley Leaves, fresh', amount: '' },
            { name: 'Water', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Chunky Gazpacho',
        ingredients: [
            { name: 'Tomato', amount: '' },
            { name: 'Cucumber', amount: '' },
            { name: 'Garlic', amount: '' },
            { name: 'Red Bell Pepper', amount: '' },
            { name: 'Green Bell Pepper', amount: '' },
            { name: 'Jalapeño', amount: '' },
            { name: 'Bread', amount: '' },
            { name: 'Chives', amount: '' },
            { name: 'Lime Juice', amount: '' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Balsamic Vinegar', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Oregano, dried', amount: '' },
            { name: 'Cumin, powder', amount: '' },
            { name: 'Cayenne Pepper, powder', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Pumpkin Soup',
        ingredients: [
            { name: 'Onion', amount: '' },
            { name: 'Garlic', amount: '' },
            { name: 'Pumpkin', amount: '' },
            { name: 'Thyme Twig', amount: '' },
            { name: 'Cilantro Leaves, fresh', amount: '' },
            { name: 'Chicken Broth', amount: '' },
            { name: 'Sour Cream', amount: '' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Pumpkin Soup with Croutons',
        ingredients: [
            { name: 'Onion', amount: '' },
            { name: 'Garlic', amount: '' },
            { name: 'Pumpkin', amount: '' },
            { name: 'Bread', amount: '' },
            { name: 'Thyme Twig', amount: '' },
            { name: 'Cilantro Leaves, fresh', amount: '' },
            { name: 'Chicken Broth', amount: '' },
            { name: 'Sour Cream', amount: '' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Tomato Soup',
        ingredients: [
            { name: 'Tomato', amount: '' },
            { name: 'Onion', amount: '' },
            { name: 'Chicken Broth', amount: '' },
            { name: 'Sour Cream', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Cayenne Pepper, powder', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Red Pepper and Tomato Soup',
        ingredients: [
            { name: 'Tomato', amount: '' },
            { name: 'Onion', amount: '' },
            { name: 'Garlic', amount: '' },
            { name: 'Red Bell Pepper', amount: '' },
            { name: 'Basil Leaf, fresh', amount: '' },
            { name: 'Chicken Broth', amount: '' },
            { name: 'Sour Cream', amount: '' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Cayenne Pepper, powder', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Red Pepper and Tomato Soup with Toast',
        ingredients: [
            { name: 'Tomato', amount: '' },
            { name: 'Onion', amount: '' },
            { name: 'Garlic', amount: '' },
            { name: 'Mozzarella', amount: '' },
            { name: 'Red Bell Pepper', amount: '' },
            { name: 'Chili Pepper', amount: '' },
            { name: 'Bread', amount: '' },
            { name: 'Basil Leaf, fresh', amount: '' },
            { name: 'Chicken Broth', amount: '' },
            { name: 'Sour Cream', amount: '' },
            { name: 'Clarified Butter', amount: '' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Cayenne Pepper, powder', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Ukrainian Borscht',
        ingredients: [
            { name: 'Tomato', amount: '' },
            { name: 'Onion', amount: '' },
            { name: 'Garlic', amount: '' },
            { name: 'Carrot', amount: '' },
            { name: 'Parsley Root', amount: '' },
            { name: 'Beetroot', amount: '' },
            { name: 'Dill, fresh', amount: '' },
            { name: 'Bay Leaf, fresh', amount: '' },
            { name: 'Chicken Broth', amount: '' },
            { name: 'Sour Cream', amount: '' },
            { name: 'Lemon Juice', amount: '' },
            { name: 'Clarified Butter', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Allspice, powder', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Fast Ratatouille',
        ingredients: [
            { name: 'Tomato', amount: '' },
            { name: 'Zucchini', amount: '' },
            { name: 'Eggplant', amount: '' },
            { name: 'Onion', amount: '' },
            { name: 'Garlic', amount: '' },
            { name: 'Red Bell Pepper', amount: '' },
            { name: 'Yellow Bell Pepper', amount: '' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Herbs de Provence, dried', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Ratatouille',
        ingredients: [
            { name: 'Tomato', amount: '' },
            { name: 'Zucchini', amount: '' },
            { name: 'Eggplant', amount: '' },
            { name: 'Onion', amount: '' },
            { name: 'Garlic', amount: '' },
            { name: 'Red Bell Pepper', amount: '' },
            { name: 'Yellow Bell Pepper', amount: '' },
            { name: 'Parsley Leaves, fresh', amount: '' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Herbs de Provence, dried', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Shakshuka',
        ingredients: [
            { name: 'Tomato', amount: '' },
            { name: 'Onion', amount: '' },
            { name: 'Garlic', amount: '' },
            { name: 'Red Bell Pepper', amount: '' },
            { name: 'Parsley Leaves, fresh', amount: '' },
            { name: 'Egg', amount: '' },
            { name: 'Water', amount: '' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Cumin, powder', amount: '' },
            { name: 'Turmeric, powder', amount: '' },
            { name: 'Smoked Pepper, powder', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Spicy Shakshuka',
        ingredients: [
            { name: 'Tomato', amount: '' },
            { name: 'Onion', amount: '' },
            { name: 'Garlic', amount: '' },
            { name: 'Goat Cheese', amount: '' },
            { name: 'Red Bell Pepper', amount: '' },
            { name: 'Jalapeño', amount: '' },
            { name: 'Bread', amount: '' },
            { name: 'Mint Leaf', amount: '' },
            { name: 'Egg', amount: '' },
            { name: 'Water', amount: '' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Cumin, powder', amount: '' },
            { name: 'Chili Flakes', amount: '' },
            { name: 'Turmeric, powder', amount: '' },
            { name: 'Smoked Pepper, powder', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Pork Chops with Fried Egg and Lemon Baked Potatoes',
        ingredients: [
            { name: 'Potato', amount: '' },
            { name: 'Pork Chops', amount: '' },
            { name: 'Oregano Twig', amount: '' },
            { name: 'Thyme Twig', amount: '' },
            { name: 'Egg', amount: '' },
            { name: 'Sunflower Oil', amount: '' },
            { name: 'Chicken Broth', amount: '' },
            { name: 'Lemon Juice', amount: '' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Thyme, dried', amount: '' },
            { name: 'Herbs de Provence, dried', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Ukrainian Borscht with Boiled Egg',
        ingredients: [
            { name: 'Tomato', amount: '' },
            { name: 'Onion', amount: '' },
            { name: 'Garlic', amount: '' },
            { name: 'Carrot', amount: '' },
            { name: 'Parsley Root', amount: '' },
            { name: 'Beetroot', amount: '' },
            { name: 'Dill, fresh', amount: '' },
            { name: 'Bay Leaf, fresh', amount: '' },
            { name: 'Peeled Egg', amount: '' },
            { name: 'Water', amount: '' },
            { name: 'Chicken Broth', amount: '' },
            { name: 'Sour Cream', amount: '' },
            { name: 'Lemon Juice', amount: '' },
            { name: 'Clarified Butter', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Allspice, powder', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Grilled T-bone Steak and Baked Red Potatoes',
        ingredients: [
            { name: 'Onion', amount: '' },
            { name: 'T-bone Steak', amount: '' },
            { name: 'Red Potato', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Sweet Bell Pepper, powder', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Barbecue T-bone Steak with Potatoes and a Corn on the Cob',
        ingredients: [
            { name: 'Onion', amount: '' },
            { name: 'Cob of Corn', amount: '' },
            { name: 'T-bone Steak', amount: '' },
            { name: 'Red Potato', amount: '' },
            { name: 'Water', amount: '' },
            { name: 'Barbecue Sauce', amount: '' },
            { name: 'Clarified Butter', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Sweet Bell Pepper, powder', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Barbecue T-bone Steak with Potatoes and a Hot Corn on the Cob',
        ingredients: [
            { name: 'Onion', amount: '' },
            { name: 'Garlic', amount: '' },
            { name: 'Cob of Corn', amount: '' },
            { name: 'Chili Pepper', amount: '' },
            { name: 'T-bone Steak', amount: '' },
            { name: 'Red Potato', amount: '' },
            { name: 'Water', amount: '' },
            { name: 'Barbecue Sauce', amount: '' },
            { name: 'Clarified Butter', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Sweet Bell Pepper, powder', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Sweet and Sour Pork',
        ingredients: [
            { name: 'Tomato', amount: '' },
            { name: 'garlic', amount: '' },
            { name: 'Pork Tenderloin', amount: '' },
            { name: 'Cilantro Leaves, fresh', amount: '' },
            { name: 'Water', amount: '' },
            { name: 'Sunflower Oil', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Oregano, dried', amount: '' },
            { name: 'Sugar', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Marinated Sweet and Sour Pork',
        ingredients: [
            { name: 'Tomato', amount: '' },
            { name: 'Garlic', amount: '' },
            { name: 'Pork Tenderloin', amount: '' },
            { name: 'Cilantro Leaves, fresh', amount: '' },
            { name: 'Egg', amount: '' },
            { name: 'Water', amount: '' },
            { name: 'Sunflower Oil', amount: '' },
            { name: 'Soy Sauce', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Oregano, dried', amount: '' },
            { name: 'Sugar', amount: '' },
            { name: 'Starch', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Kung Pao Chicken',
        ingredients: [
            { name: 'Scallion Leaves', amount: '' },
            { name: 'Chicken Breast', amount: '' },
            { name: 'Soy Sauce', amount: '' },
            { name: 'Balsamic Vinegar', amount: '' },
            { name: 'Sesame Oil', amount: '' },
            { name: 'Peanut Oil', amount: '' },
            { name: 'Hoisin Sauce', amount: '' },
            { name: 'Sugar', amount: '' },
            { name: 'Chili Flakes', amount: '' },
            { name: 'Starch', amount: '' },
            { name: 'Sichuan Pepper, powder', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Marinated Kung Pao Chicken',
        ingredients: [
            { name: 'Chili Pepper', amount: '' },
            { name: 'Scallion Bulbs', amount: '' },
            { name: 'Scallion Leaves', amount: '' },
            { name: 'Chicken Breast', amount: '' },
            { name: 'Soy Sauce', amount: '' },
            { name: 'Balsamic Vinegar', amount: '' },
            { name: 'Rice Wine', amount: '' },
            { name: 'Sesame Oil', amount: '' },
            { name: 'Peanut Oil', amount: '' },
            { name: 'Hoisin Sauce', amount: '' },
            { name: 'Sugar', amount: '' },
            { name: 'Ginger', amount: '' },
            { name: 'Garlic, dried', amount: '' },
            { name: 'Starch', amount: '' },
            { name: 'Sichuan Pepper, powder', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Easy Chinese Egg Drop Soup ',
        ingredients: [
            { name: 'Egg', amount: '' },
            { name: 'Scallion Leaves', amount: '' },
            { name: 'Chicken Broth', amount: '' },
            { name: 'Sesame Oil', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'White Pepper', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Chinese Egg Drop Soup',
        ingredients: [
            { name: 'Onion', amount: '' },
            { name: 'Garlic', amount: '' },
            { name: 'Carrot', amount: '' },
            { name: 'Chicken Leg', amount: '' },
            { name: 'Egg', amount: '' },
            { name: 'Scallion Leaves', amount: '' },
            { name: 'Water', amount: '' },
            { name: 'Sesame Oil', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'White Pepper', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Orange Pork Stir-Fry',
        ingredients: [
            { name: 'Garlic', amount: '' },
            { name: 'Carrot', amount: '' },
            { name: 'Orange', amount: '' },
            { name: 'Pork Chops', amount: '' },
            { name: 'Whole Ginger', amount: '' },
            { name: 'Water', amount: '' },
            { name: 'Honey', amount: '' },
            { name: 'Soy Sauce', amount: '' },
            { name: 'Rice Wine', amount: '' },
            { name: 'Peanut Oil', amount: '' },
            { name: 'Starch', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Orange Pork Stir Fry with Brussels Sprouts',
        ingredients: [
            { name: 'Garlic', amount: '' },
            { name: 'Carrot', amount: '' },
            { name: 'Orange', amount: '' },
            { name: 'Pork Chops', amount: '' },
            { name: 'Whole Ginger', amount: '' },
            { name: 'Brussels Sprouts', amount: '' },
            { name: 'Scallion Leaves', amount: '' },
            { name: 'Water', amount: '' },
            { name: 'Honey', amount: '' },
            { name: 'Soy Sauce', amount: '' },
            { name: 'Rice Wine', amount: '' },
            { name: 'Peanut Oil', amount: '' },
            { name: 'Starch', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Helles Märzenbier Roasted Pork',
        ingredients: [
            { name: 'Onion', amount: '' },
            { name: 'Red Potato', amount: '' },
            { name: 'Star Anise', amount: '' },
            { name: 'Cinnamon Stick', amount: '' },
            { name: 'Parsnip', amount: '' },
            { name: 'Pork Shoulder', amount: '' },
            { name: 'Chicken Broth', amount: '' },
            { name: 'Helles Märzenbier', amount: '' },
            { name: 'Elderflower Jelly', amount: '' },
            { name: 'Dijon Mustard', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Mustard Seeds', amount: '' },
            { name: 'Cloves, ground', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Dunkles Märzenbier BBQ Chicken',
        ingredients: [
            { name: 'Chicken Leg', amount: '' },
            { name: 'Rosemary Twig', amount: '' },
            { name: 'Lemon Juice', amount: '' },
            { name: 'Peanut Oil', amount: '' },
            { name: 'Dunkles Mârzenbier', amount: '' },
            { name: 'Düsseldorf Mustard', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Thyme, dried', amount: '' },
            { name: 'Basil, dried', amount: '' },
            { name: 'Garlic, dried', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Currant-Glazed Pork Tenderloing with Red Cabbage and Thyme Dumplings',
        ingredients: [
            { name: 'Pork Tenderloin', amount: '' },
            { name: 'Thyme Twig', amount: '' },
            { name: 'Red Cabbage', amount: '' },
            { name: 'Potato Dumplings', amount: '' },
            { name: 'Water', amount: '' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Bavarian Beer Vinegar', amount: '' },
            { name: 'Redcurrant Jelly', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Simple Chicken Pumpkin Stew',
        ingredients: [
            { name: 'Chicken Leg', amount: '' },
            { name: 'Pumpkin', amount: '' },
            { name: 'Sunflower Oil', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Chicken Pumpkin Stew',
        ingredients: [
            { name: 'Chicken Leg', amount: '' },
            { name: 'Pumpkin', amount: '' },
            { name: 'Red Bell Pepper', amount: '' },
            { name: 'Sunflower Oil', amount: '' },
            { name: 'Chicken Broth', amount: '' },
            { name: 'Clarified Butter', amount: '' },
            { name: 'Garlic, dried', amount: '' },
            { name: 'Starch', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Chicken Pumpkin Stew with Tomatoes',
        ingredients: [
            { name: 'Tomato', amount: '' },
            { name: 'Onion', amount: '' },
            { name: 'Chicken Leg', amount: '' },
            { name: 'Pumpkin', amount: '' },
            { name: 'Red Bell Pepper', amount: '' },
            { name: 'Rosemary Twig', amount: '' },
            { name: 'Sunflower Oil', amount: '' },
            { name: 'Chicken Broth', amount: '' },
            { name: 'Clarified Butter', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Smoked Pepper, powder', amount: '' },
            { name: 'Garlic, dried', amount: '' },
            { name: 'Starch', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Roasted Christmas Ham',
        ingredients: [
            { name: 'Orange', amount: '' },
            { name: 'Rosemary Twig', amount: '' },
            { name: 'Ham', amount: '' },
            { name: 'Honey', amount: '' },
            { name: 'White Wine', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Allspice, powder', amount: '' },
            { name: 'Bay Leaf, dried', amount: '' },
            { name: 'Garlic, dried', amount: '' },
            { name: 'Cloves, ground', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Roasted Christmas Ham with Garlic Fried Potatoes',
        ingredients: [
            { name: 'Potato', amount: '' },
            { name: 'Orange', amount: '' },
            { name: 'Rosemary Twig', amount: '' },
            { name: 'Ham', amount: '' },
            { name: 'Honey', amount: '' },
            { name: 'White Wine', amount: '' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Allspice, powder', amount: '' },
            { name: 'Bay Leaf, dried', amount: '' },
            { name: 'Garlic, dried', amount: '' },
            { name: 'Cloves, ground', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Lemon Chicken Breasts',
        ingredients: [
            { name: 'Garlic', amount: '' },
            { name: 'Lemon', amount: '' },
            { name: 'Thyme Twig', amount: '' },
            { name: 'Chicken Breast', amount: '' },
            { name: 'Lemon Juice', amount: '' },
            { name: 'White Wine', amount: '' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Oregano, dried', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Lemon Chicken Breasts with Fruit Salad',
        ingredients: [
            { name: 'Garlic', amount: '' },
            { name: 'Apple', amount: '' },
            { name: 'Orange', amount: '' },
            { name: 'Strawberry', amount: '' },
            { name: 'Lemon', amount: '' },
            { name: 'Thyme Twig', amount: '' },
            { name: 'Chicken Breast', amount: '' },
            { name: 'Lemon Juice', amount: '' },
            { name: 'White Wine', amount: '' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Oregano, dried', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Lemon Tart',
        ingredients: [
            { name: 'Banana', amount: '' },
            { name: 'Orange', amount: '' },
            { name: 'Strawberry', amount: '' },
            { name: 'Lemon', amount: '' },
            { name: 'Tart', amount: '' },
            { name: 'Honey', amount: '' },
            { name: 'Coconut Milk', amount: '' },
            { name: 'Brown Sugar', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Mango Tart',
        ingredients: [
            { name: 'Banana', amount: '' },
            { name: 'Orange', amount: '' },
            { name: 'Strawberry', amount: '' },
            { name: 'Lemon', amount: '' },
            { name: 'Tard', amount: '' },
            { name: 'Honey Mango', amount: '' },
            { name: 'Honey', amount: '' },
            { name: 'Coconut Milk', amount: '' },
            { name: 'Brown Sugar', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Brussels Sprouts with Pancetta & Chicken Wings',
        ingredients: [
            { name: 'Brussels Sprouts', amount: '' },
            { name: 'Chicken Wings', amount: '' },
            { name: 'Pancetta', amount: '' },
            { name: 'Water', amount: '' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Sweet Bell Pepper, powder', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Brussels Sprouts with Pancetta & Grilled Swordfish',
        ingredients: [
            { name: 'Brussels Sprouts', amount: '' },
            { name: 'Swordfish', amount: '' },
            { name: 'Pancetta', amount: '' },
            { name: 'Water', amount: '' },
            { name: 'Lemon Juice', amount: '' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Garlic, dried', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Fiesta Corn with Tomatoes',
        ingredients: [
            { name: 'Tomato', amount: '' },
            { name: 'Onion', amount: '' },
            { name: 'Cob of Corn', amount: '' },
            { name: 'Red Bell Pepper', amount: '' },
            { name: 'Jalapeño', amount: '' },
            { name: 'Water', amount: '' },
            { name: 'Lime Juice', amount: '' },
            { name: 'Avocado Oil', amount: '' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Chili Flakes', amount: '' },
            { name: 'Garlic, dried', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Fiesta Corn with Tomatoes & Spiced Chicken',
        ingredients: [
            { name: 'Tomato', amount: '' },
            { name: 'Onion', amount: '' },
            { name: 'Cob of Corn', amount: '' },
            { name: 'Red Bell Pepper', amount: '' },
            { name: 'Jalapeño', amount: '' },
            { name: 'Chicken Breast', amount: '' },
            { name: 'Water', amount: '' },
            { name: 'Lime Juice', amount: '' },
            { name: 'Avocado Oil', amount: '' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Sesame Oil', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Chili Flakes', amount: '' },
            { name: 'Garlic, dried', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Sausage & Egg Muffin',
        ingredients: [
            { name: 'Cheddar', amount: '' },
            { name: 'Egg', amount: '' },
            { name: 'English Muffin', amount: '' },
            { name: 'Pork Breakfast Sausage', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Sausage & Egg Muffin with Bacon',
        ingredients: [
            { name: 'Bacon', amount: '' },
            { name: 'Cheddar', amount: '' },
            { name: 'Egg', amount: '' },
            { name: 'English Muffin', amount: '' },
            { name: 'Pork Breakfast Sausage', amount: '' },
            { name: 'Barbecue Sauce', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Melting Potatoes',
        ingredients: [
            { name: 'Garlic', amount: '' },
            { name: 'Potato', amount: '' },
            { name: 'Rosemary Twig', amount: '' },
            { name: 'Sunflower Oil', amount: '' },
            { name: 'Chicken Broth', amount: '' },
            { name: 'Clarified Butter', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Melting Potatoes with Egg de Provence',
        ingredients: [
            { name: 'Garlic', amount: '' },
            { name: 'Potato', amount: '' },
            { name: 'Rosemary Twig', amount: '' },
            { name: 'Egg', amount: '' },
            { name: 'Sunflower Oil', amount: '' },
            { name: 'Chicken Broth', amount: '' },
            { name: 'Clarified Butter', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Herbs de Provence, dried', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Grilled Buffalo Wings',
        ingredients: [
            { name: 'Chicken Wing', amount: '' },
            { name: 'Honey', amount: '' },
            { name: 'Barbecue Sauce', amount: '' },
            { name: 'Clarified Butter', amount: '' },
            { name: 'Wine Vinegar', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Garlic, dried', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Grilled Buffalo Wings with French Fries',
        ingredients: [
            { name: 'Potato', amount: '' },
            { name: 'Chicken Wing', amount: '' },
            { name: 'Honey', amount: '' },
            { name: 'Ketchup', amount: '' },
            { name: 'Barbecue Sauce', amount: '' },
            { name: 'Clarified Butter', amount: '' },
            { name: 'Wine Vinegar', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Garlic, dried', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Spicy Sparkling Pork',
        ingredients: [
            { name: 'Onion', amount: '' },
            { name: 'Chili Pepper', amount: '' },
            { name: 'Pork Shoulder', amount: '' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Cola', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Brown Sugar', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Spicy Sparkling Pork with Spring Salad',
        ingredients: [
            { name: 'Tomato', amount: '' },
            { name: 'Cucumber', amount: '' },
            { name: 'Onion', amount: '' },
            { name: 'Radish', amount: '' },
            { name: 'Apple', amount: '' },
            { name: 'Chili Pepper', amount: '' },
            { name: 'Pork Shoulder', amount: '' },
            { name: 'Lemon Juice', amount: '' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Cola', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Brown Sugar', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Mango Salsa Chicken',
        ingredients: [
            { name: 'Penne', amount: '' },
            { name: 'Chicken Breast', amount: '' },
            { name: 'Honey Mango', amount: '' },
            { name: 'Water', amount: '' },
            { name: 'Salsa', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Mango Salsa Chicken with French Fries',
        ingredients: [
            { name: 'Potato', amount: '' },
            { name: 'Chicken Breast', amount: '' },
            { name: 'Honey Mango', amount: '' },
            { name: 'Ketchup', amount: '' },
            { name: 'Salsa', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Chicken Tortellini Soup',
        ingredients: [
            { name: 'Onion', amount: '' },
            { name: 'Carrot', amount: '' },
            { name: 'Thyme Twig', amount: '' },
            { name: 'Bay Leaf, fresh', amount: '' },
            { name: 'Chicken Breast', amount: '' },
            { name: 'Tortellini', amount: '' },
            { name: 'Water', amount: '' },
            { name: 'Red Wine', amount: '' },
            { name: 'Chicken Broth', amount: '' },
            { name: 'Lemon Juice', amount: '' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Sweet Bell Pepper, powder', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Chicken Tortellini Soup with Croutons',
        ingredients: [
            { name: 'Onion', amount: '' },
            { name: 'Carrot', amount: '' },
            { name: 'Bread', amount: '' },
            { name: 'Thyme Twig', amount: '' },
            { name: 'Bay Leaf, fresh', amount: '' },
            { name: 'Chicken Breast', amount: '' },
            { name: 'Tortellini', amount: '' },
            { name: 'Water', amount: '' },
            { name: 'Red Winde', amount: '' },
            { name: 'Chicken Broth', amount: '' },
            { name: 'Lemon Juice', amount: '' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' },
            { name: 'Sweet Bell Pepper, powder', amount: '' },
            { name: 'Garlic, dried', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Double Potato Salad with Pesto',
        ingredients: [
            { name: 'Potato', amount: '' },
            { name: 'Fingerling Potato', amount: '' },
            { name: 'Water', amount: '' },
            { name: 'White Vinegar', amount: '' },
            { name: 'Dijon Mustard', amount: '' },
            { name: 'Pesto', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Double Potato Salad with Button Mushroom Sauce',
        ingredients: [
            { name: 'Potato', amount: '' },
            { name: 'Button Mushroom', amount: '' },
            { name: 'Fingerling Potato', amount: '' },
            { name: 'Water', amount: '' },
            { name: 'Sour Cream', amount: '' },
            { name: 'White Vinegar', amount: '' },
            { name: 'Dijon Mustard', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Baked Potatoes with Feta',
        ingredients: [
            { name: 'Potato', amount: '' },
            { name: 'Chives', amount: '' },
            { name: 'Feta', amount: '' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Rosemary, dried', amount: '' },
            { name: 'Thyme, dried', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Baked Potatoes with Feta & Tomatoes',
        ingredients: [
            { name: 'Tomato', amount: '' },
            { name: 'Potato', amount: '' },
            { name: 'Chives', amount: '' },
            { name: 'Feta', amount: '' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Rosemary, dried', amount: '' },
            { name: 'Thyme, dried', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Italian Home Fries',
        ingredients: [
            { name: 'Onion', amount: '' },
            { name: 'Potato', amount: '' },
            { name: 'Red Bell Pepper', amount: '' },
            { name: 'Rosemary Twig', amount: '' },
            { name: 'Parsley Leaves, fresh', amount: '' },
            { name: 'Sausage', amount: '' },
            { name: 'Clarified Butter', amount: '' },
            { name: 'Sweet Bell Pepper, powder', amount: '' },
            { name: 'Garlic, dried', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Italian Home Fries with Cucumber Salad',
        ingredients: [
            { name: 'Cucumber', amount: '' },
            { name: 'Onion', amount: '' },
            { name: 'Potato', amount: '' },
            { name: 'Red Bell Pepper', amount: '' },
            { name: 'Rosemary Twig', amount: '' },
            { name: 'Parsley Leaves, fresh', amount: '' },
            { name: 'Sausage', amount: '' },
            { name: 'Lemon Juice', amount: '' },
            { name: 'Clarified Butter', amount: '' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Sweet Bell Pepper, powder', amount: '' },
            { name: 'Garlic, dried', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Grilled Swordfish Provencal',
        ingredients: [
            { name: 'Tomato', amount: '' },
            { name: 'Onion', amount: '' },
            { name: 'Garlic', amount: '' },
            { name: 'Red Bell Pepper', amount: '' },
            { name: 'Yellow Bell Pepper', amount: '' },
            { name: 'Basil Leaf, fresh ', amount: '' },
            { name: 'Swordfish', amount: '' },
            { name: 'Anchovy', amount: '' },
            { name: 'Chicken Broth', amount: '' },
            { name: 'White Wine', amount: '' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Grilled Swordfish with Hot Sauce',
        ingredients: [
            { name: 'Tomato', amount: '' },
            { name: 'Onion', amount: '' },
            { name: 'Garlic', amount: '' },
            { name: 'Red Bell Pepper', amount: '' },
            { name: 'Yellow Bell Pepper', amount: '' },
            { name: 'Chili Pepper', amount: '' },
            { name: 'Basil Leaf, fresh', amount: '' },
            { name: 'Sage Leaf, fresh', amount: '' },
            { name: 'Swordfish', amount: '' },
            { name: 'Anchovy', amount: '' },
            { name: 'Chicken Broth', amount: '' },
            { name: 'White Wine', amount: '' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Black Pepper', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Chicken Tikka Masala',
        ingredients: [
            { name: 'Tomato', amount: '' },
            { name: 'Garlic', amount: '' },
            { name: 'Chicken Breast', amount: '' },
            { name: 'Serrano Pepper', amount: '' },
            { name: 'Milk', amount: '' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Sweet Bell Pepper, powder', amount: '' },
            { name: 'Ginger', amount: '' },
            { name: 'Garlic, dried', amount: '' },
            { name: 'Fenugreek Leaves, dried', amount: '' }
        ],
        text: `
            
        ` 
    },
    {
        name: 'Chicken Tikka Masala with Potatoes',
        ingredients: [
            { name: 'Tomato', amount: '' },
            { name: 'Garlic', amount: '' },
            { name: 'Potato', amount: '' },
            { name: 'Chicken Breast', amount: '' },
            { name: 'Serrano Pepper', amount: '' },
            { name: 'Water', amount: '' },
            { name: 'Milk', amount: '' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Salt', amount: '' },
            { name: 'Sweet Bell Pepper, powder', amount: '' },
            { name: 'Ginger', amount: '' },
            { name: 'Garlic, dried', amount: '' },
            { name: 'Fenugreek Leaves, dried', amount: '' }
        ],
        text: `
            
        ` 
    },
]

export const getRandom = (): Recipe => {
    const index = Math.floor(Math.random() * recipes.length);
    return recipes[index];
}

export const getAll = (): Collection<string, Recipe> => {
    const col = new Collection<string, Recipe>();
    recipes.forEach(recipe => col.set(recipe.name, recipe));
    return col;
}
