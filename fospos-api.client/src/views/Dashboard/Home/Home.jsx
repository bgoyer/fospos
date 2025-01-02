import styled from "styled-components";
import { Button, Input, Form } from "@/components";

const Home = () => {
  const handleSubmit = (e) => {
    console.log("submit");
  };

  return (
    <Center>
      <Form
        onSubmit={handleSubmit}
        actions={
          <>
            <Button>Submit</Button>
          </>
        }
      >
        <Input label="Username" />
        <Input label="Password" />
      </Form>
    </Center>
  );
};

export default Home;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
