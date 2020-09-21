Feature: Sign up into losestudiantes
    As an user I want to authenticate myself within losestudiantes website in order to rate teachers

Scenario Outline: Sign up failed with wrong inputs

  Given I go to losestudiantes home screen
    When I open the sign up screen
    And I fill the sign up form with <name>, <lastname>, <email>, <password>, <termsAccepted>
    And I try to sign up
    Then I expect the div <wrongField>
	
    Examples:
      | name             | lastname   | email                    | password   | termsAccepted | wrongField                                                                                                 |
      |                  | Apellido   | box@example.com          | Contrasena | true          | .cajaSignUp>form:nth-child(2)>fieldset:nth-child(1)>div:nth-child(1)>div:nth-child(1).has-error    |
	  | No               | Apellido   | box@example.com          | Contrasena | true          | .cajaSignUp>form:nth-child(2)>fieldset:nth-child(1)>div:nth-child(1)>div:nth-child(1).has-error    |
	  | Nombre           |            | box@example.com          | Contrasena | true          | .cajaSignUp>form:nth-child(2)>fieldset:nth-child(2)>div:nth-child(1)>div:nth-child(1).has-error    |
	  | Nombre           | Ap         | box@example.com          | Contrasena | true          | .cajaSignUp>form:nth-child(2)>fieldset:nth-child(2)>div:nth-child(1)>div:nth-child(1).has-error    |
	  | Nombre           | Apellido   |                          | Contrasena | true          | .cajaSignUp>form:nth-child(2)>fieldset:nth-child(3)>div:nth-child(1)>div:nth-child(1).has-error    |
	  | Nombre           | Apellido   | box@examplecom           | Contrasena | true          | .cajaSignUp>form:nth-child(2)>fieldset:nth-child(3)>div:nth-child(1)>div:nth-child(1).has-error    |
	  | Nombre           | Apellido   | boxexample.com           | Contrasena | true          | .cajaSignUp>form:nth-child(2)>fieldset:nth-child(3)>div:nth-child(1)>div:nth-child(1).has-error    |
	  | Nombre           | Apellido   | box@example.com          |            | true          | .cajaSignUp>form:nth-child(2)>fieldset:nth-child(6)>div:nth-child(1)>div:nth-child(1).has-error    |
	  | Nombre           | Apellido   | box@example.com          | Contras    | true          | .cajaSignUp>form:nth-child(2)>fieldset:nth-child(6)>div:nth-child(1)>div:nth-child(1).has-error    |
	  | Nombre           | Apellido   | box@example.com          | Contrasena | false         | .cajaSignUp>form:nth-child(2)>fieldset:nth-child(7)>div:nth-child(1)>div:nth-child(2).alert-danger |