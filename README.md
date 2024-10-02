# CRAFT 5 BOILERPLATE

This template relies on...

### Alpinejs | JavaScript framework
Docs: https://alpinejs.dev/start-here
### Tailwind CSS | CSS framework
Docs: https://tailwindcss.com/docs/
### Lucide | Icon library
Docs: https://lucide.dev/guide/packages/lucide
### Swiper | Carousel library
Docs: https://swiperjs.com/get-started

Note that there are additional modifications. To get a full overview of the project dependencies, please the following configuration files:

- ./package.json
- ./composer.json

For an overview on CSS in this project, please review the notes and comments in ./tailwind.config.js

# FIRST TIME SETUP GUIDE
1. clone this repo
2. remove git boilerplate association:
```
# run from project's the root directory!
rm -rf .git
```
3. setup database (adding these steps soon tm)
4. install dependencies
```
# install composer dependancies for Craft CMS
composer install

# copy .env.example and update environment variables
cp .env.example .env

# generate new app id & security key
php craft setup/app-id
php craft setup/security-key

# install dependancies
nvm use
npm install

# copy .env.example
cp .env.example .env
```