# **CRAFT 5 BOILERPLATE**

Greetings, user.

## FIRST TIME SETUP GUIDE
1. clone this repo
2. remove git boilerplate association:
```
# run from project's the root directory!
rm -rf .git
```
3. setup database
```

```
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

---

## **Craft Plugins**
Blitz | Page caching | [Docs](https://putyourlightson.com/plugins/blitz): 

CKEditor | Rich text | [Docs](https://github.com/craftcms/ckeditor)

Embedded Assets | [Docs](https://github.com/spicywebau/craft-embedded-assets)

Formie | User forms | [Docs ](https://verbb.io/craft-plugins/formie/docs/get-started/installation-setup)

ImageOptimize | Image optimization | [Docs](https://nystudio107.com/docs/image-optimize/)

Navigation | Navigation | [Docs](https://verbb.io/craft-plugins/navigation/docs/get-started/installation-setup)

SEOmatic | SEO | [Docs](https://nystudio107.com/docs/seomatic/)

---

## **NPM Libraries**
Alpine | JavaScript framework | [Docs](https://alpinejs.dev/start-here)  
Alpinejs is used to add functionality

Tailwind | CSS framework | [Docs](https://tailwindcss.com/docs/)

Lucide | Icons | [Docs](https://lucide.dev/guide/packages/lucide)

FontAwesome | Icons | [Docs](https://docs.fontawesome.com/web)
Fontawesome is built in to Craft as the default icon set, so it's natural to include it alongside Lucide (which is better for generic UI)

Swiper | Carousel | [Docs](https://swiperjs.com/get-started)

---

Note that there are additional modifications. To get a full overview of the project dependencies, please the following configuration files:

- ./package.json
- ./composer.json

For an overview on CSS in this project, please review the notes and comments in ./tailwind.config.js as well as ./src/style.css. 