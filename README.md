## Requirements:
- Write an end to end scenario to make sure that our website can publish an Article successfully.

## Base Url:
- https://demo.productionready.io/#/

## Expectations:
- Write the test cases to cover the end to end scenario using Gherkin
- Build the project using page object model structure.
- share the code via (github) repository.


## File structure:
- [Documents](https://github.com/majsl243/foothill-demo/tree/master/Documents):
    - [Publish Articles Test Plan.pdf](https://github.com/majsl243/foothill-demo/blob/master/Documents/Publish%20Articles%20Test%20Plan.pdf)
    - [Bugs Report.pdf](https://github.com/majsl243/foothill-demo/blob/master/Documents/Bugs%20report.pdf)

- [Cypress Tests](https://github.com/majsl243/foothill-demo/tree/master/Cypress%20Tests)
    - [cypress/Integration](https://github.com/majsl243/foothill-demo/tree/master/Cypress%20Tests/cypress/integration)
        - [delete_articles.feature](https://github.com/majsl243/foothill-demo/blob/master/Cypress%20Tests/cypress/integration/delete_articles.feature)
        - [edit_articles.feature](https://github.com/majsl243/foothill-demo/blob/master/Cypress%20Tests/cypress/integration/edit_articles.feature)
        - [post_publish_validations.feature](https://github.com/majsl243/foothill-demo/blob/master/Cypress%20Tests/cypress/integration/post_publish_validations.feature)
        - [publish_article.feature](https://github.com/majsl243/foothill-demo/blob/master/Cypress%20Tests/cypress/integration/publish_article.feature)
    - [cypress/support/step_definitions](https://github.com/majsl243/foothill-demo/tree/master/Cypress%20Tests/cypress/support/step_definitions)
        - [actions_on_article_steps.js](https://github.com/majsl243/foothill-demo/blob/master/Cypress%20Tests/cypress/support/step_definitions/actions_on_article_steps.js)
        - [common_steps.js](https://github.com/majsl243/foothill-demo/blob/master/Cypress%20Tests/cypress/support/step_definitions/common_steps.js)
        - [post_publish_validation_steps.js](https://github.com/majsl243/foothill-demo/blob/master/Cypress%20Tests/cypress/support/step_definitions/post_publish_validation_steps.js)
        - [publish_articles_steps.js](https://github.com/majsl243/foothill-demo/blob/master/Cypress%20Tests/cypress/support/step_definitions/publish_articles_steps.js)
    - [cypress/support/pages](https://github.com/majsl243/foothill-demo/tree/master/Cypress%20Tests/cypress/support/pages)
        - [article_view_page.js](https://github.com/majsl243/foothill-demo/blob/master/Cypress%20Tests/cypress/support/pages/article_view_page.js) 
        - [header.js](https://github.com/majsl243/foothill-demo/blob/master/Cypress%20Tests/cypress/support/pages/header.js)
        - [login_page.js](https://github.com/majsl243/foothill-demo/blob/master/Cypress%20Tests/cypress/support/pages/login_page.js)
        - [publish_article_page.js](https://github.com/majsl243/foothill-demo/blob/master/Cypress%20Tests/cypress/support/pages/publish_article_page.js)
        - [user_profile_page.js](https://github.com/majsl243/foothill-demo/blob/master/Cypress%20Tests/cypress/support/pages/user_profile_page.js)
    - [cypress/support/constatns.js](https://github.com/majsl243/foothill-demo/blob/master/Cypress%20Tests/cypress/support/constants.js)
    - [cypress/support/urls.js](https://github.com/majsl243/foothill-demo/blob/master/Cypress%20Tests/cypress/support/urls.js)

## How to run?
- To run in Browser mode: **cypress open**
- To run happy scenarios only: **cypress:happy**
- To run negative scenarios only: **cypress:negative**
- To run publish articles scenarios: **cypress:publish**
- To run edit articles scenarios: **cypress:edit**
- To run delete articles scenarios: **cypress:delete**
- To run post publishing validations scenarios: **cypress:post-validation**
- To run any of the headless mode commands on fire fox add **-- --browser firefox**

## Results:
- [Cypress Tests/cypress/videos/]()
    - [happyScenarios/publish_article.feature.mp4](https://github.com/majsl243/foothill-demo/blob/master/Cypress%20Tests/cypress/videos/happyScenarios/publish_article.feature.mp4)
    - [negativeScenarios/publish_article.feature.mp4](https://github.com/majsl243/foothill-demo/blob/master/Cypress%20Tests/cypress/videos/negativeScenarios/publish_article.feature.mp4)
    - [publish/publish_article.feature.mp4](https://github.com/majsl243/foothill-demo/blob/master/Cypress%20Tests/cypress/videos/publish/publish_article.feature.mp4)
    - [edit/edit_articles.feature.mp4](https://github.com/majsl243/foothill-demo/blob/master/Cypress%20Tests/cypress/videos/edit/edit_articles.feature.mp4)
    - [delete/delete_articles.feature.mp4](https://github.com/majsl243/foothill-demo/blob/master/Cypress%20Tests/cypress/videos/delete/delete_articles.feature.mp4)
    - [post-validation/post_publish_validations.feature.mp4](https://github.com/majsl243/foothill-demo/blob/master/Cypress%20Tests/cypress/videos/post-validation/post_publish_validations.feature.mp4)
