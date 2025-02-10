import { Button, Dialog } from "@/components";
import { useState } from "react";

const Products = () => {
  const [showDialog, setShowDialog] = useState(false);

  const handleTriggerClick = () => {
    console.log("click");
    setShowDialog((show) => !show);
  };

  return (
    <>
      <div>Products</div>
      <div>
        This text surrounds a <Button color="link">Link Button</Button>. It
        should be inline like other text.
      </div>
      <Dialog
        open={showDialog}
        title="Dialog Title"
        description="Dialog Description"
        trigger={<Button onClick={handleTriggerClick}>Click Me</Button>}
      >
        This is dialog content.
      </Dialog>
    </>
  );
};

export default Products;
