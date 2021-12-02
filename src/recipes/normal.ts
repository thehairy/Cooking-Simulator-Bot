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
            FRIED SHRIMP
            Add to a pan:
            Clarified Butter 30ml,
            Salt 10g,
            Black Pepper 10g,
            Shrimp 120g,
            Fry for 50s.
            Transfer everything into a Deep plate. Serve hot.

            LEMON QUARTERS
            Cut Lemon 80g into Quarters 20g.
            Transfer onto a Plate.

            PARSLEY GARNISH
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
            BAKED COD
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

            LEMON QUARTERS
            Cut Lemon 80g into Quarters 20g.
            Transfer onto a Plate.

            PARSLEY GARNISH
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
            BAKED TROUT
            Take Trout 200g.
            Season with:
            Black Pepper 5g,
            Thyme, dried 5g,
            Dill, dried 5g.
            Place on a Baking Tray.
            Bake for 90s.
            Season with Horseradish, dried 5g.
            Transfer onto a Plate. Serve Hot.

            LEMON QUARTERS
            Cut Lemon 80g into Quarters 20g.
            Transfer onto a Plate.

            PARSLEY GARNISH
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
            STEAK
            Take Steak 220g.
            Season with:
            Salt 4g,
            Black Pepper 4g.
            Fry for 45s each side.
            Transfer onto a Plate. Serve Hot.

            FRENCH FRIES
            Take Potato 300g.
            Season with Salt 6g.
            Cut Potato 300g into Pieces 15g.
            Deep fry for 30s.
            Transfer onto a Plate. Serve Hot

            ROSEMARY GARNISH
            Garnish with Rosemary Twig 10g.
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
            GAZPACHO
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

            CHIVES GARNISH
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
            PORK CHOPS
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

            BAKED POTATOES
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
            PORK TENDERLOIN
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

            CARAMELIZED VEGETABLES
            Cut:
            Beetroot 120g into Pieces 20g,
            Carrot 70g into Quarters ~18g.
            Fry for 80s.
            Transfer onto a Plate. Serve Hot.

           ROSEMARY GARNISH
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
            BAKED TROUT
            Take Trout 200g.
            Season with:
            Black Pepper 5g,
            Thyme, dried 5g,
            Dill, dried 5g.
            Place on Baking Tray.
            Bake for 90s.
            Season with Horseradish, dried 5g.
            Transfer onto a Plate. Serve Hot.

            ROASTED BRUSSELS SPROUTS
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

            LEMON QUARTERS
            Cut Lemon 80g into Quarters 20g.
            Transfer onto a Plate.

            PARSLEY GARNISH
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
            PASTA
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

            PARSLEY GARNISH
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
            PUMPKIN SOUP
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
            UKRAINIAN BORSCHT
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
            BRUSCHETTA
            Take Bread 70g.
            Drizzle with Olive Oil 5ml.
            Season with Garlic, dried 5g.
            Cut Bread into Halves 35g.
            Transfer onto a Baking tray.
            Bake for 30s.
            Transfer onto a Plate. Serve hot.

            TOMATO DRESSING
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
            SHRIMP SALAD
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

            BRUSCHETTA
            Take Bread 70g.
            Drizzle with Olive Oil 5ml.
            Season with Garlic, dried 5g.
            Cut Bread into Halves 35g.
            Bake for 30s.
            Serve hot.

            TOMATO DRESSING
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

            DILL GARNISH
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
            FRIED GARLIC SHRIMP
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

            CROUTONS
            Take Bread 100g.
            Drizzle in Olive Oil 10ml.
            Cut Bread into Pieces 20g.
            Fry for 30s.
            Transfer onto a Plate. Serve Hot.

            LEMON QUARTERS
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
            POTATO SALAD
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

            CHIVES GARNISH
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
            SMOKEY POTATO SALAD
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

            CHIVES GARNISH
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
            BAKED COD
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

            GREEK SALAD
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

            PARSLEY GARNISH
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
            GRILLED TUNA STEAK
            Take Tuna 200g.
            Season with:
            Salt 5g,
            Black Pepper 5g.
            Grill for 80s each side.
            Transfer onto the Plate. Serve hot.

            LEMON QUARTERS
            Cut Lemon 80g into Quarters 20g.
            Transfer onto the Plate.

            OREGANO GARNISH
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
            GRILLED TUNA STEAK
            Take Tuna 200g.
            Season with:
            Salt 5g,
            Black Pepper 5g,
            Thyme, dried 5g.
            Grill for 80s each side.
            Transfer onto the Plate. Serve Hot.

            SICILIAN ORANGE SALAD
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

            OREGANO GARNISH
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
            SALMON FILLET
            Take Salmon Fillet 210g
            Season with:
            Salt 5g,
            Black Pepper 5g.
            Fry for 60s each side.
            Transfer onto the Plate.
            Drizzle in Lemon Juice 5ml.
            Serve hot.

            BOILED ASPARAGUS
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
            SALMON FILLET
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

            GRILLED ASPARAGUS
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
            SALMON STEAK
            Take Salmon Fillet 210g.
            Season with:
            Salt 5g,
            Black Pepper 5g.
            Add to a Pan:
            Sunflower Oil 10ml,
            Salmon Fillet.
            Fry for 60s each side.
            Transfer onto the Plate. Serve hot.

            BOILED POTATOES
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
            SALMON STEAK
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

            BOILED POTATOES
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

            GRILLED TOMATOES
            Take Tomato 240g.
            Grill for 70s.
            Transfer onto a Plate. Serve hot.

            DILL GARNISH
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
            FRIED SHRIMP BOIL
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
            BAKED SHRIMP BOIL
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

            PARSLEY GARNISH
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
            BAKED CHICKEN LEG
            Take Chicken Leg 180g.
            Season with:
            Salt 3g,
            Black Pepper 3g,
            Cayenne Pepper, powder 3g,
            Cumin, powder 3g.
            Place on a Baking Tray.
            Bake for 120s.
            Transfer onto a Plate. Serve hot.

            CAPRESE SALAD
            Cut:
            Tomato 120g into Pieces 20g,
            Mozzarella 160g into Pieces 16g.
            Season with:
            Salt 5g,
            Black Pepper 5g.
            Drizzle in Olive Oil 10ml.
            Transfer onto a Plate. Serve cool.

            BASIL GARNISH
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
            MARINATED CHICKEN LEG
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

            CAPRESE SALAD
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

            BASIL GARNISH
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
            HAMBURGER
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
            HONEY-MUSTARD HAMBURGER
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

            FRENCH FRIES
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
            FRIED DUCK BREAST
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
            FRIED DUCK BREAST
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

            ROASTED MUSHROOMS
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
            GRILLED BEEF CHUCK
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

            BAKED POTATOES
            Add to a Baking Tray:
            Potato 300g.
            Bake for 80s.
            Transfer onto a Plate. Serve hot.

            ROSEMARY GARNISH
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
            GRILLED BEEF CHUCK
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

            GARLIC SAUCE
            Cut Garlic 20g into Halves 5g.
            Add to a Bowl:
            Sour Cream 50ml,
            Dill, dried 5g,
            Garlic 20g.

            BAKED POTATOES
            Add to a Baking Tray:
            Potato 300g.
            Bake for 80s.
            Transfer onto a Plate.
            Drizzle in Garlic Sauce 25ml.
            Serve hot.

            ROSEMARY GARNISH
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
            PORK CHOPS
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

            LEMON BAKED POTATOES
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

            THYME GARNISH
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
            PORK TENDERLOIN
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

            MUSTARD SAUCE
            Add to a Pot:
            Sour Cream 50ml,
            Mustard 20ml
            Nutmeg, powder 8g,
            Chives 12g.
            Boil for 60s.
            Transfer onto a Plate:
            Pork Tenderloin.
            Drizzle in Mixture 20ml.

            CARAMELIZED VEGETABLES
            Cut:
            Beetroot 120g into Pieces 20g,
            Carrot 140g into Pieces 14g.
            Fry for 80s.
            Transfer onto a Plate. Serve hot.

            ROSEMARY GARNISH
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
            STEAK
            Take Steak 220g.
            Season with:
            Salt 5g,
            Black Pepper 5g.
            Fry for 45s each side.
            Transfer onto a Plate. Serve hot.

            BARBECUE SAUCE
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

            DEEP-FRIED VEGETABLES
            Cut:
            Red Bell Pepper 80g into Quarters 20g,
            Yellow Bell Pepper 80g into Quarters 20g,
            Green Bell Pepper 80g into Quarters 20g,
            Carrot 70g into Pieces 14g,
            Zucchini 150g into Quarters ~38g,
            Button Mushroom 50 into Halves 25g.
            Deep fry for 45s.
            Transfer onto a Plate. Serve hot.

            ROSEMARY GARNISH
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
            PASTA
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

            DICED CHILI PEPPERS
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
            FUSILLI
            Add to a Pot:
            Water 1000ml,
            Salt 5g,
            Fusilli 160g.
            Boil for 60s.
            Transfer into the Casserole.

            FAST BEEF STROGANOFF
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
            BUTTERED NOODLES
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

            BEEF STROGANOFF
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

            PARSLEY GARNISH
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
            BUTTERED NOODLES
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

            BEEF STROGANOFF
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

            PARSLEY GARNISH
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
            FUSILLI
            Add to a Pot:
            Water 1000ml,
            Salt 5g,
            Fusilli 160g.
            Boil for 60s.
            Transfer into a Casserole.

            NEAPOLITAN SAUCE
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
            FUSILLI
            Add to a Pot:
            Water 1000ml,
            Salt 5g,
            Fusilli 160g.
            Boil for 60s.
            Transfer into a Casserole.

            BLENDED NEAPOLITAN SAUCE
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

            OREGANO GARNISH
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
            { name: 'Chicken Broth', amount: '100ml' },
            { name: 'Olive Oil', amount: '20ml' },
            { name: 'Salt', amount: '5g' },
            { name: 'Black Pepper', amount: '5g' }
        ],
        text: `
            PASTA
            Add to a Pot:
            Water 1000ml,
            Salt 5g,
            Penne 150g.
            Boil for 60s.
            Transfer into a Casserole.

            SAUCE
            Cut:
            Beef Chuck 160g into Quarters 40g,
            Carrot 70g into Pieces 14g,
            Parsley Root 80g into Pieces 16g,
            Onion 120g into Pieces 15g.
            Add to a Pan:
            Olive Oil 20ml,
            Beef Chuck.
            Fry for 70s.
            Add to the Pan:
            Carrot,
            Parsley Root.
            Fry for 40s.
            Add to the Pan:
            Onion.
            Fry for 20s.
            Add to the Pan:
            Chicken Broth 100ml,
            Black Pepper 5g.
            Fry for 20s.
            Transfer into a Casserole:
            Mixture,
            Onion,
            Carrot,
            Parsley Root,
            Beef Chuck.
            Serve hot.
        `
    },
    {
        name: 'Pasta alla Genovese',
        ingredients: [
            { name: 'Onion', amount: '1' },
            { name: 'Carrot', amount: '1' },
            { name: 'Parsley Root', amount: '1' },
            { name: 'Penne', amount: '15' },
            { name: 'Beef Chuck', amount: '~1/6' },
            { name: 'Sage Leaf, fresh', amount: '1' },
            { name: 'Bay Leaf, fresh', amount: '2' },
            { name: 'Water', amount: '1000ml' },
            { name: 'Chicken Broth', amount: '100ml' },
            { name: 'white Wine', amount: '10ml' },
            { name: 'Olive Oil', amount: '20ml' },
            { name: 'Salt', amount: '5g' },
            { name: 'Black Pepper', amount: '5g' },
            { name: 'Cumin, powder', amount: '5g' }
        ],
        text: `
            PASTA
            Add to a Pot:
            Water 1000ml,
            Salt 5g,
            Penne 150g.
            Boil for 60s.
            Transfer into a Casserole.

            SAUCE
            Take Beef Chuck 160g.
            Season with Cumin, powder 5g.
            Cut:
            Carrot 70g into Pieces 14g,
            Parsley Root 80g into Pieces 16g,
            Onion 120g into Pieces 15g,
            Beef Chuck into Quarters 40g.
            Add to the Pan:
            Olive Oil 20ml,
            Beef Chuck.
            Fry for 70s.
            Add to the Pan:
            Carrot,
            Parsley Root.
            Fry for 40s.
            Add to the Pan:
            Onion.
            Fry for 20s.
            Add to the Pan:
            Chicken Broth 100ml,
            Black Pepper 5g,
            Bay Leaf, fresh 6g.
            Boil for 20s.
            Add to the Pan:
            White Wine 10ml.
            Transfer into a Casserole:
            Mixture,
            Onion,
            Carrot,
            Parsley Root,
            Beef Chuck.
            Serve hot.

            SAGE GARNISH
            Garnish with Sage Leaf, fresh 3g.
        `
    },
    {
        name: 'Penne in Broccoli Sauce',
        ingredients: [
            { name: 'Onion', amount: '1' },
            { name: 'Penne', amount: '15' },
            { name: 'Broccoli', amount: '3' },
            { name: 'Rosemary Twig', amount: '1' },
            { name: 'Water', amount: '2000ml' },
            { name: 'Sour Cream', amount: '40ml' },
            { name: 'Clarified Butter', amount: '10ml' },
            { name: 'Salt', amount: '13g' },
            { name: 'Black Pepper', amount: '3g' }
        ],
        text: `
            PASTA
            Add to a Pot:
            Water 1000ml,
            Salt 5g,
            Penne 150g.
            Boil for 60s.
            Transfer into a Casserole. Serve hot.

            SAUCE
            Add to a Pot:
            Water 1000ml,
            Salt 5g,
            Broccoli 150g.
            Boil for 85s.
            Cut Onion 120g into Pieces 15g.
            Add to a Pan:
            Clarified Butter 10ml,
            Rosemary Twig 5g,
            Onion.
            Fry for 30s.
            Add to the Pan:
            Sour Cream 40ml,
            Black Pepper 3g,
            Salt 3g,
            Broccoli.
            Fry for 15s.
            Transfer into a Casserole:
            Mixture,
            Broccoli,
            Onion,
            Rosemary Twig.
            Serve hot.
        `
    },
    {
        name: 'Penne in Broccoli and Mushroom Sauce',
        ingredients: [
            { name: 'Onion', amount: '1' },
            { name: 'Penne', amount: '15' },
            { name: 'Broccoli', amount: '3' },
            { name: 'Button Mushroom', amount: '1/2' },
            { name: 'Rosemary Twig', amount: '1' },
            { name: 'Water', amount: '2000ml' },
            { name: 'Sour Cream', amount: '40ml' },
            { name: 'Clarified Butter', amount: '10ml' },
            { name: 'Salt', amount: '13g' },
            { name: 'Black Pepper', amount: '3g' }
        ],
        text: `
            PASTA
            Add to a Pot:
            Water 1000ml,
            Salt 5g,
            Penne 150g.
            Boil for 60s.
            Transfer into a Casserole.

            SAUCE
            Add to a Pot:
            Water 1000ml,
            Salt 5g,
            Broccoli 150g.
            Boil for 85s.
            Cut:
            Onion 120g into Pieces 15g,
            Button Mushroom 25g into Pieces ~8g.
            Add to a Pan:
            Clarified Butter 10ml,
            Rosemary Twig 5g,
            Onion,
            Button Mushroom.
            Fry for 30s.
            Add to the Pan:
            Sour Cream 40ml,
            Black Pepper 3g,
            Salt 3g,
            Broccoli,
            Pasta.
            Fry for 15s.
            Transfer into a Casserole:
            Mixture,
            Pasta,
            Broccoli,
            Onion,
            Button Mushroom,
            Rosemary Twig.
            Serve hot.
        `
    },
    {
        name: 'Penne in Salmon Sauce',
        ingredients: [
            { name: 'Onion', amount: '1' },
            { name: 'Penne', amount: '15' },
            { name: 'Salmon Fillet', amount: '1' },
            { name: 'Chives', amount: '1' },
            { name: 'Water', amount: '1000ml' },
            { name: 'Sour Cream', amount: '40ml' },
            { name: 'Clarified Butter', amount: '30ml' },
            { name: 'Salt', amount: '5g' },
            { name: 'Black Pepper', amount: '3g' },
            { name: 'White Pepper', amount: '3g' }
        ],
        text: `
            PASTA
            Add to a Pot:
            Water 1000ml,
            Salt 5g,
            Penne 150g.
            Boil for 60s.
            Transfer into a Casserole.

            SAUCE
            Cut:
            Salmon Fillet 210g into Pieces ~26g,
            Onion 120g into Pieces 15g.
            Add to a Pan:
            Clarified Butter 30ml,
            Salmon Fillet.
            Fry for 30s.
            Add to the Pan:
            Sour Cream 40ml,
            White Pepper 3g,
            Black Pepper 3g,
            Chives 2g,
            Onion.
            Fry for 30s.
            Transfer into a Casserole:
            Mixture,
            Chives,
            Onion,
            Salmon Fillet.
            Serve hot.
        `
    },
    {
        name: 'Penne in Fragrent Salmon Sauce',
        ingredients: [
            { name: 'Onion', amount: '1' },
            { name: 'Penne', amount: '15' },
            { name: 'Salmon Fillet', amount: '1' },
            { name: 'Rosemary Twig', amount: '1' },
            { name: 'Chives', amount: '1' },
            { name: 'Water', amount: '1000ml' },
            { name: 'Sour Cream', amount: '40ml' },
            { name: 'Lemon Juice', amount: '10ml' },
            { name: 'Clarified Butter', amount: '30ml' },
            { name: 'Salt', amount: '5g' },
            { name: 'Black Pepper', amount: '3g' },
            { name: 'Cayenne Pepper, powder', amount: '3g' },
            { name: 'Nutmeg, powder', amount: '3g' }
        ],
        text: `
            PASTA
            Add to a Pot:
            Water 1000ml,
            Salt 5g,
            Penne 150g.
            Boil for 60s.
            Transfer into a Casserole.

            SAUCE
            Cut:
            Salmon Fillet 210g into Pieces ~26g,
            Onion 120g into Pieces 15g.
            Add to a Pan:
            Clarified Butter 30ml,
            Salmon Fillet.
            Fry for 30s.
            Add to the Pan:
            Sour Cream 40ml,
            Cayenne Pepper, powder 3g,
            Black Pepper 3g,
            Nutmeg, powder 3g,
            Chives 2g,
            Onion.
            Boil for 30s.
            Add to the Pan:
            Lemon Juice 10ml.
            Transfer into a Casserole:
            Mixture,
            Onion,
            Salmon Fillet.
            Serve hot.

            ROSEMARY GARNISH
            Garnish with Rosemary Twig 5g.
        `
    },
    {
        name: 'Fast Caldo Verde',
        ingredients: [
            { name: 'Onion', amount: '1' },
            { name: 'Garlic', amount: '1' },
            { name: 'Potato', amount: '2' },
            { name: 'Brussels Sprouts', amount: '8' },
            { name: 'Sausage', amount: '1' },
            { name: 'Chicken Broth', amount: '1000ml' },
            { name: 'Olive Oil', amount: '30ml' }
        ],
        text: `
            FAST CALDO VERDE
            Add to a Pot:
            Chicken Broth 1000ml,
            Olive Oil 30ml,
            Potato 300g,
            Onion 120g,
            Garlic 10g.
            Boil for 60s.
            Blend.
            Cut Brussels Sprouts 120g into Halves ~8g.
            Add to the Pot:
            Brussels Sprouts.
            Boil for 100s.
            Cut Sausage 240g into Pieces 20g.
            Add to a Pan:
            Sausage.
            Fry for 75s.
            Each serving consists of Soup 300ml, Brussels Sprouts 30g(~4), Sausage 40g(2). Serve hot.
        `
    },
    {
        name: 'Caldo Verde',
        ingredients: [
            { name: 'Onion', amount: '1' },
            { name: 'Garlic', amount: '1' },
            { name: 'Potato', amount: '2' },
            { name: 'Broccoli', amount: '4' },
            { name: 'Bacon', amount: '1' },
            { name: 'Brussels Sprouts', amount: '8' },
            { name: 'Sausage', amount: '1' },
            { name: 'Chicken Broth', amount: '1000ml' },
            { name: 'Olive Oil', amount: '30ml' }
        ],
        text: `
            CALDO VERDE
            Add to a Pot:
            Chicken Broth 1000ml,
            Olive Oil 30ml,
            Potato 300g,
            Onion 120g,
            Garlic 10g.
            Boil for 60s.
            Blend.
            Cut Brussels Sprouts 120g into Halves ~8g.
            Add to the Pot:
            Broccoli 200g,
            Brussels Sprouts.
            Boil for 60s.
            Cut Sausage 240g into Pieces 20g.
            Add to a Pan:
            Sausage.
            Fry for 30s.
            Add to a Pot:
            Sausage.
            Boil for 40s.
            Add to a Pan:
            Bacon 60g.
            Fry for 60s.
            Each serving consists of Soup 300ml, Brussels Sprouts 30g(~4), Broccoli 50g(1), Sausage 40g(2), Bacon 60g(1).
            Serve hot.
        `
    },
    {
        name: 'Corn Chowder',
        ingredients: [
            { name: 'Onion', amount: '1' },
            { name: 'Potato', amount: '2' },
            { name: 'Cob of Corn', amount: '1' },
            { name: 'Carrot', amount: '2' },
            { name: 'Chicken Broth', amount: '700ml' },
            { name: 'Sour Cream', amount: '100ml' },
            { name: 'Clarified Butter', amount: '15ml' },
            { name: 'Salt', amount: '12g' },
            { name: 'Black Pepper', amount: '12g' },
            { name: 'Thyme, dried', amount: '18g' }
        ],
        text: `
            CORN CHOWDER
            Transfer onto a Plate:
            Potato 300g,
            Onion 120g,
            Carrot 140g.
            Drizzle in Clarified Butter 15ml.
            Cut:
            Potato into Pieces 25g,
            Onion into Pieces 20,
            Carrot into Pieces 14g.
            Transfer into a Pan.
            Fry for 30s.
            Add to a Pot:
            Chicken Broth 700ml,
            Thyme, dried 18g,
            Salt 12g,
            Black Pepper 12g,
            Potato,
            Onion,
            Carrot.
            Boil for 20s.
            Cut Cob of Corn 180g into Pieces 30g.
            Add to the Pot:
            Sour Cream 100ml,
            Cob of Corn.
            Boil for 100s.
            Each serving consists of Soup 250ml, Cob of Corn 60g(2), Potato 75g(3).
            Serve hot.
        `
    },
    {
        name: 'Corn, Scallop and Bacon Chowder',
        ingredients: [
            { name: 'Onion', amount: '1' },
            { name: 'Potato', amount: '2' },
            { name: 'Cob of Corn', amount: '1' },
            { name: 'Carrot', amount: '2' },
            { name: 'Bacon', amount: '2' },
            { name: 'Scallop', amount: '3' },
            { name: 'Chicken Broth', amount: '700ml' },
            { name: 'Sour Cream', amount: '100ml' },
            { name: 'Clarified Butter', amount: '30ml' },
            { name: 'Salt', amount: '12g' },
            { name: 'Black Pepper', amount: '12g' },
            { name: 'Thyme, dried', amount: '18g' }
        ],
        text: `
            CORN, SCALLOPS AND BACON CHOWDER
            Transfer onto a Plate:
            Potato 300g,
            Onion 120g,
            Carrot 140g.
            Drizzle in Clarified Butter 15ml.
            Cut:
            Potato into Pieces 25g,
            Onion into Pieces 20g,
            Carrot into Pieces 14g.
            Transfer into the Pan.
            Fry for 30s.
            Add to a Pot:
            Chicken Broth 700ml,
            Thyme, dried 18g,
            Salt 12g,
            Black Pepper 12g,
            Potato,
            Onion,
            Carrot.
            Boil for 20s.
            Add to a Pan:
            Clarified Butter 15ml,
            Bacon 120g.
            Fry for 60s.
            Cut Cob of Corn 180g into Pieces 30g.
            Add to the Pot:
            Sour Cream 100ml,
            Cob of Corn.
            Boil for 60s.
            Add to the Pot:
            Bacon.
            Boil for 40s.
            Add to a Pan:
            Scallop 90g.
            Fry for 50s.
            Each serving consists of Soup 250ml, Cob of Corn 60g(2), Potato 75g(3), Bacon 60g(1), Scallop 30g(1).
            Serve hot.
        `
    },
    {
        name: 'Duck Broth',
        ingredients: [
            { name: 'Duck Breast', amount: '2' },
            { name: 'Onion', amount: '1' },
            { name: 'Carrot', amount: '1' },
            { name: 'Water', amount: '1300ml' },
            { name: 'Salt', amount: '10g' },
            { name: 'Black Pepper', amount: '10g' }
        ],
        text: `
            DUCK BROTH
            Add to a Pot:
            Water 1300ml,
            Salt 10g,
            Black Pepper 10g,
            Duck Breast 560g,
            Carrot 70g,
            Onion 120g.
            Boil for 80s.
            Cut Duck Breast 560g into Pieces 35g.
            Each serving consists of Soup 300ml, Duck Breast 140g(4)
        `
    },
    {
        name: 'Duck Consommé',
        ingredients: [
            { name: 'Tomato', amount: '1' },
            { name: 'Duck Breast', amount: '1' },
            { name: 'Onion', amount: '1' },
            { name: 'Carrot', amount: '1' },
            { name: 'Parsley Leaves, fresh', amount: '3' },
            { name: 'Water', amount: '1000ml' },
            { name: 'Salt', amount: '5g' },
            { name: 'Black Pepper', amount: '5g' }
        ],
        text: `
            DUCK CONSOMME
            Add to the Food Processor:
            Water 1000ml,
            Duck Breast 280g.
            Blend.
            Transfer into a Pot.
            Add to a Pot:
            Salt 5g,
            Black Pepper 5g,
            Carrot 70g,
            Onion 120g,
            Tomato 120g.
            Boil for 120s.
            Pour the Liquid 300ml into a Deep Plate. Serve hot.

            PARSLEY GARNISH
            Garnish with Parsley Leaves, fresh 6g.
        `
    },
    {
        name: 'Chunky Gazpacho',
        ingredients: [
            { name: 'Tomato', amount: '2' },
            { name: 'Cucumber', amount: '1 1/2' },
            { name: 'Garlic', amount: '1' },
            { name: 'Red Bell Pepper', amount: '1 1/4' },
            { name: 'Green Bell Pepper', amount: '1' },
            { name: 'Jalapeño', amount: '2' },
            { name: 'Bread', amount: '1/2' },
            { name: 'Chives', amount: '7' },
            { name: 'Lime Juice', amount: '5ml' },
            { name: 'Olive Oil', amount: '5ml' },
            { name: 'Balsamic Vinegar', amount: '5ml' },
            { name: 'Salt', amount: '5g' },
            { name: 'Black Pepper', amount: '5g' },
            { name: 'Oregano, dried', amount: '3g' },
            { name: 'Cumin, powder', amount: '3g' },
            { name: 'Cayenne Pepper, powder', amount: '3g' }
        ],
        text: `
            CHUNKY GAZPACHO
            Add to the Food Processor:
            Balsamic Vinegar 5ml,
            Lime Juice 5ml,
            Olive Oil 5ml,
            Garlic 10g,
            Cucumber 160g,
            Tomato 240g,
            Red Bell Pepper 240g,
            Green Bell Pepper 240g,
            Jalapeño 40g,
            Bread 150g,
            Chives 6g.
            Blend.
            Add to the Food Processor:
            Salt 5g,
            Black Pepper 5g,
            Cayenne Pepper, powder 3g,
            Cumin, powder 3g,
            Oregano, dried 3g.
            Pour the Liquid 300ml into a Deep Plate. Serve cool.

            VEGETABLES
            Cut:
            Cucumber 75g into Pieces 25g,
            Red Bell Pepper 60g into Pieces 10g,
            Tomato 60g into Pieces 10g,
            Jalapeño 40g into Quarters 10g.
            Transfer into a Deep Plate. Serve cool.

            CHIVES GARNISH
            Garnish with Chives 8g.
        `
    },
    {
        name: 'Pumpkin Soup',
        ingredients: [
            { name: 'Onion', amount: '1' },
            { name: 'Garlic', amount: '2' },
            { name: 'Pumpkin', amount: '1/5' },
            { name: 'Thyme Twig', amount: '4' },
            { name: 'Cilantro Leaves, fresh', amount: '3' },
            { name: 'Chicken Broth', amount: '500ml' },
            { name: 'Sour Cream', amount: '150ml' },
            { name: 'Olive Oil', amount: '10ml' },
            { name: 'Salt', amount: '20g' },
            { name: 'Black Pepper', amount: '15g' }
        ],
        text: `
            PUMPKIN SOUP
            Cut Onion 120g into Pieces 15g.
            Add to a Pan:
            Olive oil 10ml,
            Onion.
            Fry for 30s.
            Transfer into a Pot:
            Mixture,
            Onion.
            Add to a Pot:
            Chicken Broth 500ml,
            Salt 20g,
            Black Pepper 15g,
            Pumpkin 1000g,
            Garlic 20g,
            Thyme Twig 20g.
            Boil for 90s.
            Blend.
            Add Sour Cream 150ml.
            Pour the Liquid 300ml into a Deep Plate. Serve hot.

            CILANTRO GARNISH
            Garnish with Cilantro Leaves, fresh 6g.
        `
    },
    {
        name: 'Pumpkin Soup with Croutons',
        ingredients: [
            { name: 'Onion', amount: '1' },
            { name: 'Garlic', amount: '2' },
            { name: 'Pumpkin', amount: '1/5' },
            { name: 'Bread', amount: '1/6' },
            { name: 'Thyme Twig', amount: '4' },
            { name: 'Cilantro Leaves, fresh', amount: '3' },
            { name: 'Chicken Broth', amount: '500ml' },
            { name: 'Sour Cream', amount: '150ml' },
            { name: 'Olive Oil', amount: '15ml' },
            { name: 'Salt', amount: '20g' },
            { name: 'Black Pepper', amount: '15g' }
        ],
        text: `
            PUMPKIN SOUP
            Cut Onion 120g into Pieces 15g.
            Add to a Pan:
            Olive Oil 10ml,
            Onion.
            Fry for 30s.
            Transfer into a Pot:
            Mixture 10ml,
            Onion.
            Add to a Pot:
            Chicken Broth 500ml,
            Salt 20g,
            Black Pepper 15g,
            Pumpkin 1000g,
            Garlic 20g,
            Thyme Twig 20g.
            Boil for 90s.
            Blend.
            Add Sour Cream 150ml.
            Pour the Liquid 300ml into a Deep Plate. Serve hot.

            CROUTONS
            Take Bread 50g.
            Drizzle in Olive Oil 5ml.
            Cut Bread into Pieces ~6g.
            Fry for 30s.
            Transfer into a Deep Plate.

            CILANTRO GARNISH
            Garnish with Cilantro Leaves, fresh 6g.
        `
    },
    {
        name: 'Tomato Soup',
        ingredients: [
            { name: 'Tomato', amount: '8' },
            { name: 'Onion', amount: '1' },
            { name: 'Chicken Broth', amount: '700ml' },
            { name: 'Sour Cream', amount: '150ml' },
            { name: 'Salt', amount: '12g' },
            { name: 'Black Pepper', amount: '12g' },
            { name: 'Cayenne Pepper, powder', amount: '6g' }
        ],
        text: `
            TOMATO SOUP
            Add to a Pot:
            Chicken Broth 700ml,
            Salt 12g,
            Black Pepper 12g,
            Cayenne Pepper, powder 6g,
            Tomato 960g,
            Onion 120g.
            Boil for 60s.
            Blend.
            Add Sour Cream 150ml.
            Pour the Liquid 300ml into a Deep Plate. Serve hot.
        `
    },
    {
        name: 'Red Pepper and Tomato Soup',
        ingredients: [
            { name: 'Tomato', amount: '7' },
            { name: 'Onion', amount: '1' },
            { name: 'Garlic', amount: '2' },
            { name: 'Red Bell Pepper', amount: '1' },
            { name: 'Basil Leaf, fresh', amount: '4' },
            { name: 'Chicken Broth', amount: '700ml' },
            { name: 'Sour Cream', amount: '150ml' },
            { name: 'Olive Oil', amount: '20ml' },
            { name: 'Salt', amount: '12g' },
            { name: 'Black Pepper', amount: '12g' },
            { name: 'Cayenne Pepper, powder', amount: '6g' }
        ],
        text: `
            RED PEPPER AND TOMATO SOUP
            Transfer onto the Plate:
            Red Bell Pepper 240g,
            Onion 120g,
            Garlic 20g.
            Drizzle in Olive Oil 20ml.
            Bake for 90s.
            Add to a Pot:
            Chicken Broth 700ml,
            Salt 12g,
            Black Pepper 12g,
            Cayenne Pepper, powder 6g.
            Tomato 840g,
            Red Bell Pepper,
            Onion,
            Garlic.
            Boil for 60s.
            Blend.
            Add Sour Cream 150ml.
            Pour the Liquid 300ml into a Deep Plate. Serve hot.

            BASIL GARNISH
            Garnish with Basil Leaf, fresh 12g
        `
    },
    {
        name: 'Red Pepper and Tomato Soup with Toast',
        ingredients: [
            { name: 'Tomato', amount: '7' },
            { name: 'Onion', amount: '1' },
            { name: 'Garlic', amount: '2' },
            { name: 'Mozzarella', amount: '1' },
            { name: 'Red Bell Pepper', amount: '1' },
            { name: 'Chili Pepper', amount: '1' },
            { name: 'Bread', amount: '1/6' },
            { name: 'Basil Leaf, fresh', amount: '4' },
            { name: 'Chicken Broth', amount: '700ml' },
            { name: 'Sour Cream', amount: '150ml' },
            { name: 'Clarified Butter', amount: '5ml' },
            { name: 'Olive Oil', amount: '20ml' },
            { name: 'Salt', amount: '12g' },
            { name: 'Black Pepper', amount: '12g' },
            { name: 'Cayenne Pepper, powder', amount: '6g' }
        ],
        text: `
            HOT RED PEPPER AND TOMATO SOUP
            Transfer onto a Plate:
            Red Bell Pepper 240g,
            Chili Pepper 30g,
            Onion 120g,
            Garlic 20g.
            Drizzle in Olive Oil 20ml.
            Bake for 90s.
            Add to a Pot:
            Chicken Broth 700ml,
            Salt 12g,
            Black Pepper 12g,
            Cayenne Pepper, powder 6g,
            Tomato 840g,
            Red Bell Pepper,
            Chili Pepper,
            Onion,
            Garlic.
            Boil for 60s.
            Blend.
            Add Sour Cream 150ml.
            Pour the Liquid 300ml into a Deep Plate. Serve hot.

            MOZZARELLA SLICES
            Cut Mozzarella 80g into Pieces 16g.
            Transfer into a Deep Plate.

            BUTTERED TOAST
            Take Bread 60g.
            Drizzle in Clarified Butter 5ml.
            Cut Bread into Quarters 15g.
            Fry for 30s.
            Transfer into a Deep Plate.

            BASIL GARNISH
            Garnish with Basil Leaf, fresh 12g.
        `
    },
    {
        name: 'Ukrainian Borscht',
        ingredients: [
            { name: 'Tomato', amount: '1' },
            { name: 'Onion', amount: '1' },
            { name: 'Garlic', amount: '1' },
            { name: 'Carrot', amount: '1' },
            { name: 'Parsley Root', amount: '1' },
            { name: 'Beetroot', amount: '5' },
            { name: 'Dill, fresh', amount: '4' },
            { name: 'Bay Leaf, fresh', amount: '2' },
            { name: 'Chicken Broth', amount: '700ml' },
            { name: 'Sour Cream', amount: '50ml' },
            { name: 'Lemon Juice', amount: '20ml' },
            { name: 'Clarified Butter', amount: '30ml' },
            { name: 'Salt', amount: '20g' },
            { name: 'Black Pepper', amount: '20g' },
            { name: 'Allspice, powder', amount: '15g' }
        ],
        text: `
            UKRAINIAN BORSCHT
            Add to a Pot:
            Chicken Broth 700ml,
            Beetroot 600g.
            Boil for 60s.
            Transfer onto a Plate:
            Onion 120g,
            Carrot 70g,
            Parsley Root 80g.
            Drizzle in Clarified Butter 30ml.
            Cut:
            Onion into Pieces 20g,
            Carrot into Pieces 14g,
            Parsley Root into Pieces 16g.
            Fry for 60s.
            Add to the Pot:
            Allspice, powder 15g,
            Salt 20g,
            Black Pepper 20g,
            Garlic 10g,
            Bay Leaf, fresh 6g,
            Carrot,
            Parsley Root,
            Onion.
            Boil for 60s.
            Cut Tomato 120g into Halves 60g.
            Add to the pot.
            Boil for 15s.
            Add Lemon Juice 20ml.
            Pour the Liquid 300ml into a Deep Plate.
            Add Sour Cream 50ml.
            Serve hot.

            DILL GARNISH
            Garnish with Dill, fresh 4g.
        `
    },
    {
        name: 'Fast Ratatouille',
        ingredients: [
            { name: 'Tomato', amount: '1 1/2' },
            { name: 'Zucchini', amount: '1/4' },
            { name: 'Eggplant', amount: '~1/4' },
            { name: 'Onion', amount: '1/2' },
            { name: 'Garlic', amount: '1' },
            { name: 'Red Bell Pepper', amount: '1/2' },
            { name: 'Yellow Bell Pepper', amount: '1/2' },
            { name: 'Olive Oil', amount: '20ml' },
            { name: 'Salt', amount: '6g' },
            { name: 'Black Pepper', amount: '6g' },
            { name: 'Herbs de Provence, dried', amount: '9g' }
        ],
        text: `
            FAST RATATOUILLE
            Add to the Food Processor:
            Olive Oil 20ml,
            Onion 60g,
            Garlic 10g,
            Red Bell Pepper 120g,
            Yellow Bell Pepper 120g,
            Tomato 60g.
            Blend.
            Transfer into a Pot.
            Add to the Pot:
            Salt 6g,
            Black Pepper 6g,
            Herbs de Provence, dried 9g.
            Boil for 60s.
            Transfer into a Casserole.

            ROASTED VEGETABLES
            Cut:
            Eggplant 90g into Pieces ~11g,
            Zucchini 180g into Pieces ~19g.
            Transfer onto a Baking Tray.
            Bake for 60s.
            Cut Tomato 120g into Pieces 20g.
            Transfer onto the Baking Tray.
            Bake for 60s.
            Transfer into a Casserole. Serve hot.
        `
    },
    {
        name: 'Ratatouille',
        ingredients: [
            { name: 'Tomato', amount: '2' },
            { name: 'Zucchini', amount: '1/4' },
            { name: 'Eggplant', amount: '~1/4' },
            { name: 'Onion', amount: '1/2' },
            { name: 'Garlic', amount: '1' },
            { name: 'Red Bell Pepper', amount: '~1/3' },
            { name: 'Yellow Bell Pepper', amount: '~1/3' },
            { name: 'Parsley Leaves, fresh', amount: '3' },
            { name: 'Olive Oil', amount: '5ml' },
            { name: 'Salt', amount: '7g' },
            { name: 'Black Pepper', amount: '5g' },
            { name: 'Herbs de Provence, dried', amount: '4g' }
        ],
        text: `
            RATATOUILLE
            Take Eggplant 90g.
            Season with Salt 2g.
            Drizzle in Olive Oil 5ml.
            Cut Eggplant into Pieces 15g.
            Fry for 40s.
            Cut Zucchini 150g into Pieces ~19g.
            Add to a Baking Tray:
            Zucchini,
            Eggplant.
            Bake for 120s.
            Cut:
            Onion 60g into Pieces 10g,
            Red Bell Pepper 90g into Pieces 10g,
            Yellow Bell Pepper 90g into Pieces 10g,
            Garlic 10g into Halves 5g.
            Transfer into a Pan.
            Fry for 30s.
            Add to the Food Processor:
            Tomato 240g.
            Blend.
            Transfer into a Pot.
            Add to the Pot:
            Salt 5g,
            Black Pepper 5g,
            Herbs de Provence, dried 4g,
            Parsley Leaves, fresh 6g.
            Boil for 30s.
            Transfer into a Casserole:
            Mixture,
            Eggplant,
            Zucchini,
            Onion,
            Red Bell Pepper,
            Yellow Bell Pepper,
            Garlic,
            Parsley Leaves, fresh.
            Serve hot.
        `
    },
    {
        name: 'Shakshuka',
        ingredients: [
            { name: 'Tomato', amount: '2' },
            { name: 'Onion', amount: '1/2' },
            { name: 'Garlic', amount: '1' },
            { name: 'Red Bell Pepper', amount: '1/2' },
            { name: 'Parsley Leaves, fresh', amount: '3' },
            { name: 'Egg', amount: '1' },
            { name: 'Water', amount: '60ml' },
            { name: 'Olive Oil', amount: '10ml' },
            { name: 'Salt', amount: '6g' },
            { name: 'Black Pepper', amount: '6g' },
            { name: 'Cumin, powder', amount: '3g' },
            { name: 'Turmeric, powder', amount: '5g' },
            { name: 'Smoked Pepper, powder', amount: '5g' }
        ],
        text: `
            SHAKSHUKA
            Cut:
            Onion 60g into Pieces 10g,
            Red Bell Pepper 120g into Pieces 20g,
            Tomato 240g into Pieces 15g,
            Garlic 10g into Halves 5g.
            Add to a Pan:
            Olive Oil 10ml,
            Smoked Pepper, powder 5g,
            Turmeric, powder 5g,
            Cumin, powder 3g,
            Salt 3g,
            Black Pepper 3g,
            Red Bell Pepper.
            Fry for 30s.
            Add to the Pan:
            Water 60ml,
            Onion,
            Tomato,
            Garlic.
            Fry for 30s.
            Crack Egg into the Pan with sauce.
            Season with:
            Salt 3g,
            Black Pepper 3g.
            Fry for 30s.
            Transfer into a Casserole:
            Mixture,
            Egg,
            Onion,
            Tomato,
            Garlic,
            Red Bell Pepper.
            Serve hot.

            PARSLEY GARNISH
            Garnish with Parsley Leaves, fresh 6g.
        `
    },
    {
        name: 'Spicy Shakshuka',
        ingredients: [
            { name: 'Tomato', amount: '2' },
            { name: 'Onion', amount: '1/2' },
            { name: 'Garlic', amount: '1' },
            { name: 'Goat Cheese', amount: '1/5' },
            { name: 'Red Bell Pepper', amount: '1/2' },
            { name: 'Jalapeño', amount: '1' },
            { name: 'Bread', amount: '1/6' },
            { name: 'Mint Leaf', amount: '3' },
            { name: 'Egg', amount: '1' },
            { name: 'Water', amount: '60ml' },
            { name: 'Olive Oil', amount: '15ml' },
            { name: 'Salt', amount: '6g' },
            { name: 'Black Pepper', amount: '6g' },
            { name: 'Cumin, powder', amount: '3g' },
            { name: 'Chili Flakes', amount: '2g' },
            { name: 'Turmeric, powder', amount: '5g' },
            { name: 'Smoked Pepper, powder', amount: '5g' }
        ],
        text: `
            SPICY SHAKSHUKA
            Cut:
            Onion 60g into Pieces 10g,
            Red Bell Pepper 120g into Pieces 20g,
            Tomato 240g into Pieces 15g,
            Garlic 10g into Halves 5g,
            Jalapeño 40g into Pieces 8g.
            Add to a Pan:
            Olive Oil 10ml,
            Smoked Pepper, powder 5g,
            Turmeric, powder 5g,
            Cumin, powder 3g,
            Chili Flakes 2g,
            Salt 3g,
            Black Pepper 3g,
            Red Bell Pepper,
            Jalapeño.
            Fry for 30s
            Add to the Pan:
            Water 60ml,
            Onion,
            Tomato,
            Garlic.
            Boil for 30s.
            Crack Egg into the Pan with sauce.
            Season with:
            Black Pepper 3g,
            Salt 3g.
            Boil for 30s.
            Transfer into a Casserole:
            Mixture,
            Egg,
            Onion,
            Tomato,
            Garlic,
            Red Bell Pepper,
            Jalapeño.
            Serve hot.

            DICED GOAT CHEESE
            Cut Goat Cheese 100g into Pieces 10g.
            Transfer into a Casserole.

            TOAST
            Take Bread 50g.
            Drizzle in Olive Oil 5ml.
            Cut Bread into Halves 25g.
            Bake for 30s.
            Transfer into a Casserole. Serve hot.

            MINT GARNISH
            Garnish with Mint Leaf 6g.
        `
    },
    {
        name: 'Pork Chops with Fried Egg and Lemon Baked Potatoes',
        ingredients: [
            { name: 'Potato', amount: '2' },
            { name: 'Pork Chops', amount: '1' },
            { name: 'Oregano Twig', amount: '3' },
            { name: 'Thyme Twig', amount: '4' },
            { name: 'Egg', amount: '1' },
            { name: 'Sunflower Oil', amount: '30ml' },
            { name: 'Chicken Broth', amount: '50ml' },
            { name: 'Lemon Juice', amount: '50ml' },
            { name: 'Olive Oil', amount: '10ml' },
            { name: 'Salt', amount: '22g' },
            { name: 'Black Pepper', amount: '16g' },
            { name: 'Thyme, dried', amount: '6g' },
            { name: 'Herbs de Provence, dried', amount: '3g' }
        ],
        text: `
            PORK CHOPS
            Take Pork Chops 200g.
            Season with:
            Salt 4g,
            Black Pepper 4g,
            Thyme, dried 6g.
            Add to the Pan:
            Sunflower Oil 30ml,
            Pork Chops.
            Fry for 90s each side.
            Transfer onto a Plate. Serve hot.

            LEMON BAKED POTATOES
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

            FRIED EGG
            Crack Egg into the Pan.
            Season with:
            Salt 3g,
            Black Pepper 3g,
            Herbs de Provence, dried 3g.
            Add to the Pan:
            Olive Oil 10ml.
            Fry for 30s.
            Transfer onto the Plate. Serve hot.

            THYME GARNISH
            Garnish with Thyme Twig 20g.
        `
    },
    {
        name: 'Ukrainian Borscht with Boiled Egg',
        ingredients: [
            { name: 'Tomato', amount: '1' },
            { name: 'Onion', amount: '1' },
            { name: 'Garlic', amount: '1' },
            { name: 'Carrot', amount: '1' },
            { name: 'Parsley Root', amount: '1' },
            { name: 'Beetroot', amount: '5' },
            { name: 'Dill, fresh', amount: '4' },
            { name: 'Bay Leaf, fresh', amount: '2' },
            { name: 'Peeled Egg', amount: '1' },
            { name: 'Water', amount: '200ml' },
            { name: 'Chicken Broth', amount: '700ml' },
            { name: 'Sour Cream', amount: '50ml' },
            { name: 'Lemon Juice', amount: '20ml' },
            { name: 'Clarified Butter', amount: '30ml' },
            { name: 'Salt', amount: '20g' },
            { name: 'Black Pepper', amount: '20g' },
            { name: 'Allspice, powder', amount: '15g' }
        ],
        text: `
            UKRAINIAN BORSCHT
            Add to a Pot:
            Chicken Broth 700ml,
            Beetroot 600g.
            Boil for 60s.
            Cut:
            Onion 120g into Pieces 20g,
            Carrot 70g into Pieces 14g,
            Parsley Root 80 into Pieces 16g.
            Add to a Pan:
            Clarified Butter 30ml,
            Onion,
            Carrot,
            Parsley Root.
            Fry for 60s.
            Add to the Pot:
            Allspice, powder 15g,
            Salt 20g,
            Black Pepper 20g,
            Garlic 10g,
            Bay Leaf, fresh 6g,
            Onion,
            Carrot,
            Parsley Root.
            Boil for 60s.
            Cut Tomato 120g into Halves 60g.
            Add to the Pot:
            Tomato.
            Boil for 15s.
            Add Lemon Juice 20ml.
            Pour the Liquid 300ml into a Deep Plate.
            Add Sour Cream 50ml.
            Serve hot.

            HARD BOILED EGG
            Add to a Pot:
            Water 200ml,
            Egg 100g.
            Boil for 60s.
            Draing.
            Peel the Egg.
            Cut Peeled Egg into Halves ~32g.
            Transfer into a Deep Plate.

            DILL GARNISH
            Garnish with Dill fresh 4g.
        `
    },
    {
        name: 'Grilled T-bone Steak and Baked Red Potatoes',
        ingredients: [
            { name: 'Onion', amount: '1' },
            { name: 'T-bone Steak', amount: '1' },
            { name: 'Red Potato', amount: '3' },
            { name: 'Salt', amount: '16g' },
            { name: 'Black Pepper', amount: '7g' },
            { name: 'Sweet Bell Pepper, powder', amount: '10g' }
        ],
        text: `
            GRILLED T-BONE STEAK
            Take T-bone Steak 680g.
            Season with:
            Salt 7g,
            Black Pepper 7g,
            Sweet Bell Pepper, powder 10g.
            Grill for 70s Each Side.
            Transfer onto a Plate. Serve hot.

            BAKED RED POTATOES
            Take Red Potato 300g.
            Season with Salt 9g.
            Cut Onion 120g into Pieces 20g.
            Add to a Baking Tray:
            Red Potato,
            Onion.
            Bake for 60s.
            Transfer onto a Plate. Serve hot.
        `
    },
    {
        name: 'Barbecue T-bone Steak with Potatoes and a Corn on the Cob',
        ingredients: [
            { name: 'Onion', amount: '1' },
            { name: 'Cob of Corn', amount: '1' },
            { name: 'T-bone Steak', amount: '1' },
            { name: 'Red Potato', amount: '3' },
            { name: 'Water', amount: '1000ml' },
            { name: 'Barbecue Sauce', amount: '30ml' },
            { name: 'Clarified Butter', amount: '15ml' },
            { name: 'Salt', amount: '36g' },
            { name: 'Black Pepper', amount: '7g' },
            { name: 'Sweet Bell Pepper, powder', amount: '10g' }
        ],
        text: `
            BARBECUE T-BONE STEAK
            Take T-bone Steak 680g.
            Season with:
            Salt 7g,
            Black Pepper 7g,
            Sweet Bell Pepper, powder 10g.
            Drizzle in Barbecue Sauce 30ml.
            Grill for 70s each side.
            Transfer onto a Plate. Serve hot.

            BAKED RED POTATOES
            Take Red Potato 300g.
            Season with:
            Salt 9g.
            Cut Onion 120g into Pieces 20g.
            Add to a Baking Tray:
            Red Potato,
            Onion.
            Bake for 60s.
            Transfer onto a Plate. Serve hot.

            CORN ON THE COB WITH BUTTER
            Add to a Pot:
            Water 1000ml,
            Salt 20g,
            Cob of Corn.
            Boil for 100s.
            Transfer onto a Plate.
            Drizzle in Clarified Butter 15ml.
            Serve hot.
        `
    },
    {
        name: 'Barbecue T-bone Steak with Potatoes and a Hot Corn on the Cob',
        ingredients: [
            { name: 'Onion', amount: '1' },
            { name: 'Garlic', amount: '5' },
            { name: 'Cob of Corn', amount: '1' },
            { name: 'Chili Pepper', amount: '1' },
            { name: 'T-bone Steak', amount: '1' },
            { name: 'Red Potato', amount: '3' },
            { name: 'Water', amount: '2000ml' },
            { name: 'Barbecue Sauce', amount: '30ml' },
            { name: 'Clarified Butter', amount: '30ml' },
            { name: 'Salt', amount: '47g' },
            { name: 'Black Pepper', amount: '7g' },
            { name: 'Sweet Bell Pepper, powder', amount: '10g' }
        ],
        text: `
            BARBECUE T-BONE STEAK
            Take T-bone Steak 680g.
            Season with:
            Salt 7g,
            Black Pepper 7g,
            Sweet Bell Pepper, powder 10g.
            Drizzle in Barbecue Sauce 30ml.
            Grill for 70s each side.
            Transfer onto a Plate. Serve hot.

            BAKED RED POTATOES AND GARLIC
            Add to a Pot:
            Water 1000ml,
            Salt 20g,
            Red Potato 300g.
            Boil for 20s.
            Cut Onion 120g into Pieces 20g.
            Add to a Baking Tray:
            Onion.
            Bake for 20s.
            Add:
            Garlic 50g,
            Red Potato.
            Bake for 40s.
            Transfer onto a Plate. Serve hot.

            CORN ON THE COB WITH CHILI BUTTER
            Add to a Pot:
            Water 1000ml,
            Salt 20g,
            Cob of Corn 180g.
            Boil for 100s.
            Cut Chili Pepper 30g into Halves 15g.
            Add to a Pan:
            Clarified Butter 30ml,
            Chili Pepper.
            Fry for 15s.
            Take Cob of Corn.
            Drizzle in Mixture 30ml.
            Transfer everything onto a Plate. Serve cold.
        `
    },
    {
        name: 'Sweet and Sour Pork',
        ingredients: [
            { name: 'Tomato', amount: '2' },
            { name: 'garlic', amount: '2' },
            { name: 'Pork Tenderloin', amount: '1' },
            { name: 'Cilantro Leaves, fresh', amount: '3' },
            { name: 'Water', amount: '20ml' },
            { name: 'Sunflower Oil', amount: '15ml' },
            { name: 'Salt', amount: '5g' },
            { name: 'Black Pepper', amount: '5g' },
            { name: 'Oregano, dried', amount: '6g' },
            { name: 'Sugar', amount: '10g' }
        ],
        text: `
            TOMATO SAUCE
            Add to the Food Processor:
            Tomato 240g,
            Garlic 20g.
            Blend.
            Add:
            Oregano, dried 6g,
            Salt 5g,
            Black Pepper 5g.

            PORK TENDERLOIN
            Cut Pork Tenderloin 250g into Pieces 25g.
            Add to a Pan:
            Sunflower Oil 15ml,
            Pork Tenderloin.
            Fry for 80s.
            Add to the Pan:
            Sugar 10g,
            Water 20ml,
            Tomato Sauce 100ml.
            Fry for 20s.
            Transfer everything into a Deep Plate. Serve hot.

            CILANTRO GARNISH
            Garnish with Cilantro Leaves, fresh 6g.
        `
    },
    {
        name: 'Marinated Sweet and Sour Pork',
        ingredients: [
            { name: 'Tomato', amount: '2' },
            { name: 'Garlic', amount: '2' },
            { name: 'Pork Tenderloin', amount: '1' },
            { name: 'Cilantro Leaves, fresh', amount: '3' },
            { name: 'Egg', amount: '2' },
            { name: 'Water', amount: '20ml' },
            { name: 'Sunflower Oil', amount: '15ml' },
            { name: 'Soy Sauce', amount: '10ml' },
            { name: 'Salt', amount: '10g' },
            { name: 'Black Pepper', amount: '5g' },
            { name: 'Oregano, dried', amount: '6g' },
            { name: 'Sugar', amount: '10g' },
            { name: 'Starch', amount: '7g' }
        ],
        text: `
            MARINADE
            Crack Egg 200g.
            Transfer into the Food Processor.
            Blend.
            Add to the Food Processor:
            Salt 5g,
            Starch 7g,
            Soy Sauce 10ml.

            TOMATO SAUCE
            Add to the Food Processor:
            Tomato 240g,
            Garlic 20g.
            Blend.
            Add:
            Oregano, dried 6g,
            Salt 5g,
            Black Pepper 5g.

            PORK TENDERLOIN
            Take Pork Tenderloin 250g.
            Drizzle in Marinade.
            Cut Pork Tenderloin into Pieces 25g.
            Add to the Pan:
            Sunflower Oil 15ml,
            Pork Tenderloin.
            Fry for 80s.
            Transfer onto the Plate:
            Pork Tenderloin.
            Add to the Pan:
            Water 20ml,
            Sugar 10g,
            Tomato Sauce 100ml.
            Boil for 20s.
            Add to the Pan:
            Pork Tenderloin.
            Fry for 20s.
            Transfer everything into a Deep Plate. Serve hot.

            CILANTRO GARNISH
            Garnish with Cilantro Leaves, fresh 6g.
        `
    },
    {
        name: 'Kung Pao Chicken',
        ingredients: [
            { name: 'Scallion Leaves', amount: '3' },
            { name: 'Chicken Breast', amount: '1' },
            { name: 'Soy Sauce', amount: '5ml' },
            { name: 'Balsamic Vinegar', amount: '15ml' },
            { name: 'Sesame Oil', amount: '5ml' },
            { name: 'Peanut Oil', amount: '30ml' },
            { name: 'Hoisin Sauce', amount: '5ml' },
            { name: 'Sugar', amount: '10g' },
            { name: 'Chili Flakes', amount: '20g' },
            { name: 'Starch', amount: '5g' },
            { name: 'Sichuan Pepper, powder', amount: '3g' }
        ],
        text: `
            SAUCE
            Add to a Pot:
            Balsamic Vinegar 15ml,
            Soy Sauce 5ml,
            Hoisin Sauce 5ml,
            Sesame Oil 5ml,
            Sugar 10g,
            Starch 5g,
            Sichuan Pepper, powder 3g.
            Boil for 40s.
            Transfer everything into a Deep Plate.

            KUNG PAO CHICKEN
            Take Chicken Breast 240g.
            Season with Chili Flakes 20g
            Cut Chicken Breast into Pieces 30g.
            Add to the Pan:
            Peanut Oil 30ml,
            Chicken Breast.
            Fry for 90s.
            Transfer into a Deep Plate. Serve hot.

            SCALLION GARNISH
            Take Scallion 240g.
            Separate Scallion.
            Scallion Leaves 60g into Quarters 5g.
            Garnish with Scallion Leaves.
        `
    },
    {
        name: 'Marinated Kung Pao Chicken',
        ingredients: [
            { name: 'Chili Pepper', amount: '8' },
            { name: 'Scallion Bulbs', amount: '3' },
            { name: 'Scallion Leaves', amount: '3' },
            { name: 'Chicken Breast', amount: '1' },
            { name: 'Soy Sauce', amount: '20ml' },
            { name: 'Balsamic Vinegar', amount: '15ml' },
            { name: 'Rice Wine', amount: '10ml' },
            { name: 'Sesame Oil', amount: '5ml' },
            { name: 'Peanut Oil', amount: '30ml' },
            { name: 'Hoisin Sauce', amount: '5ml' },
            { name: 'Sugar', amount: '10g' },
            { name: 'Ginger', amount: '5g' },
            { name: 'Garlic, dried', amount: '20g' },
            { name: 'Starch', amount: '13g' },
            { name: 'Sichuan Pepper, powder', amount: '3g' }
        ],
        text: `
            MARINADE
            Add to a Bowl:
            Soy Sauce 15ml,
            Rice Wine 10ml,
            Starch 8g.

            SAUCE
            Add to a Bowl:
            Balsamic Vinegar 15ml,
            Soy Sauce 5ml,
            Hoisin Sauce 5ml,
            Sesame Oil 5ml,
            Sugar 10g,
            Starch 5g,
            Sichuan Pepper, powder 3g.

            KUNG PAO CHICKEN
            Take Chicken Breast 240g.
            Drizzle in Marinade.
            Cut Chicken Breast into Pieces 30g.
            Add to the Pan:
            Sunflower Oil 30ml,
            Chili Pepper 240g,
            Chicken Breast.
            Fry for 90s.
            Take Scallion 240g.
            Separate Scallion.
            Cut Scallion Bulb 180g into Halves 30g.
            Transfer onto a Plate:
            Chili Pepper,
            Chicken Breast.
            Add to the Pan:
            Garlic, dried 20g,
            Ginger 5g,
            Scallion Bulb.
            Fry for 20s.
            Add to the Pan:
            Sauce.
            Fry for 20s.
            Transfer into a Deep Plate:
            Mixture,
            Chicken Breast.
            Serve hot.

            SCALLION GARNISH
            Cut Scallion Leaves 60g into Quarters 5g.
            Garnish with Scallion Leaves.
        `
    },
    {
        name: 'Easy Chinese Egg Drop Soup ',
        ingredients: [
            { name: 'Egg', amount: '2' },
            { name: 'Scallion Leaves', amount: '2' },
            { name: 'Chicken Broth', amount: '1000ml' },
            { name: 'Sesame Oil', amount: '10ml' },
            { name: 'Salt', amount: '5g' },
            { name: 'White Pepper', amount: '2g' }
        ],
        text: `
            CHINESE EGG DROP SOUP
            Crack Egg 200g.
            Transfer into the Food Processor.
            Blend.
            Transfer into a Pot.
            Add to a Pot:
            Chicken Broth 1000ml.
            Boil for 60s.
            Add to the Pot:
            Salt 5g,
            White Pepper 2g,
            Sesame Oil 10ml.
            Boil for 30s.
            Pour the Liquid 300ml into a Deep Plate. Serve hot.

            SCALLION GARNISH
            Take Scallion 160g.
            Separate Scallion.
            Cut Scallion Leaves 40g into Quarters 5g.
            Garnish with Scallion Leaves.
        `
    },
    {
        name: 'Chinese Egg Drop Soup',
        ingredients: [
            { name: 'Onion', amount: '1' },
            { name: 'Garlic', amount: '1' },
            { name: 'Carrot', amount: '3' },
            { name: 'Chicken Leg', amount: '1' },
            { name: 'Egg', amount: '2' },
            { name: 'Scallion Leaves', amount: '2' },
            { name: 'Water', amount: '1000ml' },
            { name: 'Sesame Oil', amount: '10ml' },
            { name: 'Salt', amount: '13g' },
            { name: 'Black Pepper', amount: '7g' },
            { name: 'White Pepper', amount: '2g' }
        ],
        text: `
            CHINESE EGG DROP SOUP
            Add to a Pot:
            Water 1000ml,
            Salt 7g,
            Black Pepper 7g,
            Chicken Leg 180g,
            Carrot 210g,
            Onion 120g,
            Garlic 10g.
            Boil for 120s.
            Discard all vegetables and the Chicken Leg.
            Crack Egg 200g.
            Transfer into the Food Processor.
            Blend.
            Transfer into the Pot.
            Boil for 60s.
            Add to the Pot:
            Salt 5g,
            White Pepper 2g,
            Sesame Oil 10ml.
            Fry for 30s.
            Pour the Liquid 300ml into a Deep Plate. Serve hot.

            SCALLION GARNISH
            Take Scallion 160g.
            Separate Scallion.
            Cut Scallion Leaves 40g into Quarters 5g.
            Garnish with Scallion Leaves.
        `
    },
    {
        name: 'Orange Pork Stir-Fry',
        ingredients: [
            { name: 'Garlic', amount: '2' },
            { name: 'Carrot', amount: '1' },
            { name: 'Orange', amount: '1/2' },
            { name: 'Pork Chops', amount: '1' },
            { name: 'Whole Ginger', amount: '1' },
            { name: 'Water', amount: '15ml' },
            { name: 'Honey', amount: '5ml' },
            { name: 'Soy Sauce', amount: '10ml' },
            { name: 'Rice Wine', amount: '15ml' },
            { name: 'Peanut Oil', amount: '30ml' },
            { name: 'Starch', amount: '8g' }
        ],
        text: `
            SAUCE
            Add to the Food Processor:
            Orange 90g.
            Blend.
            Transfer into a Deep Plate.
            Add:
            Water 15ml,
            Soy Sauce 10ml,
            Honey 5ml.

            PORK CHOPS
            Add into a Bowl:
            Rice Wine 15ml,
            Starch 8g.
            Take Pork Chops 200g.
            Drizzle in Mixture.
            Cut Pork Chops into Pieces 40g.
            Add to the Pan:
            Peanut Oil 30ml,
            Pork Chops.
            Fry for 50s.
            Cut:
            Carrot 70g into Quarters ~18g,
            Garlic 20g into Halves 5g,
            Whole Ginger 60g into Quarters 15g.
            Add to the Pan:
            Garlic,
            Whole Ginger.
            Fry for 20s.
            Add to the Pan:
            Carrot,
            Sauce.
            Fry for 20s.
            Transfer everything into a Deep Plate. Serve hot.
        `
    },
    {
        name: 'Orange Pork Stir Fry with Brussels Sprouts',
        ingredients: [
            { name: 'Garlic', amount: '2' },
            { name: 'Carrot', amount: '1' },
            { name: 'Orange', amount: '1/2' },
            { name: 'Pork Chops', amount: '1' },
            { name: 'Whole Ginger', amount: '1' },
            { name: 'Brussels Sprouts', amount: '4' },
            { name: 'Scallion Leaves', amount: '2' },
            { name: 'Water', amount: '15ml' },
            { name: 'Honey', amount: '5ml' },
            { name: 'Soy Sauce', amount: '10ml' },
            { name: 'Rice Wine', amount: '15ml' },
            { name: 'Peanut Oil', amount: '30ml' },
            { name: 'Starch', amount: '8g' }
        ],
        text: `
            SAUCE
            Add to the Food Processor:
            Orange 90g.
            Blend.
            Add:
            Water 15ml,
            Soy Sauce 10ml,
            Honey 5ml.

            PORK CHOPS
            Add to a Bowl:
            Rice Wine 15ml,
            Starch 8g.
            Take Pork Chops 200g.
            Drizzle in Mixture.
            Cut Pork Chops into Pieces 40g.
            Add to the Pan:
            Peanut Oil 30ml,
            Pork Chops.
            Fry for 50s.
            Cut:
            Carrot 70g into Quarters ~18g,
            Garlic 20g into Halves 5g,
            Whole Ginger 60g into Quarters 15g,
            Brussels Sprouts 60g into Halves ~8g.
            Add to the Pan:
            Garlic,
            Whole Ginger,
            Brussels Sprouts.
            Fry for 20s.
            Add to a Pan:
            Carrot,
            Sauce.
            Boil for 20s.
            Transfer everything into a Deep Plate. Serve hot.

            SCALLION GARNISH
            Take Scallion 160g.
            Separate Scallion.
            Cut Scallion Leaves 40g into Quarters 5g.
            Garnish with Scallion Leaves.
        `
    },
    {
        name: 'Helles Märzenbier Roasted Pork',
        ingredients: [
            { name: 'Onion', amount: '1' },
            { name: 'Red Potato', amount: '1' },
            { name: 'Star Anise', amount: '3' },
            { name: 'Cinnamon Stick', amount: '2' },
            { name: 'Parsnip', amount: '1' },
            { name: 'Pork Shoulder', amount: '1' },
            { name: 'Chicken Broth', amount: '175ml' },
            { name: 'Helles Märzenbier', amount: '200ml' },
            { name: 'Elderflower Jelly', amount: '15ml' },
            { name: 'Dijon Mustard', amount: '5ml' },
            { name: 'Salt', amount: '12g' },
            { name: 'Black Pepper', amount: '8g' },
            { name: 'Mustard Seeds', amount: '12g' },
            { name: 'Cloves, ground', amount: '10g' }
        ],
        text: `
            PORK SHOULDER WITH VEGETABLES
            Take Pork Shoulder 375g.
            Season with:
            Cloves, ground 10g,
            Salt 6g.
            Bake for 90s.
            Transfer onto the Plate:
            Pork Shoulder.
            Season with Mustard Seeds 12g.
            Drizzle in Helles Märzenbier 40ml.
            Cut:
            Onion 120g into Quarters 30g,
            Red Potato 100g into Pieces ~12g,
            Parsnip 170g into Pieces 34g,
            Cinnamon Stick 8g into Halves 2g.
            Add to a Baking Tray:
            Helles Märzenbier 160ml,
            Star Anises 15g,
            Pork Shoulder,
            Onion,
            Red Potato,
            Parsnip,
            Cinnamon Stick.
            Bake for 30s.
            Transfer the ingredients onto the Plate.
            Reserve Mixture.

            GRAVY
            Transfer into a Deep Plate:
            Mixture,
            Chicken Broth 175ml,
            Elderflower Jelly 15ml,
            Dijon Mustard 5ml,
            Salt 6g,
            Black Pepper 8g.
            Add:
            Pork Shoulder,
            Onion,
            Red Potato,
            Parsnip.
            Serve hot.
        `
    },
    {
        name: 'Dunkles Märzenbier BBQ Chicken',
        ingredients: [
            { name: 'Chicken Leg', amount: '1' },
            { name: 'Rosemary Twig', amount: '2' },
            { name: 'Lemon Juice', amount: '15ml' },
            { name: 'Peanut Oil', amount: '30ml' },
            { name: 'Dunkles Mârzenbier', amount: '100ml' },
            { name: 'Düsseldorf Mustard', amount: '5ml' },
            { name: 'Salt', amount: '2g' },
            { name: 'Black Pepper', amount: '2g' },
            { name: 'Thyme, dried', amount: '2g' },
            { name: 'Basil, dried', amount: '2g' },
            { name: 'Garlic, dried', amount: '10g' }
        ],
        text: `
            MARINADE
            Add to a Bowl:
            Peanut Oil 30ml,
            Düsseldorf Mustard 5ml,
            Dunkles Märzenbier 100ml,
            Lemon Juice 15ml,
            Garlic, dried 10g,
            Salt 2g,
            Black Pepper 2g,
            Basil, dried 2g,
            Thyme, dried 2g.

            CHICKEN LEG
            Take Chicken Leg 180g.
            Drizzle in Marinade 25ml.
            Grill for 120s.
            Transfer onto a Plate. Serve hot.

            ROSEMARY GARNISH
            Garnish with Rosemary Twig 10g.
        `
    },
    {
        name: 'Currant-Glazed Pork Tenderloing with Red Cabbage and Thyme Dumplings',
        ingredients: [
            { name: 'Pork Tenderloin', amount: '1' },
            { name: 'Thyme Twig', amount: '2' },
            { name: 'Red Cabbage', amount: '1/7' },
            { name: 'Potato Dumplings', amount: '5' },
            { name: 'Water', amount: '1000ml' },
            { name: 'Olive Oil', amount: '' },
            { name: 'Bavarian Beer Vinegar', amount: '15ml' },
            { name: 'Redcurrant Jelly', amount: '50ml' },
            { name: 'Salt', amount: '28g' },
            { name: 'Black Pepper', amount: '8g' }
        ],
        text: `
            PORK TENDERLOIN
            Take Pork Tenderloin 250g.
            Season with:
            Salt 8g,
            Black Pepper 8g.
            Drizzle in Olive Oil 15ml.
            Transfer onto a Baking Tray.
            Bake for 100s.
            Add to a bowl:
            Redcurrant Jelly 35ml,
            Bavarian Beer Vinegar 15ml.
            Transfer onto the Plate:
            Pork Tenderloin.
            Drizzle in Mixture 50ml.
            Bake for 30s.
            Cut Pork Tenderloin into Pieces 50g.
            Transfer onto the Plate. Serve hot.

            RED CABBAGE
            Cut Red Cabbage 100g into Pieces 20g.
            Add to a Pan:
            Redcurrant Jelly 15ml,
            Red Cabbage.
            Fry for 40s.
            Transfer onto the Plate. Serve hot.

            POTATO DUMPLINGS
            Add to a Pot:
            Water 1000ml,
            Salt 20g,
            Potato Dumplings 200g.
            Boil for 90s.
            Transfer onto a Plate. Serve hot.

            THYME GARNISH
            Garnish with Thyme Twig 10g.
        `
    },
    {
        name: 'Simple Chicken Pumpkin Stew',
        ingredients: [
            { name: 'Chicken Leg', amount: '1' },
            { name: 'Pumpkin', amount: '~1/16' },
            { name: 'Sunflower Oil', amount: '15ml' }
        ],
        text: `
            SIMPLE CHICKEN PUMPKIN STEW
            Add to a Paella Pan:
            Sunflower Oil 15ml,
            Chicken Leg 180g.
            Fry for 20s.
            Cut Pumpkin 300g into Pieces 50g.
            Add to the Paella Pan:
            Pumpkin.
            Fry for 100s.
            Transfer into a Deep Plate:
            Mixture 15ml,
            Pumpkin,
            Chicken Leg.
            Serve hot.
        `
    },
    {
        name: 'Chicken Pumpkin Stew',
        ingredients: [
            { name: 'Chicken Leg', amount: '1' },
            { name: 'Pumpkin', amount: '~1/16' },
            { name: 'Red Bell Pepper', amount: '1/2' },
            { name: 'Sunflower Oil', amount: '15ml' },
            { name: 'Chicken Broth', amount: '200ml' },
            { name: 'Clarified Butter', amount: '10ml' },
            { name: 'Garlic, dried', amount: '5g' },
            { name: 'Starch', amount: '8g' }
        ],
        text: `
            CHICKEN PUMPKIN STEW
            Add to a Paella Pan:
            Sunflower Oil 15ml,
            Chicken Leg 180g.
            Fry for 20s.
            Cut Pumpkin 300g into Pieces 50g.
            Add to the Paella Pan:
            Pumpkin.
            Fry for 20s.
            Cut Red Bell Pepper 120g into Slices 30g.
            Add to the Paella Pan:
            Garlic, dried 5g,
            Red Bell Pepper.
            Fry for 30s.
            Add to the Paella Pan:
            Chicken Broth 200ml.
            Boil for 60s.
            Transfer into a Deep Plate:
            Mixture 215ml,
            Clarified Butter 10ml,
            Starch 8g,
            Red Bell Pepper,
            Pumpkin,
            Chicken Leg.
            Serve hot.
        `
    },
    {
        name: 'Chicken Pumpkin Stew with Tomatoes',
        ingredients: [
            { name: 'Tomato', amount: '1' },
            { name: 'Onion', amount: '1' },
            { name: 'Chicken Leg', amount: '1' },
            { name: 'Pumpkin', amount: '~1/16' },
            { name: 'Red Bell Pepper', amount: '1/2' },
            { name: 'Rosemary Twig', amount: '2' },
            { name: 'Sunflower Oil', amount: '15ml' },
            { name: 'Chicken Broth', amount: '200ml' },
            { name: 'Clarified Butter', amount: '10ml' },
            { name: 'Salt', amount: '3g' },
            { name: 'Smoked Pepper, powder', amount: '10g' },
            { name: 'Garlic, dried', amount: '5g' },
            { name: 'Starch', amount: '8g' }
        ],
        text: `
            CHICKEN PUMPKIN STEW WITH TOMATOES
            Add to a Paella Pan:
            Sunflower Oil 15ml,
            Chicken Leg 180g.
            Fry for 20s.
            Cut Pumpkin 300g into Pieces 50g.
            Add to the Paella Pan:
            Pumpkin.
            Fry for 20s.
            Cut Red Bell Pepper 120g into Slices 30g.
            Add to the Paella Pan:
            Garlic, dried 5g,
            Red Bell Pepper.
            Fry for 30s.
            Cut:
            Onion 120g into Quaters 30g,
            Tomato 120g into Pieces 15g.
            Add to the Paella Pan:
            Chicken Broth 200ml,
            Smoked Pepper, powder 10g,
            Salt 3g,
            Onion,
            Tomato.
            Boil for 60s.
            Transfer into a Deep Plate:
            Mixture 215ml,
            Clarified Butter 10ml,
            Starch 8g,
            Onion,
            Tomato,
            Red Bell Pepper,
            Pumpkin,
            Chicken Leg.
            Serve hot.

            ROSEMARY GARNISH
            Garnish with Rosemary Twig 10g.
        `
    },
    {
        name: 'Roasted Christmas Ham',
        ingredients: [
            { name: 'Orange', amount: '1' },
            { name: 'Rosemary Twig', amount: '1' },
            { name: 'Ham', amount: '1' },
            { name: 'Honey', amount: '120ml' },
            { name: 'White Wine', amount: '200ml' },
            { name: 'Black Pepper', amount: '18g' },
            { name: 'Allspice, powder', amount: '15g' },
            { name: 'Bay Leaf, dried', amount: '8g' },
            { name: 'Garlic, dried', amount: '20g' },
            { name: 'Cloves, ground', amount: '50g' }
        ],
        text: `
            ROASTED HAM
            Take Ham 2400g.
            Season with:
            Garlic, dried 20g,
            Bay Leaf, dried 8g,
            Allspice, powder 15g,
            Black Pepper 18g.
            Drizzle in:
            Honey 120ml,
            White Wine 200ml.
            Transfer onto the Baking Tray:
            Ham.
            Bake for 100s.
            Season with Cloves, ground 50g.
            Cut Ham into Pieces 150g.
            Each serving consists of Ham 300g(2). Transfer onto a Plate:
            Ham.

            A SLICE OF ORANGE
            Cut Orange 180g into Pieces 30g.
            Each Serving consists of Orange 30g(1). Transger onto a Plate:
            Orange.

            ROSEMARY GARNISH
            Garnish with Rosemary Twig 5g.
        `
    },
    {
        name: 'Roasted Christmas Ham with Garlic Fried Potatoes',
        ingredients: [
            { name: 'Potato', amount: '1' },
            { name: 'Orange', amount: '1' },
            { name: 'Rosemary Twig', amount: '1' },
            { name: 'Ham', amount: '1' },
            { name: 'Honey', amount: '120ml' },
            { name: 'White Wine', amount: '200ml' },
            { name: 'Olive Oil', amount: '20ml' },
            { name: 'Salt', amount: '2g' },
            { name: 'Black Pepper', amount: '20g' },
            { name: 'Allspice, powder', amount: '15g' },
            { name: 'Bay Leaf, dried', amount: '8g' },
            { name: 'Garlic, dried', amount: '24g' },
            { name: 'Cloves, ground', amount: '50g' }
        ],
        text: `
            ROASTED HAM
            Take Ham 2400g.
            Season with:
            Garlic, dried 20g,
            Bay Leaf, dried 8g,
            Allspice, powder 15g,
            Black Pepper 18g.
            Drizzle in:
            Honey 120ml,
            White Wine 200ml.
            Transfer onto the Baking Tray:
            Ham.
            Bake for 100s.
            Season with Cloves, ground 50g.
            Cut Ham into Pieces 150g.
            Each serving consists of Ham 300g(2). Transfer onto a Plate:
            Ham.

            GARLIC FRIED POTATOES
            Take Potato 150g.
            Season with:
            Salt 2g,
            Garlic, dried 4g,
            Black Pepper 2g.
            Cut Potato into Quarters ~38g.
            Add to the Pan:
            Olive Oil 20ml,
            Potato.
            Fry for 30s.
            Transfer onto a Plate:
            Potato.
            Serve warm.

            A SLICE OF ORANGE
            Cut Orange 180g into Pieces 30g.
            Each Serving consists of Orange 30g(1). Transger onto a Plate:
            Orange.

            ROSEMARY GARNISH
            Garnish with Rosemary Twig 5g.
        `
    },
    {
        name: 'Lemon Chicken Breasts',
        ingredients: [
            { name: 'Garlic', amount: '6' },
            { name: 'Lemon', amount: '1' },
            { name: 'Thyme Twig', amount: '2' },
            { name: 'Chicken Breast', amount: '1' },
            { name: 'Lemon Juice', amount: '10ml' },
            { name: 'White Wine', amount: '10ml' },
            { name: 'Olive Oil', amount: '50ml' },
            { name: 'Salt', amount: '5g' },
            { name: 'Black Pepper', amount: '5g' },
            { name: 'Oregano, dried', amount: '5g' }
        ],
        text: `
            LEMON CHICKEN BREASTS
            Add to a Pot:
            Olive Oil 50ml,
            White Wine 10ml,
            Lemon Juice 10ml,
            Oregano, dried 5g,
            Thyme Twig 10g,
            Garlic 60g.
            Fry for 60s.
            Take Chicken Breast 240g.
            Season with:
            Salt 5g,
            Black Pepper 5g.
            Cut Lemon 80g into Pieces 16g.
            Add to a Baking Tray:
            Mixture 70ml,
            Chicken Breast,
            Lemon.
            Fry for 90s.
            Transfer into a Deep Plate:
            Mixture 70ml,
            Chicken Breast,
            Lemon.
            Serve hot.
        `
    },
    {
        name: 'Lemon Chicken Breasts with Fruit Salad',
        ingredients: [
            { name: 'Garlic', amount: '6' },
            { name: 'Apple', amount: '1' },
            { name: 'Orange', amount: '1/2' },
            { name: 'Strawberry', amount: '3' },
            { name: 'Lemon', amount: '1' },
            { name: 'Thyme Twig', amount: '2' },
            { name: 'Chicken Breast', amount: '1' },
            { name: 'Lemon Juice', amount: '10ml' },
            { name: 'White Wine', amount: '10ml' },
            { name: 'Olive Oil', amount: '50ml' },
            { name: 'Salt', amount: '5g' },
            { name: 'Black Pepper', amount: '5g' },
            { name: 'Oregano, dried', amount: '5g' }
        ],
        text: `
            LEMON CHICKEN BREASTS
            Add to a Pot:
            Olive Oil 50ml,
            White Wine 10ml,
            Lemon Juice 10ml,
            Oregano, dried 5g,
            Thyme Twig 10g,
            Garlic 60g.
            Fry for 60s.
            Take Chicken Breast 240g.
            Season with:
            Salt 5g,
            Black Pepper 5g.
            Cut Lemon 80g into Pieces 16g.
            Add to a Baking Tray:
            Mixture 70ml,
            Chicken Breast,
            Lemon.
            Fry for 90s.
            Transfer into a Deep Plate:
            Mixture 70ml,
            Chicken Breast,
            Lemon.
            Serve hot.

            FRUIT SALAD
            Cut:
            Apple 150g into Pieces 25g,
            Orange 90g into Pieces 15g.
            Add to a Bowl:
            Strawberry 30g,
            Apple,
            Orange.
            Serve Cool.
        `
    },
    {
        name: 'Lemon Tart',
        ingredients: [
            { name: 'Banana', amount: '1/2' },
            { name: 'Orange', amount: '1/3' },
            { name: 'Strawberry', amount: '6' },
            { name: 'Lemon', amount: '1' },
            { name: 'Tart', amount: '1' },
            { name: 'Honey', amount: '20ml' },
            { name: 'Coconut Milk', amount: '180ml' },
            { name: 'Brown Sugar', amount: '5g' }
        ],
        text: `
            TART
            Take Tart 260g.
            Bake for 40s.
            Add to the Food Processor:
            Coconut Milk 180ml,
            Honey 20ml,
            Brown Sugar 5g.
            Blend.
            Cut:
            Banana 100g into Pieces 20g,
            Lemon 80g into Pieces 10g,
            Orange 60g into Quarters 15g,
            Strawberry 60g into Halves 5g.
            Transfer into the Tart:
            Mixture 200ml,
            Lemon,
            Banana,
            Orange,
            Strawberry.
            Serve cool.
        `
    },
    {
        name: 'Mango Tart',
        ingredients: [
            { name: 'Banana', amount: '1/2' },
            { name: 'Orange', amount: '1/3' },
            { name: 'Strawberry', amount: '6' },
            { name: 'Lemon', amount: '1' },
            { name: 'Tart', amount: '1' },
            { name: 'Honey Mango', amount: '1/2' },
            { name: 'Honey', amount: '20ml' },
            { name: 'Coconut Milk', amount: '180ml' },
            { name: 'Brown Sugar', amount: '5g' }
        ],
        text: `
            TART
            Take Tart 260g.
            Bake for 40s.
            Add to the Food Processor:
            Coconut Milk 180ml,
            Honey 20ml,
            Brown Sugar 5g.
            Blend.
            Cut:
            Lemon 80g into Pieces 10g,
            Banana 100g into Pieces 20g,
            Orange 60g into Quarters 15g,
            Strawberry 60g into Halves 5g,
            Honey Mango 100g into Pieces ~14g.
            Transfer into the Tart:
            Mixture 200ml,
            Lemon,
            Banana,
            Orange,
            Strawberry,
            Honey Mango.
            Serve cool.
        `
    },
    {
        name: 'Brussels Sprouts with Pancetta & Chicken Wings',
        ingredients: [
            { name: 'Brussels Sprouts', amount: '8' },
            { name: 'Chicken Wings', amount: '2' },
            { name: 'Pancetta', amount: '~1/7' },
            { name: 'Water', amount: '500ml' },
            { name: 'Olive Oil', amount: '20ml' },
            { name: 'Salt', amount: '10g' },
            { name: 'Black Pepper', amount: '11gg' },
            { name: 'Sweet Bell Pepper, powder', amount: '10g' }
        ],
        text: `
            BRUSSELS SPROUTS
            Add to a Pot:
            Water 500ml,
            Salt 5g,
            Brussels Sprouts 120g.
            Boil for 50s.
            Cut Pancetta 60g into Pieces 10g.
            Add to a Pan:
            Olive Oil 20ml,
            Black Pepper 5g,
            Salt 5g,
            Pancetta.
            Fry for 40s.
            Add to the Pan:
            Brussels Sprouts.
            Fry for 40s.
            Transfer onto a Plate:
            Brussels Sprouts,
            Pancetta.
            Serve hot.

            CHICKEN WINGS
            Take Chicken Wings 120g.
            Season with:
            Sweet Bell Pepper, powder 10g,
            Black Pepper 6g.
            Add to a Baking Tray:
            Chicken Wings.
            Bake for 50s.
            Transfer onto a Plate. Serve hot.
        `
    },
    {
        name: 'Brussels Sprouts with Pancetta & Grilled Swordfish',
        ingredients: [
            { name: 'Brussels Sprouts', amount: '8' },
            { name: 'Swordfish', amount: '1' },
            { name: 'Pancetta', amount: '~1/7' },
            { name: 'Water', amount: '500ml' },
            { name: 'Lemon Juice', amount: '10ml' },
            { name: 'Olive Oil', amount: '20ml' },
            { name: 'Salt', amount: '15g' },
            { name: 'Black Pepper', amount: '10g' },
            { name: 'Garlic, dried', amount: '5g' }
        ],
        text: `
            BRUSSELS SPROUTS
            Add to a Pot:
            Water 500ml,
            Salt 5g,
            Brussels Sprouts 120g.
            Boil for 50s.
            Cut Pancetta 60g into Pieces 10g.
            Add to a Pan:
            Olive Oil 20ml,
            Black Pepper 5g,
            Salt 5g,
            Pancetta.
            Fry for 40s.
            Add to the Pan:
            Brussels Sprouts.
            Fry for 40s.
            Transfer onto a Plate:
            Brussels Sprouts,
            Pancetta.
            Serve hot.

            GRILLED SWORDFISH
            Take Swordfish 250g.
            Season with:
            Garlic, dried 5g,
            Salt 5g,
            Black Pepper 5g.
            Drizzle in Lemon Juice 10ml.
            Grill for 75s each side.
            Transfer onto a Plate. Serve hot.
        `
    },
    {
        name: 'Fiesta Corn with Tomatoes',
        ingredients: [
            { name: 'Tomato', amount: '1' },
            { name: 'Onion', amount: '1' },
            { name: 'Cob of Corn', amount: '1' },
            { name: 'Red Bell Pepper', amount: '1' },
            { name: 'Jalapeño', amount: '1' },
            { name: 'Water', amount: '1000ml' },
            { name: 'Lime Juice', amount: '20ml' },
            { name: 'Avocado Oil', amount: '10ml' },
            { name: 'Olive Oil', amount: '10ml' },
            { name: 'Salt', amount: '20g' },
            { name: 'Black Pepper', amount: '10g' },
            { name: 'Chili Flakes', amount: '5g' },
            { name: 'Garlic, dried', amount: '5g' }
        ],
        text: `
            FIESTA CORN WITH TOMATOES
            Add to a Bowl:
            Lime Juice 20ml,
            Olive Oil 10ml,
            Avocado Oil 10ml,
            Garlic, dried 5g,
            Chili Flakes 5g,
            Salt 10g,
            Black Pepper 10g.
            Transfer onto a Plate:
            Cob of Corn 180g,
            Tomato 120g,
            Onion 120g,
            Red Bell Pepper 240g,
            Jalapeño 40g.
            Drizzle in Mixture 40ml.
            Add to a Pot:
            Water 1000ml,
            Salt 10g,
            Cob of Corn.
            Boil for 100s.
            Cut:
            Tomato into Quarters 30g,
            Onion into Pieces 20g,
            Red Bell Pepper into Pieces 30g,
            Jalapeño into Quarters 10g,
            Cob of Corn into Pieces 20g.
            Transfer everything into a Plate. Serve cool.
        `
    },
    {
        name: 'Fiesta Corn with Tomatoes & Spiced Chicken',
        ingredients: [
            { name: 'Tomato', amount: '1' },
            { name: 'Onion', amount: '1' },
            { name: 'Cob of Corn', amount: '1' },
            { name: 'Red Bell Pepper', amount: '1' },
            { name: 'Jalapeño', amount: '1' },
            { name: 'Chicken Breast', amount: '1' },
            { name: 'Water', amount: '1000ml' },
            { name: 'Lime Juice', amount: '20ml' },
            { name: 'Avocado Oil', amount: '10ml' },
            { name: 'Olive Oil', amount: '30ml' },
            { name: 'Sesame Oil', amount: '5ml' },
            { name: 'Salt', amount: '25g' },
            { name: 'Black Pepper', amount: '15g' },
            { name: 'Chili Flakes', amount: '10g' },
            { name: 'Garlic, dried', amount: '5g' }
        ],
        text: `
            FIESTA CORN WITH TOMATOES
            Add to a Bowl:
            Lime Juice 20ml,
            Olive Oil 10ml,
            Avocado Oil 10ml,
            Garlic, dried 5g,
            Chili Flakes 5g,
            Salt 10g,
            Black Pepper 10g.
            Transfer onto a Plate:
            Cob of Corn 180g,
            Tomato 120g,
            Onion 120g,
            Red Bell Pepper 240g,
            Jalapeño 40g.
            Drizzle in Mixture 40ml.
            Add to a Pot:
            Water 1000ml,
            Salt 10g,
            Cob of Corn.
            Boil for 100s.
            Cut:
            Tomato into Quarters 30g,
            Onion into Pieces 20g,
            Red Bell Pepper into Pieces 30g,
            Jalapeño into Quarters 10g,
            Cob of Corn into Pieces 20g.
            Transfer everything into a Plate. Serve cool.

            SPICY CHICKEN
            Take Chicken Breast 240g.
            Season with:
            Black Pepper 5g,
            Salt 5g,
            Chili Flakes 5g.
            Cut Chicken Breast into Quarters 60g.
            Add to the Pan:
            Sesame Oil 5ml,
            Olive Oil 20ml,
            Chicken Breast.
            Fry for 90s.
            Transfer into a Deep Plate:
            Chicken Breast.
            Serve hot.
        `
    },
    {
        name: 'Sausage & Egg Muffin',
        ingredients: [
            { name: 'Cheddar', amount: '~1/7' },
            { name: 'Egg', amount: '1' },
            { name: 'English Muffin', amount: '2' },
            { name: 'Pork Breakfast Sausage', amount: '1' },
            { name: 'Salt', amount: '5g' },
            { name: 'Black Pepper', amount: '5g' }
        ],
        text: `
            SAUSAGE & EGG MUFFIN
            Take Pork Breakfast Sausage 112g.
            Season with:
            Salt 5g,
            Black Pepper 5g.
            Grill for 80s.
            Add to a Baking Tray:
            English Muffin 100g.
            Bake for 60s.
            Crack Egg into the Pan.
            Fry for 35s.
            Add:
            English Muffin,
            Pork Breakfast Sausage,
            Cheddar 20g,
            Egg.
            Serve warm.
        `
    },
    {
        name: 'Sausage & Egg Muffin with Bacon',
        ingredients: [
            { name: 'Bacon', amount: '1' },
            { name: 'Cheddar', amount: '~1/7' },
            { name: 'Egg', amount: '1' },
            { name: 'English Muffin', amount: '2' },
            { name: 'Pork Breakfast Sausage', amount: '1' },
            { name: 'Barbecue Sauce', amount: '10ml' },
            { name: 'Salt', amount: '5g' },
            { name: 'Black Pepper', amount: '5g' }
        ],
        text: `
            SAUSAGE & EGG MUFFIN WITH BACON
            Take Pork Breakfast Sausage 112g.
            Season with:
            Salt 5g,
            Black Pepper 5g.
            Grill for 80s.
            Add to the Pan:
            Bacon 60g.
            Fry for 40s.
            Add to a Baking Tray:
            English Muffin 100g.
            Bake for 60s.
            Crack Egg into the Pan.
            Fry for 35s.
            Transfer onto a Plate:
            Pork Breakfast Sausage,
            Bacon.
            Drizzle in Barbecue Sauce 10ml.
            Add:
            English Muffin,
            Cheddar 20g,
            Egg,
            Pork Breakfast Sausage,
            Bacon,
            Serve warm.
        `
    },
    {
        name: 'Melting Potatoes',
        ingredients: [
            { name: 'Garlic', amount: '2' },
            { name: 'Potato', amount: '2' },
            { name: 'Rosemary Twig', amount: '1' },
            { name: 'Sunflower Oil', amount: '10ml' },
            { name: 'Chicken Broth', amount: '250ml' },
            { name: 'Clarified Butter', amount: '40ml' },
            { name: 'Salt', amount: '10g' },
            { name: 'Black Pepper', amount: '10g' }
        ],
        text: `
            MELTING POTATOES
            Take Potato 300g.
            Season with:
            Salt 10g,
            Black Pepper 10g.
            Cut Potato into Pieces 30g.
            Add to the Pan:
            Sunflower Oil 10ml,
            Clarified Butter 40ml,
            Potato.
            Fry for 20s.
            Add to the Pan:
            Chicken Broth 250ml,
            Garlic 50g,
            Rosemary Twig 5g.
            Boil for 40s.
            Transfer onto a Plate:
            Potato.
            Serve hot.
        `
    },
    {
        name: 'Melting Potatoes with Egg de Provence',
        ingredients: [
            { name: 'Garlic', amount: '2' },
            { name: 'Potato', amount: '2' },
            { name: 'Rosemary Twig', amount: '1' },
            { name: 'Egg', amount: '1' },
            { name: 'Sunflower Oil', amount: '10ml' },
            { name: 'Chicken Broth', amount: '250ml' },
            { name: 'Clarified Butter', amount: '40ml' },
            { name: 'Salt', amount: '10g' },
            { name: 'Black Pepper', amount: '10g' },
            { name: 'Herbs de Provence, dried', amount: '5g' }
        ],
        text: `
            MELTING POTATOES
            Take Potato 300g.
            Season with:
            Salt 10g,
            Black Pepper 10g.
            Cut Potato into Pieces 30g.
            Add to the Pan:
            Sunflower Oil 10ml,
            Clarified Butter 40ml,
            Potato.
            Fry for 20s.
            Add to the Pan:
            Chicken Broth 250ml,
            Garlic 50g,
            Rosemary Twig 5g.
            Boil for 40s.
            Transfer onto a Plate:
            Potato.
            Serve hot.

            EGG DE PROVENCE
            Crack Egg into the Pan.
            Fry for 35s.
            Season with Herbs de Provence, dried 5g.
            Transfer onto a Plate. Serve hot.
        `
    },
    {
        name: 'Grilled Buffalo Wings',
        ingredients: [
            { name: 'Chicken Wing', amount: '2' },
            { name: 'Honey', amount: '10ml' },
            { name: 'Barbecue Sauce', amount: '20ml' },
            { name: 'Clarified Butter', amount: '100ml' },
            { name: 'Wine Vinegar', amount: '20ml' },
            { name: 'Salt', amount: '20g' },
            { name: 'Black Pepper', amount: '20g' },
            { name: 'Garlic, dried', amount: '20g' }
        ],
        text: `
            GRILLED BUFFALO WINGS
            Add to a Pot:
            Clarified Butter 100ml.
            Fry for 30s.
            Add to the Pot:
            Barbecue Sauce 20ml,
            Wine Vinegar 20ml,
            Honey 10ml.
            Fry for 30s.
            Take Buffalo Wings 240g.
            Season with:
            Salt 20g,
            Black Pepper 20g,
            Garlic, dried 20g.
            Add to a Baking Tray:
            Mixture 150ml,
            Chicken Wings.
            Fry for 20s.
            Take Chicken Wings.
            Grill for 30s each side.
            Transfer onto a Plate. Serve hot.
        `
    },
    {
        name: 'Grilled Buffalo Wings with French Fries',
        ingredients: [
            { name: 'Potato', amount: '1' },
            { name: 'Chicken Wing', amount: '2' },
            { name: 'Honey', amount: '10ml' },
            { name: 'Ketchup', amount: '9ml' },
            { name: 'Barbecue Sauce', amount: '20ml' },
            { name: 'Clarified Butter', amount: '100ml' },
            { name: 'Wine Vinegar', amount: '20ml' },
            { name: 'Salt', amount: '20g' },
            { name: 'Black Pepper', amount: '20g' },
            { name: 'Garlic, dried', amount: '20g' }
        ],
        text: `
            GRILLED BUFFALO WINGS
            Add to a Pot:
            Clarified Butter 100ml.
            Fry for 30s.
            Add to the Pot:
            Barbecue Sauce 20ml,
            Wine Vinegar 20ml,
            Honey 10ml.
            Fry for 30s.
            Take Buffalo Wings 240g.
            Season with:
            Salt 20g,
            Black Pepper 20g,
            Garlic, dried 20g.
            Add to a Baking Tray:
            Mixture 150ml,
            Chicken Wings.
            Fry for 20s.
            Take Chicken Wings.
            Grill for 30s each side.
            Transfer onto a Plate. Serve hot.

            FRENCH FRIES
            Cut Potato 150g into Pieces 15g.
            Deep fry for 30s.
            Drizzle in Ketchup 9ml.
            Transfer onto a Plate. Serve hot.
        `
    },
    {
        name: 'Spicy Sparkling Pork',
        ingredients: [
            { name: 'Onion', amount: '2' },
            { name: 'Chili Pepper', amount: '6' },
            { name: 'Pork Shoulder', amount: '1' },
            { name: 'Olive Oil', amount: '50ml' },
            { name: 'Cola', amount: '200ml' },
            { name: 'Salt', amount: '5g' },
            { name: 'Black Pepper', amount: '5g' },
            { name: 'Brown Sugar', amount: '20g' }
        ],
        text: `
            SPICY SPARKLING PORK
            Take Pork Shoulder 375g.
            Season with:
            Salt 5g,
            Black Pepper 5g.
            Cut:
            Onion 240g into Quarters 30g,
            Chili Pepper 180g into Halves 15g,
            Pork Shoulder into Slices 125g.
            Add to a Pot:
            Olive Oil 50ml,
            Onion,
            Pork Shoulder,
            Chili Pepper.
            Fry for 60s.
            Add to a Baking Tray:
            Cola 200ml,
            Brown Sugar 20g,
            Pork Shoulder.
            Boil for 60s.
            Transfer onto a Plate:
            Onion,
            Pork Shoulder.
            Serve hot.
        `
    },
    {
        name: 'Spicy Sparkling Pork with Spring Salad',
        ingredients: [
            { name: 'Tomato', amount: '1' },
            { name: 'Cucumber', amount: '1' },
            { name: 'Onion', amount: '2' },
            { name: 'Radish', amount: '2' },
            { name: 'Apple', amount: '1' },
            { name: 'Chili Pepper', amount: '6' },
            { name: 'Pork Shoulder', amount: '1' },
            { name: 'Lemon Juice', amount: '20ml' },
            { name: 'Olive Oil', amount: '50ml' },
            { name: 'Cola', amount: '200ml' },
            { name: 'Salt', amount: '5g' },
            { name: 'Black Pepper', amount: '5g' },
            { name: 'Brown Sugar', amount: '20g' }
        ],
        text: `
            SPICY SPARKLING PORK
            Take Pork Shoulder 375g.
            Season with:
            Salt 5g,
            Black Pepper 5g.
            Cut:
            Onion 240g into Quarters 30g,
            Chili Pepper 180g into Halves 15g,
            Pork Shoulder into Slices 125g.
            Add to a Pot:
            Olive Oil 50ml,
            Onion,
            Pork Shoulder,
            Chili Pepper.
            Fry for 60s.
            Add to a Baking Tray:
            Cola 200ml,
            Brown Sugar 20g,
            Pork Shoulder.
            Boil for 60s.
            Transfer onto a Plate:
            Onion,
            Pork Shoulder.
            Serve hot.

            SPRING SALAD
            Transfer onto a Plate:
            Tomato 120g,
            Cucumber 160g,
            Radish 30g,
            Apple 150g.
            Drizzle in Lemon Juice 20ml.
            Cut:
            Tomato into Pieces 20g,
            Cucumber into Pieces 20g,
            Radis into Halves ~8g,
            Apple into Pieces 30g.
            Transfer everything into a Plate. Serve cool.
        `
    },
    {
        name: 'Mango Salsa Chicken',
        ingredients: [
            { name: 'Penne', amount: '10' },
            { name: 'Chicken Breast', amount: '1' },
            { name: 'Honey Mango', amount: '1/4' },
            { name: 'Water', amount: '1000ml' },
            { name: 'Salsa', amount: '200ml' },
            { name: 'Salt', amount: '15g' },
            { name: 'Black Pepper', amount: '10g' }
        ],
        text: `
            MANGO SALSA CHICKEN
            Take Chicken Breast 240g.
            Season with:
            Salt 5g,
            Black Pepper 5g.
            Cut:
            Honey Mango 50g into Pieces 10g,
            Chicken Breast into Pieces 30g.
            Add to the Pan:
            Salsa 200ml,
            Chicken Breast.
            Boil for 60s.
            Transfer into a Deep Plate:
            Mixture 200ml,
            Chicken Breast,
            Honey Mango.
            Serve cold.

            PENNE
            Add to a Pot:
            Water 1000ml,
            Salt 10g,
            Penne 100g.
            Boil for 60s.
            Transfer into a Deep Plate. Serve hot.
        `
    },
    {
        name: 'Mango Salsa Chicken with French Fries',
        ingredients: [
            { name: 'Potato', amount: '1' },
            { name: 'Chicken Breast', amount: '1' },
            { name: 'Honey Mango', amount: '1/4' },
            { name: 'Ketchup', amount: '9ml' },
            { name: 'Salsa', amount: '200ml' },
            { name: 'Salt', amount: '5g' },
            { name: 'Black Pepper', amount: '5g' }
        ],
        text: `
            MANGO SALSA CHICKEN
            Take Chicken Breast 240g.
            Season with:
            Salt 5g,
            Black Pepper 5g.
            Cut:
            Honey Mango 50g into Pieces 10g,
            Chicken Breast into Pieces 30g.
            Add to the Pan:
            Salsa 200ml,
            Chicken Breast.
            Boil for 60s.
            Transfer into a Deep Plate:
            Mixture 200ml,
            Chicken Breast,
            Honey Mango.
            Serve cold.

            FRENCH FRIES
            Cut Potato 150g into Pieces 15g.
            Deep fry for 30s.
            Drizzle in Ketchup 9ml.
            Transfer into a Deep Plate. Serve hot.
        `
    },
    {
        name: 'Chicken Tortellini Soup',
        ingredients: [
            { name: 'Onion', amount: '1' },
            { name: 'Carrot', amount: '2' },
            { name: 'Thyme Twig', amount: '3' },
            { name: 'Bay Leaf, fresh', amount: '1' },
            { name: 'Chicken Breast', amount: '1' },
            { name: 'Tortellini', amount: '10' },
            { name: 'Water', amount: '1000ml' },
            { name: 'Red Wine', amount: '50ml' },
            { name: 'Chicken Broth', amount: '1000ml' },
            { name: 'Lemon Juice', amount: '20ml' },
            { name: 'Olive Oil', amount: '15ml' },
            { name: 'Salt', amount: '10g' },
            { name: 'Black Pepper', amount: '5g' },
            { name: 'Sweet Bell Pepper, powder', amount: '5g' }
        ],
        text: `
            CHICKEN SOUP
            Take Chicken Breast 240g.
            Season with:
            Sweet Bell Pepper, powder 5g,
            Salt 5g,
            Black Pepper 5g.
            Cut:
            Carrot 140g into Pieces 14g,
            Onion 120g into Pieces 15g.
            Add ot the Pan:
            Olive Oil 15ml,
            Chicken Breast,
            Carrot,
            Onion.
            Fry for 30s.
            Add to a Pot:
            Chicken Broth 1000ml,
            Lemon Juice 20ml,
            Red Wine 50ml,
            Bay leaf, fresh 3g,
            Thyme Twig 15g.
            Boil for 30s.
            Add to the Pot:
            Chicken Breast,
            Carrot,
            Onion.
            Boil for 40s.
            Cut Chicken Breast into Pieces 20g.
            Each serving consists of Mixture 300ml, Chicken Breast 60g(3), Carrot 42g(3), Onion 30g(2). Serve hot.

            TORTELLINI
            Add to a Pot:
            Water 1000ml,
            Salt 5g,
            Tortellini 150g.
            Boil for 35s.
            Transfer into a Deep Plate. Serve hot.
        `
    },
    {
        name: 'Chicken Tortellini Soup with Croutons',
        ingredients: [
            { name: 'Onion', amount: '1' },
            { name: 'Carrot', amount: '2' },
            { name: 'Bread', amount: '1/6' },
            { name: 'Thyme Twig', amount: 3'' },
            { name: 'Bay Leaf, fresh', amount: '1' },
            { name: 'Chicken Breast', amount: '1' },
            { name: 'Tortellini', amount: '10' },
            { name: 'Water', amount: '1000ml' },
            { name: 'Red Wine', amount: '50ml' },
            { name: 'Chicken Broth', amount: '1000ml' },
            { name: 'Lemon Juice', amount: '20ml' },
            { name: 'Olive Oil', amount: '35ml' },
            { name: 'Salt', amount: '10g' },
            { name: 'Black Pepper', amount: '5g' },
            { name: 'Sweet Bell Pepper, powder', amount: '5g' },
            { name: 'Garlic, dried', amount: '5g' }
        ],
        text: `
            CHICKEN SOUP
            Take Chicken Breast 240g.
            Season with:
            Sweet Bell Pepper, powder 5g,
            Salt 5g,
            Black Pepper 5g.
            Cut:
            Carrot 140g into Pieces 14g,
            Onion 120g into Pieces 15g.
            Add ot the Pan:
            Olive Oil 15ml,
            Chicken Breast,
            Carrot,
            Onion.
            Fry for 30s.
            Add to a Pot:
            Chicken Broth 1000ml,
            Lemon Juice 20ml,
            Red Wine 50ml,
            Bay leaf, fresh 3g,
            Thyme Twig 15g.
            Boil for 30s.
            Add to the Pot:
            Chicken Breast,
            Carrot,
            Onion.
            Boil for 40s.
            Cut Chicken Breast into Pieces 20g.
            Each serving consists of Mixture 300ml, Chicken Breast 60g(3), Carrot 42g(3), Onion 30g(2). Serve hot.

            TORTELLINI
            Add to a Pot:
            Water 1000ml,
            Salt 5g,
            Tortellini 150g.
            Boil for 35s.
            Transfer into a Deep Plate. Serve hot.

            CROUTONS
            Cut Bread 50g into Pieces 10g.
            Add to a Pan:
            Olive Oil 20ml,
            Garlic, dried 5g,
            Bread.
            Fry for 30s.
            Transfer into a Deep Plate. Serve hot.
        `
    },
    {
        name: 'Double Potato Salad with Pesto',
        ingredients: [
            { name: 'Potato', amount: '1' },
            { name: 'Fingerling Potato', amount: '3' },
            { name: 'Water', amount: '1000ml' },
            { name: 'White Vinegar', amount: '50ml' },
            { name: 'Dijon Mustard', amount: '10ml' },
            { name: 'Pesto', amount: '15ml' },
            { name: 'Salt', amount: '6g' },
            { name: 'Black Pepper', amount: '6g' }
        ],
        text: `
            FINGERLING POTATO SALAD
            Take Fingerling Potato 210g.
            Season with:
            Salt 6g,
            Black Pepper 6g.
            Add to a Pot:
            Water 1000ml,
            Fingerling Potato.
            Boil for 30s.
            Add to the Pot:
            White Vinegar 50ml.
            Boil for 25s.
            Transfer onto a Plate:
            Fingerling Potato.
            Drizzle in Pesto 15ml.
            Cut Fingerling Potato into Quarters ~18g.
            Transfer onto a Plate. Serve hot.

            FRENCH FRIES
            Cut POtato 150g into Pieces 15g.
            Deep fry for 30s.
            Drizzle in Dijon Mustard 10ml.
            Transfer into a Plate. Serve hot.

        `
    },
    {
        name: 'Double Potato Salad with Button Mushroom Sauce',
        ingredients: [
            { name: 'Potato', amount: '1' },
            { name: 'Button Mushroom', amount: '1' },
            { name: 'Fingerling Potato', amount: '3' },
            { name: 'Water', amount: '1000ml' },
            { name: 'Sour Cream', amount: '100ml' },
            { name: 'White Vinegar', amount: '50ml' },
            { name: 'Dijon Mustard', amount: '10ml' },
            { name: 'Salt', amount: '11g' },
            { name: 'Black Pepper', amount: '11g' }
        ],
        text: `
            FINGERLING POTATO SALAD IN MUSHROOM SAUCE
            Take Fingerling Potato 210g.
            Season with:
            Salt 6g,
            Black Pepper 6g.
            Add to a Pot:
            Water 1000ml,
            Fingerling Potato.
            Boil for 30s.
            Add to the Pot:
            White Vinegar 50ml.
            Boil for 25s.
            Cut:
            Button Mushroom 50g into Quarters ~12g,
            Fingerling Potato into Quarters ~18g.
            Add to the Pan:
            Sour Cream 100ml,
            Salt 5g,
            Black Pepper 5g,
            Button Mushroom.
            Boil for 100s.
            Transfer into a Deep Plate:
            Mixture 100ml,
            Button Mushroom,
            Fingerling Potato.
            Serve hot.

            FRENCH FRIES
            Cut POtato 150g into Pieces 15g.
            Deep fry for 30s.
            Drizzle in Dijon Mustard 10ml.
            Transfer into a Plate. Serve hot.
        `
    },
    {
        name: 'Baked Potatoes with Feta',
        ingredients: [
            { name: 'Potato', amount: '2' },
            { name: 'Chives', amount: '3' },
            { name: 'Feta', amount: '1/4' },
            { name: 'Olive Oil', amount: '20ml' },
            { name: 'Salt', amount: '4g' },
            { name: 'Rosemary, dried', amount: '4g' },
            { name: 'Thyme, dried', amount: '4g' }
        ],
        text: `
            BAKED POTATOES WITH FETA
            Take Potato 300g.
            Season with Salt 4g.
            Cut Potato into Halves 75g.
            Bake for 90s.
            Cut Feta 100g into Pieces ~12g.
            Add to a Bowl:
            Olive Oil 20ml,
            Thyme, dried 4g,
            Rosemary, dried 4g.
            Take Potato.
            Drizzle in Mixture 20ml.
            Transfer onto the Plate:
            Feta,
            Potato.
            Serve hot.

            CHIVES GARNISH
            Garnish with Chives 6g.
        `
    },
    {
        name: 'Baked Potatoes with Feta & Tomatoes',
        ingredients: [
            { name: 'Tomato', amount: '1' },
            { name: 'Potato', amount: '2' },
            { name: 'Chives', amount: '3' },
            { name: 'Feta', amount: '1/4' },
            { name: 'Olive Oil', amount: '20ml' },
            { name: 'Salt', amount: '4g' },
            { name: 'Rosemary, dried', amount: '4g' },
            { name: 'Thyme, dried', amount: '4g' }
        ],
        text: `
            BAKED POTATOES WITH FETA
            Take Potato 300g.
            Season with Salt 4g.
            Cut Potato into Halves 75g.
            Bake for 90s.
            Cut:
            Feta 100g into Pieces ~12g,
            Tomato 120g into Pieces 15g.
            Add to a Bowl:
            Olive Oil 20ml,
            Thyme, dried 4g,
            Rosemary, dried 4g.
            Take Potato.
            Drizzle in Mixture 20ml.
            Transfer onto the Plate:
            Feta,
            Potato,
            Tomato.
            Serve hot.

            CHIVES GARNISH
            Garnish with Chives 6g.
        `
    },
    {
        name: 'Italian Home Fries',
        ingredients: [
            { name: 'Onion', amount: '1' },
            { name: 'Potato', amount: '2' },
            { name: 'Red Bell Pepper', amount: '1' },
            { name: 'Rosemary Twig', amount: '1' },
            { name: 'Parsley Leaves, fresh', amount: '3' },
            { name: 'Sausage', amount: '1/2' },
            { name: 'Clarified Butter', amount: '100ml' },
            { name: 'Sweet Bell Pepper, powder', amount: '6g' },
            { name: 'Garlic, dried', amount: '10g' }
        ],
        text: `
            SAUSAGE WITH PEPPERS AND ONIONS
            Cut:
            Onion 120g into Pieces 15g,
            Red Bell Pepper 240g into Pieces 30g,
            Sausage 120g into Pieces 20g.
            Add to a Pan:
            Clarified Butter 100ml,
            Garlic, dried 10g,
            Red Bell Pepper,
            Sausage.
            Fry for 50s.
            Add to the Pan:
            Rosemary Twig 5g,
            Parsley Leaves, fresh 6g,
            Onion.
            Fry for 30s.
            Transfer onto a Plate:
            Red Bell Pepper,
            Onion,
            Sausage.
            Serve hot.

            ITALIAN FRIES
            Take Potato 300g.
            Season with Sweet Bell Pepper, powder 6g.
            Cut Potato into Pieces 30g.
            Fry for 35s.
            Transfer onto a Plate. Serve hot.
        `
    },
    {
        name: 'Italian Home Fries with Cucumber Salad',
        ingredients: [
            { name: 'Cucumber', amount: '1' },
            { name: 'Onion', amount: '1' },
            { name: 'Potato', amount: '2' },
            { name: 'Red Bell Pepper', amount: '1' },
            { name: 'Rosemary Twig', amount: '1' },
            { name: 'Parsley Leaves, fresh', amount: '3' },
            { name: 'Sausage', amount: '1/2' },
            { name: 'Lemon Juice', amount: '5ml' },
            { name: 'Clarified Butter', amount: '100ml' },
            { name: 'Olive Oil', amount: '5ml' },
            { name: 'Sweet Bell Pepper, powder', amount: '6g' },
            { name: 'Garlic, dried', amount: '10g' }
        ],
        text: `
            SAUSAGE WITH PEPPERS AND ONIONS
            Cut:
            Onion 120g into Pieces 15g,
            Red Bell Pepper 240g into Pieces 30g,
            Sausage 120g into Pieces 20g.
            Add to a Pan:
            Clarified Butter 100ml,
            Garlic, dried 10g,
            Red Bell Pepper,
            Sausage.
            Fry for 50s.
            Add to the Pan:
            Rosemary Twig 5g,
            Parsley Leaves, fresh 6g,
            Onion.
            Fry for 30s.
            Transfer onto a Plate:
            Red Bell Pepper,
            Onion,
            Sausage.
            Serve hot.

            ITALIAN FRIES
            Take Potato 300g.
            Season with Sweet Bell Pepper, powder 6g.
            Cut Potato into Pieces 30g.
            Fry for 35s.
            Transfer onto a Plate. Serve hot.

            CUCUMBER SALAD
            Take Cucumber 160g.
            Drizzle in:
            Lemon Juice 5ml,
            Olive Oil 5ml.
            Cut Cucumber into Pieces ~15g.
            Transfer into a Plate. Serve cool.
        `
    },
    {
        name: 'Grilled Swordfish Provencal',
        ingredients: [
            { name: 'Tomato', amount: '2' },
            { name: 'Onion', amount: '1/2' },
            { name: 'Garlic', amount: '2' },
            { name: 'Red Bell Pepper', amount: '1/3' },
            { name: 'Yellow Bell Pepper', amount: '1/3' },
            { name: 'Basil Leaf, fresh ', amount: '2' },
            { name: 'Swordfish', amount: '1' },
            { name: 'Anchovy', amount: '2' },
            { name: 'Chicken Broth', amount: '20ml' },
            { name: 'White Wine', amount: '20ml' },
            { name: 'Olive Oil', amount: '30ml' },
            { name: 'Salt', amount: '4g' },
            { name: 'Black Pepper', amount: '4g' }
        ],
        text: `
            FRIED VEGETABLES
            Cut:
            Onion 60g into Quarters 15g,
            Red Bell Pepper 80g into Pieces 16g,
            Yellow Bell Pepper 80g Into Pieces 16g,
            Garlic 20g into Halves 5g.
            Add to a Pan:
            Olive Oil 30ml,
            Chicken Broth 20ml,
            White Wine 20ml,
            Red Bell Pepper,
            Yellow Bell Pepper.
            Fry for 50s.
            Add to the Pan:
            Basil Leaf, fresh 6g,
            Anchovy 8g,
            Onion,
            Garlic.
            Fry for 30s.
            Transfer everything into a Deep Plate. Serve hot.

            GRILLED SWORDFISH
            Add to the Food Processor:
            Tomato 240g.
            Blend.
            Transfer into a Pot.
            Boil for 40s.
            Take Swordfish 250g.
            Season with:
            Black Pepper 4g,
            Salt 4g.
            Grill for 70s each side.
            Drizzle in Mixture 50ml.
            Transfer onto a Plate. Serve hot.
        `
    },
    {
        name: 'Grilled Swordfish with Hot Sauce',
        ingredients: [
            { name: 'Tomato', amount: '1' },
            { name: 'Onion', amount: '1/2' },
            { name: 'Garlic', amount: '2' },
            { name: 'Red Bell Pepper', amount: '1/3' },
            { name: 'Yellow Bell Pepper', amount: '1/3' },
            { name: 'Chili Pepper', amount: '2' },
            { name: 'Basil Leaf, fresh', amount: '2' },
            { name: 'Sage Leaf, fresh', amount: '2' },
            { name: 'Swordfish', amount: '1' },
            { name: 'Anchovy', amount: '2' },
            { name: 'Chicken Broth', amount: '20ml' },
            { name: 'White Wine', amount: '20ml' },
            { name: 'Olive Oil', amount: '30ml' },
            { name: 'Salt', amount: '4g' },
            { name: 'Black Pepper', amount: '4g' }
        ],
        text: `
            FRIED VEGETABLES
            Cut:
            Onion 60g into Quarters 15g,
            Red Bell Pepper 80g into Pieces 16g,
            Yellow Bell Pepper 80g Into Pieces 16g,
            Garlic 20g into Halves 5g.
            Add to a Pan:
            Olive Oil 30ml,
            Chicken Broth 20ml,
            White Wine 20ml,
            Red Bell Pepper,
            Yellow Bell Pepper.
            Fry for 50s.
            Add to the Pan:
            Basil Leaf, fresh 6g,
            Anchovy 8g,
            Onion,
            Garlic.
            Fry for 30s.
            Transfer everything into a Deep Plate. Serve hot.

            GRILLED SWORDFISH
            Add to the Food Processor:
            Tomato 120g,
            Chili Pepper 60g.
            Blend.
            Transfer into a Pot.
            Boil for 40s.
            Take Swordfish 250g.
            Season with:
            Black Pepper 4g,
            Salt 4g.
            Grill for 70s each side.
            Drizzle in Mixture 50ml.
            Transfer onto a Plate. Serve hot.

            SAGE GARNISH
            Garnish with Sage Leaf, fresh 6g.
        `
    },
    {
        name: 'Chicken Tikka Masala',
        ingredients: [
            { name: 'Tomato', amount: '1' },
            { name: 'Garlic', amount: '2' },
            { name: 'Chicken Breast', amount: '1' },
            { name: 'Serrano Pepper', amount: '2' },
            { name: 'Milk', amount: '150ml' },
            { name: 'Olive Oil', amount: '50ml' },
            { name: 'Salt', amount: '5g' },
            { name: 'Sweet Bell Pepper, powder', amount: '5g' },
            { name: 'Ginger', amount: '10g' },
            { name: 'Garlic, dried', amount: '10g' },
            { name: 'Fenugreek Leaves, dried', amount: '5g' }
        ],
        text: `
            CHICKEN BREAST
            Cut Chicken Breast 240g into Pieces 40g.
            Add to a Pan:
            Milk 150ml,
            Garlic, dried 10g,
            Ginger 10g,
            Chicken Breast.
            Boil 65s.
            Transfer onto a Plate:
            Chicken Breast.
            Serve hot.

            TOMATO HOT SAUCE
            Cut:
            Garlic 20g into Halves 5g,
            Tomato 120g into Pieces 15g.
            Add to a Pan:
            Olive Oil 50ml,
            Salt 5g,
            Sweet Bell Pepper, powder 5g,
            Fenugreek Leaves, dried 5g,
            Tomato.
            Fry for 15s.
            Add to the Pan:
            Garlic.
            Fry for 10s.
            Add to the Pan:
            Serrano Pepper 18g.
            Fry for 20s.
            Transfer everything into a Deep Plate. Serve hot.
        `
    },
    {
        name: 'Chicken Tikka Masala with Potatoes',
        ingredients: [
            { name: 'Tomato', amount: '1' },
            { name: 'Garlic', amount: '2' },
            { name: 'Potato', amount: '2' },
            { name: 'Chicken Breast', amount: '1' },
            { name: 'Serrano Pepper', amount: '2' },
            { name: 'Water', amount: '1000ml' },
            { name: 'Milk', amount: '150ml' },
            { name: 'Olive Oil', amount: '50ml' },
            { name: 'Salt', amount: '25g' },
            { name: 'Sweet Bell Pepper, powder', amount: '5g' },
            { name: 'Ginger', amount: '10g' },
            { name: 'Garlic, dried', amount: '10g' },
            { name: 'Fenugreek Leaves, dried', amount: '5g' }
        ],
        text: `
            CHICKEN BREAST
            Cut Chicken Breast 240g into Pieces 40g.
            Add to a Pan:
            Milk 150ml,
            Garlic, dried 10g,
            Ginger 10g,
            Chicken Breast.
            Boil 65s.
            Transfer onto a Plate:
            Chicken Breast.
            Serve hot.

            TOMATO HOT SAUCE
            Cut:
            Garlic 20g into Halves 5g,
            Tomato 120g into Pieces 15g.
            Add to a Pan:
            Olive Oil 50ml,
            Salt 5g,
            Sweet Bell Pepper, powder 5g,
            Fenugreek Leaves, dried 5g,
            Tomato.
            Fry for 15s.
            Add to the Pan:
            Garlic.
            Fry for 10s.
            Add to the Pan:
            Serrano Pepper 18g.
            Fry for 20s.
            Transfer everything into a Deep Plate. Serve hot.

            BOILED POTATOES
            Add to a Pot:
            Water 1000ml,
            Salt 20g,
            Potato 300g.
            Boil for 120s.
            Transfer onto a Plate. Serve hot.
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
