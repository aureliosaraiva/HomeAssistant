import json

with open('/config/.shopping_list.json') as data_file:
    shoppingListData = json.load(data_file)

content = ""
for entry in shoppingListData:
    if not entry['complete']:
        content += f"- {entry['name']}\n"

content += "\n"

print(content)
