extends Panel

signal add_to_cart 

func _on_control_init(data):
	if data == null:
		printerr("Data is null")
		pass
	for category in data.menu:
		category = data.menu[category]
		var cat_btn = Button.new()
		cat_btn.text = category.name
		cat_btn.set("theme_override_font_sizes/font_size", 30)
		cat_btn.set_custom_minimum_size(Vector2(0 , 50))
		$"HBoxContainer/Categories/CategoryButtonContainer".add_child(cat_btn)
		for subcat in category.children:
			subcat = category.children[subcat]
			var stylebox: StyleBoxFlat = StyleBoxFlat.new()
			stylebox.bg_color = Color.GRAY
			
			var grid = VBoxContainer.new()
			grid.set_anchors_preset(Control.PRESET_FULL_RECT)
			$"HBoxContainer/Main/ScrollContainer/Grid Container".add_child(grid)
			grid.visible = false
			
			cat_btn.connect("pressed", showGrid.bind(grid))
			var label = preload("res://scenes/label.tscn").instantiate()
			label.text = subcat.name
			grid.add_child(label)
			
			var item_button_grid = HFlowContainer.new()
			grid.add_child(item_button_grid)
			
			#create title label subcat.name
			#create grid with btn from subcat.children
			for item in subcat.children:
				item = subcat.children[item]
				var item_btn = Button.new()
				item_btn.text = item.name
				item_btn.focus_mode = Control.FOCUS_NONE
				item_btn.set("theme_override_font_sizes/font_size", 30)
				item_btn.connect("pressed", item_pressed.bind(item))
				item_button_grid.add_child(item_btn)
				

func item_pressed(item):
	add_to_cart.emit(item)	

func showGrid(grid):
	for i in $"HBoxContainer/Main/ScrollContainer/Grid Container".get_children():
		i.visible = false
	grid.visible = true



