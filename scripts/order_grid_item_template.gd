extends Panel

func _ready():
	set_size(Vector2(get_size().x, get_size().y + get_child(0).get_size().y))
