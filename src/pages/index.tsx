import Form from "@/components/form";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, data } = useChat();
  return (
    <div className="container mx-auto py-8">
      <Form />
    </div>
  );
}
