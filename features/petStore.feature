Feature: Pet Store system
  I'd like as a pet store owner
  I'd like to register, update, consult and delete Pet
  I'd like the result to be saved in the database 

  Scenario: Pet registration update
    Given that the user registers the Pet
    When the user updates the Pets registration
    Then the pet query will reflect

  Scenario: Pet registration deletes
    Given that the user registers the Pet
    When the user deletes the Pets record
    Then the pet query will reflect