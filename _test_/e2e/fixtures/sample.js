/* eslint-disable */

describe('Sample tests', () => {
  context('iphone 5 resolution', () => {
    beforeEach(() => {
      cy.viewport('iphone-5')
    })
    it('Visits index page', () => {
      cy.visit('/')
      cy.contains('[data-cy="btn-signin"]', 'entrar')
    })
  })

  context('Samsung S9 resolution', () => {
    beforeEach(() => {
      cy.viewport(360, 740)
    })
    it('Visits index page', () => {
      cy.visit('/')
      cy.contains('[data-cy="btn-signin"]', 'entrar')
    })
  })

  context('Iphone XR resolution', () => {
    beforeEach(() => {
      cy.viewport(414, 896)
    })
    it('Visits index page', () => {
      cy.visit('/')
      cy.contains('[data-cy="btn-signin"]', 'entrar')
    })
  })

  // it('Go to about page', () => {
  //   cy.get('a.about-link').click()
  //   cy.contains('h1', 'About')
  // })
})
