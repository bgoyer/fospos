extends Control

@onready var multiplier = $"HSplitContainer/Orders/HBoxContainer/Panel/VBoxContainer/Control/Multiplier/Total"
@onready var cart_item = preload("res://scenes/order_grid_item_template.tscn")
@onready var cart_container = $"HSplitContainer/Orders/HBoxContainer/Panel/VBoxContainer/ScrollContainer/GridContainer"

func _on_panel_add_to_cart(item):
	for selected_cart_item in cart_container.get_children():
		var cart_item_name:String = selected_cart_item.get_child(0).get_child(0).get_child(1).text
		print(cart_item_name)
		print(str(selected_cart_item.get_child(0).get_child(0).get_child(2).text.replace("x", "")[0].to_int() + 1 * multiplier.text.to_int()))
		if cart_item_name == item.name:
			selected_cart_item.get_child(0).get_child(0).get_child(2).text = "x" + str(selected_cart_item.get_child(0).get_child(0).get_child(2).text.replace("x", "").to_int() + 1 * multiplier.text.to_int())
			return
	var item_clone = cart_item.instantiate()
	item_clone.get_child(0).get_child(0).get_child(1).text = item.name
	item_clone.get_child(0).get_child(0).get_child(2).text = "x1"
	item_clone.get_child(0).get_child(0).get_child(3).text = str(item.price)
	cart_container.add_child(item_clone)
