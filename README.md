# **CRAFT 5 BOILERPLATE**

Greetings, user.  
This is an overview of the setup process. More detailed instruction for each step can be found in the [wiki](https://github.com/paulsenmarketing/craft-five-boilerplate/wiki).

## FIRST TIME SETUP GUIDE
### 1. **Clone template** 
- (run this from your /Sites folder!)
- (make sure to replace `<new project name>` with the new repository's name!)
```
gh repo create paulsenmarketing/<new project name> --template paulsenmarketing/craft-five-boilerplate --private --clone
```
### 2. **Local database**
- create a new database using Sequel Ace
### 3. Local env
- CD into `<new project name>`
- create a local env from an example
- refer to .env comments for filling in environment variables
```
cd <new project name>
cp .env.example .env
```
### 4. **Local development**
- install Composer dependencies
- generate a new app ID
- generate a new security key
- install craft (follow the prompts!)
```
composer install
php craft setup/app-id
php craft setup/security key
php craft install

```
### 5. **NPM**
- switch to project Node version
- install NPM packages
- build project
```
nvm use
npm install
npm run build
```
### 6. **Fortrabbit**
- set up fortrabbit project
- copy .env variables and database to Fortrabbit
- add the project as a remote
- push to fortrabbit
```
git remote add origin <fortrabbit repo url>
git push fortrabbit master
```
### 6. **Next Steps**
- Add env variables for plugins, S3 bucket storage, etc.

## **Craft Plugins**

| Plugin          | Use Case | Documentation Link |
|-----------------| ------- | ------- | 
| Blitz           | Page caching | [Docs](https://putyourlightson.com/plugins/blitz) |
| CKEditor        | Rich text | [Docs](https://github.com/craftcms/ckeditor) |
| Embedded Assets | Embedding Videos | [Docs](https://github.com/spicywebau/craft-embedded-assets) |
| Formie          | User forms | [Docs ](https://verbb.io/craft-plugins/formie/docs/get-started/installation-setup) |
| ImageOptimize   | Image optimization | [Docs](https://nystudio107.com/docs/image-optimize/) |
| Navigation      | Navigation | [Docs](https://verbb.io/craft-plugins/navigation/docs/get-started/installation-setup) |
| SEOmatic        | SEO | [Docs](https://nystudio107.com/docs/seomatic/) |

## **NPM Libraries**

| Plugin      | Use Case | Documentation Link |
|-------------| ------- | ------- | 
| Alpine      | JavaScript framework | [Docs](https://alpinejs.dev/start-here) |
| Tailwind    | CSS framework | [Docs](https://tailwindcss.com/docs/) |
| Lucide      | Icons | [Docs](https://lucide.dev/guide/packages/lucide) |
| FontAwesome | Icons | [Docs](https://docs.fontawesome.com/web) |
| Swiper      | Carousel | [Docs](https://swiperjs.com/get-started) |

Note that there are additional modifications. To get a full overview of the project dependencies, please the following configuration files:

- ./package.json
- ./composer.json

For an overview on CSS in this project, please review the notes and comments in ./tailwind.config.js as well as ./src/style.css. 