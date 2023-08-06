from datetime import datetime
import random

choices = ["Cards", "Decks"]


id = 0
username = "SingularisArt"
score = 0
number_of_items = 0
number_of_correctly_memorized_items = 0
number_of_incorrectly_memorized_items = 0
actual_card_data = "{}"
memorized_card_data = "{}"

hour = 0
minute = 0
second = 0

month = 7
day = 0

for i in range(35):
    day += 1
    id += 1

    item = random.choice(choices)
    date = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    finished_time = random.randint(1, 120)

    hour = random.randint(0, 23)
    minute = random.randint(0, 59)
    second = random.randint(0, 59)

    try:
        time = datetime(2023, month, day, hour, minute, second)
    except ValueError:
        day = 1
        month += 1
        time = datetime(2023, month, day, hour, minute, second)

    if item == "Cards":
        number_of_items = random.randint(1, 52)
        number_of_correctly_memorized_items = random.randint(1, number_of_items)
        number_of_incorrectly_memorized_items = (
            number_of_items - number_of_correctly_memorized_items
        )
        score = round(number_of_correctly_memorized_items / number_of_items, 4)
    elif item == "Decks":
        number_of_items = random.randint(1, 3)
        number_of_correctly_memorized_items = random.randint(1, number_of_items * 52)
        number_of_incorrectly_memorized_items = (
            number_of_items * 52 - number_of_correctly_memorized_items
        )
        score = round(number_of_correctly_memorized_items / (number_of_items * 52), 4)

    print(
        f"({id}, '{username}', '{time}', {finished_time}, {score}, '{item}', {number_of_items}, '{actual_card_data}', '{memorized_card_data}', {number_of_correctly_memorized_items}, {number_of_incorrectly_memorized_items})"
    )
