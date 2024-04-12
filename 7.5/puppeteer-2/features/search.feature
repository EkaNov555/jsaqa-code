Feature: Buying tickets

    Scenario: User buys some tickets
        Given User is on the "https://qamid.tmweb.ru/client/index.php" page
        When User chooses date
        When User chooses available time
        When User books available seats
        Then User can see text "Вы выбрали билеты:"

    Scenario: User buys a vip ticket
        Given User is on the "https://qamid.tmweb.ru/client/index.php" page
        When User chooses date
        When User chooses available time
        When User books vip seat
        Then User can see text "Вы выбрали билеты:"

    Scenario: User tries to book an unavailable seat
        Given User is on the "https://qamid.tmweb.ru/client/index.php" page
        When User chooses date
        When User chooses available time
        When User books an unavailable seat
        Then Button "Забронировать" is disabled