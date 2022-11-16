 

describe('the code was right', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('input[name="bob"]').click

    cy.get('input[name="bob"]').type("kapoentje")
    cy.get('p').contains("Open de pakjes!")
  })
})

export {}