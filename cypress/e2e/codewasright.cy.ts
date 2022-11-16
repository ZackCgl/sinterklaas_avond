

const RIGHT_CODE = "kapoentje"

describe('check the output of entering an input as a code', () => {
  it('empty', () => {
    cy.visit('http://localhost:3000')
    cy.get('p').contains("Vul een wachtwoord in")
  })
  it('passes', async () => {
    cy.visit('http://localhost:3000')
    cy.get('input[name="inputCode"]').click
    cy.get('input[name="inputCode"]').type(RIGHT_CODE)
    cy.get('p').contains("Open de pakjes!")
  })
  it('failed', () => {
    cy.visit('http://localhost:3000')
    cy.get('input[name="inputCode"]').click

    cy.get('input[name="inputCode"]').type("fbnsdjbfhdshj")
    cy.get('p').contains("Fout, geen kado!")
  })
})

export {}
