 

describe('the code was right', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('input[name="inputCode"]').click

    cy.get('input[name="inputCode"]').type("kapoentje")
    cy.get('p').contains("Open de pakjes!")
  })
})

export {}