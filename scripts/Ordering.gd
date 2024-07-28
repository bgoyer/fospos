extends Control

@onready var multiplier = $"HSplitContainer/Orders/HBoxContainer/Panel/VBoxContainer/Control/Multiplier/Total"
@onready var cart_item = preload("res://scenes/order_grid_item_template.tscn")
@onready var cart_container = $"HSplitContainer/Orders/HBoxContainer/Panel/VBoxContainer/ScrollContainer/GridContainer"

func _on_panel_add_to_cart(item):
	for i in str_to_var(multiplier.text):
		var item_clone = cart_item.instantiate()
		item_clone.get_child(0).get_child(1).text = item.name
		item_clone.get_child(0).get_child(2).text = str(item.price)
		cart_container.add_child(item_clone)
