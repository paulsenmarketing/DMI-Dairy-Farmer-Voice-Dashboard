# **CRAFT 5 BOILERPLATE**

Greetings, user.

## Prerequisites
- Github CLI installed and configured

## FIRST TIME SETUP GUIDE
### 1. **Clone template** 
- (run this from your /Sites folder!)
- (make sure to replace `<new project name>` with the new repository's name!)
```
gh repo create paulsenmarketing/<new project name> --template paulsenmarketing/craft-five-boilerplate --private --clone
```
### 2. **Local database**
- create a new database using Sequel Ace.
### 3. Local env
- CD into the project
- create a local env from an example
- refer to .env comments for filling in environment variables
```
cd <new project name>
cp .env.example .env
```
### 4. Local development:
- install Composer dependencies
- generate a new app ID
- generate a new security key
- install craft (follow the prompts!)
- switch to correct Node version
- install Node dependencies
```
composer install
php craft setup/app-id
php craft setup/security key
php craft install
nvm use
npm install
```
### 5. Fortrabbit
- set up fortrabbit project
- copy .env variables and database to Fortrabbit
- add the project as a remote
- push to fortrabbit
```
git remote add origin <fortrabbit repo url>
git push fortrabbit master
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