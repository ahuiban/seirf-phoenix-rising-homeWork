[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

<!--SEI1 10:05 -->

# Sunny Philadelphia Animal Shelter

![](https://phz8.petinsurance.com/-/media/all-phz-images/2016-images-850/dogandcatonbed850.jpg)

The Sunny Philadelphia Animal Shelter has been looking for volunteers to set up their website, so you offered your help because what better way to add onto your resume and use your newly acquired knowledge for web development? Let's get started, there are animals that need to be adopted!

#### Learning Objectives

- Full CRUD app (Express API for backend, React for frontend)

#### Prerequisites

- JavaScript
- Node / Express
- React fundamentals

---

## Getting Started

1. In today's `student_labs` folder, `mkdir sunny_shelter` and `cd` into it
1. `mkdir sunny_shelter_api`
1. `cd sunny_shelter_api`
1. `touch server.js`
1. `npm init -y`
1. `npm i express`
1. Set up your express server -- this should be easier now after unit 2, but if you need a refresher look back at the notes from that unit!

## Creating the Express API

Set up a full CRUD Express API for the animals that will be listed on the website as up for adoption. Since we have no frontend at this point just yet, test to make sure your routes are working as you go along by using `curl` or Postman.

>**NOTE:** Remember that we're creating an _API_, so our data should be JSON.

### Guide

1. Create an `Animal` model. A sample schema can be found below:
    ```
    {
      name: String,
      species: String,
      breed: String,
      image: {type: String, default: 'https://loremflickr.com/240/120'},
      age: Number,
      adopted: Boolean,
      personalityTraits: [{type: String}]
    }
    ```
1. Make a create route
1. Make an index route
1. Make a delete route
1. Make an update route
1. Remember to check all your above routes work by testing them with `curl`

> :dog: Morning Lab ends here. If you finish early, feel free to brush up on vanilla JavaScript by doing some [hackerrank](https://www.hackerrank.com) or [codewars](https://www.codewars.com) code challenges.

## Consuming the API with React

Now that we have an API, we want to actually connect it to a front-end. So let's create the front-end of the Animal Shelter's website that will use our API data.

### Guide

1. Make sure to `cd` up and out of your express API first
1. Use Create React App to make `sunny_shelter_front_end`
1. Don't forget to `rm -rf .git` if it is in `sunny_shelter_front_end`
1. Don't forget to convert `App` into a `class` component
1. Go in the same order as we did in class to add the `index` and `create` functionality for the front end
1. Don't forget to configure CORS

> :cat: Afternoon Lab ends here. If you finish early, try some of the stretch goals below. If you still have more time, feel free to brush up on vanilla JavaScript by doing some [hackerrank](https://www.hackerrank.com) or [codewars](https://www.codewars.com) code challenges:

## Stretch Goals

1. Practice HTML/CSS by giving your animal shelter site some sweet styling
1. Figure out how to add `personalityTraits` like 'friendly', 'shy', 'only slightly evil'.
