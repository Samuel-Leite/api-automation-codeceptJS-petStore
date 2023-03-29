Feature: Pet Store system
  I'd like as a pet store owner
  I'd like to register, update, consult and delete Pet
  I'd like the result to be saved in the database

  Background: Registers the Pet
    Given that the user registers the Pet

  Scenario: Pet registration update
    When the user updates the Pets registration
    Then the pet query will reflect

  Scenario: Pet registration deletes
    When the user deletes the Pets record
    Then the pet query will reflect