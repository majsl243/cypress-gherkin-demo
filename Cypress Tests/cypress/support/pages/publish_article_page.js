import * as constants from '../constants.js'

const SELECTORS = {
    articleTitle: '[ng-model="$ctrl.article.title"]',
    shortDesc: '[ng-model="$ctrl.article.description"]',
    body: '[ng-model="$ctrl.article.body"]',
    tags: '[ng-model="$ctrl.tagField"]',
    publishButton: '.btn-primary'
}

class PublishArticle{
    writeToField(field, value) {
        cy.get(SELECTORS[field])
          .type(value) 
    }

    prepareTags(tags) {
        let commaSeparatedTags = ''

        tags.forEach((tag) => {
            commaSeparatedTags = `${commaSeparatedTags},${tag}`
        })    

        return commaSeparatedTags
    }

    clickPublishButton() {
        cy.get(SELECTORS.publishButton)
          .click()
    }

    publishArticle(article = constants.ARTICLE) {
        this.writeToField('articleTitle', article.title)
        this.writeToField('shortDesc', article.shortDescription)
        this.writeToField('body', article.body)
        this.writeToField('tags', this.prepareTags(article.tags))

        this.clickPublishButton()
    }
}

export default PublishArticle;