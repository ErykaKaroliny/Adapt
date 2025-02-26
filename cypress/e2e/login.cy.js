describe('Teste de Formulário', () => {
    it('Preenche e envia o formulário', () => {
        cy.visit('https://adaptliviu.com.br/'); // 🔹 Substitua pela URL real do formulário
        
        // Nome
        cy.get('#form-field-name').type('QA')

        // Email
        cy.get('#form-field-email').type('testee@gmail.com')

        // Empresa
        cy.get('#form-field-message').type('QA LTDA')

        // Produto
		cy.get('select').select('Contato')

        // Telefone
        cy.get('#form-field-field_195975d').type('48991647943')

        // Mensagem
        cy.get('#form-field-field_98bbe7d').type('teste de Adapt')

        // Confirmar
        cy.get('.elementor-field-type-submit > .elementor-button').click()

		
		// Verifica se o texto de confirmação aparece na tela
       cy.contains('Inscrição realizada com sucesso! Em breve nosso time entrará em contato.').should('be.visible');

    });
});
